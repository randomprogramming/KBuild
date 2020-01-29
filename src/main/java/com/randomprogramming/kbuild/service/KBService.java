package com.randomprogramming.kbuild.service;

import com.randomprogramming.kbuild.entity.keyboard.Keycap;
import com.randomprogramming.kbuild.entity.keyboard.Switch;
import com.randomprogramming.kbuild.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class KBService {
	@Autowired
	KeyboardCaseRepository keyboardCaseRepository;

	@Autowired
	KeycapRepository keycapRepository;

	@Autowired
	PCBRepository pcbRepository;

	@Autowired
	PlateRepository plateRepository;

	@Autowired
	StabilizerRepository stabilizerRepository;

	@Autowired
	SwitchRepository switchRepository;

	public void addKeycap(Keycap keycap){
		keycapRepository.save(keycap);
	}

	public List<Keycap> getAllKeycaps(){
		List<Keycap> keycaps = new ArrayList<>();
		keycapRepository.findAll().forEach(keycaps::add);
		return keycaps;
	}

	public void addSwitch(Switch keyboardSwitch) {
		switchRepository.save(keyboardSwitch);
	}

	public List<Switch> getAllSwitches(){
		List<Switch> keycaps = new ArrayList<>();
		switchRepository.findAll().forEach(keycaps::add);
		return keycaps;
	}
}
