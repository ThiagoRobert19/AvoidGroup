package com.inavonts.publication.controller;

import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.inavonts.dao.GenericDao;
import com.inavonts.publication.model.GeneralLikeEntity;
import com.inavonts.publication.model.GeneralPublicationEntity;
import com.inavonts.user.model.UserEntity;

@Controller
@RequestMapping(value = "/like")
public class LikeController {
	@Autowired
	private GenericDao<GeneralPublicationEntity> daoPublication;
	@Autowired
	private GeneralPublicationEntity publication;

	@Autowired
	private GenericDao<GeneralLikeEntity> daoLike;
	@Autowired
	private GeneralLikeEntity likeEntity;

	@Autowired
	private UserEntity userEntity;

	@RequestMapping(value = { "/add/{id}" }, method = RequestMethod.GET)
	public ModelAndView add(@PathVariable(value = "id") String id, ModelAndView model, HttpServletRequest request) {

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(id));

		if (daoPublication.exist(GeneralPublicationEntity.class, map, "and")) {

			userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
			Calendar date1 = Calendar.getInstance();

			publication = daoPublication.buscaId(GeneralPublicationEntity.class, Integer.parseInt(id));
			likeEntity.setPublication(publication);
			likeEntity.setLiker(userEntity);
			likeEntity.setTimeOfLike(date1.getTime());
			daoLike.saveUpdate(likeEntity);
			model.setViewName("redirect:/");

			return model;
		} else {
			model.setViewName("redirect:/");

			return model;
		}

	}

	@RequestMapping(value = { "/remove/{id}" }, method = RequestMethod.GET)
	public ModelAndView remove(@PathVariable(value = "id") String id, ModelAndView model, HttpServletRequest request) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(id));

		if (daoPublication.exist(GeneralPublicationEntity.class, map, "and")) {
			userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

			Map<String, Object> mapLike = new HashMap<String, Object>();
			mapLike.put("publication.id", Integer.parseInt(id));
			mapLike.put("liker.id", userEntity.getId());

			daoLike.delete(GeneralLikeEntity.class, mapLike, "and");

			model.setViewName("redirect:/");

			return model;
		} else {
			model.setViewName("redirect:/");

			return model;
		}

	}
}
