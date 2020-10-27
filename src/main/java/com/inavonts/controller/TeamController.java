package com.inavonts.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.inavonts.dao.GenericDao;
import com.inavonts.team.model.TeamEntity;
import com.inavonts.user.model.UserEntity;

@Controller
@RequestMapping(value = "/team")
public class TeamController {

	@Autowired
	private TeamEntity teamEntity;

	@Autowired
	private List<TeamEntity> listTeam;

	@Autowired
	private GenericDao<TeamEntity> daoTeam;

	@RequestMapping(value = { "/data" }, method = RequestMethod.GET)
	public ModelAndView look(HttpServletRequest request, ModelAndView model) {

		listTeam = daoTeam.list(TeamEntity.class);

		model.addObject("listTeam", listTeam);
		model.setViewName("team/data");
		return model;
	}
}