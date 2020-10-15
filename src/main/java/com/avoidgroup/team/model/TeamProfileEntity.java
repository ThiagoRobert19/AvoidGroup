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

@Component("TeamProfileEntity")
@Entity
public class TeamProfileEntity  implements Serializable, EntidadeBase{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "profile_id")
	private ProfileEntity profile;
	
	@ManyToOne
	@JoinColumn(name = "team_id")
	private TeamEntity team;


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public ProfileEntity getProfile() {
		return profile;
	}


	public void setProfile(ProfileEntity profile) {
		this.profile = profile;
	}


	public TeamEntity getTeam() {
		return team;
	}


	public void setTeam(TeamEntity team) {
		this.team = team;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	@Override
	public String toString() {
		return "TeamUserEntity [id=" + id + ", profile=" + profile + ", team=" + team + "]";
	}
	
	
}
