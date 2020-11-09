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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.inavonts.dao.GenericDao;
import com.inavonts.friendship.model.FollowEntity;
import com.inavonts.friendship.model.SuggestionEntity;
import com.inavonts.publication.model.GeneralPublicationEntity;
import com.inavonts.user.model.UserEntity;
import com.inavonts.user.model.UserNotificationEntity;
import com.inavonts.util.Common;
import com.inavonts.util.PublicationUtil;

@Controller
public class IndexController {
	@Autowired
	private UserEntity userEntity;
	@Autowired
	private GenericDao<FollowEntity> daoFollow;
	
	@Autowired
	private List<FollowEntity> listFollow;
	
	@Autowired
	private GenericDao<SuggestionEntity> daoSuggestion;
	
	@Autowired
	private List<SuggestionEntity> listSuggestion;
	
	
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
			
			
			userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

			

			PublicationUtil pubUtil = new PublicationUtil();

			List<GeneralPublicationEntity> listaPublication = new ArrayList<GeneralPublicationEntity>();
			listaPublication=pubUtil.getAll(userEntity);
			
			PagedListHolder<GeneralPublicationEntity> pagedListHolder = new PagedListHolder<GeneralPublicationEntity>(
					listaPublication);
			int page = ServletRequestUtils.getIntParameter(request, "p", 0);

			pagedListHolder.setPage(page);
			pagedListHolder.setPageSize(10);
			
			model.addObject("pagedListHolder", pagedListHolder);
			model.addObject("countfollowers", countfollowers);
			model.addObject("countfollowing", countfollowing);

		}

		model.setViewName("index/index");
		return model;
	}

}
