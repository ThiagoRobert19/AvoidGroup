package com.avoidgroup.team.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.stereotype.Component;

import com.avoidgroup.model.ProfileEntity;
import com.avoidgroup.util.EntidadeBase;

@Component("EventProfileEntity")
@Entity
public class EventProfileEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String confirmation;

	@ManyToOne
	@JoinColumn(name = "event_id")
	private TeamEventEntity event;
	@ManyToOne
	@JoinColumn(name = "profile_id")
	private ProfileEntity profile;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getConfirmation() {
		return confirmation;
	}

	public void setConfirmation(String confirmation) {
		this.confirmation = confirmation;
	}

	public TeamEventEntity getEvent() {
		return event;
	}

	public void setEvent(TeamEventEntity event) {
		this.event = event;
	}

	public ProfileEntity getProfile() {
		return profile;
	}

	public void setProfile(ProfileEntity profile) {
		this.profile = profile;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "EventProfileEntity [id=" + id + ", confirmation=" + confirmation + ", event=" + event + ", profile="
				+ profile + "]";
	}

}
