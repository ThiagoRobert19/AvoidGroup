package com.avoidgroup.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.stereotype.Component;

import com.avoidgroup.util.EntidadeBase;
@Component("ResetPasswordEntity")
@Entity
public class ResetPasswordEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String email;

	private String code;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateOfReset;

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

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public Date getDateOfReset() {
		return dateOfReset;
	}

	public void setDateOfReset(Date dateOfReset) {
		this.dateOfReset = dateOfReset;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "ResetPasswordEntity [id=" + id + ", email=" + email + ", code=" + code + ", dateOfReset=" + dateOfReset
				+ "]";
	}
	
	

}
