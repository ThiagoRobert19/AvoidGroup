package com.avoidgroup.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;
import com.avoidgroup.util.EntidadeBase;

@Component("GeneralPublicationEntity")
@Entity
public class GeneralPublicationEntity implements Serializable, EntidadeBase, Comparable<GeneralPublicationEntity> {
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
	private ProfileEntity publisher;

	@Temporal(TemporalType.DATE)
	private Date dateOfPublication;

	@DateTimeFormat(pattern = "HH:mm:ss")
	@Temporal(TemporalType.TIME)
	private Date timeOfPublication;

	// =========================================

	private String shared;

	private Integer originalID;

	@OneToOne
	@JoinColumn(name = "sharer_id")
	private ProfileEntity sharer;

	@Temporal(TemporalType.DATE)
	private Date dateOfShare;

	@DateTimeFormat(pattern = "HH:mm:ss")
	@Temporal(TemporalType.TIME)
	private Date timeOfShare;

	private String contentShared;

	// =========================================
	private String youLiked;// yes, no
	private Integer countShared;
	private Integer countLike;
	private Integer countComment;
	// =========================================

	public int compareTo(GeneralPublicationEntity outro) {

		return getId().compareTo(outro.getId());
	}

	public String getYouLiked() {
		return youLiked;
	}

	public void setYouLiked(String youLiked) {
		this.youLiked = youLiked;
	}

	public Integer getCountShared() {
		return countShared;
	}

	public void setCountShared(Integer countShared) {
		this.countShared = countShared;
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

	public String getPhotoName() {
		return photoName;
	}

	public void setPhotoName(String photoName) {
		this.photoName = photoName;
	}

	public Integer getOriginalID() {
		return originalID;
	}

	public void setOriginalID(Integer originalID) {
		this.originalID = originalID;
	}

	public String getShared() {
		return shared;
	}

	public void setShared(String shared) {
		this.shared = shared;
	}

	public ProfileEntity getSharer() {
		return sharer;
	}

	public void setSharer(ProfileEntity sharer) {
		this.sharer = sharer;
	}

	public Date getDateOfShare() {
		return dateOfShare;
	}

	public void setDateOfShare(Date dateOfShare) {
		this.dateOfShare = dateOfShare;
	}

	public Date getTimeOfShare() {
		return timeOfShare;
	}

	public void setTimeOfShare(Date timeOfShare) {
		this.timeOfShare = timeOfShare;
	}

	public String getContentShared() {
		return contentShared;
	}

	public void setContentShared(String contentShared) {
		this.contentShared = contentShared;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	private String timeago;

	private Integer active;// 0 nao 1 sim

	public String getTimeago() {
		return timeago;
	}

	public void setTimeago(String timeago) {
		this.timeago = timeago;
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

	public String getPrivacy() {
		return privacy;
	}

	public void setPrivacy(String privacy) {
		this.privacy = privacy;
	}

	public ProfileEntity getPublisher() {
		return publisher;
	}

	public void setPublisher(ProfileEntity publisher) {
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

	public Integer getActive() {
		return active;
	}

	public void setActive(Integer active) {
		this.active = active;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "GeneralPublicationEntity [id=" + id + ", content=" + content + ", privacy=" + privacy + ", image="
				+ image + ", photoName=" + photoName + ", publisher=" + publisher + ", dateOfPublication="
				+ dateOfPublication + ", timeOfPublication=" + timeOfPublication + ", shared=" + shared
				+ ", originalID=" + originalID + ", sharer=" + sharer + ", dateOfShare=" + dateOfShare
				+ ", timeOfShare=" + timeOfShare + ", contentShared=" + contentShared + ", countShared=" + countShared
				+ ", countLike=" + countLike + ", countComment=" + countComment + ", timeago=" + timeago + ", active="
				+ active + "]";
	}

}
