package com.avoidgroup.util;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.avoidgroup.dao.GenericDao;

@Component
public class AutorizacaoInterceptor extends HandlerInterceptorAdapter {
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object controller)
			throws Exception {

		String uri = request.getRequestURI();
		if ((uri.endsWith("/user/logout")|| uri.endsWith("/user/login") || uri.contains("resources") || uri.endsWith("/user/register")
				|| uri.endsWith("/user/doLogin"))
				|| (request.getSession().getAttribute("clienteLogado") != null)) {

	
			return true;
		}

		response.sendRedirect(request.getContextPath() + "/user/login");

		return false;
	}

}