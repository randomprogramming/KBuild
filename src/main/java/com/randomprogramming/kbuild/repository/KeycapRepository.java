package com.randomprogramming.kbuild.repository;

import com.randomprogramming.kbuild.entity.keyboard.Keycap;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KeycapRepository extends CrudRepository<Keycap,Integer> {
}
