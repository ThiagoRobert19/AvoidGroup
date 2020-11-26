package com.avoidgroup.user.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

import com.avoidgroup.util.Criptografia;
import com.avoidgroup.util.EntidadeBase;

@Component("UserEntity")
@Entity
public class UserEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String uuid;
	private String name;

	private String email;

	private String password;

	private String userName;

	private String photo;
	private String photoName;

	private String backPhoto;
	private String backPhotoName;

	private String phone;

	private String perfil;// public, private
	private String follow;// yes,no
	
	private String facebook;
	private String instagram;
	private String twitter;
	private String youtube;
	
	
	@Column(length = 500)
	private String about;
	
	
	
	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public String getFacebook() {
		return facebook;
	}

	public void setFacebook(String facebook) {
		this.facebook = facebook;
	}

	public String getInstagram() {
		return instagram;
	}

	public void setInstagram(String instagram) {
		this.instagram = instagram;
	}

	public String getTwitter() {
		return twitter;
	}

	public void setTwitter(String twitter) {
		this.twitter = twitter;
	}

	public String getYoutube() {
		return youtube;
	}

	public void setYoutube(String youtube) {
		this.youtube = youtube;
	}

	public String getPhotoName() {
		return photoName;
	}

	public void setPhotoName(String photoName) {
		this.photoName = photoName;
	}

	public String getBackPhotoName() {
		return backPhotoName;
	}

	public void setBackPhotoName(String backPhotoName) {
		this.backPhotoName = backPhotoName;
	}

	public String getFollow() {
		return follow;
	}

	public String getBackPhoto() {
		return backPhoto;
	}

	public void setBackPhoto(String backPhoto) {
		this.backPhoto = backPhoto;
	}

	public void setFollow(String follow) {
		this.follow = follow;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getPerfil() {
		return perfil;
	}

	public void setPerfil(String perfil) {
		this.perfil = perfil;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public Integer getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getEmail() {
		return email.toLowerCase();
	}

	public void setEmail(String email) {
		this.email = email.toLowerCase();
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = Criptografia.criptografar(password);
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "UserEntity [id=" + id + ", uuid=" + uuid + ", name=" + name + ", email=" + email + ", password="
				+ password + ", userName=" + userName + ", photo=" + photo + ", photoName=" + photoName + ", backPhoto="
				+ backPhoto + ", backPhotoName=" + backPhotoName + ", phone=" + phone + ", perfil=" + perfil
				+ ", follow=" + follow + "]";
	}

}
