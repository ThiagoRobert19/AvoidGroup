package com.avoidgroup.user.controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Calendar;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.support.PagedListHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.avoidgroup.dao.GenericDao;
import com.avoidgroup.friendship.model.FollowEntity;
import com.avoidgroup.friendship.model.FollowRequestEntity;
import com.avoidgroup.publication.model.GeneralPublicationEntity;
import com.avoidgroup.team.model.TeamAlbumEntity;
import com.avoidgroup.team.model.TeamEntity;
import com.avoidgroup.team.model.TeamUserEntity;
import com.avoidgroup.user.model.UserAlbumEntity;
import com.avoidgroup.user.model.UserEntity;
import com.avoidgroup.user.model.UserNotificationEntity;
import com.avoidgroup.util.AWSAPI;
import com.avoidgroup.util.Common;
import com.avoidgroup.util.Criptografia;

@Controller
@RequestMapping(value = "/user")
public class UserController {
	@Autowired
	private UserEntity userEntity;

	@Autowired
	private List<UserEntity> listUser;

	@Autowired
	private GenericDao<UserEntity> daoUser;

	private AWSAPI amazon = new AWSAPI();

	@Autowired
	private GenericDao<FollowEntity> daoFollow;

	@Autowired
	private List<UserNotificationEntity> listNotification;
	@Autowired
	private GenericDao<UserNotificationEntity> daoNotification;
	@Autowired
	private FollowRequestEntity followRequestEntity;
	@Autowired
	private GenericDao<FollowRequestEntity> daoRequest;
	@Autowired
	private GenericDao<GeneralPublicationEntity> daoPublication;

	@Autowired
	private List<TeamEntity> listTeam;

	@Autowired
	private GenericDao<TeamEntity> daoTeam;

	@Autowired
	private List<TeamUserEntity> listTeamUser;

	@Autowired
	private GenericDao<TeamUserEntity> daoTeamUser;

	@Autowired
	private List<UserAlbumEntity> listUserAlbumPrivate;

	@Autowired
	private List<UserAlbumEntity> listUserAlbumPublic;

	@Autowired
	private GenericDao<UserAlbumEntity> daoUserAlbum;

	@RequestMapping(value = "/about/edit", method = RequestMethod.POST)
	public ModelAndView changeAbout(String changeAbout, HttpServletRequest request, HttpSession session,
			ModelAndView model) throws IllegalStateException, IOException {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
		Integer id = userEntity.getId();
		userEntity.setAbout(changeAbout);
		daoUser.saveUpdate(userEntity);
		userEntity = daoUser.buscaId(UserEntity.class, id);

		session.setAttribute("clienteLogado", userEntity);

		model.setViewName("redirect:/user/myprofile");
		return model;

	}

	@RequestMapping(value = { "/changeback" }, method = RequestMethod.POST)
	public ModelAndView changeback(ModelAndView model, HttpServletRequest request, HttpSession session,
			MultipartFile userback) throws IllegalStateException, IOException {

		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		Integer id = userEntity.getId();
		userEntity = daoUser.buscaId(UserEntity.class, id);

		if (userEntity.getBackPhotoName() != null && !userEntity.getBackPhotoName().equals("")) {
			amazon.delete(userEntity.getBackPhotoName());
		}

		if (userback.toString() != null && !userback.getOriginalFilename().equals("")) {
			File path = new File(request.getRealPath("/img/"));
			if (!path.exists()) {
				path.mkdir();
			}
			SimpleDateFormat df = new SimpleDateFormat("ddMMyyyyHHmmss");
			final Calendar cal = Calendar.getInstance();
			String nome = userEntity.getName().toLowerCase() + userEntity.getUserName().toLowerCase()
					+ userEntity.getId() + df.format(cal.getTime()) + "back";

			nome = nome.trim().replaceAll(" ", "") + ".jpg";

			String caminho = request.getRealPath("/img/" + nome);

			File convFile = new File(caminho);

			userback.transferTo(convFile);

			AWSAPI amazon = new AWSAPI();
			amazon.uploadfile(convFile, nome);
			String path1 = amazon.getPath();

			userEntity.setBackPhoto(path1 + nome);
			userEntity.setBackPhotoName(nome);
			daoUser.saveUpdate(userEntity);

			userEntity = daoUser.buscaId(UserEntity.class, id);

			session.setAttribute("clienteLogado", userEntity);
			convFile.delete();
			// ===========

		}
		model.setViewName("redirect:/user/myprofile");
		return model;
	}

