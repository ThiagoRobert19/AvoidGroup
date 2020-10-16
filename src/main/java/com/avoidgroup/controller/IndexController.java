package com.avoidgroup.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@Controller
public class IndexController {
	@RequestMapping(value = { "/", "/home" }, method = RequestMethod.GET)
	public String index() {
		return "index/index";
	}
	@RequestMapping(value = { "/user/login"}, method = RequestMethod.GET)
	public String login() {
		return "index/login";
	}
	
	/*
	@RequestMapping(value = "/security", method = RequestMethod.GET)
	public String security() {
		return "avoidgroup/security";
	}*/
}
