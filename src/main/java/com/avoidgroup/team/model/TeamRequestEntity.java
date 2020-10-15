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

import com.avoidgroup.model.ProfileEntity;
import com.avoidgroup.util.EntidadeBase;
@Component("TeamRequestEntity")
@Entity
public class TeamRequestEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@OneToOne
	@JoinColumn(name = "requester_id")
	private ProfileEntity requester;

	@OneToOne
	@JoinColumn(name = "manager_id")
	private ProfileEntity manager;
	
	@OneToOne
	@JoinColumn(name = "team_id")
	private TeamEntity team;

	@Temporal(TemporalType.DATE)
	private Date dateOfRequest;

	@DateTimeFormat(pattern = "HH:mm:ss")
	@Temporal(TemporalType.TIME)
	private Date timeOfRequest;

	private String status;// open, denied, accept

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public ProfileEntity getRequester() {
		return requester;
	}

	public void setRequester(ProfileEntity requester) {
		this.requester = requester;
	}

	public ProfileEntity getManager() {
		return manager;
	}

	public void setManager(ProfileEntity manager) {
		this.manager = manager;
	}

	public TeamEntity getTeam() {
		return team;
	}

	public void setTeam(TeamEntity team) {
		this.team = team;
	}

	public Date getDateOfRequest() {
		return dateOfRequest;
	}

	public void setDateOfRequest(Date dateOfRequest) {
		this.dateOfRequest = dateOfRequest;
	}

	public Date getTimeOfRequest() {
		return timeOfRequest;
	}

	public void setTimeOfRequest(Date timeOfRequest) {
		this.timeOfRequest = timeOfRequest;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "TeamRequestEntity [id=" + id + ", requester=" + requester + ", manager=" + manager + ", team=" + team
				+ ", dateOfRequest=" + dateOfRequest + ", timeOfRequest=" + timeOfRequest + ", status=" + status + "]";
	}

	
}
