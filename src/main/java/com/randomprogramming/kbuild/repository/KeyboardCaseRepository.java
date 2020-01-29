package com.randomprogramming.kbuild.repository;

import com.randomprogramming.kbuild.entity.keyboard.KeyboardCase;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KeyboardCaseRepository extends CrudRepository<KeyboardCase,Integer> {
}
