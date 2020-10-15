package com.avoidgroup.model;

import java.io.Serializable;
import java.util.Calendar;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import org.springframework.stereotype.Component;


import com.avoidgroup.util.EntidadeBase;

@Component("EmailVerificatorEntity")
@Entity
public class EmailVerificatorEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String email;
	private String senha;

	private String code;
	private Integer active;

	@Temporal(TemporalType.TIMESTAMP)
	private Date dateOfVerification;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public Integer getActive() {
		return active;
	}

	public void setActive(Integer active) {
		this.active = active;
	}

	public Date getDateOfVerification() {
		return dateOfVerification;
	}

	public void setDateOfVerification(Date dateOfVerification) {
		this.dateOfVerification = dateOfVerification;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "EmailVerificatorEntity [id=" + id + ", email=" + email + ", senha=" + senha + ", code=" + code
				+ ", active=" + active + ", dateOfVerification=" + dateOfVerification + "]";
	}

	
}
