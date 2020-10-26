package com.inavonts.model;

import java.io.Serializable;
import java.util.Calendar;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.stereotype.Component;

import com.inavonts.util.EntidadeBase;

@Component("GeneralLikeEntity")
@Entity
public class GeneralLikeEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@Temporal(TemporalType.DATE)
	private Date dateOfLike;

	@Temporal(TemporalType.TIMESTAMP)
	private Date timeOfLike;

	@OneToOne
	@JoinColumn(name = "liker_id")
	private UserEntity liker;

	@OneToOne
	@JoinColumn(name = "publication_id")
	private GeneralPublicationEntity publication;

	@OneToOne
	@JoinColumn(name = "comment_id")
	private GeneralCommentEntity comment;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getDateOfLike() {
		return dateOfLike;
	}

	public void setDateOfLike(Date date) {
		this.dateOfLike = date;
	}

	public Date getTimeOfLike() {
		return timeOfLike;
	}

	public void setTimeOfLike(Date date) {
		this.timeOfLike = date;
	}

	public UserEntity getLiker() {
		return liker;
	}

	public void setLiker(UserEntity liker) {
		this.liker = liker;
	}

	public GeneralPublicationEntity getPublication() {
		return publication;
	}

	public void setPublication(GeneralPublicationEntity publication) {
		this.publication = publication;
	}

	public GeneralCommentEntity getComment() {
		return comment;
	}

	public void setComment(GeneralCommentEntity comment) {
		this.comment = comment;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "LikeEntity [id=" + id + ", dateOfLike=" + dateOfLike + ", timeOfLike=" + timeOfLike + ", liker=" + liker
				+ ", publication=" + publication + ", comment=" + comment + "]";
	}

}
