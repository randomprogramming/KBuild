package com.randomprogramming.kbuild.controller;

import org.springframework.web.bind.annotation.GetMapping;

@org.springframework.stereotype.Controller
public class Controller {
	@GetMapping(value = {"/","/about", "/apiadminpage","/contact"})
	public String allIndex(){
		return "index.html";
	}
}

