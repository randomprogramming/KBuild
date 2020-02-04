package com.randomprogramming.kbuild.security.config;

import com.randomprogramming.kbuild.security.service.AccountDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	AccountDetailsService accountDetailsService;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(accountDetailsService).passwordEncoder(passwordEncoder());
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception{
		http
				.authorizeRequests()

				.antMatchers(				"/api/getallkeycaps", "/api/getallswitches",
											"/api/getallplates", "/api/getallpcbs",
											"/api/getallstabilizers", "/api/getallkeyboardcases",
											"/api/me", "/login", "/api/getcsrf", "/api/isinrole", "/**").permitAll()
				.antMatchers(	HttpMethod.POST,"/api/addkeycap", "/api/addswitch",
											"/api/addplate", "/api/addpcb",
											"/api/addstabilizer", "/api/addkeyboardcase").hasRole("ADMIN")
				.anyRequest().authenticated()
				.and()
				.formLogin()
				.defaultSuccessUrl("http://192.168.1.105:3000/api/adminpage", true)
				.and()
				.logout()
				.logoutSuccessUrl("/loggedout")
				.logoutUrl("/logout")
				.deleteCookies("JSESSIONID");
	}

	@Bean
	public BCryptPasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}
}
