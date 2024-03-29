package com.avoidgroup.team.controller;

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

import com.avoidgroup.dao.GenericDao;
import com.avoidgroup.game.model.GameEntity;
import com.avoidgroup.team.model.TeamAlbumEntity;
import com.avoidgroup.team.model.TeamEntity;
import com.avoidgroup.team.model.TeamLinkEntity;
import com.avoidgroup.team.model.TeamPublicationEntity;
import com.avoidgroup.team.model.TeamUserEntity;
import com.avoidgroup.user.model.UserEntity;
import com.avoidgroup.util.AWSAPI;
import com.avoidgroup.util.Common;

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
	private List<TeamUserEntity> listTeamUser;

	@Autowired
	private List<TeamAlbumEntity> listTeamAlbumPrivate;

	@Autowired
	private List<TeamAlbumEntity> listTeamAlbumPublic;

	@Autowired
	private GenericDao<TeamAlbumEntity> daoTeamAlbum;

	AWSAPI amazon = new AWSAPI();

	@RequestMapping(value = { "/view/{id}" }, method = RequestMethod.GET)
	public ModelAndView view(@PathVariable(value = "id") String id, HttpServletRequest request, ModelAndView model) {
		List<TeamPublicationEntity> listPub = new ArrayList<TeamPublicationEntity>();

		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(id));
		map.put("status", "active");
		if (daoTeam.exist(TeamEntity.class, map, "and")) {
			teamEntity = daoTeam.buscaId(TeamEntity.class, Integer.parseInt(id));
			Map<String, Object> mapUserTeam = new HashMap<String, Object>();
			mapUserTeam.put("teamEntity.id", Integer.parseInt(id));
			mapUserTeam.put("userEntity.id", userEntity.getId());

			if (daoTeamUser.exist(TeamUserEntity.class, mapUserTeam, "and")) {
				model.addObject("teamUser", "yes");
				model.setViewName("team/myteam/myteam");
				System.out.println("aqui faz parte");

			} else {
				model.addObject("teamUser", "no");
				model.setViewName("team/view/view");
				System.out.println("aqui nao faz parte");
			}
			Map<String, Object> mapTeam = new HashMap<String, Object>();
			mapTeam.put("teamEntity.id", Integer.parseInt(id));

			Map<String, Object> mapAlbumPrivate = new HashMap<String, Object>();
			mapAlbumPrivate.put("teamEntity.id", Integer.parseInt(id));
			mapAlbumPrivate.put("privacy", "private");

			Map<String, Object> mapAlbumPublic = new HashMap<String, Object>();
			mapAlbumPublic.put("teamEntity.id", Integer.parseInt(id));
			mapAlbumPublic.put("privacy", "public");

			listPub = daoPub.listarProperty(TeamPublicationEntity.class, mapTeam, "and");
			Collections.sort(listPub);
			Collections.reverse(listPub);
			listTeamAlbumPrivate = null;
			listTeamAlbumPublic = null;
			listTeamUser = daoTeamUser.listarProperty(TeamUserEntity.class, mapTeam, "and");

			listTeamLink = daoTeamLink.listarProperty(TeamLinkEntity.class, mapTeam, "and");

			listTeamAlbumPrivate = daoTeamAlbum.listarProperty(TeamAlbumEntity.class, mapAlbumPrivate, "and");
			listTeamAlbumPublic = daoTeamAlbum.listarProperty(TeamAlbumEntity.class, mapAlbumPublic, "and");

			PagedListHolder<TeamPublicationEntity> pagedListHolder = new PagedListHolder<TeamPublicationEntity>(
					listPub);
			int page = ServletRequestUtils.getIntParameter(request, "p", 0);

			pagedListHolder.setPage(page);
			pagedListHolder.setPageSize(10);

			model.addObject("pagedListHolder", pagedListHolder);

			int countPlayer = daoTeam.count("TeamUserEntity", "teamEntity.id", id);

			model.addObject("listTeamAlbumPrivate", listTeamAlbumPrivate);
			model.addObject("listTeamAlbumPublic", listTeamAlbumPublic);

			model.addObject("countPlayer", countPlayer);
			model.addObject("listTeamLink", listTeamLink);
			model.addObject("listTeamUser", listTeamUser);
			model.addObject("pagedListHolder", pagedListHolder);
			model.addObject("teamEntity", teamEntity);

			return model;

		} else {

			model.setViewName("redirect:/");
			return model;
		}

	}

	@RequestMapping(value = "/newimage", method = RequestMethod.POST)
	public ModelAndView newimage(String subtitle, String privacy, TeamAlbumEntity teamAlbum, String teamID,
			MultipartFile file, HttpServletRequest request, ModelAndView model)
			throws IllegalStateException, IOException {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		TeamAlbumEntity teamAlbumEntity = new TeamAlbumEntity();
		if (file.toString() != null && !file.getOriginalFilename().equals("")) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("id", Integer.parseInt(teamID));

			if (daoTeam.exist(TeamEntity.class, map, "and")) {
				teamEntity = daoTeam.findByProperty(TeamEntity.class, map, "and");

				Map<String, Object> mapTeamUser = new HashMap<String, Object>();
				mapTeamUser.put("teamEntity.id", Integer.parseInt(teamID));
				mapTeamUser.put("userEntity.id", userEntity.getId());

				if (daoTeamUser.exist(TeamUserEntity.class, mapTeamUser, "and")) {

					File path = new File(request.getRealPath("/img/"));
					if (!path.exists()) {
						path.mkdir();
					}
					SimpleDateFormat df = new SimpleDateFormat("ddMMyyyyHHmmss");
					final Calendar cal = Calendar.getInstance();
					String nome = teamEntity.getName().toLowerCase() + teamEntity.getOwner().getName().toLowerCase()
							+ teamEntity.getId() + df.format(cal.getTime()) + "imageTeam";

					nome = nome.trim().replaceAll(" ", "") + ".jpg";

					String caminho = request.getRealPath("/img/" + nome);

					File convFile = new File(caminho);

					file.transferTo(convFile);

					amazon.uploadfile(convFile, nome);
					String path1 = amazon.getPath();
					Calendar date1 = Calendar.getInstance();
					teamAlbumEntity.setImage(path1 + nome);
					teamAlbumEntity.setPhotoName(nome);
					teamAlbumEntity.setUuid(Common.geraUUID());
					teamAlbumEntity.setSubtitle(subtitle);
					teamAlbumEntity.setTeamEntity(teamEntity);
					teamAlbumEntity.setUserEntity(userEntity);
					teamAlbumEntity.setTimeOfPublication(date1.getTime());
					teamAlbumEntity.setDateOfPublication(date1.getTime());
					teamAlbumEntity.setPrivacy(privacy);
					daoTeamAlbum.saveUpdate(teamAlbumEntity);

					convFile.delete();

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

		} else {
			model.setViewName("redirect:/");
			return model;
		}

	}

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
				team.setStatus("active");
				daoTeam.saveUpdate(team);

				Map<String, Object> mapUuid = new HashMap<String, Object>();
				mapUuid.put("uuid", uuid);

				teamEntity = daoTeam.findByProperty(TeamEntity.class, mapUuid, "and");
				Integer teamID = teamEntity.getId();
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

				model.setViewName("redirect:team/view/" + teamID);
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
		Map<String, Object> mapTeam = new HashMap<String, Object>();
		mapTeam.put("status", "active");
		listTeam = daoTeam.listarProperty(TeamEntity.class, mapTeam, "and");

		PagedListHolder<TeamEntity> pagedListHolder = new PagedListHolder<TeamEntity>(listTeam);
		int page = ServletRequestUtils.getIntParameter(request, "p", 0);

		pagedListHolder.setPage(page);
		pagedListHolder.setPageSize(10);

		model.addObject("pagedListHolder", pagedListHolder);
		model.setViewName("team/data");
		return model;
	}
}
