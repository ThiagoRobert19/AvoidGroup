package com.avoidgroup.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.avoidgroup.util.EntidadeBase;

@Entity
public class NewsEntity implements Serializable, EntidadeBase {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String source_id;
	private String source_name;

	private String author;
	@Column(name = "title", length = 5000)
	private String title;
	@Column(name = "description", length = 5000)
	private String description;
	@Column(name = "url", length = 5000)
	private String url;
	@Column(name = "urlToImage", length = 5000)
	private String urlToImage;
	private String publishedAt;
	
	@Column(name = "content", length = 5000)
	private String content;
	
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getSource_id() {
		return source_id;
	}

	public void setSource_id(String source_id) {
		this.source_id = source_id;
	}

	public String getSource_name() {
		return source_name;
	}

	public void setSource_name(String source_name) {
		this.source_name = source_name;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getUrlToImage() {
		return urlToImage;
	}

	public void setUrlToImage(String urlToImage) {
		this.urlToImage = urlToImage;
	}

	public String getPublishedAt() {
		return publishedAt;
	}

	public void setPublishedAt(String publishedAt) {
		this.publishedAt = publishedAt;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "News [id=" + id + ", source_id=" + source_id + ", source_name=" + source_name + ", author=" + author
				+ ", title=" + title + ", description=" + description + ", url=" + url + ", urlToImage=" + urlToImage
				+ ", publishedAt=" + publishedAt + ", content=" + content + "]";
	}

	

}
