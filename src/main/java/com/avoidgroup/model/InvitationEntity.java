package com.avoidgroup.model;

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

import org.springframework.stereotype.Component;

import com.avoidgroup.util.EntidadeBase;
@Component("InvitationEntity")
@Entity
public class InvitationEntity implements Serializable, EntidadeBase {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String status;//open
	
	
	@OneToOne
	@JoinColumn(name = "requester_id")
	private ProfileEntity requester;

	@OneToOne
	@JoinColumn(name = "invited_id")
	private ProfileEntity invited;

	@Temporal(TemporalType.DATE)
	private Date data;

	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public ProfileEntity getRequester() {
		return requester;
	}

	public void setRequester(ProfileEntity requester) {
		this.requester = requester;
	}

	public ProfileEntity getInvited() {
		return invited;
	}

	public void setInvited(ProfileEntity invited) {
		this.invited = invited;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "InvitationEntity [id=" + id + ", status=" + status + ", requester=" + requester + ", invited=" + invited
				+ ", data=" + data + "]";
	}

	
	

}
