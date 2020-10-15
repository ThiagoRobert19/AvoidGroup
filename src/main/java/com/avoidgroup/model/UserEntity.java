package com.avoidgroup.model;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.stereotype.Component;

import com.avoidgroup.util.Criptografia;
import com.avoidgroup.util.EntidadeBase;
@Component("UserEntity")
@Entity
public class UserEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	@NotEmpty(message = "can't be empty")
	private String email;
	@NotEmpty(message = "can't be empty")
	private String password;

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {

		this.email = email.toLowerCase().trim();
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String senha) {

		this.password = senha;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "UserEntity [id=" + id + ", email=" + email + "]";
	}

}
