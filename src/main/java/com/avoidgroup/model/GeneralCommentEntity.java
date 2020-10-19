package com.avoidgroup.model;

import java.io.Serializable;
import java.util.Calendar;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.stereotype.Component;

import com.avoidgroup.util.EntidadeBase;

@Component("GeneralCommentEntity")
@Entity
public class GeneralCommentEntity implements Serializable, EntidadeBase, Comparable<GeneralCommentEntity> {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String content;

	@Temporal(TemporalType.DATE)
	private Date dateOfComment;

	@Temporal(TemporalType.TIMESTAMP)
	private Date timeOfComment;

	@ManyToOne
	@JoinColumn(name = "commenter_id")
	private UserEntity commenter;

	@ManyToOne
	@JoinColumn(name = "publication_id")
	private GeneralPublicationEntity publication;

	public GeneralPublicationEntity getPublication() {
		return publication;
	}

	public void setPublication(GeneralPublicationEntity publication) {
		this.publication = publication;
	}

	public int compareTo(GeneralCommentEntity outro) {

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

	public void setContent(String content) {
		this.content = content;
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

	public UserEntity getCommenter() {
		return commenter;
	}

	public void setCommenter(UserEntity commenter) {
		this.commenter = commenter;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "CommentEntity [id=" + id + ", content=" + content + ", dateOfComment=" + dateOfComment
				+ ", timeOfComment=" + timeOfComment + ", commenter=" + commenter + "]";
	}

}
