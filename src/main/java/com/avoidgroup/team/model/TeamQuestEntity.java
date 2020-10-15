package com.avoidgroup.team.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;

import com.avoidgroup.util.EntidadeBase;

@Component("TeamQuestEntity")
@Entity
public class TeamQuestEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String name;
	private String status;
	@Temporal(TemporalType.DATE)
	private Date dateOfQuest;

	@DateTimeFormat(pattern = "HH:mm:ss")
	@Temporal(TemporalType.TIME)
	private Date timeOfQuest;

	private String photo;
	private String photo_name;

	@ManyToOne
	@JoinColumn(name = "team_id")
	private TeamEntity team;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getDateOfQuest() {
		return dateOfQuest;
	}

	public void setDateOfQuest(Date dateOfQuest) {
		this.dateOfQuest = dateOfQuest;
	}

	public Date getTimeOfQuest() {
		return timeOfQuest;
	}

	public void setTimeOfQuest(Date timeOfQuest) {
		this.timeOfQuest = timeOfQuest;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getPhoto_name() {
		return photo_name;
	}

	public void setPhoto_name(String photo_name) {
		this.photo_name = photo_name;
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
		return "TeamQuestEntity [id=" + id + ", name=" + name + ", status=" + status + ", dateOfQuest=" + dateOfQuest
				+ ", timeOfQuest=" + timeOfQuest + ", photo=" + photo + ", photo_name=" + photo_name + ", team=" + team
				+ "]";
	}

}
