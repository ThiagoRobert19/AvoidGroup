package com.avoidgroup.team.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.springframework.stereotype.Component;

import com.avoidgroup.game.model.GameEntity;
import com.avoidgroup.util.EntidadeBase;

@Component("TeamLinkEntity")
@Entity
public class TeamLinkEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String url;
	
	private String linkFor;//facebook, instagram,twitter, youtube
	
	@OneToOne
	@JoinColumn(name = "teamEntity_id")
	private TeamEntity teamEntity;

	public TeamEntity getTeamEntity() {
		return teamEntity;
	}

	public void setTeamEntity(TeamEntity teamEntity) {
		this.teamEntity = teamEntity;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getLinkFor() {
		return linkFor;
	}

	public void setLinkFor(String linkFor) {
		this.linkFor = linkFor;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "TeamLinkEntity [id=" + id + ", url=" + url + ", linkFor=" + linkFor + ", teamEntity=" + teamEntity
				+ "]";
	}

	
	
	
	
}
