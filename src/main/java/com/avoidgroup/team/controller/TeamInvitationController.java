package com.avoidgroup.team.controller;

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
import com.avoidgroup.friendship.model.FollowEntity;
import com.avoidgroup.team.model.TeamEntity;
import com.avoidgroup.team.model.TeamInviteEntity;
import com.avoidgroup.team.model.TeamUserEntity;
import com.avoidgroup.user.model.UserEntity;
import com.avoidgroup.util.AWSAPI;

@Controller
@RequestMapping(value = "/teaminvitation")
public class TeamInvitationController {
	@Autowired
	private UserEntity userEntity;
	@Autowired
	private GenericDao<UserEntity> daoUser;
	@Autowired
	private TeamEntity teamEntity;

	@Autowired
	private GenericDao<TeamEntity> daoTeam;

	@Autowired
	private GenericDao<TeamUserEntity> daoTeamUser;

	@Autowired
	private GenericDao<FollowEntity> daoFollow;

	@Autowired
	private GenericDao<TeamInviteEntity> daoTeamInvite;

	@Autowired
	private List<TeamInviteEntity> listTeamInvite;

	@Autowired
	private TeamInviteEntity teamInviteEntity;

	AWSAPI amazon = new AWSAPI();

	@RequestMapping(value = { "/invitation/accept/{id}" }, method = RequestMethod.GET)
	public ModelAndView accept(@PathVariable(value = "id") String id, HttpServletRequest request, ModelAndView model) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
		Map<String, Object> mapTeamInvitation = new HashMap<String, Object>();
		mapTeamInvitation.put("id", Integer.parseInt(id));

