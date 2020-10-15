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

@Component("TeamAdminEntity")
@Entity
public class TeamAdminEntity  implements Serializable, EntidadeBase{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "admin_id")
	private ProfileEntity admin;
	
	@ManyToOne
	@JoinColumn(name = "team_id")
	private TeamEntity team;


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public ProfileEntity getAdmin() {
		return admin;
	}


	public void setAdmin(ProfileEntity admin) {
		this.admin = admin;
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
		return "TeamAdminEntity [id=" + id + ", admin=" + admin + ", team=" + team + "]";
	}
	
	
}
