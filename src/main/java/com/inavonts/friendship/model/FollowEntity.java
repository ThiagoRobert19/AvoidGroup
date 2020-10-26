package com.inavonts.friendship.model;

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

import com.inavonts.model.UserEntity;
import com.inavonts.util.EntidadeBase;

@Component("FollowEntity")
@Entity
public class FollowEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@OneToOne
	@JoinColumn(name = "follower_id")
	private UserEntity follower;//seguidor

	@OneToOne
	@JoinColumn(name = "followed_id")
	private UserEntity followed;//seguido

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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "FollowEntity [id=" + id + ", follower=" + follower + ", followed=" + followed + "]";
	}


}
