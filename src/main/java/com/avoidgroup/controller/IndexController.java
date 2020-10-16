package com.avoidgroup.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.avoidgroup.dao.GenericDao;
import com.avoidgroup.model.UserEntity;
import com.avoidgroup.util.Criptografia;
@Controller
public class IndexController {
	@Autowired
	private GenericDao<UserEntity> daoUser;
	
	@Autowired
	private UserEntity userEntity;
	
	
	@RequestMapping(value = { "/"}, method = RequestMethod.GET)
	public String index()
		{
			return "index/index";
		}
	
	
	@RequestMapping(value = { "/user/login"}, method = RequestMethod.GET)
	public String login() {
		
		return "index/login";
	}
	@RequestMapping(value = { "/user/doLogin"}, method = RequestMethod.POST)
	public ModelAndView doLogin(UserEntity userEntity,ModelAndView model, HttpSession session) {
		Map<String, Object> map= new HashMap<String, Object>();
		map.put("email", userEntity.getEmail());
		
		if(daoUser.exist(UserEntity.class, map, "and")){
			Map<String, Object> mappassword= new HashMap<String, Object>();
			mappassword.put("email", userEntity.getEmail());
			mappassword.put("password", Criptografia.criptografar(userEntity.getPassword()));
			
			if(daoUser.exist(UserEntity.class, mappassword, "and")){
				userEntity = daoUser.findByProperty(UserEntity.class, mappassword, "and");
				
				session.setAttribute("clienteLogado", userEntity);
				
				model.setViewName("redirect:/");
				
			}else{
				model.addObject("erro", "Senha não confere!");
				model.setViewName("index/login");
				return model;
			}
			
			return model;
		}else{
			model.addObject("erro", "Não existe Usuário cadastrado com esse email!");
			model.setViewName("index/login");
			return model;
		}
		
		
	}
	@RequestMapping(value = { "/user/register"}, method = RequestMethod.POST)
	public ModelAndView register(UserEntity userEntity, String rePassword, ModelAndView model) {
		Map<String, Object> map= new HashMap<String, Object>();
		map.put("email", userEntity.getEmail());
		
		if(!daoUser.exist(UserEntity.class, map, "and")){
			
			System.out.println("Não existe email cadastrado.. vamos cadastrar eeeeee");
			
			if(userEntity.getPassword().equals(rePassword)){
				userEntity.setPassword(Criptografia.criptografar(userEntity.getPassword()));
				daoUser.saveUpdate(userEntity);
				model.setViewName("redirect:/user/login");
				return model;
				
			}else{
				model.addObject("erro", "Password tem que coincidir com o Re Password!");
				model.setViewName("index/login");
				return model;
			}
		}else{
			model.addObject("erro", "Já existe esse email cadastrado!");
			model.setViewName("index/login");
			return model;
		}
		
		

	}
	@RequestMapping(value = { "/user/logout"}, method = RequestMethod.GET)
	public String logout(HttpSession session) {
		
		session.setAttribute("clienteLogado", null);
		
		return "redirect:/user/login";
	}

	
}
