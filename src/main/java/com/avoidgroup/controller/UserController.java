package com.avoidgroup.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.avoidgroup.dao.GenericDao;
import com.avoidgroup.model.UserEntity;
import com.avoidgroup.util.Criptografia;

@Controller
@RequestMapping(value = "/user")
public class UserController {
	@Autowired
	private UserEntity userEntity;
	@Autowired
	private GenericDao<UserEntity> daoUser;

	
	@RequestMapping(value = { "/myprofile" }, method = RequestMethod.GET)
	public ModelAndView myprofile( HttpServletRequest request,ModelAndView model) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
		model.addObject("userEntity", userEntity);
		model.setViewName("user/myprofile/myprofile");
		return model;
	}
	@RequestMapping(value = { "/settings" }, method = RequestMethod.GET)
	public ModelAndView settings( HttpServletRequest request,ModelAndView model) {
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

				session.setAttribute("clienteLogado", userEntity);

				model.setViewName("redirect:/");
				return model;

			} else {
				model.addObject("in", "yes");
				model.addObject("up", "no");
				model.addObject("erro", "Senha não confere!");
				model.setViewName("user/login");
				return model;

			}

		} else {
			model.addObject("in", "yes");
			model.addObject("up", "no");
			model.addObject("erro", "Não existe Usuário cadastrado com esse email!");
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
				model.addObject("erro", "Já existe cadastro com esse Username!");
				model.setViewName("user/login");
				return model;
			}

		} else {
			model.addObject("in", "no");
			model.addObject("up", "yes");
			model.addObject("erro", "Já existe cadastro com esse email!");
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
