package com.randomprogramming.kbuild.repository;

import com.randomprogramming.kbuild.entity.keyboard.KeyboardCase;
import org.springframework.data.repository.CrudRepository;

public interface SwitchRepository extends CrudRepository<KeyboardCase, Integer> {
}
