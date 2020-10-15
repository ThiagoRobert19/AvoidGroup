package com.avoidgroup.controller;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import java.util.UUID;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.avoidgroup.dao.GenericDao;
import com.avoidgroup.model.EmailVerificatorEntity;
import com.avoidgroup.model.GeneralPublicationEntity;
import com.avoidgroup.model.ProfileEntity;
import com.avoidgroup.model.ResetPasswordEntity;
import com.avoidgroup.model.UserEntity;
import com.avoidgroup.util.Common;
import com.avoidgroup.util.Criptografia;
import com.avoidgroup.util.CulturaScope;

@Controller
@RequestMapping(value = "/user")
public class UserController {
	@Autowired
	private CulturaScope cultura;
	@Autowired
	private Common common;

	@Autowired
	private GenericDao<UserEntity> daoUser;
	@Autowired
	private GenericDao<EmailVerificatorEntity> daoEmail;
	@Autowired
	private EmailVerificatorEntity emailVerificator;

	@Autowired
	private ResetPasswordEntity passReset;
	@Autowired
	private GenericDao<ResetPasswordEntity> passResetDao;
	@Autowired
	private UserEntity userEntity;

	@Autowired
	private GenericDao<ProfileEntity> daoProfile;

	@Autowired
	private ProfileEntity profile;

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login() {
		return "user/log";
	}

	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logout(HttpSession session) {
		session.setAttribute("clienteLogado", null);
		session.setAttribute("idProfile", null);
		session.setAttribute("profileLogado", null);

		return "redirect:/";

	}

	@RequestMapping(value = "/login/simple", method = RequestMethod.POST)
	public String simples(UserEntity user, HttpSession session, Model model) {

		Map<String, Object> map50 = new HashMap<String, Object>();
		map50.put("email", user.getEmail());

		if (daoUser.exist(UserEntity.class, map50, "")) {

			Map<String, Object> map500 = new HashMap<String, Object>();
			map500.put("email", user.getEmail());
			map500.put("password", Criptografia.criptografar(user.getPassword()));

			if (daoUser.exist(UserEntity.class, map500, "and")) {

				Map<String, Object> map5 = new HashMap<String, Object>();
				map5.put("email", user.getEmail());

				user = daoUser.findByProperty(UserEntity.class, map5, "");

				Map<String, Object> map5000 = new HashMap<String, Object>();
				map5000.put("user.id", user.getId());

				if (daoProfile.exist(ProfileEntity.class, map5000, "and")) {
					profile = daoProfile.findByProperty(ProfileEntity.class, map5000, "and");

					session.setAttribute("idProfile", profile.getId());
					session.setAttribute("profileLogado", profile);

					if (profile.getCountry() == null) {
						profile.setCountry("Brazil");
					}
					// ================
					Locale locale = new Locale("en", "US");
					cultura.setLocale(locale);
					session.setAttribute("cultura", cultura);

					// ============
					/*
					 * if (profile.getCountry().equals("Brazil")) { Locale
					 * locale = new Locale("pt", "BR");
					 * cultura.setLocale(locale);
					 * session.setAttribute("cultura", cultura); }
					 * 
					 * if (profile.getCountry().equals("United States")) {
					 * 
					 * Locale locale = new Locale("en", "US");
					 * cultura.setLocale(locale);
					 * session.setAttribute("cultura", cultura); }
					 */

				}
				session.setAttribute("clienteLogado", user);

				return "redirect:/";

			} else {

				model.addAttribute("erro", "password incorrect");
				return "user/log";

			}

		} else {

			model.addAttribute("erro", "no user found with this email!");
			return "user/log";
		}
	}

	@RequestMapping(value = "/edit/{id}", method = RequestMethod.GET)
	public ModelAndView edit(@PathVariable(value = "id") String id, HttpServletRequest request, ModelAndView model) {

		userEntity.setId(Integer.parseInt(id));

		userEntity = daoUser.buscaId(UserEntity.class, userEntity.getId());

		model.setViewName("user/edit");
		model.addObject("user", userEntity);

		return model;

	}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public ModelAndView update(UserEntity user, HttpServletRequest request, ModelAndView model) {

		daoUser.saveUpdate(user);
		model.setViewName("redirect:/user/data");
		return model;

	}

