package com.avoidgroup.team.controller;

import java.io.IOException;
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
import com.avoidgroup.team.model.TeamEntity;
import com.avoidgroup.team.model.TeamHistoryEntity;
import com.avoidgroup.team.model.TeamInviteEntity;
import com.avoidgroup.team.model.TeamUserEntity;
import com.avoidgroup.user.model.UserEntity;
import com.avoidgroup.util.Criptografia;

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
	private TeamUserEntity teamUserEntity;
	@Autowired
	private GenericDao<TeamUserEntity> daoTeamUser;

	@Autowired
	private List<TeamInviteEntity> listTeamInvitation;

	@Autowired
	private GenericDao<TeamInviteEntity> daoTeamInvite;

	@Autowired
	private GenericDao<TeamHistoryEntity> daoTeamHistory;
	@Autowired
	private TeamHistoryEntity teamHistoryEntity;

	@RequestMapping(value = "/changeadmin/make", method = RequestMethod.POST)
	public ModelAndView makechange(String userID, String teamID, HttpServletRequest request, ModelAndView model) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		Map<String, Object> mapTeam = new HashMap<String, Object>();
		mapTeam.put("id", Integer.parseInt(teamID));

		Map<String, Object> mapUser = new HashMap<String, Object>();
		mapUser.put("id", Integer.parseInt(userID));

		if (daoTeam.exist(TeamEntity.class, mapTeam, "and") && daoUser.exist(UserEntity.class, mapUser, "and")) {
			teamEntity = daoTeam.findByProperty(TeamEntity.class, mapTeam, "and");

			UserEntity user = daoUser.findByProperty(UserEntity.class, mapUser, "and");

			if (teamEntity.getOwner().getId().equals(userEntity.getId())) {
				if (teamEntity.getAdmin().getId() != user.getId()) {
					TeamHistoryEntity teamHistory = new TeamHistoryEntity();
					Calendar cal = Calendar.getInstance();

					teamHistory.setAction(
							"Changing Admin from: " + teamEntity.getAdmin().getName() + " to: " + user.getName());
					teamHistory.setTeamEntity(teamEntity);
					teamHistory.setUserEntity(userEntity);
					teamHistory.setDateOfAction(cal.getTime());
					teamHistory.setTimeOfAction(cal.getTime());
					daoTeamHistory.saveUpdate(teamHistory);

					teamEntity.setAdmin(user);

					daoTeam.saveUpdate(teamEntity);

					model.setViewName("redirect:/team/view/" + teamID);
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

	@RequestMapping(value = { "/chooseadmin/{id}/{userID}" }, method = RequestMethod.GET)
	public ModelAndView chooseadmin(@PathVariable(value = "id") String id,
			@PathVariable(value = "userID") String userID, HttpServletRequest request, ModelAndView model) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
		Map<String, Object> mapTeam = new HashMap<String, Object>();
		mapTeam.put("id", Integer.parseInt(id));
		mapTeam.put("userEntity.id", Integer.parseInt(userID));

		if (daoTeamUser.exist(TeamUserEntity.class, mapTeam, "and")) {
			teamUserEntity = daoTeamUser.findByProperty(TeamUserEntity.class, mapTeam, "and");

			if (teamUserEntity.getTeamEntity().getOwner().getId().equals(userEntity.getId())) {
				UserEntity user = teamUserEntity.getUserEntity();
				teamEntity = teamUserEntity.getTeamEntity();

				teamEntity.setAdmin(user);

				TeamHistoryEntity teamHistory = new TeamHistoryEntity();
				Calendar cal = Calendar.getInstance();

				teamHistory.setAction("Choosing an Admin: " + user.getName());
				teamHistory.setTeamEntity(teamEntity);
				teamHistory.setUserEntity(userEntity);
				teamHistory.setDateOfAction(cal.getTime());
				teamHistory.setTimeOfAction(cal.getTime());
				daoTeamHistory.saveUpdate(teamHistory);

				daoTeam.saveUpdate(teamEntity);

				model.setViewName("redirect:/team/view/" + teamUserEntity.getTeamEntity().getId());
				return model;

			} else {
				model.setViewName("redirect:/team/view/" + teamUserEntity.getTeamEntity().getId());
				return model;
			}

		} else {
			model.setViewName("redirect:/");
			return model;
		}

	}

	@RequestMapping(value = "/deleteteam", method = RequestMethod.POST)
	public ModelAndView delete(String owner_email, String owner_password, String teamID, HttpServletRequest request,
			ModelAndView model) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		Map<String, Object> mapTeam = new HashMap<String, Object>();
		mapTeam.put("id", Integer.parseInt(teamID));
		mapTeam.put("status", "active");
		if (daoTeam.exist(TeamEntity.class, mapTeam, "and")) {
			teamEntity = daoTeam.findByProperty(TeamEntity.class, mapTeam, "and");
			if (teamEntity.getOwner().getId().equals(userEntity.getId())) {
				Map<String, Object> mappassword = new HashMap<String, Object>();
				mappassword.put("email", owner_email);
				mappassword.put("password", Criptografia.criptografar(owner_password));

				if (daoUser.exist(UserEntity.class, mappassword, "and")) {
					TeamHistoryEntity teamHistory = new TeamHistoryEntity();
					Calendar cal = Calendar.getInstance();

					teamHistory.setAction("Desactivation");
					teamHistory.setTeamEntity(teamEntity);
					teamHistory.setUserEntity(userEntity);
					teamHistory.setDateOfAction(cal.getTime());
					teamHistory.setTimeOfAction(cal.getTime());
					daoTeamHistory.saveUpdate(teamHistory);

					teamEntity.setStatus("disable");
					daoTeam.saveUpdate(teamEntity);

					model.setViewName("redirect:/");
					return model;

				} else {
					model.addObject("erro", "email or password incorrect!");
					model.setViewName("team/settings/setting");
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

	@RequestMapping(value = { "/settings/{id}" }, method = RequestMethod.GET)
	public ModelAndView settings(@PathVariable(value = "id") String id, HttpServletRequest request,
			ModelAndView model) {

		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		Map<String, Object> mapTeam = new HashMap<String, Object>();
		mapTeam.put("id", Integer.parseInt(id));
		mapTeam.put("status", "active");
		if (daoTeam.exist(TeamEntity.class, mapTeam, "and")) {

			Map<String, Object> mapOwner = new HashMap<String, Object>();
			mapOwner.put("id", Integer.parseInt(id));
			mapOwner.put("owner.id", userEntity.getId());

			Map<String, Object> mapAdmin = new HashMap<String, Object>();
			mapAdmin.put("id", Integer.parseInt(id));
			mapAdmin.put("admin.id", userEntity.getId());

			if ((daoTeam.exist(TeamEntity.class, mapOwner, "and"))
					|| (daoTeam.exist(TeamEntity.class, mapAdmin, "and"))) {

				teamEntity = daoTeam.findByProperty(TeamEntity.class, mapTeam, "and");
				Map<String, Object> mapTeamUser = new HashMap<String, Object>();
				mapTeamUser.put("teamEntity.id", Integer.parseInt(id));

				listTeamUser = daoTeamUser.listarProperty(TeamUserEntity.class, mapTeamUser, "and");

				Map<String, Object> mapTeamInvite = new HashMap<String, Object>();
				mapTeamInvite.put("teamEntity.id", Integer.parseInt(id));
				mapTeamInvite.put("status", "invited");

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
