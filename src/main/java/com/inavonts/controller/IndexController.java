package com.inavonts.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.inavonts.dao.GenericDao;
import com.inavonts.friendship.model.FollowEntity;
import com.inavonts.user.model.UserEntity;
import com.inavonts.user.model.UserNotificationEntity;
import com.inavonts.util.Common;

@Controller
public class IndexController {
	@Autowired
	private UserEntity userEntity;
	@Autowired
	private GenericDao<FollowEntity> daoFollow;
	@Autowired
	private List<UserNotificationEntity> listNotification;
	@Autowired
	private GenericDao<UserNotificationEntity> daoNotification;
	
	@RequestMapping(value = { "/" }, method = RequestMethod.GET)
	public ModelAndView index(HttpServletRequest request, ModelAndView model,HttpSession session) {

		Common comum = new Common();
		if (comum.checkOnline(request)) {
			userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
			String id = userEntity.getId().toString();
			int countfollowers = daoFollow.count("FollowEntity", "followed.id", id);
			int countfollowing = daoFollow.count("FollowEntity", "follower.id", id);

			Map<String, Object> mapnotification = new HashMap<String, Object>();
			mapnotification.put("status", "unread");
			mapnotification.put("userEntity.id", userEntity.getId());
			
			
			listNotification = daoNotification.listarProperty(UserNotificationEntity.class, mapnotification, "and");
			int countNotification = listNotification.size();

			session.setAttribute("countNotification", countNotification);
			session.setAttribute("listNotification", listNotification);
			
			
			model.addObject("countfollowers", countfollowers);
			model.addObject("countfollowing", countfollowing);

		}

		model.setViewName("index/index");
		return model;
	}

}
