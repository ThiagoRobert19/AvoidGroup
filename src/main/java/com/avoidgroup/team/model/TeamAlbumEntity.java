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

import com.avoidgroup.user.model.UserEntity;
import com.avoidgroup.util.EntidadeBase;

@Component("TeamAlbumEntity")
@Entity
public class TeamAlbumEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String uuid;

	private String image;
	private String photoName;
	private String subtitle;
	
	private String privacy;//private or public

	@OneToOne
	@JoinColumn(name = "teamEntity_id")
	private TeamEntity teamEntity;

	@OneToOne
	@JoinColumn(name = "userEntity_id")
	private UserEntity userEntity;

	@Temporal(TemporalType.DATE)
	private Date dateOfPublication;

	@DateTimeFormat(pattern = "HH:mm:ss")
	@Temporal(TemporalType.TIME)
	private Date timeOfPublication;

	
	
	public String getPrivacy() {
		return privacy;
	}

	public void setPrivacy(String privacy) {
		this.privacy = privacy;
	}

	public String getSubtitle() {
		return subtitle;
	}

	public void setSubtitle(String subtitle) {
		this.subtitle = subtitle;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
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

	public TeamEntity getTeamEntity() {
		return teamEntity;
	}

	public void setTeamEntity(TeamEntity teamEntity) {
		this.teamEntity = teamEntity;
	}

	public UserEntity getUserEntity() {
		return userEntity;
	}

	public void setUserEntity(UserEntity userEntity) {
		this.userEntity = userEntity;
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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "TeamAlbumEntity [id=" + id + ", uuid=" + uuid + ", image=" + image + ", photoName=" + photoName
				+ ", subtitle=" + subtitle + ", teamEntity=" + teamEntity + ", userEntity=" + userEntity
				+ ", dateOfPublication=" + dateOfPublication + ", timeOfPublication=" + timeOfPublication + "]";
	}

}
