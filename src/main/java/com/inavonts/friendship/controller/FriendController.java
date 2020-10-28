package com.inavonts.friendship.controller;

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
import com.inavonts.friendship.model.FollowEntity;
import com.inavonts.friendship.model.FollowRequestEntity;
import com.inavonts.user.model.UserEntity;
import com.inavonts.user.model.UserNotificationEntity;
import com.inavonts.util.Common;

@Controller
@RequestMapping(value = "/friend")
public class FriendController {

	@Autowired
	private UserEntity userEntity;
	
	@Autowired
	private UserEntity user;
	
	@Autowired
	private GenericDao<UserEntity> daoUser;
	@Autowired
	private FollowEntity followEntity;
	@Autowired
	private GenericDao<FollowEntity> daoFollow;
	@Autowired
	private UserNotificationEntity notificationEntity;
	@Autowired
	private GenericDao<UserNotificationEntity> daoNotification;
	
	@Autowired
	private FollowRequestEntity followRequestEntity;
	@Autowired
	private GenericDao<FollowRequestEntity> daoRequest;
	
	
	@RequestMapping(value = { "/follow/{id}" }, method = RequestMethod.GET)
	public ModelAndView follow(@PathVariable(value = "id") String id, HttpServletRequest request, ModelAndView model) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
		
		if(userEntity.getId().equals(Integer.parseInt(id))){
			model.setViewName("redirect:/");
			return model;
		}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(id));
		if(daoUser.exist(UserEntity.class, map, "and")){
			
			user=daoUser.findByProperty(UserEntity.class, map, "and");
			
			if(user.getPerfil().equals("public")){
				followEntity.setFollowed(user);
				followEntity.setFollower(userEntity);
				daoFollow.saveUpdate(followEntity);
				
				String uuid = Common.geraUUID();
				followRequestEntity.setFollowed(user);
				followRequestEntity.setFollower(userEntity);
				followRequestEntity.setUuid(uuid);
				followRequestEntity.setStatus("approved");
				daoRequest.saveUpdate(followRequestEntity);
				
				Map<String, Object> mapuuid = new HashMap<String, Object>();
				mapuuid.put("uuid", uuid);
				
				followRequestEntity = daoRequest.findByProperty(FollowRequestEntity.class, mapuuid, "and");
				
				Calendar date1 = Calendar.getInstance();
				notificationEntity.setDateOfNotification(date1.getTime());
				notificationEntity.setTimeOfNotification(date1.getTime());
				notificationEntity.setUserEntity(user);
				notificationEntity.setStatus("unread");
				notificationEntity.setFollow(userEntity);
				notificationEntity.setFollowRequest(followRequestEntity);
				notificationEntity.setExtra("Started Following you");
				notificationEntity.setTipo("follow");
				
				daoNotification.saveUpdate(notificationEntity);
				model.setViewName("redirect:/user/view/"+id);
				return model;
			}
			if(user.getPerfil().equals("private")){
				String uuid = Common.geraUUID();
				followRequestEntity.setFollowed(user);
				followRequestEntity.setFollower(userEntity);
				followRequestEntity.setUuid(uuid);
				followRequestEntity.setStatus("pending");
				daoRequest.saveUpdate(followRequestEntity);
				
				Map<String, Object> mapuuid = new HashMap<String, Object>();
				mapuuid.put("uuid", uuid);
				
				followRequestEntity = daoRequest.findByProperty(FollowRequestEntity.class, mapuuid, "and");
				
				Calendar date1 = Calendar.getInstance();
				notificationEntity.setDateOfNotification(date1.getTime());
				notificationEntity.setTimeOfNotification(date1.getTime());
				notificationEntity.setUserEntity(user);
				notificationEntity.setStatus("unread");
				notificationEntity.setFollow(userEntity);
				notificationEntity.setFollowRequest(followRequestEntity);
				notificationEntity.setExtra("Requested to Follow You");
				notificationEntity.setTipo("follow");
				
				daoNotification.saveUpdate(notificationEntity);
				model.setViewName("redirect:/user/view/"+id);
				return model;
			
			}
			
			
			return model;
		}else{
			model.setViewName("redirect:/");
			return model;
		}
	
	}
}
