package com.avoidgroup.team.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.springframework.stereotype.Component;

import com.avoidgroup.user.model.UserEntity;
import com.avoidgroup.util.EntidadeBase;

@Component("TeamUserEntity")
@Entity
public class TeamUserEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@OneToOne
	@JoinColumn(name = "userEntity_id")
	private UserEntity userEntity;

	@OneToOne
	@JoinColumn(name = "teamEntity_id")
	private TeamEntity teamEntity;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public UserEntity getUserEntity() {
		return userEntity;
	}

	public void setUserEntity(UserEntity userEntity) {
		this.userEntity = userEntity;
	}

	public TeamEntity getTeamEntity() {
		return teamEntity;
	}

	public void setTeamEntity(TeamEntity teamEntity) {
		this.teamEntity = teamEntity;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "TeamUserEntity [id=" + id + ", userEntity=" + userEntity + ", teamEntity=" + teamEntity + ", getId()="
				+ getId() + ", getUserEntity()=" + getUserEntity() + ", getTeamEntity()=" + getTeamEntity()
				+ ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString()
				+ "]";
	}

}
