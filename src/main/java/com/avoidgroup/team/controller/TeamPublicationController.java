package com.avoidgroup.team.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.avoidgroup.dao.GenericDao;
import com.avoidgroup.team.model.TeamEntity;
import com.avoidgroup.team.model.TeamPublicationEntity;
import com.avoidgroup.user.model.UserEntity;
import com.avoidgroup.util.AWSAPI;

@Controller
@RequestMapping(value = "/teampublication")
public class TeamPublicationController {

	@Autowired
	private UserEntity userEntity;
	@Autowired
	private GenericDao<UserEntity> daoUser;
	@Autowired
	private TeamEntity teamEntity;

	@Autowired
	private List<TeamEntity> listTeam;

	@Autowired
	private GenericDao<TeamEntity> daoTeam;

	@Autowired
	private GenericDao<TeamPublicationEntity> daoPub;

	@Autowired
	private TeamPublicationEntity teamPubEntity;

	AWSAPI amazon = new AWSAPI();
	@RequestMapping(value = { "/makeprivate/{id}" }, method = RequestMethod.GET)
	public ModelAndView makeprivate(@PathVariable(value = "id") String id, ModelAndView model,
			HttpServletRequest request) {
		String teamID = "";
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(id));

		if (daoPub.exist(TeamPublicationEntity.class, map, "and")) {
			teamPubEntity = daoPub.buscaId(TeamPublicationEntity.class, Integer.parseInt(id));
			teamID = teamPubEntity.getTeamEntity().getId().toString();
			userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

			if (!teamPubEntity.getTeamEntity().getOwner().getId().equals(userEntity.getId())
					&& !teamPubEntity.getTeamEntity().getAdmin().getId().equals(userEntity.getId())) {
				model.setViewName("redirect:/team/view/" + teamID);
				return model;
			} else {
				teamPubEntity.setPrivacy("private");

				daoPub.saveUpdate(teamPubEntity);
				model.setViewName("redirect:/team/view/" + teamID);
				return model;
			}
		} else {
			model.setViewName("redirect:/");
			return model;
		}

	}
	@RequestMapping(value = { "/makepublic/{id}" }, method = RequestMethod.GET)
	public ModelAndView makepublic(@PathVariable(value = "id") String id, ModelAndView model,
			HttpServletRequest request) {
		String teamID = "";
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(id));

		if (daoPub.exist(TeamPublicationEntity.class, map, "and")) {
			teamPubEntity = daoPub.buscaId(TeamPublicationEntity.class, Integer.parseInt(id));
			teamID = teamPubEntity.getTeamEntity().getId().toString();
			userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

			if (!teamPubEntity.getTeamEntity().getOwner().getId().equals(userEntity.getId())
					&& !teamPubEntity.getTeamEntity().getAdmin().getId().equals(userEntity.getId())) {
				model.setViewName("redirect:/team/view/" + teamID);
				return model;
			} else {
				teamPubEntity.setPrivacy("public");

				daoPub.saveUpdate(teamPubEntity);
				model.setViewName("redirect:/team/view/" + teamID);
				return model;
			}
		} else {
			model.setViewName("redirect:/");
			return model;
		}

	}

	@RequestMapping(value = { "/delete/{id}" }, method = RequestMethod.GET)
	public ModelAndView delete(@PathVariable(value = "id") String id, ModelAndView model, HttpServletRequest request) {
		String teamID = "";
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", Integer.parseInt(id));

		if (daoPub.exist(TeamPublicationEntity.class, map, "and")) {
			teamPubEntity = daoPub.buscaId(TeamPublicationEntity.class, Integer.parseInt(id));
			teamID = teamPubEntity.getTeamEntity().getId().toString();
			userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

			if (!teamPubEntity.getPublisher().getId().equals(userEntity.getId())
					&& !teamPubEntity.getTeamEntity().getOwner().getId().equals(userEntity.getId())
					&& !teamPubEntity.getTeamEntity().getAdmin().getId().equals(userEntity.getId())) {
				model.setViewName("redirect:/team/view/" + teamID);
				return model;
			} else {
				if (teamPubEntity.getPhotoName() != null && !teamPubEntity.getPhotoName().equals("")) {

					amazon.delete(teamPubEntity.getPhotoName());
				}

				// Map<String, Object> mapOriginal = new HashMap<String,
				// Object>();
				// mapOriginal.put("id", Integer.parseInt(id));

				// daoPub.delete(TeamPublicationEntity.class, mapOriginal,
				// "and");

				// Map<String, Object> mapLikeComment = new HashMap<String,
				// Object>();
				// mapLikeComment.put("publication.id", Integer.parseInt(id));
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
			model.setViewName("redirect:/");
			return model;
		}

	}

	@RequestMapping(value = "/add", method = RequestMethod.POST)
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
}
