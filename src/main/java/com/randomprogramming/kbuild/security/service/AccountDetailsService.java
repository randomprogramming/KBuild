package com.randomprogramming.kbuild.security.service;

import com.randomprogramming.kbuild.security.entity.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

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
				getAuthorities(account.getRole())
		);
	}

	private Collection<? extends GrantedAuthority> getAuthorities(String role){
		List<GrantedAuthority> authorities = new ArrayList<>();
		authorities.add(new SimpleGrantedAuthority(role));
		return authorities;
	}
}
