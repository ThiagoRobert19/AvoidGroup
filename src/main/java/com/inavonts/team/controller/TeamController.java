package com.inavonts.team.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.support.PagedListHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.inavonts.dao.GenericDao;
import com.inavonts.friendship.model.FollowEntity;
import com.inavonts.friendship.model.FollowRequestEntity;
import com.inavonts.game.model.GameEntity;
import com.inavonts.publication.model.GeneralCommentEntity;
import com.inavonts.publication.model.GeneralLikeEntity;
import com.inavonts.publication.model.GeneralPublicationEntity;
import com.inavonts.team.model.TeamEntity;
import com.inavonts.team.model.TeamLinkEntity;
import com.inavonts.team.model.TeamPublicationEntity;
import com.inavonts.team.model.TeamUserEntity;
import com.inavonts.user.model.UserEntity;
import com.inavonts.util.AWSAPI;
import com.inavonts.util.Common;

@Controller
@RequestMapping(value = "/team")
public class TeamController {
	@Autowired
	private UserEntity userEntity;

	@Autowired
	private TeamEntity teamEntity;

	@Autowired
	private List<TeamEntity> listTeam;

	@Autowired
	private GenericDao<TeamEntity> daoTeam;
	@Autowired
	private TeamUserEntity teamUserEntity;

	@Autowired
	private GenericDao<TeamUserEntity> daoTeamUser;

	@Autowired
	private TeamLinkEntity teamLinkEntity;

	@Autowired
	private GenericDao<TeamLinkEntity> daoTeamLink;

	@Autowired
	private List<TeamLinkEntity> listTeamLink;

	@Autowired
	private GameEntity gameEntity;

	@Autowired
	private List<GameEntity> listGame;

	@Autowired
	private GenericDao<GameEntity> daoGame;

	@Autowired
	private GenericDao<TeamPublicationEntity> daoPub;

	@Autowired
	private TeamPublicationEntity teamPubEntity;

	@Autowired
	private List<TeamUserEntity> listTeamUser;

	AWSAPI amazon = new AWSAPI();

	@RequestMapping(value = "/about/edit", method = RequestMethod.POST)
	public ModelAndView changeAbout(String teamID, String changeAbout, HttpServletRequest request, ModelAndView model)
			throws IllegalStateException, IOException {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(teamID));

