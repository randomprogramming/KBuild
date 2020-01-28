package com.randomprogramming.kbuild.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@org.springframework.web.bind.annotation.RestController
public class RestController {
	@CrossOrigin
	@GetMapping("/api/test")
	public String test(){
		//Just a testpoint to see if the server is up and running
		return "Hello server world!";
	}


}
