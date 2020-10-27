package com.inavonts.friendship.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.springframework.stereotype.Component;

import com.inavonts.user.model.UserEntity;
import com.inavonts.util.EntidadeBase;
@Component("FollowRequestEntity")
@Entity
public class FollowRequestEntity implements Serializable, EntidadeBase{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String uuid;

	@OneToOne
	@JoinColumn(name = "follower_id")
	private UserEntity follower;//seguidor

	@OneToOne
	@JoinColumn(name = "followed_id")
	private UserEntity followed;//seguido

	private String status;//approved, pending, recused

	
	
	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public UserEntity getFollower() {
		return follower;
	}

	public void setFollower(UserEntity follower) {
		this.follower = follower;
	}

	public UserEntity getFollowed() {
		return followed;
	}

	public void setFollowed(UserEntity followed) {
		this.followed = followed;
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
		return "FollowRequestEntity [id=" + id + ", follower=" + follower + ", followed=" + followed + ", status="
				+ status + "]";
	}
	
	
}
