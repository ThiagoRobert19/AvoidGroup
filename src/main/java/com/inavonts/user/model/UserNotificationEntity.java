package com.inavonts.user.model;

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

import com.inavonts.friendship.model.FollowRequestEntity;
import com.inavonts.util.EntidadeBase;

@Component("UserNotificationEntity")
@Entity
public class UserNotificationEntity implements Serializable, EntidadeBase, Comparable<UserNotificationEntity> {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String preview;// Started Following you, Reject your Request, Accepted Your Request, Requested to Follow You
	
	private String extra;//yourequest , requested
	
	private String status;//unread read
	
	private String tipo;//follow , team, publication
	@OneToOne
	@JoinColumn(name = "userEntity_id")
	private UserEntity userEntity;//pessoa logada
	
	@OneToOne
	@JoinColumn(name = "follow_id")
	private UserEntity follow;//seguindo ou seguidor
	
	@OneToOne
	@JoinColumn(name = "followRequest_id")
	private FollowRequestEntity followRequest;//requisicao
	
	@Temporal(TemporalType.DATE)
	private Date dateOfNotification;

	@DateTimeFormat(pattern = "HH:mm:ss")
	@Temporal(TemporalType.TIME)
	private Date timeOfNotification;

	
	public int compareTo(UserNotificationEntity outro) {

		return getId().compareTo(outro.getId());
	}

	
	public String getTipo() {
		return tipo;
	}


	public void setTipo(String tipo) {
		this.tipo = tipo;
	}


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getPreview() {
		return preview;
	}

	public void setPreview(String preview) {
		this.preview = preview;
	}

	

	public String getExtra() {
		return extra;
	}

	public void setExtra(String extra) {
		this.extra = extra;
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

	public UserEntity getFollow() {
		return follow;
	}

	public void setFollow(UserEntity follow) {
		this.follow = follow;
	}

	public FollowRequestEntity getFollowRequest() {
		return followRequest;
	}

	public void setFollowRequest(FollowRequestEntity followRequest) {
		this.followRequest = followRequest;
	}

	public Date getDateOfNotification() {
		return dateOfNotification;
	}

	public void setDateOfNotification(Date dateOfNotification) {
		this.dateOfNotification = dateOfNotification;
	}

	public Date getTimeOfNotification() {
		return timeOfNotification;
	}

	public void setTimeOfNotification(Date timeOfNotification) {
		this.timeOfNotification = timeOfNotification;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	@Override
	public String toString() {
		return "UserNotificationEntity [id=" + id + ", preview=" + preview + ", extra=" + extra + ", status=" + status
				+ ", userEntity=" + userEntity + ", follow=" + follow + ", followRequest=" + followRequest
				+ ", dateOfNotification=" + dateOfNotification + ", timeOfNotification=" + timeOfNotification + "]";
	}


	
	
}
