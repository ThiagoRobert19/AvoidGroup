package com.inavonts.team.model;

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

import com.inavonts.publication.model.GeneralPublicationEntity;
import com.inavonts.user.model.UserEntity;
import com.inavonts.util.EntidadeBase;

@Component("TeamPublicationEntity")
@Entity
public class TeamPublicationEntity implements Serializable, EntidadeBase, Comparable<TeamPublicationEntity> {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String content;

	private String privacy;// public or private

	private String image;// public or private

	private String photoName;
	@OneToOne
	@JoinColumn(name = "publisher_id")
	private UserEntity publisher;
	
	@OneToOne
	@JoinColumn(name = "teamEntity_id")
	private TeamEntity teamEntity;

	@Temporal(TemporalType.DATE)
	private Date dateOfPublication;

	@DateTimeFormat(pattern = "HH:mm:ss")
	@Temporal(TemporalType.TIME)
	private Date timeOfPublication;

	private String youLiked;// yes, no
	private Integer countLike;
	private Integer countComment;
	// =========================================

	public int compareTo(TeamPublicationEntity outro) {

		return getId().compareTo(outro.getId());
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getContent() {
		return content;
	}

	public TeamEntity getTeamEntity() {
		return teamEntity;
	}

	public void setTeamEntity(TeamEntity teamEntity) {
		this.teamEntity = teamEntity;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getPrivacy() {
		return privacy;
	}

	public void setPrivacy(String privacy) {
		this.privacy = privacy;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getPhotoName() {
		return photoName;
	}

	public void setPhotoName(String photoName) {
		this.photoName = photoName;
	}

	public UserEntity getPublisher() {
		return publisher;
	}

	public void setPublisher(UserEntity publisher) {
		this.publisher = publisher;
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


	public String getYouLiked() {
		return youLiked;
	}

	public void setYouLiked(String youLiked) {
		this.youLiked = youLiked;
	}


	public Integer getCountLike() {
		return countLike;
	}

	public void setCountLike(Integer countLike) {
		this.countLike = countLike;
	}

	public Integer getCountComment() {
		return countComment;
	}

	public void setCountComment(Integer countComment) {
		this.countComment = countComment;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "TeamPublicationEntity [id=" + id + ", content=" + content + ", privacy=" + privacy + ", image=" + image
				+ ", photoName=" + photoName + ", publisher=" + publisher + ", teamEntity=" + teamEntity
				+ ", dateOfPublication=" + dateOfPublication + ", timeOfPublication=" + timeOfPublication
				+ ", youLiked=" + youLiked + ", countLike=" + countLike + ", countComment=" + countComment + "]";
	}


}
