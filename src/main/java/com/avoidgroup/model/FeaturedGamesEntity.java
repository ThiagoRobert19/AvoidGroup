package com.avoidgroup.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

import com.avoidgroup.util.EntidadeBase;
@Component("FeaturedGamesEntity")
@Entity
public class FeaturedGamesEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String appid;
	
	private String name;
	
	private String photo;
	
	private String photoname;
	private int q;
	
	

	public int getQ() {
		return q;
	}

	public void setQ(int q) {
		this.q = q;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getAppid() {
		return appid;
	}

	public void setAppid(String appid) {
		this.appid = appid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getPhotoname() {
		return photoname;
	}

	public void setPhotoname(String photoname) {
		this.photoname = photoname;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "FeaturedGamesEntity [id=" + id + ", appid=" + appid + ", name=" + name + ", photo=" + photo
				+ ", photoname=" + photoname + "]";
	}



}
