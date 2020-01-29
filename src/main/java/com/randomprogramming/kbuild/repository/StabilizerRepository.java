package com.randomprogramming.kbuild.repository;

import com.randomprogramming.kbuild.entity.keyboard.Stabilizer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StabilizerRepository extends CrudRepository<Stabilizer,Integer> {
}
