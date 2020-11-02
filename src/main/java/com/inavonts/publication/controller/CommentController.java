package com.inavonts.publication.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import com.google.gson.Gson;
import com.inavonts.dao.GenericDao;
import com.inavonts.publication.model.GeneralCommentEntity;
import com.inavonts.publication.model.GeneralPublicationEntity;
import com.inavonts.user.model.UserEntity;

@Controller
@RequestMapping(value = "/comment")
public class CommentController {

	@Autowired
	private GeneralPublicationEntity publication;

	@Autowired
	private GenericDao<GeneralPublicationEntity> daoPublication;

	@Autowired
	private UserEntity userEntity;

	@Autowired
	private GenericDao<UserEntity> daoUser;

	@Autowired
	private GenericDao<GeneralCommentEntity> daoComment;

	@Autowired
	private List<GeneralCommentEntity> listComment;

	@RequestMapping(value = "/addCommentPublication", method = RequestMethod.POST)
	public ModelAndView addCommentPublication(String publicationID, GeneralCommentEntity comment,
			HttpServletRequest request, ModelAndView model) {
		System.out.println("Comentar");
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		publication = daoPublication.buscaId(GeneralPublicationEntity.class, Integer.parseInt(publicationID));

		comment.setPublication(publication);
		comment.setCommenter(userEntity);
		Calendar date1 = Calendar.getInstance();
		comment.setDateOfComment(date1.getTime());
		comment.setTimeOfComment(date1.getTime());

		daoComment.saveUpdate(comment);
		System.out.println("Comentou");
		model.setViewName("redirect:/");

		return model;

	}

	@RequestMapping(value = "/viewComments/{idPub}", method = RequestMethod.GET)
	public void viewComments(@PathVariable(value = "idPub") String idPub, HttpServletRequest request,
			HttpServletResponse response, ModelAndView model) throws IOException {

		System.out.println("Entrou aqui no controller comment");
		System.out.println("id pub: " + idPub);

		Map<String, Object> mapComment = new HashMap<String, Object>();
		mapComment.put("publication.id", Integer.parseInt(idPub));

		listComment = daoComment.listarProperty(GeneralCommentEntity.class, mapComment, "and");
		System.out.println("Vamos ver o tamanho da lista: "+listComment.size());
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
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		Map<String, Object> mapComment = new HashMap<String, Object>();
		mapComment.put("commenter.id", userEntity.getId());
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

}
