package com.avoidgroup.util;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.avoidgroup.dao.GenericDao;
import com.avoidgroup.model.ProfileEntity;
import com.avoidgroup.model.UserEntity;

@Component
public class AutorizacaoInterceptor extends HandlerInterceptorAdapter {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object controller)
			throws Exception {

		String uri = request.getRequestURI();
		if ((uri.endsWith("/user/login/simple") || uri.endsWith("/user/logout") || uri.endsWith("/user/verification")
				|| uri.endsWith("/user/verify") || uri.endsWith("/user/login") || uri.endsWith("/user/add")
				|| uri.contains("resources") || uri.contains("/doVerification") || uri.endsWith("/")
				|| uri.endsWith("/user/save") || uri.endsWith("/avoidgroup/terms")
				|| uri.endsWith("/avoidgroup/privacy") || uri.endsWith("/avoidgroup/about"))
				|| (request.getSession().getAttribute("clienteLogado") != null)) {

		/*	if ((request.getSession().getAttribute("clienteLogado") != null)
					&& (!uri.endsWith("/user/login/simple") || !uri.endsWith("/user/logout")
							|| !uri.endsWith("/user/verification") || !uri.endsWith("/user/verify")
							|| !uri.endsWith("/user/login") || !uri.endsWith("/user/add") || uri.contains("resources")
							|| uri.contains("/doVerification") || uri.endsWith("/") || !uri.endsWith("/user/save")
							|| !uri.endsWith("/avoidgroup/terms") || !uri.endsWith("/avoidgroup/privacy")
							|| !uri.endsWith("/avoidgroup/about") || !uri.endsWith("/profile/save"))) {
				GenericDao<ProfileEntity> daoProfile = new GenericDao<ProfileEntity>();
				UserEntity userEntity = new UserEntity();

				userEntity = (UserEntity) request.getSession().getAttribute("clienteLogado");
				Map<String, Object> mapUser = new HashMap<String, Object>();
				mapUser.put("user.id", userEntity.getId());
				if (!daoProfile.exist(ProfileEntity.class, mapUser, "")) {
					response.sendRedirect(request.getContextPath() + "/profile/register");
					return false;

				}
			}*/
			return true;
		}

		response.sendRedirect(request.getContextPath() + "/user/login");

		return false;
	}

}