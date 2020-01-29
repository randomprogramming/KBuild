package com.randomprogramming.kbuild.controller;

import com.randomprogramming.kbuild.entity.keyboard.Keycap;
import com.randomprogramming.kbuild.service.KBService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@org.springframework.web.bind.annotation.RestController
public class RestController {
	@Autowired
	KBService kbService;

	@CrossOrigin
	@GetMapping("/api/test")
	public String test(){
		//Just a testpoint to see if the server is up and running
		return "Hello server world!";
	}

	@CrossOrigin
	@PostMapping("/api/addkeycap")
	public void addKeycap(@RequestBody Keycap keycap){
		kbService.addKeycap(keycap);
	}

	@CrossOrigin
	@GetMapping("/api/getallkeycaps")
	public List<Keycap> getAllKeycaps(){
		return kbService.getAllKeycaps();
	}
}
