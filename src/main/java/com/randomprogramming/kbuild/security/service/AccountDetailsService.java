package com.randomprogramming.kbuild.security.service;

import com.randomprogramming.kbuild.security.entity.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service("userDetailsService")
@Transactional
public class AccountDetailsService implements UserDetailsService {
	@Autowired
	AccountService accountService;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Account account = accountService.findAccountByUsername(username);

		return new org.springframework.security.core.userdetails.User(
				account.getUsername(), account.getPassword(),
				true, true, true, true,
				accountService.getAuthorities(account)
		);
	}
}
