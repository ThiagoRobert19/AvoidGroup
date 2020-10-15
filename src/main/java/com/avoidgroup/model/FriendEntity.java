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
	@JoinColumn(name = "profile1_id")
	private ProfileEntity profile1;

	@OneToOne
	@JoinColumn(name = "profile2_id")
	private ProfileEntity profile2;

	@Temporal(TemporalType.DATE)
	private Date dateOfFriendship;

	@DateTimeFormat(pattern="HH:mm:ss")
	@Temporal(TemporalType.TIME)
	private Date timeOfFriendship;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public ProfileEntity getProfile1() {
		return profile1;
	}

	public void setProfile1(ProfileEntity profile1) {
		this.profile1 = profile1;
	}

	public ProfileEntity getProfile2() {
		return profile2;
	}

	public void setProfile2(ProfileEntity profile2) {
		this.profile2 = profile2;
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
		return "FriendEntity [id=" + id + ", profile1=" + profile1 + ", profile2=" + profile2 + ", dateOfFriendship="
				+ dateOfFriendship + ", timeOfFriendship=" + timeOfFriendship + "]";
	}

}
