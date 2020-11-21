package com.avoidgroup.notification.controller;

import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.avoidgroup.dao.GenericDao;
import com.avoidgroup.friendship.model.FollowEntity;
import com.avoidgroup.friendship.model.FollowRequestEntity;
import com.avoidgroup.user.model.UserEntity;
import com.avoidgroup.user.model.UserNotificationEntity;
import com.avoidgroup.util.Common;

@Controller
@RequestMapping(value = "/notification")
public class NotificationController {

	@Autowired
	private UserEntity userEntity;

	@Autowired
	private UserNotificationEntity notificationEntity;
	@Autowired
	private GenericDao<UserNotificationEntity> daoNotification;

	@Autowired
	private List<UserNotificationEntity> listNotification;

	@RequestMapping(value = { "/all" }, method = RequestMethod.GET)
	public ModelAndView all(HttpServletRequest request, ModelAndView model, HttpSession session) {

		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		Map<String, Object> mapnotification = new HashMap<String, Object>();
		mapnotification.put("userEntity.id", userEntity.getId());
		mapnotification.put("status", "unread");

		listNotification = daoNotification.listarProperty(UserNotificationEntity.class, mapnotification, "and");

		model.addObject("listNotification", listNotification);
		model.setViewName("notification/all");
		return model;
	}

	@RequestMapping(value = { "/read/{id}" }, method = RequestMethod.GET)
	public ModelAndView read(@PathVariable(value = "id") String id, HttpServletRequest request, HttpSession session,
			ModelAndView model) {
		Map<String, Object> mapnotification = new HashMap<String, Object>();
		mapnotification.put("id", Integer.parseInt(id));

		if (daoNotification.exist(UserNotificationEntity.class, mapnotification, "and")) {
			notificationEntity = daoNotification.findByProperty(UserNotificationEntity.class, mapnotification, "and");
			notificationEntity.setStatus("read");

			daoNotification.saveUpdate(notificationEntity);
			notificationEntity = daoNotification.findByProperty(UserNotificationEntity.class, mapnotification, "and");

			Map<String, Object> mapnot = new HashMap<String, Object>();
			mapnot.put("status", "unread");
			mapnot.put("userEntity.id", userEntity.getId());

			listNotification = daoNotification.listarProperty(UserNotificationEntity.class, mapnot, "and");
			int countNotification = listNotification.size();

			session.setAttribute("countNotification", countNotification);
			session.setAttribute("listNotification", listNotification);

			model.addObject("notificationEntity", notificationEntity);
			model.setViewName("notification/read");
			return model;
		} else {
			model.setViewName("redirect:/");
			return model;
		}

	}

	@RequestMapping(value = { "/clearall" }, method = RequestMethod.GET)
	public ModelAndView clearall(HttpServletRequest request, ModelAndView model, HttpSession session) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		Map<String, Object> mapnotification = new HashMap<String, Object>();
		mapnotification.put("status", "unread");
		mapnotification.put("userEntity.id", userEntity.getId());

		if (daoNotification.exist(UserNotificationEntity.class, mapnotification, "and")) {
			listNotification = daoNotification.listarProperty(UserNotificationEntity.class, mapnotification, "and");

			for (UserNotificationEntity notification : listNotification) {
				notification.setStatus("read");
				daoNotification.saveUpdate(notification);
			}

			listNotification = daoNotification.listarProperty(UserNotificationEntity.class, mapnotification, "and");
			int countNotification = listNotification.size();

			session.setAttribute("countNotification", countNotification);
			session.setAttribute("listNotification", listNotification);
			model.setViewName("redirect:/");
			return model;
		} else {

			model.setViewName("redirect:/");
			return model;

		}

	}
}