		if (daoTeamInvite.exist(TeamInviteEntity.class, mapTeamInvitation, "and")) {
			teamInviteEntity = daoTeamInvite.findByProperty(TeamInviteEntity.class, mapTeamInvitation, "and");

			teamEntity = teamInviteEntity.getTeamEntity();

			teamInviteEntity.setStatus("accepted");

			Calendar date1 = Calendar.getInstance();

			teamInviteEntity.setDateAccept(date1.getTime());

			daoTeamInvite.saveUpdate(teamInviteEntity);

			TeamUserEntity teamUser = new TeamUserEntity();
			teamUser.setTeamEntity(teamEntity);
			teamUser.setUserEntity(userEntity);
			daoTeamUser.saveUpdate(teamUser);

			model.setViewName("redirect:/team/view/" + teamEntity.getId());
			return model;
		} else {
			model.setViewName("redirect:/");
			return model;
		}
	}

	@RequestMapping(value = { "/invitation/deny/{id}" }, method = RequestMethod.GET)
	public ModelAndView denie(@PathVariable(value = "id") String id, HttpServletRequest request, ModelAndView model) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
		Map<String, Object> mapTeamInvitation = new HashMap<String, Object>();
		mapTeamInvitation.put("id", Integer.parseInt(id));

		if (daoTeamInvite.exist(TeamInviteEntity.class, mapTeamInvitation, "and")) {
			teamInviteEntity = daoTeamInvite.findByProperty(TeamInviteEntity.class, mapTeamInvitation, "and");

			teamEntity = teamInviteEntity.getTeamEntity();

			teamInviteEntity.setStatus("denied");

			Calendar date1 = Calendar.getInstance();

			teamInviteEntity.setDateDeny(date1.getTime());

			daoTeamInvite.saveUpdate(teamInviteEntity);

			model.setViewName("redirect:/setting/settings");
			return model;
		} else {
			model.setViewName("redirect:/");
			return model;
		}
	}

	@RequestMapping(value = { "/invitation/cancel/{id}" }, method = RequestMethod.GET)
	public ModelAndView cancel(@PathVariable(value = "id") String id, HttpServletRequest request, ModelAndView model) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
		Map<String, Object> mapTeamInvitation = new HashMap<String, Object>();
		mapTeamInvitation.put("id", Integer.parseInt(id));

		if (daoTeamInvite.exist(TeamInviteEntity.class, mapTeamInvitation, "and")) {
			teamInviteEntity = daoTeamInvite.findByProperty(TeamInviteEntity.class, mapTeamInvitation, "and");

			teamEntity = teamInviteEntity.getTeamEntity();

			Map<String, Object> mapOwner = new HashMap<String, Object>();
			mapOwner.put("id", teamEntity.getId());
			mapOwner.put("owner.id", userEntity.getId());

			Map<String, Object> mapAdmin = new HashMap<String, Object>();
			mapAdmin.put("id", teamEntity.getId());
			mapAdmin.put("admin.id", userEntity.getId());

			if ((daoTeam.exist(TeamEntity.class, mapOwner, "and"))
					|| (daoTeam.exist(TeamEntity.class, mapAdmin, "and"))) {
				daoTeamInvite.remove(TeamInviteEntity.class, Integer.parseInt(id));
				model.setViewName("redirect:/teaminvitation/invite/" + teamEntity.getId());
				return model;
			} else {
				model.setViewName("redirect:/team/view/" + teamEntity.getId());
				return model;
			}

		} else {
			model.setViewName("redirect:/");
			return model;
		}

	}

	@RequestMapping(value = { "/invited/{teamID}" }, method = RequestMethod.GET)
	public ModelAndView invited(@PathVariable(value = "teamID") String teamID, HttpServletRequest request,
			ModelAndView model) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		Map<String, Object> mapTeam = new HashMap<String, Object>();
		mapTeam.put("id", Integer.parseInt(teamID));
		if (daoTeam.exist(TeamEntity.class, mapTeam, "and")) {

			teamEntity = daoTeam.findByProperty(TeamEntity.class, mapTeam, "and");

			Map<String, Object> mapOwner = new HashMap<String, Object>();
			mapOwner.put("id", Integer.parseInt(teamID));
			mapOwner.put("owner.id", userEntity.getId());

			Map<String, Object> mapAdmin = new HashMap<String, Object>();
			mapAdmin.put("id", Integer.parseInt(teamID));
			mapAdmin.put("admin.id", userEntity.getId());

			if ((daoTeam.exist(TeamEntity.class, mapOwner, "and"))
					|| (daoTeam.exist(TeamEntity.class, mapAdmin, "and"))) {

				Map<String, Object> mapInvited = new HashMap<String, Object>();
				mapInvited.put("teamEntity.id", Integer.parseInt(teamID));
				mapInvited.put("status", "invited");

				listTeamInvite = daoTeamInvite.listarProperty(TeamInviteEntity.class, mapInvited, "and");

				model.addObject("listTeamInvite", listTeamInvite);
				model.addObject("teamEntity", teamEntity);
				model.setViewName("team/invited");
				return model;

			} else {
				model.setViewName("redirect:/team/view/" + teamID);
				return model;
			}
		} else {
			model.setViewName("redirect:/");
			return model;
		}

	}

	@RequestMapping(value = { "/makeinvitation/{userID}/{teamID}" }, method = RequestMethod.GET)
	public ModelAndView makeinvitation(@PathVariable(value = "userID") String userID,
			@PathVariable(value = "teamID") String teamID, HttpServletRequest request, ModelAndView model) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
		Map<String, Object> mapUser = new HashMap<String, Object>();
		mapUser.put("id", Integer.parseInt(userID));

		Map<String, Object> mapTeam = new HashMap<String, Object>();
		mapTeam.put("id", Integer.parseInt(teamID));

		if ((daoUser.exist(UserEntity.class, mapUser, "and")) && (daoTeam.exist(TeamEntity.class, mapTeam, "and"))) {

			Map<String, Object> mapOwner = new HashMap<String, Object>();
			mapOwner.put("id", Integer.parseInt(teamID));
			mapOwner.put("owner.id", userEntity.getId());

			Map<String, Object> mapAdmin = new HashMap<String, Object>();
			mapAdmin.put("id", Integer.parseInt(teamID));
			mapAdmin.put("admin.id", userEntity.getId());

			if ((daoTeam.exist(TeamEntity.class, mapOwner, "and"))
					|| (daoTeam.exist(TeamEntity.class, mapAdmin, "and"))) {
				Map<String, Object> mapTeamUser = new HashMap<String, Object>();
				mapTeamUser.put("teamEntity.id", Integer.parseInt(teamID));
				mapTeamUser.put("userEntity.id", Integer.parseInt(userID));
				if (!daoTeamUser.exist(TeamUserEntity.class, mapTeamUser, "and")) {
					UserEntity invited = new UserEntity();
					teamEntity = daoTeam.buscaId(TeamEntity.class, Integer.parseInt(teamID));
					invited = daoUser.buscaId(UserEntity.class, Integer.parseInt(userID));

					Calendar date1 = Calendar.getInstance();
					TeamInviteEntity teamInvite = new TeamInviteEntity();
					teamInvite.setStatus("invited");
					teamInvite.setDateOfInvitation(date1.getTime());
					teamInvite.setTeamEntity(teamEntity);
					teamInvite.setUserEntity(invited);
					teamInvite.setWhoInvited(userEntity);

					daoTeamInvite.saveUpdate(teamInvite);
					model.setViewName("redirect:/teaminvitation/invited/" + teamID);
					return model;
				} else {
					model.setViewName("redirect:/team/view/" + teamID);
					return model;
				}

			} else {
				model.setViewName("redirect:/team/view/" + teamID);
				return model;
			}

		} else {
			model.setViewName("redirect:/");
			return model;
		}

	}

	@RequestMapping(value = { "/invite/{id}" }, method = RequestMethod.GET)
	public ModelAndView invite(@PathVariable(value = "id") String id, HttpServletRequest request, ModelAndView model) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		List<FollowEntity> listFollow = new ArrayList<FollowEntity>();
		List<UserEntity> listUser = new ArrayList<UserEntity>();
		List<TeamUserEntity> listTeamUser = new ArrayList<TeamUserEntity>();

		Map<String, Object> mapOwner = new HashMap<String, Object>();
		mapOwner.put("id", Integer.parseInt(id));
		mapOwner.put("owner.id", userEntity.getId());

		Map<String, Object> mapAdmin = new HashMap<String, Object>();
		mapAdmin.put("id", Integer.parseInt(id));
		mapAdmin.put("admin.id", userEntity.getId());

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(id));
		if ((daoTeam.exist(TeamEntity.class, map, "and")) && (daoTeam.exist(TeamEntity.class, mapOwner, "and")
				|| daoTeam.exist(TeamEntity.class, mapAdmin, "and"))) {

			teamEntity = daoTeam.findByProperty(TeamEntity.class, map, "and");

			Map<String, Object> mapFollow = new HashMap<String, Object>();
			mapFollow.put("follower.id", userEntity.getId());

			listFollow = daoFollow.listarProperty(FollowEntity.class, mapFollow, "and");

			Map<String, Object> mapTeam = new HashMap<String, Object>();
			mapTeam.put("teamEntity.id", Integer.parseInt(id));

			listTeamUser = daoTeamUser.listarProperty(TeamUserEntity.class, mapTeam, "and");

			for (FollowEntity f : listFollow) {

				boolean resp = false;
				for (TeamUserEntity t : listTeamUser) {
					if (t.getUserEntity().getId().equals(f.getFollowed().getId())) {
						resp = true;
					}
				}
				if (!resp) {
					listUser.add(f.getFollowed());
				}
			}

			model.addObject("listUser", listUser);
			model.addObject("teamEntity", teamEntity);
			model.setViewName("team/invite");
			return model;

		} else {
			model.setViewName("redirect:/team/view/" + id);
			return model;
		}

	}
}
