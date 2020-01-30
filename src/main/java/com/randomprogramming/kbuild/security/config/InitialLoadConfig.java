//package com.randomprogramming.kbuild.security.config;
//
//import com.randomprogramming.kbuild.security.service.AccountService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.ApplicationListener;
//import org.springframework.context.event.ContextRefreshedEvent;
//import org.springframework.stereotype.Component;
//
//@Component
//public class InitialLoadConfig implements ApplicationListener<ContextRefreshedEvent> {
//	@Autowired
//	AccountService accountService;
//
//	//This runs when the application starts, needs to run only once
//	//I will keep the code here incase I need to reset my admin account.
//	@Override
//	public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
//		accountService.createNewAccount("test", "123", "ADMIN");
//	}
//}
