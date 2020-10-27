package com.inavonts.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.support.PagedListHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.inavonts.dao.GenericDao;
import com.inavonts.friendship.model.FollowEntity;
import com.inavonts.user.model.UserEntity;
import com.inavonts.user.model.UserNotificationEntity;
import com.inavonts.util.Common;
import com.inavonts.util.Criptografia;

@Controller
@RequestMapping(value = "/user")
public class UserController {
	@Autowired
	private UserEntity userEntity;

	@Autowired
	private List<UserEntity> listUser;

	@Autowired
	private GenericDao<UserEntity> daoUser;

	@Autowired
	private GenericDao<FollowEntity> daoFollow;

	@Autowired
	private List<UserNotificationEntity> listNotification;
	@Autowired
	private GenericDao<UserNotificationEntity> daoNotification;

	@RequestMapping(value = { "/pesquisa" }, method = RequestMethod.POST)
	public ModelAndView pesquisa(String texto, HttpServletRequest request, ModelAndView model) {

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("name", texto);
		listUser = daoUser.listByPropertyLike(UserEntity.class, "UserEntity", "name", texto);

		PagedListHolder<UserEntity> pagedListHolder = new PagedListHolder<UserEntity>(listUser);
		int page = ServletRequestUtils.getIntParameter(request, "p", 0);

		pagedListHolder.setPage(page);
		pagedListHolder.setPageSize(10);

		model.addObject("texto", texto);

		model.addObject("folder", "user");
		model.addObject("url", "pesquisa");
		model.addObject("pagedListHolder", pagedListHolder);

		model.setViewName("user/pesquisa");
		return model;

	}

	@RequestMapping(value = { "/pesquisa/{next}/{texto}" }, method = RequestMethod.GET)
	public ModelAndView pesquisanext(@PathVariable(value = "next") String next,
			@PathVariable(value = "texto") String texto, HttpServletRequest request, ModelAndView model) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("name", texto);
		listUser = daoUser.listByPropertyLike(UserEntity.class, "UserEntity", "name", texto);
		PagedListHolder<UserEntity> pagedListHolder = new PagedListHolder<UserEntity>(listUser);

		pagedListHolder.setPage(Integer.parseInt(next));
		pagedListHolder.setPageSize(10);

		model.addObject("texto", texto);

		model.addObject("folder", "user");
		model.addObject("url", "pesquisa");

		model.addObject("pagedListHolder", pagedListHolder);

