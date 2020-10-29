package com.inavonts.user.controller;

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
import com.inavonts.util.Criptografia;

@Controller
@RequestMapping(value = "/setting")
public class SettingController {

	@Autowired
	private UserEntity userEntity;
	@Autowired
	private UserEntity user;
	@Autowired
	private GenericDao<UserEntity> daoUser;

	@Autowired
	private List<FollowRequestEntity> listRequest;

	
	@Autowired
	private FollowRequestEntity requestEntity;
	
	@Autowired
	private FollowEntity followEntity;
	
	@Autowired
	private FollowEntity follow;
	
	@Autowired
	private GenericDao<FollowEntity> daoFollow;
	@Autowired
	private FollowRequestEntity followRequestEntity;
	@Autowired
	private GenericDao<FollowRequestEntity> daoRequest;
	
	@Autowired
	private UserNotificationEntity notificationEntity;
	@Autowired
	private GenericDao<UserNotificationEntity> daoNotification;
	
	
	@RequestMapping(value = { "/request/deny/{id}" }, method = RequestMethod.GET)
	public ModelAndView deny(@PathVariable(value = "id") String id, HttpServletRequest request, ModelAndView model) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(id));

		if (daoRequest.exist(FollowRequestEntity.class, map, "and")) {
			requestEntity = daoRequest.findByProperty(FollowRequestEntity.class, map, "and");
			
			requestEntity.setStatus("denied ");
			
			
			daoRequest.saveUpdate(requestEntity);
			model.setViewName("redirect:/setting/settings");
			return model;
		}else {
			model.setViewName("redirect:/setting/settings");
			return model;
		}
		
	}
	
	
	@RequestMapping(value = { "/request/acceptandfollow/{id}" }, method = RequestMethod.GET)
	public ModelAndView acceptandfollow(@PathVariable(value = "id") String id, HttpServletRequest request, ModelAndView model) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(id));

		if (daoRequest.exist(FollowRequestEntity.class, map, "and")) {
			requestEntity = daoRequest.findByProperty(FollowRequestEntity.class, map, "and");
			
			requestEntity.setStatus("approved");
			
			followEntity.setFollowed(requestEntity.getFollowed());
			followEntity.setFollower(requestEntity.getFollower());
			daoFollow.saveUpdate(followEntity);
			
			userEntity = requestEntity.getFollower();
			user = requestEntity.getFollowed();
			
			daoRequest.saveUpdate(requestEntity);
			
			
			if(userEntity.getPerfil().equals("public")){
				followEntity.setFollowed(userEntity);
				followEntity.setFollower(user);
				daoFollow.saveUpdate(followEntity);
				
				String uuid = Common.geraUUID();
				followRequestEntity.setFollowed(userEntity);
				followRequestEntity.setFollower(user);
				followRequestEntity.setUuid(uuid);
				followRequestEntity.setStatus("approved");
				daoRequest.saveUpdate(followRequestEntity);
				
				Map<String, Object> mapuuid = new HashMap<String, Object>();
				mapuuid.put("uuid", uuid);
				
				followRequestEntity = daoRequest.findByProperty(FollowRequestEntity.class, mapuuid, "and");
				
				Calendar date1 = Calendar.getInstance();
				notificationEntity.setDateOfNotification(date1.getTime());
				notificationEntity.setTimeOfNotification(date1.getTime());
				notificationEntity.setUserEntity(userEntity);
				notificationEntity.setStatus("unread");
				notificationEntity.setFollow(user);
				notificationEntity.setFollowRequest(followRequestEntity);
				notificationEntity.setExtra("Started Following you");
				notificationEntity.setTipo("follow");
				
				daoNotification.saveUpdate(notificationEntity);
				
			}
			if(user.getPerfil().equals("private")){
				String uuid = Common.geraUUID();
				followRequestEntity.setFollowed(userEntity);
				followRequestEntity.setFollower(user);
				followRequestEntity.setUuid(uuid);
				followRequestEntity.setStatus("pending");
				daoRequest.saveUpdate(followRequestEntity);;
				
				Map<String, Object> mapuuid = new HashMap<String, Object>();
				mapuuid.put("uuid", uuid);
				
				followRequestEntity = daoRequest.findByProperty(FollowRequestEntity.class, mapuuid, "and");
				
				Calendar date1 = Calendar.getInstance();
				notificationEntity.setDateOfNotification(date1.getTime());
				notificationEntity.setTimeOfNotification(date1.getTime());
				notificationEntity.setUserEntity(userEntity);
				notificationEntity.setStatus("unread");
				notificationEntity.setFollow(user);
				notificationEntity.setFollowRequest(followRequestEntity);
				notificationEntity.setExtra("Requested to Following you");
				notificationEntity.setTipo("follow");
				
				daoNotification.saveUpdate(notificationEntity);
				
			
			}
			
			
			
			model.setViewName("redirect:/setting/settings");
			return model;
		}else {
			model.setViewName("redirect:/setting/settings");
			return model;
		}
		
	}
	@RequestMapping(value = { "/request/accept/{id}" }, method = RequestMethod.GET)
	public ModelAndView accept(@PathVariable(value = "id") String id, HttpServletRequest request, ModelAndView model) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(id));

		if (daoRequest.exist(FollowRequestEntity.class, map, "and")) {
			requestEntity = daoRequest.findByProperty(FollowRequestEntity.class, map, "and");
			
			requestEntity.setStatus("approved");
			
			followEntity.setFollowed(requestEntity.getFollowed());
			followEntity.setFollower(requestEntity.getFollower());
			daoFollow.saveUpdate(followEntity);
			daoRequest.saveUpdate(requestEntity);
			model.setViewName("redirect:/setting/settings");
			return model;
		}else {
			model.setViewName("redirect:/setting/settings");
			return model;
		}
		
	}
	@RequestMapping(value = { "/settings" }, method = RequestMethod.GET)
	public ModelAndView settings(HttpServletRequest request, ModelAndView model) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("followed.id", userEntity.getId());
		map.put("status", "pending");

		listRequest = daoRequest.listarProperty(FollowRequestEntity.class, map, "and");

		model.addObject("listRequest", listRequest);
		model.addObject("userEntity", userEntity);
		model.setViewName("user/settings/setting");
		return model;
	}

	@RequestMapping(value = { "/changeprivacy" }, method = RequestMethod.POST)
	public ModelAndView changeprivacy(String tipoPerfil, ModelAndView model, HttpSession session,
			HttpServletRequest request) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
		Integer id = userEntity.getId();
		userEntity.setPerfil(tipoPerfil);
		daoUser.saveUpdate(userEntity);

		userEntity = daoUser.buscaId(UserEntity.class, id);

		session.setAttribute("clienteLogado", userEntity);

		model.setViewName("redirect:/setting/settings");

		return model;
	}

	@RequestMapping(value = { "/changepassword" }, method = RequestMethod.POST)
	public ModelAndView changepassword(String oldpassword, String newpassword, String repeatpassword,
			ModelAndView model, HttpSession session, HttpServletRequest request) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
		Integer id = userEntity.getId();
		userEntity = daoUser.buscaId(UserEntity.class, id);

		oldpassword = Criptografia.criptografar(oldpassword);
		if (userEntity.getPassword().equals(oldpassword)) {
			if (newpassword.equals(repeatpassword)) {

				userEntity.setPassword(newpassword);
				daoUser.saveUpdate(userEntity);
				session.setAttribute("clienteLogado", userEntity);
				model.setViewName("redirect:/setting/settings");

				return model;
			} else {
				model.addObject("erro", "Senha tem que coincidir com o Segunda Senha!");

				model.addObject("userEntity", userEntity);
				model.setViewName("user/settings/setting");

				return model;
			}
		} else {
			model.addObject("erro", "Senha Antiga nao confere!");

			model.addObject("userEntity", userEntity);
			model.setViewName("user/settings/setting");

			return model;
		}

	}
}
