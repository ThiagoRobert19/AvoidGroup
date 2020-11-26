package com.avoidgroup.user.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.avoidgroup.dao.GenericDao;
import com.avoidgroup.team.model.TeamAlbumEntity;
import com.avoidgroup.team.model.TeamEntity;
import com.avoidgroup.team.model.TeamUserEntity;
import com.avoidgroup.user.model.UserAlbumEntity;
import com.avoidgroup.user.model.UserEntity;
import com.avoidgroup.util.AWSAPI;
import com.avoidgroup.util.Common;
@Controller
@RequestMapping(value = "/useralbum")
public class UserAlbumController {

	@Autowired
	private UserEntity userEntity;

	@Autowired
	private GenericDao<UserAlbumEntity> daoUserAlbum;

	AWSAPI amazon = new AWSAPI();

	@RequestMapping(value = "/newimage", method = RequestMethod.POST)
	public ModelAndView newimage(String subtitle, String privacy, UserAlbumEntity userAlbum, MultipartFile file,
			HttpServletRequest request, ModelAndView model) throws IllegalStateException, IOException {
		userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");

		UserAlbumEntity userAlbumEntity = new UserAlbumEntity();
		if (file.toString() != null && !file.getOriginalFilename().equals("")) {

			File path = new File(request.getRealPath("/img/"));
			if (!path.exists()) {
				path.mkdir();
			}
			SimpleDateFormat df = new SimpleDateFormat("ddMMyyyyHHmmss");
			final Calendar cal = Calendar.getInstance();
			String nome = userEntity.getName().toLowerCase() + userEntity.getEmail().toLowerCase() + userEntity.getId()
					+ df.format(cal.getTime()) + "imageUserAlbum";

			nome = nome.trim().replaceAll(" ", "") + ".jpg";

			String caminho = request.getRealPath("/img/" + nome);

			File convFile = new File(caminho);

			file.transferTo(convFile);

			amazon.uploadfile(convFile, nome);
			String path1 = amazon.getPath();
			Calendar date1 = Calendar.getInstance();
			userAlbumEntity.setImage(path1 + nome);
			userAlbumEntity.setPhotoName(nome);
			userAlbumEntity.setUuid(Common.geraUUID());
			userAlbumEntity.setSubtitle(subtitle);

			userAlbumEntity.setUserEntity(userEntity);
			userAlbumEntity.setTimeOfPublication(date1.getTime());
			userAlbumEntity.setDateOfPublication(date1.getTime());
			userAlbumEntity.setPrivacy(privacy);
			daoUserAlbum.saveUpdate(userAlbumEntity);

			convFile.delete();

			model.setViewName("redirect:/user/myprofile");
			return model;

		} else {
			model.setViewName("redirect:/");
			return model;
		}

	}
}
