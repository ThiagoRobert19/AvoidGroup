package com.avoidgroup.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@Controller
@RequestMapping(value = "/avoidgroup")
public class AvoidGroupController {
	@RequestMapping(value = "/terms", method = RequestMethod.GET)
	public String terms() {
		return "avoidgroup/terms";
	}
	@RequestMapping(value = "/privacy", method = RequestMethod.GET)
	public String privacy() {
		return "avoidgroup/privacy";
	}
	@RequestMapping(value = "/about", method = RequestMethod.GET)
	public String about() {
		return "avoidgroup/about";
	}
	/*
	@RequestMapping(value = "/security", method = RequestMethod.GET)
	public String security() {
		return "avoidgroup/security";
	}*/
}
