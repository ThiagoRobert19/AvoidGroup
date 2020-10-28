package com.inavonts.notification.controller;

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

import com.inavonts.dao.GenericDao;
import com.inavonts.friendship.model.FollowEntity;
import com.inavonts.friendship.model.FollowRequestEntity;
import com.inavonts.user.model.UserEntity;
import com.inavonts.user.model.UserNotificationEntity;
import com.inavonts.util.Common;

@Controller
@RequestMapping(value = "/notification")
public class NotificationController {

	@Autowired
	private UserEntity userEntity;

	@Autowired
	private GenericDao<UserEntity> daoUser;

	@Autowired
	private UserNotificationEntity notificationEntity;
	@Autowired
	private GenericDao<UserNotificationEntity> daoNotification;

	@Autowired
	private List<UserNotificationEntity> listNotification;

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
