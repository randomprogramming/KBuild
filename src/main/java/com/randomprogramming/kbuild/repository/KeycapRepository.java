package com.randomprogramming.kbuild.repository;

import com.randomprogramming.kbuild.entity.keyboard.Keycap;
import org.springframework.data.repository.CrudRepository;

public interface KeycapRepository extends CrudRepository<Keycap,Integer> {
}
