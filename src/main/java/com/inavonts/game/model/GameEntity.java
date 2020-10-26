package com.inavonts.game.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

import com.inavonts.util.EntidadeBase;

@Component("GameEntity")
@Entity
public class GameEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String name;

	private String description;

	private String imagedDefault;

	private String imageName;

	public Integer getId() {
		return id;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImagedDefault() {
		return imagedDefault;
	}

	public void setImagedDefault(String imagedDefault) {
		this.imagedDefault = imagedDefault;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "GameEntity [id=" + id + ", name=" + name + ", description=" + description + ", imagedDefault="
				+ imagedDefault + ", imageName=" + imageName + "]";
	}

}
