package com.avoidgroup.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.mvc.support.RedirectAttributesModelMap;

import com.avoidgroup.dao.GenericDao;
import com.avoidgroup.model.GeneralCommentEntity;
import com.avoidgroup.model.GeneralPublicationEntity;
import com.avoidgroup.model.ProfileEntity;
import com.avoidgroup.model.UserEntity;
import com.avoidgroup.util.Common;
import com.google.gson.Gson;

@Controller
@RequestMapping(value = "/comment")
public class CommentController {
	@Autowired
	private Common common;

	@Autowired
	private GeneralPublicationEntity publication;

	@Autowired
	private GenericDao<GeneralPublicationEntity> daoPublication;

	@Autowired
	private ProfileEntity profile;

	@Autowired
	private GenericDao<ProfileEntity> daoProfile;

	@Autowired
	private GenericDao<GeneralCommentEntity> daoComment;

	@Autowired
	private List<GeneralCommentEntity> listComment;

	@RequestMapping(value = "/addCommentPublication", method = RequestMethod.POST)
	public ModelAndView addCommentPublication(String publicationID, GeneralCommentEntity comment,

			HttpServletRequest request, ModelAndView model) {

		profile = (ProfileEntity) request.getSession().getAttribute("profileLogado");

		publication = daoPublication.buscaId(GeneralPublicationEntity.class, Integer.parseInt(publicationID));

		comment.setPublication(publication);
		comment.setCommenter(profile);
		Calendar date1 = Calendar.getInstance();
		comment.setDateOfComment(date1.getTime());
		comment.setTimeOfComment(date1.getTime());

		daoComment.saveUpdate(comment);

		model.setViewName("redirect:/");

		return model;

	}

	@RequestMapping(value = "/viewComments/{idPub}", method = RequestMethod.GET)
	public void viewComments(@PathVariable(value = "idPub") String idPub, HttpServletRequest request,
			HttpServletResponse response, ModelAndView model) throws IOException {
		
		System.out.println("Entrou aqui no controller comment");
		System.out.println("id pub: "+idPub);
		Map<String, Object> mapComment = new HashMap<String, Object>();
		mapComment.put("publication.id", Integer.parseInt(idPub));

		listComment = daoComment.listarProperty(GeneralCommentEntity.class, mapComment, "and");

		Collections.sort(listComment);
		Collections.reverse(listComment);

		String json = new Gson().toJson(listComment);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(json);

	}

	@RequestMapping(value = "/delete/{idC}", method = RequestMethod.GET)
	public ModelAndView delete(@PathVariable(value = "idC") String idC, HttpServletRequest request,
			HttpServletResponse response, ModelAndView model) throws IOException {
		profile = (ProfileEntity) request.getSession().getAttribute("profileLogado");

		Map<String, Object> mapComment = new HashMap<String, Object>();
		mapComment.put("commenter.id", profile.getId());
		mapComment.put("id", Integer.parseInt(idC));

		if (daoComment.exist(GeneralCommentEntity.class, mapComment, "and")) {
			daoComment.remove(GeneralCommentEntity.class, Integer.parseInt(idC));
			model.setViewName("redirect:/");

			return model;
		} else {
			model.setViewName("redirect:/");
			return model;
		}

	}

	@RequestMapping(value = "/profile/delete/{idC}", method = RequestMethod.GET)
	public ModelAndView deleteprofile(@PathVariable(value = "idC") String idC, HttpServletRequest request,
			HttpServletResponse response, ModelAndView model) throws IOException {

		profile = (ProfileEntity) request.getSession().getAttribute("profileLogado");

		Map<String, Object> mapComment = new HashMap<String, Object>();
		mapComment.put("commenter.id", profile.getId());
		mapComment.put("id", Integer.parseInt(idC));

		if (daoComment.exist(GeneralCommentEntity.class, mapComment, "and")) {
			daoComment.remove(GeneralCommentEntity.class, Integer.parseInt(idC));

		}
		model.setViewName("redirect:/profile/view");

		return model;
	}

}
