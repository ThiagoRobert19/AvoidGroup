package com.avoidgroup.team.model;

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
import com.avoidgroup.user.model.UserEntity;
import com.avoidgroup.util.EntidadeBase;

@Component("TeamInviteEntity")
@Entity
public class TeamInviteEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String status;//invited/accepted/denied

	@OneToOne
	@JoinColumn(name = "userEntity_id")
	private UserEntity userEntity;

	@OneToOne
	@JoinColumn(name = "teamEntity_id")
	private TeamEntity teamEntity;

	@OneToOne
	@JoinColumn(name = "whoInvited_id")
	private UserEntity whoInvited;

	@Temporal(TemporalType.DATE)
	private Date dateOfPublication;

	@DateTimeFormat(pattern = "HH:mm:ss")
	@Temporal(TemporalType.TIME)
	private Date timeOfPublication;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
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

	public UserEntity getWhoInvited() {
		return whoInvited;
	}

	public void setWhoInvited(UserEntity whoInvited) {
		this.whoInvited = whoInvited;
	}

	public Date getDateOfPublication() {
		return dateOfPublication;
	}

	public void setDateOfPublication(Date dateOfPublication) {
		this.dateOfPublication = dateOfPublication;
	}

	public Date getTimeOfPublication() {
		return timeOfPublication;
	}

	public void setTimeOfPublication(Date timeOfPublication) {
		this.timeOfPublication = timeOfPublication;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "TeamInviteEntity [id=" + id + ", status=" + status + ", userEntity=" + userEntity + ", teamEntity="
				+ teamEntity + ", whoInvited=" + whoInvited + ", dateOfPublication=" + dateOfPublication
				+ ", timeOfPublication=" + timeOfPublication + "]";
	}

}
