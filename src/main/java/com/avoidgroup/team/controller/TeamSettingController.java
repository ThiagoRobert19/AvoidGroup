package com.avoidgroup.team.controller;

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
import com.avoidgroup.friendship.model.FollowRequestEntity;
import com.avoidgroup.team.model.TeamEntity;
import com.avoidgroup.team.model.TeamInviteEntity;
import com.avoidgroup.team.model.TeamUserEntity;
import com.avoidgroup.user.model.UserEntity;

@Controller
@RequestMapping(value = "/teamsetting")
public class TeamSettingController {

	@Autowired
	private UserEntity userEntity;
	@Autowired
	private GenericDao<UserEntity> daoUser;
	@Autowired
	private TeamEntity teamEntity;
	@Autowired
	private GenericDao<TeamEntity> daoTeam;
	
	@Autowired
	private List<TeamUserEntity> listTeamUser;
	
	@Autowired
	private GenericDao<TeamUserEntity> daoTeamUser;
	
	@Autowired
	private List<TeamInviteEntity> listTeamInvitation;
	
	@Autowired
	private GenericDao<TeamInviteEntity> daoTeamInvite;
/*
	@RequestMapping(value = { "/invitation/cancel/{id}" }, method = RequestMethod.GET)
	public ModelAndView invitationcancel(@PathVariable(value = "id") String id, HttpServletRequest request,
			ModelAndView model) {

		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
		Map<String, Object> mapInvitation = new HashMap<String, Object>();
		mapInvitation.put("id", Integer.parseInt(id));
		if(daoTeamInvite.exist(TeamInviteEntity.class, mapInvitation, "and")) {
			
		}
	}
	*/
	@RequestMapping(value = { "/settings/{id}" }, method = RequestMethod.GET)
	public ModelAndView settings(@PathVariable(value = "id") String id, HttpServletRequest request,
			ModelAndView model) {

		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		Map<String, Object> mapTeam = new HashMap<String, Object>();
		mapTeam.put("id", Integer.parseInt(id));
		if (daoTeam.exist(TeamEntity.class, mapTeam, "and")) {

			Map<String, Object> mapOwner = new HashMap<String, Object>();
			mapOwner.put("id", Integer.parseInt(id));
			mapOwner.put("owner.id", userEntity.getId());

			Map<String, Object> mapAdmin = new HashMap<String, Object>();
			mapAdmin.put("id", Integer.parseInt(id));
			mapAdmin.put("admin.id", userEntity.getId());

			if ((daoTeam.exist(TeamEntity.class, mapOwner, "and"))
					|| (daoTeam.exist(TeamEntity.class, mapAdmin, "and"))) {
				
				teamEntity= daoTeam.findByProperty(TeamEntity.class, mapTeam, "and");
				Map<String, Object> mapTeamUser = new HashMap<String, Object>();
				mapTeamUser.put("teamEntity.id", Integer.parseInt(id));
				
				listTeamUser = daoTeamUser.listarProperty(TeamUserEntity.class, mapTeamUser, "and");
				
				
				Map<String, Object> mapTeamInvite = new HashMap<String, Object>();
				mapTeamInvite.put("teamEntity.id", Integer.parseInt(id));
				mapTeamInvite.put("status","invited");
				
				listTeamInvitation = daoTeamInvite.listarProperty(TeamInviteEntity.class, mapTeamInvite, "and");
				
				model.addObject("listTeamUser", listTeamUser);
				model.addObject("listTeamInvitation", listTeamInvitation);
				model.addObject("teamEntity", teamEntity);
				model.setViewName("team/settings/setting");
				return model;
				
			} else {
				model.setViewName("redirect:/team/view/" + id);
				return model;
			}

		} else {
			model.setViewName("redirect:/");
			return model;
		}

	
	}
}
