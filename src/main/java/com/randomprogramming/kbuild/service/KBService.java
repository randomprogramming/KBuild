package com.randomprogramming.kbuild.service;

import com.randomprogramming.kbuild.entity.keyboard.*;
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

	public void addPlate(Plate plate){
		plateRepository.save(plate);
	}

	public List<Plate> getAllPlates(){
		List<Plate> plates = new ArrayList<>();
		plateRepository.findAll().forEach(plates::add);
		return plates;
	}

	public void addStabilizer(Stabilizer stabilizer){
		stabilizerRepository.save(stabilizer);
	}

	public List<Stabilizer> getAllStabilizers(){
		List<Stabilizer> stabilizers = new ArrayList<>();
		stabilizerRepository.findAll().forEach(stabilizers::add);
		return stabilizers;
	}

	public void addPCB(PCB pcb){
		pcbRepository.save(pcb);
	}

	public List<PCB> getAllPCBs(){
		List<PCB> pcbs = new ArrayList<>();
		pcbRepository.findAll().forEach(pcbs::add);
		return pcbs;
	}

	public void addKeyboardCase(KeyboardCase keyboardCase){
		keyboardCaseRepository.save(keyboardCase);
	}

	public List<KeyboardCase> getAllKeyboardCases() {
		List<KeyboardCase> keyboardCases = new ArrayList<>();
		keyboardCaseRepository.findAll().forEach(keyboardCases::add);
		return keyboardCases;
	}
}
