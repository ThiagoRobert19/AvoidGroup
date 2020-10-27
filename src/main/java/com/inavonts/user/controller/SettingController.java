package com.inavonts.user.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.inavonts.dao.GenericDao;
import com.inavonts.user.model.UserEntity;

@Controller
@RequestMapping(value = "/setting")
public class SettingController {

	@Autowired
	private UserEntity userEntity;

	@Autowired
	private GenericDao<UserEntity> daoUser;

	@RequestMapping(value = { "/changeprivacy" }, method = RequestMethod.POST)
	public ModelAndView changeprivacy(String tipoPerfil, ModelAndView model, HttpSession session,
			HttpServletRequest request) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
		Integer id = userEntity.getId();
		userEntity.setPerfil(tipoPerfil);
		daoUser.saveUpdate(userEntity);

		userEntity = daoUser.buscaId(UserEntity.class, id);

		session.setAttribute("clienteLogado", userEntity);

		model.setViewName("redirect:/user/settings");

		return model;
	}
}