		model.setViewName("user/pesquisa");
		return model;

	}

	@RequestMapping(value = { "/view/{id}" }, method = RequestMethod.GET)
	public ModelAndView view(@PathVariable(value = "id") String id, HttpServletRequest request, ModelAndView model) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		UserEntity user = new UserEntity();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(id));
		if (daoUser.exist(UserEntity.class, map, "and")) {

			if (!userEntity.getId().equals(Integer.parseInt(id))) {

				user = daoUser.buscaId(UserEntity.class, Integer.parseInt(id));

				Map<String, Object> mapfollower = new HashMap<String, Object>();
				mapfollower.put("follower.id", userEntity.getId());
				mapfollower.put("followed.id", Integer.parseInt(id));

				Map<String, Object> mapfollowed = new HashMap<String, Object>();
				mapfollowed.put("follower.id", Integer.parseInt(id));
				mapfollowed.put("followed.id", userEntity.getId());

				if (daoFollow.exist(FollowEntity.class, mapfollower, "and")) {
					user.setFollow("unfollow");
				}
				if (daoFollow.exist(FollowEntity.class, mapfollowed, "and")
						&& !daoFollow.exist(FollowEntity.class, mapfollower, "and")) {
					user.setFollow("followback");
				}
				if (!daoFollow.exist(FollowEntity.class, mapfollowed, "and")
						&& !daoFollow.exist(FollowEntity.class, mapfollower, "and")) {
					user.setFollow("follow");
				}

				model.addObject("userEntity", user);
				model.setViewName("user/view/profile");
				return model;
			} else {
				model.setViewName("redirect:/user/myprofile");
				return model;
			}

		} else {

			model.setViewName("redirect:/");
			return model;
		}

	}

	@RequestMapping(value = { "/data" }, method = RequestMethod.GET)
	public ModelAndView data(HttpServletRequest request, ModelAndView model) {
		listUser = daoUser.list(UserEntity.class);

		model.addObject("listUser", listUser);
		model.setViewName("user/data");
		return model;
	}

	@RequestMapping(value = { "/myprofile" }, method = RequestMethod.GET)
	public ModelAndView myprofile(HttpServletRequest request, ModelAndView model) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
		model.addObject("userEntity", userEntity);
		model.setViewName("user/myprofile/myprofile");
		return model;
	}

	@RequestMapping(value = { "/settings" }, method = RequestMethod.GET)
	public ModelAndView settings(HttpServletRequest request, ModelAndView model) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
		model.addObject("userEntity", userEntity);
		model.setViewName("user/settings/setting");
		return model;
	}

	@RequestMapping(value = { "/doLogin" }, method = RequestMethod.POST)
	public ModelAndView doLogin(UserEntity userEntity, ModelAndView model, HttpSession session) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("email", userEntity.getEmail());
		System.out.println("Senha digitada: " + userEntity.getPassword());
		if (daoUser.exist(UserEntity.class, map, "and")) {
			Map<String, Object> mappassword = new HashMap<String, Object>();
			mappassword.put("email", userEntity.getEmail());
			mappassword.put("password", userEntity.getPassword());

			if (daoUser.exist(UserEntity.class, mappassword, "and")) {
				userEntity = daoUser.findByProperty(UserEntity.class, mappassword, "and");

				Map<String, Object> mapnotification = new HashMap<String, Object>();
				mapnotification.put("status", "unread");
				mapnotification.put("userEntity.id", userEntity.getId());

				listNotification = daoNotification.listarProperty(UserNotificationEntity.class, mapnotification, "and");
				int countNotification = listNotification.size();

				session.setAttribute("countNotification", countNotification);
				session.setAttribute("listNotification", listNotification);
				session.setAttribute("clienteLogado", userEntity);

				model.setViewName("redirect:/");
				return model;

			} else {
				model.addObject("in", "yes");
				model.addObject("up", "no");
				model.addObject("erro", "Senha nao confere!");
				model.setViewName("user/login");
				return model;

			}

		} else {
			model.addObject("in", "yes");
			model.addObject("up", "no");
			model.addObject("erro", "Nao existe Usuario cadastrado com esse email!");
			model.setViewName("user/login");
			return model;
		}

	}

	@RequestMapping(value = { "/register" }, method = RequestMethod.POST)
	public ModelAndView register(UserEntity userEntity, String rePassword, ModelAndView model) {
		rePassword = Criptografia.criptografar(rePassword);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("email", userEntity.getEmail());

		if (!daoUser.exist(UserEntity.class, map, "and")) {
			map.clear();
			map.put("userName", userEntity.getUserName());
			if (!daoUser.exist(UserEntity.class, map, "and")) {
				if (userEntity.getPassword().equals(rePassword)) {
					userEntity.setPerfil("public");
					Common comum = new Common();
					userEntity.setUuid(comum.geraUUID());

					daoUser.saveUpdate(userEntity);
					model.setViewName("redirect:/user/login");
					return model;

				} else {
					model.addObject("in", "no");
					model.addObject("up", "yes");
					model.addObject("erro", "Senha tem que coincidir com o Segunda Senha!");
					model.setViewName("user/login");
					return model;
				}

			} else {
				model.addObject("in", "no");
				model.addObject("up", "yes");
				model.addObject("erro", "Ja existe cadastro com esse Username!");
				model.setViewName("user/login");
				return model;
			}

		} else {
			model.addObject("in", "no");
			model.addObject("up", "yes");
			model.addObject("erro", "Ja existe cadastro com esse email!");
			model.setViewName("user/login");
			return model;
		}

	}

	@RequestMapping(value = { "/login" }, method = RequestMethod.GET)
	public String login() {

		return "user/login";
	}

	@RequestMapping(value = { "/logout" }, method = RequestMethod.GET)
	public String logout(HttpSession session) {

		session.setAttribute("clienteLogado", null);

		return "redirect:/user/login";
	}
}