	@RequestMapping(value = { "/changeimage" }, method = RequestMethod.POST)
	public ModelAndView changeimage(String imgBase64, HttpServletRequest request, ModelAndView model,
			HttpSession session) {

		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
		Integer id = userEntity.getId();
		userEntity = daoUser.buscaId(UserEntity.class, id);

		if (userEntity.getPhotoName() != null && !userEntity.getPhotoName().equals("")) {
			amazon.delete(userEntity.getPhotoName());
		}

		File path = new File(request.getRealPath("/img/"));
		if (!path.exists()) {
			path.mkdir();
		}

		if (imgBase64 != null && !imgBase64.equals("")) {

			SimpleDateFormat df = new SimpleDateFormat("ddMMyyyyHHmmss");
			final Calendar cal = Calendar.getInstance();
			String nome = userEntity.getName().toLowerCase() + userEntity.getUserName().toLowerCase()
					+ userEntity.getId() + df.format(cal.getTime()) + "front";

			nome = nome.trim().replaceAll(" ", "") + ".jpg";

			String caminho = request.getRealPath("/img/" + nome);

			try (FileOutputStream imageOutFile = new FileOutputStream(caminho)) {

				byte[] imageByteArray = Base64.getDecoder().decode(imgBase64);
				imageOutFile.write(imageByteArray);
				System.out.println("fez");
			} catch (FileNotFoundException e) {
				System.out.println("Image not found" + e);
			} catch (IOException ioe) {
				System.out.println("Exception while reading the Image " + ioe);
			}

			File convFile = new File(caminho);
			AWSAPI amazon = new AWSAPI();
			amazon.uploadfile(convFile, nome);
			String path1 = amazon.getPath();

			userEntity.setPhoto(path1 + nome);
			userEntity.setPhotoName(nome);
			daoUser.saveUpdate(userEntity);

			userEntity = daoUser.buscaId(UserEntity.class, id);

			session.setAttribute("clienteLogado", userEntity);
			convFile.delete();

		}

		model.setViewName("redirect:/user/myprofile");
		return model;
	}

	@RequestMapping(value = { "/pesquisa" }, method = RequestMethod.POST)
	public ModelAndView pesquisa(String texto, HttpServletRequest request, ModelAndView model) {

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("name", texto);
		listUser = daoUser.listByPropertyLike(UserEntity.class, "UserEntity", "name", texto);

		PagedListHolder<UserEntity> pagedListHolder = new PagedListHolder<UserEntity>(listUser);
		int page = ServletRequestUtils.getIntParameter(request, "p", 0);

		pagedListHolder.setPage(page);
		pagedListHolder.setPageSize(10);

		model.addObject("texto", texto);

		model.addObject("folder", "user");
		model.addObject("url", "pesquisa");
		model.addObject("pagedListHolder", pagedListHolder);

		model.setViewName("user/pesquisa");
		return model;

	}

	@RequestMapping(value = { "/pesquisa/{next}/{texto}" }, method = RequestMethod.GET)
	public ModelAndView pesquisanext(@PathVariable(value = "next") String next,
			@PathVariable(value = "texto") String texto, HttpServletRequest request, ModelAndView model) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("name", texto);
		listUser = daoUser.listByPropertyLike(UserEntity.class, "UserEntity", "name", texto);
		PagedListHolder<UserEntity> pagedListHolder = new PagedListHolder<UserEntity>(listUser);

		pagedListHolder.setPage(Integer.parseInt(next));
		pagedListHolder.setPageSize(10);

		model.addObject("texto", texto);

		model.addObject("folder", "user");
		model.addObject("url", "pesquisa");

		model.addObject("pagedListHolder", pagedListHolder);

