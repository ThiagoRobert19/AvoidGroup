package com.inavonts.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.inavonts.dao.GenericDao;
import com.inavonts.friendship.model.FollowEntity;
import com.inavonts.user.model.UserEntity;
import com.inavonts.util.Common;

@Controller
public class IndexController {
	@Autowired
	private UserEntity userEntity;
	@Autowired
	private GenericDao<FollowEntity> daoFollow;

	@RequestMapping(value = { "/" }, method = RequestMethod.GET)
	public ModelAndView index(HttpServletRequest request, ModelAndView model) {

		Common comum = new Common();
		if (comum.checkOnline(request)) {
			userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
			String id = userEntity.getId().toString();
			int countfollowers = daoFollow.count("FollowEntity", "followed.id", id);
			int countfollowing = daoFollow.count("FollowEntity", "follower.id", id);

			model.addObject("countfollowers", countfollowers);
			model.addObject("countfollowing", countfollowing);

		}

		model.setViewName("index/index");
		return model;
	}

}
