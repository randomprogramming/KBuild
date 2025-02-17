package com.randomprogramming.kbuild.security.entity;

import javax.persistence.*;

@Entity
@Table(name="account")
public class Account {
	@Id
	@GeneratedValue
	@Column
	private int id;

	@Column
	private String username;

	@Column
	private String password;

	@Column
	private String role;

	public Account() {
	}

	public Account(String username, String password, String role){
		this.username = username;
		this.password = password;
		this.role = role;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
}
