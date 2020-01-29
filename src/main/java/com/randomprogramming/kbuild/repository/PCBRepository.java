package com.randomprogramming.kbuild.repository;

import com.randomprogramming.kbuild.entity.keyboard.PCB;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PCBRepository extends CrudRepository<PCB,Integer> {
}
