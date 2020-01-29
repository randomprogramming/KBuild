package com.randomprogramming.kbuild.controller;

import com.randomprogramming.kbuild.entity.keyboard.*;
import com.randomprogramming.kbuild.service.KBService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

	@CrossOrigin
	@PostMapping("/api/addswitch")
	public void addSwitch(@RequestBody Switch keyboardSwitch){
		kbService.addSwitch(keyboardSwitch);
	}

	@CrossOrigin
	@GetMapping("/api/getallswitches")
	public List<Switch> getAllSwitches(){
		return kbService.getAllSwitches();
	}

	@CrossOrigin
	@PostMapping("/api/addplate")
	public void addPlate(@RequestBody Plate plate){
		kbService.addPlate(plate);
	}

	@CrossOrigin
	@GetMapping("/api/getallplates")
	public List<Plate> getAllPlates(){
		return kbService.getAllPlates();
	}

	@CrossOrigin
	@PostMapping("/api/addstabilizer")
	public void addStabilizer(@RequestBody Stabilizer stabilizer){
		kbService.addStabilizer(stabilizer);
	}

	@CrossOrigin
	@GetMapping("/api/getallstabilizers")
	public List<Stabilizer> getAllStabilizers(){
		return kbService.getAllStabilizers();
	}

	@CrossOrigin
	@PostMapping("/api/addpcb")
	public void addPCB(@RequestBody PCB pcb){
		kbService.addPCB(pcb);
	}

	@CrossOrigin
	@GetMapping("/api/getallpcbs")
	public List<PCB> getAllPCBs(){
		return kbService.getAllPCBs();
	}

	@CrossOrigin
	@PostMapping("/api/addkeyboardcase")
	public void addKeyboardCase(@RequestBody KeyboardCase keyboardCase){
		kbService.addKeyboardCase(keyboardCase);
	}

	@CrossOrigin
	@GetMapping("/api/getallkeyboardcases")
	public List<KeyboardCase> getAllKeyboardCases(){
		return kbService.getAllKeyboardCases();
	}
}
