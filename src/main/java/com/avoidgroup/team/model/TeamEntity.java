package com.avoidgroup.team.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.springframework.stereotype.Component;

import com.avoidgroup.model.ProfileEntity;
import com.avoidgroup.util.EntidadeBase;

@Component("TeamEntity")
@Entity
public class TeamEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String name;

	private String uuid;

	private String image;

	private String about;
	private String requestTournament;

	@OneToOne
	@JoinColumn(name = "owner_id")
	private ProfileEntity owner;

	
	public String getRequestTournament() {
		return requestTournament;
	}

	public void setRequestTournament(String requestTournament) {
		this.requestTournament = requestTournament;
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

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public ProfileEntity getOwner() {
		return owner;
	}

	public void setOwner(ProfileEntity owner) {
		this.owner = owner;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "TeamEntity [id=" + id + ", name=" + name + ", uuid=" + uuid + ", image=" + image + ", about=" + about
				+ ", requestTournament=" + requestTournament + ", owner=" + owner + "]";
	}

	

}
