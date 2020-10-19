package com.avoidgroup.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;

import com.avoidgroup.util.EntidadeBase;

@Component("FriendEntity")
@Entity
public class FriendEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@OneToOne
	@JoinColumn(name = "userEntity1_id")
	private UserEntity userEntity1;

	@OneToOne
	@JoinColumn(name = "userEntity2_id")
	private UserEntity userEntity2;

	@Temporal(TemporalType.DATE)
	private Date dateOfFriendship;

	@DateTimeFormat(pattern = "HH:mm:ss")
	@Temporal(TemporalType.TIME)
	private Date timeOfFriendship;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public UserEntity getUserEntity1() {
		return userEntity1;
	}

	public void setUserEntity1(UserEntity userEntity1) {
		this.userEntity1 = userEntity1;
	}

	public UserEntity getUserEntity2() {
		return userEntity2;
	}

	public void setUserEntity2(UserEntity userEntity2) {
		this.userEntity2 = userEntity2;
	}

	public Date getDateOfFriendship() {
		return dateOfFriendship;
	}

	public void setDateOfFriendship(Date dateOfFriendship) {
		this.dateOfFriendship = dateOfFriendship;
	}

	public Date getTimeOfFriendship() {
		return timeOfFriendship;
	}

	public void setTimeOfFriendship(Date timeOfFriendship) {
		this.timeOfFriendship = timeOfFriendship;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "FriendEntity [id=" + id + ", userEntity1=" + userEntity1 + ", userEntity2=" + userEntity2
				+ ", dateOfFriendship=" + dateOfFriendship + ", timeOfFriendship=" + timeOfFriendship + "]";
	}

}
