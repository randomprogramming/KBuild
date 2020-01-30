package com.randomprogramming.kbuild.security.repository;

import com.randomprogramming.kbuild.security.entity.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends CrudRepository<Account, Integer> {
	Account findFirstByUsername(String username);
}
