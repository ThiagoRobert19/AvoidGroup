package com.avoidgroup.controller;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.avoidgroup.dao.GenericDao;
import com.avoidgroup.model.FriendEntity;
import com.avoidgroup.model.InvitationEntity;
import com.avoidgroup.model.ProfileEntity;
import com.avoidgroup.model.UserEntity;
import com.avoidgroup.util.Common;

@Controller
@RequestMapping(value = "/invitation")
public class InvitationController {

	@Autowired
	private GenericDao<ProfileEntity> daoProfile;

	@Autowired
	private GenericDao<InvitationEntity> daoInvitation;

	@Autowired
	private GenericDao<FriendEntity> daoFriend;

	@Autowired
	private ProfileEntity profile;

	@Autowired
	private InvitationEntity invitation;

	@RequestMapping(value = "/view", method = RequestMethod.GET)
	public ModelAndView view(ModelAndView model, HttpServletRequest request) {

		profile = (ProfileEntity) request.getSession().getAttribute("profileLogado");

		List<InvitationEntity> lista = new ArrayList<InvitationEntity>();

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("invited.id", profile.getId());
		lista = daoInvitation.listarProperty(InvitationEntity.class, map, "and");

		model.addObject("lista", lista);
		model.setViewName("invitation/view");

		return model;

	}

	@RequestMapping(value = "/accept/{id}", method = RequestMethod.GET)
	public ModelAndView accept(@PathVariable(value = "id") String id, ModelAndView model, HttpServletRequest request) {

		Map<String, Object> mapInvitation = new HashMap<String, Object>();
		mapInvitation.put("id", Integer.parseInt(id));
		if (daoInvitation.exist(InvitationEntity.class, mapInvitation, "and")) {

			invitation = daoInvitation.buscaId(InvitationEntity.class, Integer.parseInt(id));

			ProfileEntity invited = new ProfileEntity();

			profile = invitation.getRequester();
			invited = invitation.getInvited();

			Calendar date = Calendar.getInstance();

			FriendEntity friend = new FriendEntity();
			friend.setProfile1(profile);
			friend.setProfile2(invited);
			friend.setTimeOfFriendship(date.getTime());
			friend.setDateOfFriendship(date.getTime());

			daoFriend.saveUpdate(friend);
			daoInvitation.remove(InvitationEntity.class, Integer.parseInt(id));

			model.setViewName("redirect:/friend/viewFriend/" + profile.getId());
			return model;

		} else {
			model.setViewName("redirect:/");
			return model;
		}

	}

	@RequestMapping(value = "/deny/{id}", method = RequestMethod.GET)
	public ModelAndView deny(@PathVariable(value = "id") String id, ModelAndView model, HttpServletRequest request) {

		invitation.setId(Integer.parseInt(id));
		invitation = daoInvitation.buscaId(InvitationEntity.class, invitation.getId());
		Integer idProfile = (Integer) request.getSession().getAttribute("idProfile");

		profile = daoProfile.buscaId(ProfileEntity.class, idProfile);

		if (invitation.getInvited().getId().equals(profile.getId())) {
			daoInvitation.remove(InvitationEntity.class, invitation.getId());

			List<InvitationEntity> lista = new ArrayList<InvitationEntity>();

			Map<String, Object> map = new HashMap<String, Object>();
			map.put("invited.id", profile.getId());
			lista = daoInvitation.listarProperty(InvitationEntity.class, map, "or");
			model.addObject("profileLoged", profile);
			model.addObject("lista", lista);
			model.setViewName("invitation/view");

			return model;
		} else {
			model.setViewName("profile/view");

			return model;
		}

	}
}