	@RequestMapping(value = "/delete/{id}", method = RequestMethod.GET)
	public ModelAndView delete(@PathVariable(value = "id") String id, HttpServletRequest request, ModelAndView model) {

		userEntity.setId(Integer.parseInt(id));

		userEntity = daoUser.buscaId(UserEntity.class, userEntity.getId());
		daoUser.remove(UserEntity.class, userEntity.getId());

		model.setViewName("redirect:user/data");

		return model;

	}

	@RequestMapping(value = "/allmenu", method = RequestMethod.GET)
	public String allmenu() {
		return "user/allmenu";
	}

	@RequestMapping(value = "/add", method = RequestMethod.GET)
	public String add() {
		return "user/add";
	}

	@RequestMapping(value = "/resetPassword", method = RequestMethod.POST)
	public ModelAndView resetPassword(String resetByEmail) throws UnsupportedEncodingException, MessagingException {
		System.out.println("entrou no reset");
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("email", resetByEmail);

		if (daoUser.exist(UserEntity.class, map, "")) {

			UUID uuid = UUID.randomUUID();
			String randomUUIDString = uuid.toString();
			randomUUIDString = randomUUIDString.replace("-", "");
			Calendar date1 = Calendar.getInstance();

			passResetDao.delete(ResetPasswordEntity.class, map, "");

			passReset.setDateOfReset(date1.getTime());
			passReset.setCode(randomUUIDString);
			passReset.setEmail(resetByEmail);

			common.sendResetVerification(resetByEmail, randomUUIDString.trim());
			passResetDao.saveUpdate(passReset);

			// ===============================================================

			ModelAndView model = new ModelAndView();
			model.setViewName("user/resetPasswordVerification");

			return model;

		} else {
			ModelAndView model = new ModelAndView();
			model.setViewName("user/log");
			model.addObject("erro", "email does not exist!");
			return model;
		}

	}

	@RequestMapping(value = "/doReset/{code}", method = RequestMethod.GET)
	public ModelAndView doReset(@PathVariable(value = "code") String code, HttpServletRequest request,
			ModelAndView model) {

		Map<String, Object> mapCode = new HashMap<String, Object>();
		mapCode.put("code", code.trim());
		if (passResetDao.exist(ResetPasswordEntity.class, mapCode, "and")) {
			passReset = passResetDao.findByProperty(ResetPasswordEntity.class, mapCode, "and");

			Calendar date1 = Calendar.getInstance();

			long d1 = date1.getTimeInMillis();

			Calendar date2 = Calendar.getInstance();
			date2.setTime(passReset.getDateOfReset());

			long d2 = date2.getTimeInMillis();
			if (((d2 - d1) / (60 * 1000)) > 10) {

				model.setViewName("user/log");
				model.addObject("erro", "tempo de verificao esgotado");
				return model;
			} else {

				model.setViewName("user/reset");
				model.addObject("code", code.trim());
				model.addObject("email", passReset.getEmail());
				return model;
			}

		} else {

			model.setViewName("user/log");
			model.addObject("erro", "codigo nao encontrado no sistema!");
			return model;
		}

	}

	@RequestMapping(value = "/resetThePassword", method = RequestMethod.POST)
	public ModelAndView resetThePassword(String code, String email, String password)
			throws UnsupportedEncodingException, MessagingException {

		Map<String, Object> mapEmail = new HashMap<String, Object>();
		mapEmail.put("email", email);
		if (daoUser.exist(UserEntity.class, mapEmail, "")) {

			passResetDao.delete(ResetPasswordEntity.class, mapEmail, "");

			userEntity = daoUser.findByProperty(UserEntity.class, mapEmail, "");

			userEntity.setPassword(Criptografia.criptografar(password));

			daoUser.saveUpdate(userEntity);

			ModelAndView model = new ModelAndView();
			model.setViewName("user/log");

			return model;

		} else {
			ModelAndView model = new ModelAndView();
			model.setViewName("user/log");
			model.addObject("erro", "email does not exist!");
			return model;
		}

	}

