package com.inavonts.team.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.support.PagedListHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
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

	@RequestMapping(value = { "/create" }, method = RequestMethod.GET)
	public ModelAndView create(HttpServletRequest request, ModelAndView model) {

		model.setViewName("team/create");
		return model;
	}

	@RequestMapping(value = { "/data" }, method = RequestMethod.GET)
	public ModelAndView look(HttpServletRequest request, ModelAndView model) {

		listTeam = daoTeam.list(TeamEntity.class);

		PagedListHolder<TeamEntity> pagedListHolder = new PagedListHolder<TeamEntity>(listTeam);
		int page = ServletRequestUtils.getIntParameter(request, "p", 0);

		pagedListHolder.setPage(page);
		pagedListHolder.setPageSize(10);

		model.addObject("pagedListHolder", pagedListHolder);
		model.setViewName("team/data");
		return model;
	}
}
