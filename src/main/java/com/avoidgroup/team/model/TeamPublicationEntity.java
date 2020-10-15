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

@Component("TeamPublicationEntity")
@Entity
public class TeamPublicationEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String content;

	private String image;
	private String image_name;

	@OneToOne
	@JoinColumn(name = "publisher_id")
	private ProfileEntity publisher;

	@OneToOne
	@JoinColumn(name = "team_id")
	private TeamEntity team;

	@Temporal(TemporalType.DATE)
	private Date dateOfComment;

	@DateTimeFormat(pattern = "HH:mm:ss")
	@Temporal(TemporalType.TIME)
	private Date timeOfComment;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getImage_name() {
		return image_name;
	}

	public void setImage_name(String image_name) {
		this.image_name = image_name;
	}

	public ProfileEntity getPublisher() {
		return publisher;
	}

	public void setPublisher(ProfileEntity publisher) {
		this.publisher = publisher;
	}

	public TeamEntity getTeam() {
		return team;
	}

	public void setTeam(TeamEntity team) {
		this.team = team;
	}

	public Date getDateOfComment() {
		return dateOfComment;
	}

	public void setDateOfComment(Date dateOfComment) {
		this.dateOfComment = dateOfComment;
	}

	public Date getTimeOfComment() {
		return timeOfComment;
	}

	public void setTimeOfComment(Date timeOfComment) {
		this.timeOfComment = timeOfComment;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "TeamPublicationEntity [id=" + id + ", content=" + content + ", image=" + image + ", image_name="
				+ image_name + ", publisher=" + publisher + ", team=" + team + ", dateOfComment=" + dateOfComment
				+ ", timeOfComment=" + timeOfComment + "]";
	}

}
