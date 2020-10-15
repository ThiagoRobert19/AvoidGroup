package com.avoidgroup.model;

import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;

public class UserVerifyEntity {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	@NotEmpty(message = "can't be empty")
	private String email;
	@NotEmpty(message = "can't be empty")
	private String password;

	@Temporal(TemporalType.DATE)
	private Date dateOfVerification;

	@DateTimeFormat(pattern = "HH:mm:ss")
	@Temporal(TemporalType.TIME)
	private Date timeOfVerification;

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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getDateOfVerification() {
		return dateOfVerification;
	}

	public void setDateOfVerification(Date dateOfVerification) {
		this.dateOfVerification = dateOfVerification;
	}

	public Date getTimeOfVerification() {
		return timeOfVerification;
	}

	public void setTimeOfVerification(Date timeOfVerification) {
		this.timeOfVerification = timeOfVerification;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "UserVerifyEntity [id=" + id + ", email=" + email + ", password=" + password + ", dateOfVerification="
				+ dateOfVerification + ", timeOfVerification=" + timeOfVerification + "]";
	}

}