	@RequestMapping(value = "/verify", method = RequestMethod.POST)
	public ModelAndView verify(String confirmPassword, String email, String password)
			throws UnsupportedEncodingException, MessagingException {
		confirmPassword = Criptografia.criptografar(confirmPassword);
		password = Criptografia.criptografar(password);
		if (password.equals(confirmPassword)) {

			Map<String, Object> map5 = new HashMap<String, Object>();
			map5.put("email", email);

			if (!daoUser.exist(UserEntity.class, map5, "")) {

				UUID uuid = UUID.randomUUID();
				String randomUUIDString = uuid.toString();
				randomUUIDString = randomUUIDString.replace("-", "");
				Calendar date1 = Calendar.getInstance();

				Map<String, Object> mapmail = new HashMap<String, Object>();
				mapmail.put("email", email);

				/*daoEmail.delete(EmailVerificatorEntity.class, mapmail, "");

				emailVerificator.setDateOfVerification(date1.getTime());
				emailVerificator.setCode(randomUUIDString);
				emailVerificator.setEmail(email);
				emailVerificator.setSenha(password);
				common.sendVerification(email, randomUUIDString.trim());
				daoEmail.saveUpdate(emailVerificator);
*/
				// ===============================================================
				UserEntity u = new UserEntity();
				u.setEmail(email.toLowerCase());
				u.setPassword(password);

			//	daoEmail.delete(EmailVerificatorEntity.class, mapCode, "and");

				daoUser.saveUpdate(u);
				ModelAndView model = new ModelAndView();
				model.setViewName("redirect:/user/login");
				return model;
//==========================
			//	ModelAndView model = new ModelAndView();
			//	model.setViewName("user/verification");

			//	return model;

			} else {
				ModelAndView model = new ModelAndView();
				model.setViewName("user/log");
				model.addObject("erro", "email already registered!");
				return model;
			}
		} else {
			ModelAndView model = new ModelAndView();
			model.setViewName("user/log");
			model.addObject("erro", "Password must be the same!");
			return model;
		}
	}

	@RequestMapping(value = "/doVerification/{code}", method = RequestMethod.GET)
	public ModelAndView doVerification(@PathVariable(value = "code") String code, HttpServletRequest request) {

		Map<String, Object> mapCode = new HashMap<String, Object>();
		mapCode.put("code", code.trim());
		if (daoEmail.exist(EmailVerificatorEntity.class, mapCode, "and")) {
			emailVerificator = daoEmail.findByProperty(EmailVerificatorEntity.class, mapCode, "and");

			Calendar date1 = Calendar.getInstance();

			long d1 = date1.getTimeInMillis();

			Calendar date2 = Calendar.getInstance();
			date2.setTime(emailVerificator.getDateOfVerification());

			long d2 = date2.getTimeInMillis();
			if (((d2 - d1) / (60 * 1000)) > 10) {
				ModelAndView model = new ModelAndView();
				model.setViewName("user/log");
				model.addObject("erro", "tempo de verificao esgotado");
				return model;
			} else {

				UserEntity u = new UserEntity();
				u.setEmail(emailVerificator.getEmail());
				u.setPassword(emailVerificator.getSenha());

				daoEmail.delete(EmailVerificatorEntity.class, mapCode, "and");

				daoUser.saveUpdate(u);
				ModelAndView model = new ModelAndView();
				model.setViewName("redirect:/user/login");
				return model;
			}

		} else {
			ModelAndView model = new ModelAndView();
			model.setViewName("user/log");
			model.addObject("erro", "codigo nao encontrado no sistema!");
			return model;
		}

	}

}
