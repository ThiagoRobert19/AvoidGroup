package com.avoidgroup.controller;

import java.util.HashMap;
import java.util.Map;

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
	private GenericDao<UserEntity> daoUser;

	@Autowired
	private UserEntity userEntity;

	@RequestMapping(value = { "/login" }, method = RequestMethod.GET)
	public String login() {

		return "user/login";
	}

	@RequestMapping(value = { "/doLogin" }, method = RequestMethod.POST)
	public ModelAndView doLogin(UserEntity userEntity, ModelAndView model, HttpSession session) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("email", userEntity.getEmail());

		if (daoUser.exist(UserEntity.class, map, "and")) {
			Map<String, Object> mappassword = new HashMap<String, Object>();
			mappassword.put("email", userEntity.getEmail());
			mappassword.put("password", Criptografia.criptografar(userEntity.getPassword()));

			if (daoUser.exist(UserEntity.class, mappassword, "and")) {
				userEntity = daoUser.findByProperty(UserEntity.class, mappassword, "and");

				session.setAttribute("clienteLogado", userEntity);

				model.setViewName("redirect:/");
				return model;

			} else {

				model.addObject("erro", "Senha n�o confere!");
				model.setViewName("user/login");
				return model;

			}

		} else {

			model.addObject("erro", "N�o existe Usu�rio cadastrado com esse email!");
			model.setViewName("user/login");
			return model;
		}

	}

	@RequestMapping(value = { "/register" }, method = RequestMethod.POST)
	public ModelAndView register(UserEntity userEntity, String rePassword, ModelAndView model) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("email", userEntity.getEmail());

		if (!daoUser.exist(UserEntity.class, map, "and")) {

			System.out.println("N�o existe email cadastrado.. vamos cadastrar eeeeee");

			if (userEntity.getPassword().equals(rePassword)) {
				userEntity.setPassword(Criptografia.criptografar(userEntity.getPassword()));
				daoUser.saveUpdate(userEntity);
				model.setViewName("redirect:/user/login");
				return model;

			} else {
				model.addObject("erro", "Password tem que coincidir com o Re Password!");
				model.setViewName("user/login");
				return model;
			}
		} else {
			model.addObject("erro", "J� existe esse email cadastrado!");
			model.setViewName("user/login");
			return model;
		}

	}

	@RequestMapping(value = { "/logout" }, method = RequestMethod.GET)
	public String logout(HttpSession session) {

		session.setAttribute("clienteLogado", null);

		return "redirect:/user/login";
	}
}
