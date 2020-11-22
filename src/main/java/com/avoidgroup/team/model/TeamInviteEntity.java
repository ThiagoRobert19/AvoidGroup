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
	private Date dateOfInvitation;
	
	@Temporal(TemporalType.DATE)
	private Date dateAccept;
	
	@Temporal(TemporalType.DATE)
	private Date dateDeny;

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

	public Date getDateOfInvitation() {
		return dateOfInvitation;
	}

	public void setDateOfInvitation(Date dateOfInvitation) {
		this.dateOfInvitation = dateOfInvitation;
	}

	public Date getDateAccept() {
		return dateAccept;
	}

	public void setDateAccept(Date dateAccept) {
		this.dateAccept = dateAccept;
	}

	public Date getDateDeny() {
		return dateDeny;
	}

	public void setDateDeny(Date dateDeny) {
		this.dateDeny = dateDeny;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "TeamInviteEntity [id=" + id + ", status=" + status + ", userEntity=" + userEntity + ", teamEntity="
				+ teamEntity + ", whoInvited=" + whoInvited + ", dateOfInvitation=" + dateOfInvitation + ", dateAccept="
				+ dateAccept + ", dateDeny=" + dateDeny + "]";
	}

	


}
