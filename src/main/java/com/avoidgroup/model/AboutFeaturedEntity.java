package com.avoidgroup.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

import com.avoidgroup.util.EntidadeBase;

@Component("AboutFeaturedEntity")
@Entity
public class AboutFeaturedEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String description;
	private String about;
	private String pcRequirements;
	private String photo;
	private String name;

	
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

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public String getPcRequirements() {
		return pcRequirements;
	}

	public void setPcRequirements(String pcRequirements) {
		this.pcRequirements = pcRequirements;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "AboutFeaturedEntity [id=" + id + ", description=" + description + ", about=" + about
				+ ", pcRequirements=" + pcRequirements + ", photo=" + photo + ", name=" + name + "]";
	}

	

}
