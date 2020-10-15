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

import com.avoidgroup.model.ProfileEntity;
import com.avoidgroup.util.EntidadeBase;

@Component("TeamFaqEntity")
@Entity
public class TeamFaqEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String question;
	private String answer;
	private String status;

	@Temporal(TemporalType.DATE)
	private Date dateOfQuestion;

	@DateTimeFormat(pattern = "HH:mm:ss")
	@Temporal(TemporalType.TIME)
	private Date timeOfQuestion;

	@Temporal(TemporalType.DATE)
	private Date dateOfAnswer;

	@DateTimeFormat(pattern = "HH:mm:ss")
	@Temporal(TemporalType.TIME)
	private Date timeOfAnswer;

	@ManyToOne
	@JoinColumn(name = "team_id")
	private TeamEntity team;
	@ManyToOne
	@JoinColumn(name = "profile_id")
	private ProfileEntity profile;

	@ManyToOne
	@JoinColumn(name = "response_id")
	private ProfileEntity response;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getDateOfQuestion() {
		return dateOfQuestion;
	}

	public void setDateOfQuestion(Date dateOfQuestion) {
		this.dateOfQuestion = dateOfQuestion;
	}

	public Date getTimeOfQuestion() {
		return timeOfQuestion;
	}

	public void setTimeOfQuestion(Date timeOfQuestion) {
		this.timeOfQuestion = timeOfQuestion;
	}

	public Date getDateOfAnswer() {
		return dateOfAnswer;
	}

	public void setDateOfAnswer(Date dateOfAnswer) {
		this.dateOfAnswer = dateOfAnswer;
	}

	public Date getTimeOfAnswer() {
		return timeOfAnswer;
	}

	public void setTimeOfAnswer(Date timeOfAnswer) {
		this.timeOfAnswer = timeOfAnswer;
	}

	public TeamEntity getTeam() {
		return team;
	}

	public void setTeam(TeamEntity team) {
		this.team = team;
	}

	public ProfileEntity getProfile() {
		return profile;
	}

	public void setProfile(ProfileEntity profile) {
		this.profile = profile;
	}

	public ProfileEntity getResponse() {
		return response;
	}

	public void setResponse(ProfileEntity response) {
		this.response = response;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "TeamFaqEntity [id=" + id + ", question=" + question + ", answer=" + answer + ", status=" + status
				+ ", dateOfQuestion=" + dateOfQuestion + ", timeOfQuestion=" + timeOfQuestion + ", dateOfAnswer="
				+ dateOfAnswer + ", timeOfAnswer=" + timeOfAnswer + ", team=" + team + ", profile=" + profile
				+ ", response=" + response + "]";
	}

}
