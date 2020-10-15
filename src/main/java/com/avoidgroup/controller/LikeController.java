package com.avoidgroup.controller;

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

import com.avoidgroup.dao.GenericDao;
import com.avoidgroup.model.GeneralCommentEntity;
import com.avoidgroup.model.GeneralLikeEntity;
import com.avoidgroup.model.GeneralPublicationEntity;
import com.avoidgroup.model.ProfileEntity;
import com.avoidgroup.util.Common;

@Controller
@RequestMapping(value = "/like")
public class LikeController {
	@Autowired
	private GeneralPublicationEntity publication;

	@Autowired
	private GeneralCommentEntity comment;

	@Autowired
	private GenericDao<GeneralPublicationEntity> daoPublication;

	@Autowired
	private ProfileEntity profile;

	@Autowired
	private GenericDao<ProfileEntity> daoProfile;

	@Autowired
	private GenericDao<GeneralCommentEntity> daoComment;

	@Autowired
	private GenericDao<GeneralLikeEntity> daoLike;

	@RequestMapping(value = "/addLikePublication/{publicationID}", method = RequestMethod.GET)
	public ModelAndView addLikePublication(@PathVariable(value = "publicationID") String publicationID,
			GeneralLikeEntity like, HttpServletRequest request, ModelAndView model) {

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(publicationID));

		if (daoPublication.exist(GeneralPublicationEntity.class, map, "and")) {
			profile = (ProfileEntity) request.getSession().getAttribute("profileLogado");

			publication = daoPublication.buscaId(GeneralPublicationEntity.class, Integer.parseInt(publicationID));

			like.setPublication(publication);
			like.setLiker(profile);
			Calendar date1 = Calendar.getInstance();
			like.setDateOfLike(date1.getTime());
			like.setTimeOfLike(date1.getTime());
			daoLike.saveUpdate(like);

			model.setViewName("redirect:/");

			return model;
		} else {
			model.setViewName("redirect:/");
			return model;
		}

	}

	@RequestMapping(value = "/addLikeComment/{commentID}", method = RequestMethod.GET)
	public ModelAndView addLikeComment(@PathVariable(value = "commentID") String commentID, GeneralLikeEntity like,
			HttpServletRequest request, ModelAndView model) {

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(commentID));

		if (daoComment.exist(GeneralCommentEntity.class, map, "and")) {
			profile = (ProfileEntity) request.getSession().getAttribute("profileLogado");

			comment = daoComment.buscaId(GeneralCommentEntity.class, Integer.parseInt(commentID));

			like.setComment(comment);
			like.setLiker(profile);
			Calendar date1 = Calendar.getInstance();
			like.setDateOfLike(date1.getTime());
			like.setTimeOfLike(date1.getTime());
			daoLike.saveUpdate(like);

			model.setViewName("redirect:/");

			return model;

		} else {
			model.setViewName("redirect:/");
			return model;
		}

	}

	@RequestMapping(value = "/addDeslikePublication/{publicationID}", method = RequestMethod.GET)
	public ModelAndView addDeslikePublication(@PathVariable(value = "publicationID") String publicationID,
			GeneralLikeEntity like, HttpServletRequest request, ModelAndView model) {

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(publicationID));

		if (daoPublication.exist(GeneralPublicationEntity.class, map, "and")) {
			profile = (ProfileEntity) request.getSession().getAttribute("profileLogado");

			Map<String, Object> mapLike = new HashMap<String, Object>();
			mapLike.put("publication.id", Integer.parseInt(publicationID));
			mapLike.put("liker.id", profile.getId());

			daoLike.delete(GeneralLikeEntity.class, mapLike, "and");

			model.setViewName("redirect:/");

			return model;
		} else {
			model.setViewName("redirect:/");
			return model;
		}
		
		
		

	}

	@RequestMapping(value = "/addDeslikeComment/{commentID}", method = RequestMethod.GET)
	public ModelAndView addDeslikeComment(@PathVariable(value = "commentID") String commentID, GeneralLikeEntity like,
			HttpServletRequest request, ModelAndView model) {

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(commentID));

		if (daoComment.exist(GeneralCommentEntity.class, map, "and")) {
			profile = (ProfileEntity) request.getSession().getAttribute("profileLogado");

			comment = daoComment.buscaId(GeneralCommentEntity.class, Integer.parseInt(commentID));

			Map<String, Object> mapLike = new HashMap<String, Object>();
			mapLike.put("comment.id", Integer.parseInt(commentID));
			mapLike.put("liker.id", profile.getId());

			daoLike.delete(GeneralLikeEntity.class, mapLike, "and");

			model.setViewName("redirect:/");

			return model;

		} else {
			model.setViewName("redirect:/");
			return model;
		}
		
		
		

	}
}
