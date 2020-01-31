package com.randomprogramming.kbuild.security.controller;

import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;

@RestController
public class AccountController {
	@GetMapping("/api/me")
	public Principal getMe(Principal principal){
		return principal;
	}

	@GetMapping("/api/getcsrf")
	@ResponseBody
	public String getcsrf(HttpServletRequest request) {
		//get the csrf token of the current user so that the user can make requests
		CsrfToken token = (CsrfToken)request.getAttribute("_csrf");
		return token.getParameterName() + ":" + token.getToken();
	}

	@GetMapping("/api/isinrole")
	@ResponseBody
	public boolean isInRole(HttpServletRequest httpServletRequest){
		return httpServletRequest.isUserInRole("ADMIN");
	}
}
