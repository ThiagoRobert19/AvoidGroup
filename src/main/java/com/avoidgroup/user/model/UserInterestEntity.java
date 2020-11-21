package com.avoidgroup.user.model;

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

@Component("UserInterestEntity")
@Entity
public class UserInterestEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String tipo;// game

	@OneToOne
	@JoinColumn(name = "gameEntity_id")
	private GameEntity gameEntity;

	@OneToOne
	@JoinColumn(name = "userEntity_id")
	private UserEntity userEntity;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public GameEntity getGameEntity() {
		return gameEntity;
	}

	public void setGameEntity(GameEntity gameEntity) {
		this.gameEntity = gameEntity;
	}

	public UserEntity getUserEntity() {
		return userEntity;
	}

	public void setUserEntity(UserEntity userEntity) {
		this.userEntity = userEntity;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "UserInterestEntity [id=" + id + ", tipo=" + tipo + ", gameEntity=" + gameEntity + ", userEntity="
				+ userEntity + "]";
	}

}
