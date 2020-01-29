package com.randomprogramming.kbuild.repository;

import com.randomprogramming.kbuild.entity.keyboard.Plate;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlateRepository extends CrudRepository<Plate,Integer> {
}
