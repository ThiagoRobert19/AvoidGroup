package com.avoidgroup.friendship.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.springframework.stereotype.Component;

import com.avoidgroup.user.model.UserEntity;
import com.avoidgroup.util.EntidadeBase;

@Component("SuggestionEntity")
@Entity
public class SuggestionEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@OneToOne
	@JoinColumn(name = "suggestion_id")
	private UserEntity suggestion;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public UserEntity getSuggestion() {
		return suggestion;
	}

	public void setSuggestion(UserEntity suggestion) {
		this.suggestion = suggestion;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
