package com.randomprogramming.kbuild.security.service;

import com.randomprogramming.kbuild.security.entity.Account;
import com.randomprogramming.kbuild.security.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AccountService {
	@Autowired
	AccountRepository accountRepository;

	@Autowired
	PasswordEncoder passwordEncoder;

	public Account findAccountByUsername(String username){
		return accountRepository.findFirstByUsername(username);
	}

	public void createNewAccount(String username, String password, String role) {
		Account account = new Account(username, passwordEncoder.encode(password), role);
		accountRepository.save(account);
	}
}
