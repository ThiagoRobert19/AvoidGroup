package com.avoidgroup.controller;

import java.io.File;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.avoidgroup.dao.GenericDao;
import com.avoidgroup.model.FriendEntity;
import com.avoidgroup.model.GeneralCommentEntity;
import com.avoidgroup.model.GeneralLikeEntity;
import com.avoidgroup.model.GeneralPublicationEntity;
import com.avoidgroup.model.UserEntity;
import com.avoidgroup.util.DropBoxUtil;
import com.avoidgroup.util.PublicationUtil;
import com.google.gson.Gson;

@Controller
@RequestMapping(value = "/publication")
public class PublicationController {
	@Autowired
	private GenericDao<GeneralPublicationEntity> daoPublication;
	@Autowired
	private GenericDao<GeneralLikeEntity> daoLike;
	@Autowired
	private GenericDao<GeneralCommentEntity> daoComment;
	@Autowired
	private UserEntity userEntity;

	@Autowired
	private GenericDao<UserEntity> daoUser;
	@Autowired
	private GenericDao<FriendEntity> daoFriend;

	@Autowired
	private GeneralPublicationEntity publication;
	@Autowired
	private GeneralPublicationEntity publication2;

	@RequestMapping(value = { "/share/{id}" }, method = RequestMethod.GET)
	public ModelAndView share(@PathVariable(value = "id") String id, ModelAndView model, HttpServletRequest request) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(id));

		if (daoPublication.exist(GeneralPublicationEntity.class, map, "and")) {
			publication = daoPublication.buscaId(GeneralPublicationEntity.class, Integer.parseInt(id));

			userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

			publication2 = publication;

			publication2.setId(null);
			publication2.setShared("yes");
			publication2.setOriginalID(Integer.parseInt(id));
			publication2.setSharer(userEntity);
			Calendar date1 = Calendar.getInstance();
			publication2.setDateOfShare(date1.getTime());
			publication2.setTimeOfShare(date1.getTime());

			daoPublication.saveUpdate(publication2);

			model.setViewName("redirect:/");

			return model;
		} else {
			model.setViewName("redirect:/");

			return model;
		}

	}

	@RequestMapping(value = { "/delete/{id}/shared" }, method = RequestMethod.GET)
	public ModelAndView deleteShared(@PathVariable(value = "id") String id, ModelAndView model,
			HttpServletRequest request) {

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(id));

		if (daoPublication.exist(GeneralPublicationEntity.class, map, "and")) {
			publication = daoPublication.buscaId(GeneralPublicationEntity.class, Integer.parseInt(id));

			userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

			if (!publication.getSharer().getId().equals(userEntity.getId())) {
				model.setViewName("redirect:/");
				return model;
			} else {

				Map<String, Object> mapLikeComment = new HashMap<String, Object>();
				mapLikeComment.put("publication.id", Integer.parseInt(id));

				daoLike.delete(GeneralLikeEntity.class, mapLikeComment, "and");

				daoComment.delete(GeneralCommentEntity.class, mapLikeComment, "and");

				daoPublication.remove(GeneralPublicationEntity.class, Integer.parseInt(id));

				model.setViewName("redirect:/");
				return model;
			}
		} else {
			model.setViewName("redirect:/");

			return model;
		}

	}

	@RequestMapping(value = { "/delete/{id}" }, method = RequestMethod.GET)
	public ModelAndView delete(@PathVariable(value = "id") String id, ModelAndView model, HttpServletRequest request) {

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(id));

		if (daoPublication.exist(GeneralPublicationEntity.class, map, "and")) {
			publication = daoPublication.buscaId(GeneralPublicationEntity.class, Integer.parseInt(id));

			userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

			if (!publication.getPublisher().getId().equals(userEntity.getId())) {
				model.setViewName("redirect:/");
				return model;
			} else {
				if (publication.getPhotoName() != null && !publication.getPhotoName().equals("")) {
					DropBoxUtil.deleteFile(publication.getPhotoName());
				}

				Map<String, Object> mapOriginal = new HashMap<String, Object>();
				mapOriginal.put("originalID", Integer.parseInt(id));

				daoPublication.delete(GeneralPublicationEntity.class, mapOriginal, "and");

				Map<String, Object> mapLikeComment = new HashMap<String, Object>();
				mapLikeComment.put("publication.id", Integer.parseInt(id));

				daoLike.delete(GeneralLikeEntity.class, mapLikeComment, "and");

				daoComment.delete(GeneralCommentEntity.class, mapLikeComment, "and");

				daoPublication.remove(GeneralPublicationEntity.class, Integer.parseInt(id));

				model.setViewName("redirect:/");
				return model;
			}
		} else {
			model.setViewName("redirect:/");

			return model;
		}

	}

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public ModelAndView add(GeneralPublicationEntity entity, HttpServletRequest request, MultipartFile file,
			ModelAndView model) throws IllegalStateException, IOException {

		if(entity.getContent() != null && entity.getContent().trim().equals("")){
			userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

			Calendar date1 = Calendar.getInstance();
			entity.setPublisher(userEntity);
			entity.setDateOfPublication(date1.getTime());
			entity.setTimeOfPublication(date1.getTime());
			entity.setShared("no");
			if (file.toString() != null && !file.getOriginalFilename().equals("")) {
				System.out.println("nao eh null");
				File convFile = new File(request.getRealPath("/img/") + file.getOriginalFilename());

				file.transferTo(convFile);

				SimpleDateFormat df = new SimpleDateFormat("ddMMyyyyHHmmss");
				final Calendar cal = Calendar.getInstance();

				String nome = userEntity.getName().toLowerCase() + userEntity.getUserName().toLowerCase()
						+ userEntity.getId() + df.format(cal.getTime()) + "publication";

				String foto = DropBoxUtil.uploadFile(convFile, "/" + nome.trim() + ".jpg");
				entity.setPhotoName("/" + nome.trim() + ".jpg");
				entity.setImage(foto);
				convFile.delete();

			} else {
				entity.setImage(null);
			}

			daoPublication.saveUpdate(entity);

			
		}
		model.setViewName("redirect:/");

		return model;

	}

	@RequestMapping(value = "/viewPublications", method = RequestMethod.GET)
	public void viewComments(HttpServletRequest request, HttpServletResponse response, ModelAndView model)
			throws IOException, ParseException {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		PublicationUtil pubUtil = new PublicationUtil();
		List<GeneralPublicationEntity> listaPublication = new ArrayList<GeneralPublicationEntity>();
		Integer count = 0;
		count = daoFriend.count("FriendEntity", "userEntity1.id", userEntity.getId().toString())
				+ daoFriend.count("FriendEntity", "userEntity2.id", userEntity.getId().toString());
		if (count > 0) {
			listaPublication = pubUtil.getPublication(userEntity);
		} else {
			Integer contador = 0;
			contador = daoPublication.count("GeneralPublicationEntity", "publisher.id", userEntity.getId().toString());
			if (contador > 0) {
				listaPublication = pubUtil.getPublicationNoFriend(userEntity.getId());
			}

		}

		String json = new Gson().toJson(listaPublication);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(json);

	}
}