		if (daoTeam.exist(TeamEntity.class, map, "and")) {
			teamEntity = daoTeam.findByProperty(TeamEntity.class, map, "and");
			if ((teamEntity.getOwner().getId().equals(userEntity.getId()))
					|| (teamEntity.getAdmin().getId().equals(userEntity.getId()))) {
				teamEntity.setAbout(changeAbout);
				daoTeam.saveUpdate(teamEntity);

				model.setViewName("redirect:/team/view/" + teamID);
				return model;
			} else {
				model.setViewName("redirect:/");
				return model;
			}

		} else {
			model.setViewName("redirect:/");
			return model;
		}

	}

	@RequestMapping(value = { "/publication/delete/{id}" }, method = RequestMethod.GET)
	public ModelAndView delete(@PathVariable(value = "id") String id, ModelAndView model, HttpServletRequest request) {
		String teamID = "";
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(id));

		if (daoPub.exist(TeamPublicationEntity.class, map, "and")) {
			teamPubEntity = daoPub.buscaId(TeamPublicationEntity.class, Integer.parseInt(id));
			teamID = teamPubEntity.getTeamEntity().getId().toString();
			userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

			if (!teamPubEntity.getPublisher().getId().equals(userEntity.getId())) {
				model.setViewName("redirect:/team/view/" + teamID);
				return model;
			} else {
				if (teamPubEntity.getPhotoName() != null && !teamPubEntity.getPhotoName().equals("")) {

					amazon.delete(teamPubEntity.getPhotoName());
				}

				Map<String, Object> mapOriginal = new HashMap<String, Object>();
				mapOriginal.put("originalID", Integer.parseInt(id));

				daoPub.delete(TeamPublicationEntity.class, mapOriginal, "and");

				Map<String, Object> mapLikeComment = new HashMap<String, Object>();
				mapLikeComment.put("publication.id", Integer.parseInt(id));
				/*
				 * daoLike.delete(GeneralLikeEntity.class, mapLikeComment,
				 * "and");
				 * 
				 * daoComment.delete(GeneralCommentEntity.class, mapLikeComment,
				 * "and");
				 */
				daoPub.remove(TeamPublicationEntity.class, Integer.parseInt(id));

				model.setViewName("redirect:/team/view/" + teamID);
				return model;
			}
		} else {
			model.setViewName("redirect:/team/view/" + teamID);
			return model;
		}

	}

	@RequestMapping(value = "/publication/add", method = RequestMethod.POST)
	public ModelAndView add(TeamPublicationEntity entity, String teamID, HttpServletRequest request, MultipartFile file,
			ModelAndView model) throws IllegalStateException, IOException {

		if (entity.getContent() != null && !entity.getContent().trim().equals("")) {
			userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
			teamEntity = daoTeam.buscaId(TeamEntity.class, Integer.parseInt(teamID));

			Calendar date1 = Calendar.getInstance();
			entity.setPublisher(userEntity);
			entity.setDateOfPublication(date1.getTime());
			entity.setTimeOfPublication(date1.getTime());
			entity.setTeamEntity(teamEntity);
			entity.setPrivacy("private");

			if (file.toString() != null && !file.getOriginalFilename().equals("")) {

				File path = new File(request.getRealPath("/img/"));
				if (!path.exists()) {
					path.mkdir();
				}
				SimpleDateFormat df = new SimpleDateFormat("ddMMyyyyHHmmss");
				final Calendar cal = Calendar.getInstance();
				String nome = teamEntity.getName().toLowerCase() + userEntity.getUserName().toLowerCase()
						+ teamEntity.getId() + df.format(cal.getTime()) + "teampublication";

				nome = nome.trim().replaceAll(" ", "") + ".jpg";

				String caminho = request.getRealPath("/img/" + nome);

				File convFile = new File(caminho);

				file.transferTo(convFile);

				amazon.uploadfile(convFile, nome);
				String path1 = amazon.getPath();

				entity.setImage(path1 + nome);
				entity.setPhotoName(nome);

				convFile.delete();

			} else {
				entity.setImage(null);
				entity.setPhotoName("");
			}

			daoPub.saveUpdate(entity);

		}
		model.setViewName("redirect:/team/view/" + teamID);

		return model;

	}

	@RequestMapping(value = { "/view/{id}" }, method = RequestMethod.GET)
	public ModelAndView view(@PathVariable(value = "id") String id, HttpServletRequest request, ModelAndView model) {
		List<TeamPublicationEntity> listPub = new ArrayList<TeamPublicationEntity>();

		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(id));
		if (daoTeam.exist(TeamEntity.class, map, "and")) {
			teamEntity = daoTeam.buscaId(TeamEntity.class, Integer.parseInt(id));
			Map<String, Object> mapUserTeam = new HashMap<String, Object>();
			mapUserTeam.put("teamEntity.id", Integer.parseInt(id));
			mapUserTeam.put("userEntity.id", userEntity.getId());

			if (daoTeamUser.exist(TeamUserEntity.class, mapUserTeam, "and")) {
				Map<String, Object> mapTeam = new HashMap<String, Object>();
				mapTeam.put("teamEntity.id", Integer.parseInt(id));
				listPub = daoPub.listarProperty(TeamPublicationEntity.class, mapTeam, "and");
				Collections.sort(listPub);
				Collections.reverse(listPub);

				listTeamUser = daoTeamUser.listarProperty(TeamUserEntity.class, mapTeam, "and");

				listTeamLink = daoTeamLink.listarProperty(TeamLinkEntity.class, mapTeam, "and");

				PagedListHolder<TeamPublicationEntity> pagedListHolder = new PagedListHolder<TeamPublicationEntity>(
						listPub);
				int page = ServletRequestUtils.getIntParameter(request, "p", 0);

				pagedListHolder.setPage(page);
				pagedListHolder.setPageSize(10);

				model.addObject("pagedListHolder", pagedListHolder);

				int countPlayer = daoTeam.count("TeamUserEntity", "teamEntity.id", id);
				model.addObject("countPlayer", countPlayer);
				model.addObject("listTeamLink", listTeamLink);
				model.addObject("listTeamUser", listTeamUser);
				model.addObject("pagedListHolder", pagedListHolder);
				model.addObject("teamEntity", teamEntity);
				model.setViewName("team/myteam/myteam");
				return model;
			} else {
				model.setViewName("redirect:/");
				return model;
			}

		} else {

			model.setViewName("redirect:/");
			return model;
		}

	}

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public ModelAndView add(TeamEntity team, String gameID, String youtube, String instagram, String facebook,
			String twitter, HttpServletRequest request, MultipartFile imageProfile, MultipartFile imageBack,
			ModelAndView model) throws IllegalStateException, IOException {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
		String uuid = Common.geraUUID();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(gameID));

		Map<String, Object> mapName = new HashMap<String, Object>();
		mapName.put("name", team.getName().toLowerCase());

		if (!daoTeam.exist(TeamEntity.class, mapName, "and")) {
			if (daoGame.exist(GameEntity.class, map, "and")) {
				gameEntity = daoGame.buscaId(GameEntity.class, Integer.parseInt(gameID));
				team.setOwner(userEntity);
				team.setGame(gameEntity);
				team.setUuid(uuid);
				if (imageProfile.toString() != null && !imageProfile.getOriginalFilename().equals("")) {
					File path = new File(request.getRealPath("/img/"));
					if (!path.exists()) {
						path.mkdir();
					}
					SimpleDateFormat df = new SimpleDateFormat("ddMMyyyyHHmmss");
					final Calendar cal = Calendar.getInstance();
					String nome = team.getName().toLowerCase() + userEntity.getId() + df.format(cal.getTime())
							+ "teamPhoto";

					nome = nome.trim().replaceAll(" ", "") + ".jpg";

					String caminho = request.getRealPath("/img/" + nome);

					File convFile = new File(caminho);

					imageProfile.transferTo(convFile);

					amazon.uploadfile(convFile, nome);
					String path1 = amazon.getPath();

					team.setPhoto(path1 + nome);
					team.setPhotoName(nome);

					convFile.delete();
					// ===========

				} else {
					team.setPhoto(null);
					team.setPhotoName("");

				}
				if (imageBack.toString() != null && !imageBack.getOriginalFilename().equals("")) {
					File path = new File(request.getRealPath("/img/"));
					if (!path.exists()) {
						path.mkdir();
					}
					SimpleDateFormat df = new SimpleDateFormat("ddMMyyyyHHmmss");
					final Calendar cal = Calendar.getInstance();
					String nome = team.getName().toLowerCase() + userEntity.getId() + df.format(cal.getTime())
							+ "teamBack";

					nome = nome.trim().replaceAll(" ", "") + ".jpg";

					String caminho = request.getRealPath("/img/" + nome);

					File convFile = new File(caminho);

					imageBack.transferTo(convFile);

					amazon.uploadfile(convFile, nome);
					String path1 = amazon.getPath();

					team.setBackPhoto(path1 + nome);
					team.setBackPhotoName(nome);

					convFile.delete();

				} else {
					team.setBackPhoto(null);
					team.setBackPhotoName("");

				}
				daoTeam.saveUpdate(team);

				Map<String, Object> mapUuid = new HashMap<String, Object>();
				mapUuid.put("uuid", uuid);

				teamEntity = daoTeam.findByProperty(TeamEntity.class, mapUuid, "and");

				teamUserEntity.setTeamEntity(teamEntity);
				teamUserEntity.setUserEntity(userEntity);
				daoTeamUser.saveUpdate(teamUserEntity);

				if (youtube != null && !youtube.equals("")) {
					teamLinkEntity = null;
					teamLinkEntity.setLinkFor("youtube");
					teamLinkEntity.setUrl(youtube);
					teamLinkEntity.setTeamEntity(teamEntity);
					daoTeamLink.saveUpdate(teamLinkEntity);
				}
				if (facebook != null && !facebook.equals("")) {
					teamLinkEntity = null;
					teamLinkEntity.setLinkFor("facebook");
					teamLinkEntity.setUrl(facebook);
					teamLinkEntity.setTeamEntity(teamEntity);
					daoTeamLink.saveUpdate(teamLinkEntity);
				}
				if (instagram != null && !instagram.equals("")) {
					teamLinkEntity = null;
					teamLinkEntity.setLinkFor("instagram");
					teamLinkEntity.setUrl(instagram);
					teamLinkEntity.setTeamEntity(teamEntity);
					daoTeamLink.saveUpdate(teamLinkEntity);
				}
				if (twitter != null && !twitter.equals("")) {
					teamLinkEntity = null;
					teamLinkEntity.setLinkFor("twitter");
					teamLinkEntity.setUrl(twitter);
					teamLinkEntity.setTeamEntity(teamEntity);
					daoTeamLink.saveUpdate(teamLinkEntity);
				}

				model.addObject("teamEntity", teamEntity);
				model.setViewName("team/myteam");
				return model;

			} else {
				model.addObject("erro", "Game does not exist");
				model.setViewName("team/create/create");
				return model;
			}

		} else {
			model.addObject("erro", "There is already a team with that name");
			model.setViewName("team/create/create");
			return model;
		}

	}

	@RequestMapping(value = { "/create" }, method = RequestMethod.GET)
	public ModelAndView create(HttpServletRequest request, ModelAndView model) {
		listGame = daoGame.list(GameEntity.class);

		model.addObject("listGame", listGame);
		model.setViewName("team/create/create");
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
