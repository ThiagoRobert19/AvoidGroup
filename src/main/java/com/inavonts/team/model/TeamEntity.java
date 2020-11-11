package com.inavonts.team.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.springframework.stereotype.Component;

import com.inavonts.game.model.GameEntity;
import com.inavonts.user.model.UserEntity;
import com.inavonts.util.EntidadeBase;

@Component("TeamEntity")
@Entity
public class TeamEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String name;

	private String uuid;

	private String photo;
	private String photoName;

	private String backPhoto;
	private String backPhotoName;
	@Column(length = 500)
	private String about;

	@OneToOne
	@JoinColumn(name = "owner_id")
	private UserEntity owner;
	@OneToOne
	@JoinColumn(name = "admin_id")
	private UserEntity admin;

	@OneToOne
	@JoinColumn(name = "game_id")
	private GameEntity game;

	public Integer getId() {
		return id;
	}

	public String getBackPhoto() {
		return backPhoto;
	}

	public void setBackPhoto(String backPhoto) {
		this.backPhoto = backPhoto;
	}

	public String getBackPhotoName() {
		return backPhotoName;
	}

	public void setBackPhotoName(String backphotoName) {
		this.backPhotoName = backphotoName;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getPhotoName() {
		return photoName;
	}

	public void setPhotoName(String photoName) {
		this.photoName = photoName;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public UserEntity getOwner() {
		return owner;
	}

	public void setOwner(UserEntity owner) {
		this.owner = owner;
	}

	public UserEntity getAdmin() {
		return admin;
	}

	public void setAdmin(UserEntity admin) {
		this.admin = admin;
	}

	public GameEntity getGame() {
		return game;
	}

	public void setGame(GameEntity game) {
		this.game = game;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "TeamEntity [id=" + id + ", name=" + name + ", uuid=" + uuid + ", photo=" + photo + ", photoName="
				+ photoName + ", backPhoto=" + backPhoto + ", backPhotoName=" + backPhotoName + ", about=" + about
				+ ", owner=" + owner + ", admin=" + admin + ", game=" + game + "]";
	}

}