		model.setViewName("user/pesquisa");
		return model;

	}

	@RequestMapping(value = { "/view/{id}" }, method = RequestMethod.GET)
	public ModelAndView view(@PathVariable(value = "id") String id, HttpServletRequest request, ModelAndView model) {
		List<GeneralPublicationEntity> listPub = new ArrayList<GeneralPublicationEntity>();

		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		UserEntity user = new UserEntity();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(id));
		if (daoUser.exist(UserEntity.class, map, "and")) {

			Map<String, Object> mapP = new HashMap<String, Object>();
			mapP.put("publisher.id", Integer.parseInt(id));

			listPub = daoPublication.listarProperty(GeneralPublicationEntity.class, mapP, "and");

			Collections.sort(listPub);
			Collections.reverse(listPub);

			PagedListHolder<GeneralPublicationEntity> pagedListHolder = new PagedListHolder<GeneralPublicationEntity>(
					listPub);
			int page = ServletRequestUtils.getIntParameter(request, "p", 0);

			pagedListHolder.setPage(page);
			pagedListHolder.setPageSize(10);

			if (!userEntity.getId().equals(Integer.parseInt(id))) {

				user = daoUser.buscaId(UserEntity.class, Integer.parseInt(id));

				Map<String, Object> mapfollower = new HashMap<String, Object>();
				mapfollower.put("follower.id", userEntity.getId());
				mapfollower.put("followed.id", Integer.parseInt(id));

				Map<String, Object> mapfollowed = new HashMap<String, Object>();
				mapfollowed.put("follower.id", Integer.parseInt(id));
				mapfollowed.put("followed.id", userEntity.getId());

				if (daoFollow.exist(FollowEntity.class, mapfollower, "and")) {
					user.setFollow("unfollow");

				}
				if (daoFollow.exist(FollowEntity.class, mapfollowed, "and")
						&& !daoFollow.exist(FollowEntity.class, mapfollower, "and")) {
					user.setFollow("followback");

				}
				if (!daoFollow.exist(FollowEntity.class, mapfollowed, "and")
						&& !daoFollow.exist(FollowEntity.class, mapfollower, "and")) {
					user.setFollow("follow");

				}
				Map<String, Object> maprequest = new HashMap<String, Object>();
				maprequest.put("follower.id", userEntity.getId());
				maprequest.put("followed.id", Integer.parseInt(id));
				maprequest.put("status", "pending");
				if (daoRequest.exist(FollowRequestEntity.class, maprequest, "and")) {
					user.setFollow("requested");
				}

				int countfollowers = daoFollow.count("FollowEntity", "followed.id", id);
				int countfollowing = daoFollow.count("FollowEntity", "follower.id", id);

				Map<String, Object> mapTeamUser = new HashMap<String, Object>();
				mapTeamUser.put("userEntity.id", user.getId());
				mapTeamUser.put("teamEntity.status", "active");

				listTeamUser = daoTeamUser.listarProperty(TeamUserEntity.class, mapTeamUser, "and");

				Map<String, Object> mapAlbumPrivate = new HashMap<String, Object>();
				mapAlbumPrivate.put("userEntity.id", user.getId());
				mapAlbumPrivate.put("privacy", "private");

				Map<String, Object> mapAlbumPublic = new HashMap<String, Object>();
				mapAlbumPublic.put("userEntity.id", user.getId());
				mapAlbumPublic.put("privacy", "public");

				listUserAlbumPrivate = null;
				listUserAlbumPublic = null;
				listUserAlbumPrivate = daoUserAlbum.listarProperty(UserAlbumEntity.class, mapAlbumPrivate, "and");
				listUserAlbumPublic = daoUserAlbum.listarProperty(UserAlbumEntity.class, mapAlbumPublic, "and");

				model.addObject("listUserAlbumPrivate", listUserAlbumPrivate);
				model.addObject("listUserAlbumPublic", listUserAlbumPublic);

				model.addObject("listTeamUser", listTeamUser);

				model.addObject("pagedListHolder", pagedListHolder);
				model.addObject("userEntity", user);

				model.addObject("countfollowers", countfollowers);
				model.addObject("countfollowing", countfollowing);
				model.setViewName("user/view/profile");
				return model;
			} else {

				model.setViewName("redirect:/user/myprofile");
				return model;
			}

		} else {

			model.setViewName("redirect:/");
			return model;
		}

	}

	@RequestMapping(value = { "/data" }, method = RequestMethod.GET)
	public ModelAndView data(HttpServletRequest request, ModelAndView model) {
		listUser = daoUser.list(UserEntity.class);

		model.addObject("listUser", listUser);
		model.setViewName("user/data");
		return model;
	}

	@RequestMapping(value = { "/myprofile" }, method = RequestMethod.GET)
	public ModelAndView myprofile(HttpServletRequest request, ModelAndView model) {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
		String id = userEntity.getId().toString();
		int countfollowers = daoFollow.count("FollowEntity", "followed.id", id);
		int countfollowing = daoFollow.count("FollowEntity", "follower.id", id);

		Map<String, Object> mapP = new HashMap<String, Object>();
		mapP.put("publisher.id", userEntity.getId());
		List<GeneralPublicationEntity> listPub = new ArrayList<GeneralPublicationEntity>();
		listPub = daoPublication.listarProperty(GeneralPublicationEntity.class, mapP, "and");

		Collections.sort(listPub);
		Collections.reverse(listPub);

		PagedListHolder<GeneralPublicationEntity> pagedListHolder = new PagedListHolder<GeneralPublicationEntity>(
				listPub);
		int page = ServletRequestUtils.getIntParameter(request, "p", 0);

		pagedListHolder.setPage(page);
		pagedListHolder.setPageSize(10);

		Map<String, Object> mapTeamUser = new HashMap<String, Object>();
		mapTeamUser.put("userEntity.id", userEntity.getId());
		mapTeamUser.put("teamEntity.status", "active");

		listTeamUser = daoTeamUser.listarProperty(TeamUserEntity.class, mapTeamUser, "and");

		Map<String, Object> mapAlbumPrivate = new HashMap<String, Object>();
		mapAlbumPrivate.put("userEntity.id", Integer.parseInt(id));
		mapAlbumPrivate.put("privacy", "private");

		Map<String, Object> mapAlbumPublic = new HashMap<String, Object>();
		mapAlbumPublic.put("userEntity.id", Integer.parseInt(id));
		mapAlbumPublic.put("privacy", "public");

		listUserAlbumPrivate = null;
		listUserAlbumPublic = null;
		listUserAlbumPrivate = daoUserAlbum.listarProperty(UserAlbumEntity.class, mapAlbumPrivate, "and");
		listUserAlbumPublic = daoUserAlbum.listarProperty(UserAlbumEntity.class, mapAlbumPublic, "and");

		model.addObject("listUserAlbumPrivate", listUserAlbumPrivate);
		model.addObject("listUserAlbumPublic", listUserAlbumPublic);
		model.addObject("listTeamUser", listTeamUser);
		model.addObject("pagedListHolder", pagedListHolder);
		model.addObject("countfollowers", countfollowers);
		model.addObject("countfollowing", countfollowing);

		model.addObject("userEntity", userEntity);
		model.setViewName("user/myprofile/myprofile");
		return model;
	}

	@RequestMapping(value = { "/doLogin" }, method = RequestMethod.POST)
	public ModelAndView doLogin(UserEntity userEntity, ModelAndView model, HttpSession session) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("email", userEntity.getEmail());

		if (daoUser.exist(UserEntity.class, map, "and")) {
			Map<String, Object> mappassword = new HashMap<String, Object>();
			mappassword.put("email", userEntity.getEmail());
			mappassword.put("password", userEntity.getPassword());

			if (daoUser.exist(UserEntity.class, mappassword, "and")) {
				userEntity = daoUser.findByProperty(UserEntity.class, mappassword, "and");

				Map<String, Object> mapnotification = new HashMap<String, Object>();
				mapnotification.put("status", "unread");
				mapnotification.put("userEntity.id", userEntity.getId());

				listNotification = daoNotification.listarProperty(UserNotificationEntity.class, mapnotification, "and");
				int countNotification = listNotification.size();

				session.setAttribute("countNotification", countNotification);
				session.setAttribute("listNotification", listNotification);
				session.setAttribute("clienteLogado", userEntity);

				model.setViewName("redirect:/");
				return model;

			} else {
				model.addObject("in", "yes");
				model.addObject("up", "no");
				model.addObject("erro", "Senha nao confere!");
				model.setViewName("user/login");
				return model;

			}

		} else {
			model.addObject("in", "yes");
			model.addObject("up", "no");
			model.addObject("erro", "Nao existe Usuario cadastrado com esse email!");
			model.setViewName("user/login");
			return model;
		}

	}

	@RequestMapping(value = { "/register" }, method = RequestMethod.POST)
	public ModelAndView register(UserEntity userEntity, String rePassword, ModelAndView model) {
		rePassword = Criptografia.criptografar(rePassword);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("email", userEntity.getEmail());

		if (!daoUser.exist(UserEntity.class, map, "and")) {
			map.clear();
			map.put("userName", userEntity.getUserName());
			if (!daoUser.exist(UserEntity.class, map, "and")) {
				if (userEntity.getPassword().equals(rePassword)) {
					userEntity.setPerfil("public");
					Common comum = new Common();
					userEntity.setUuid(comum.geraUUID());

					daoUser.saveUpdate(userEntity);
					model.setViewName("redirect:/user/login");
					return model;

				} else {
					model.addObject("in", "no");
					model.addObject("up", "yes");
					model.addObject("erro", "Senha tem que coincidir com o Segunda Senha!");
					model.setViewName("user/login");
					return model;
				}

			} else {
				model.addObject("in", "no");
				model.addObject("up", "yes");
				model.addObject("erro", "Ja existe cadastro com esse Username!");
				model.setViewName("user/login");
				return model;
			}

		} else {
			model.addObject("in", "no");
			model.addObject("up", "yes");
			model.addObject("erro", "Ja existe cadastro com esse email!");
			model.setViewName("user/login");
			return model;
		}

	}

	@RequestMapping(value = { "/login" }, method = RequestMethod.GET)
	public String login() {

		return "user/login";
	}

	@RequestMapping(value = { "/logout" }, method = RequestMethod.GET)
	public String logout(HttpSession session) {

		session.setAttribute("clienteLogado", null);

		return "redirect:/user/login";
	}
}
