/**
 * 
 */
package com.avoidgroup.util;

import java.io.Serializable;
import java.util.Locale;


import javax.inject.Inject;
import javax.inject.Named;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;

@Component("cultura")
@Named("cultura")
public class CulturaScope implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Locale locale;
	private String nome;

	@Inject
	private HttpServletRequest request;

	public CulturaScope() {
		nome = "cultura";
		
		if (request == null) {
			locale = new Locale("en", "US");

		} else {
			locale = request.getLocale();
		}
		

	}
	public Locale getLocale() {
		return locale;
	}


	public void setLocale(Locale locale) {

		this.locale = locale;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getNome() {
		return nome;
	}

	public ECultura getECultura() {

		String idCultura = this.getLocale().getLanguage().toLowerCase() + "_"
				+ this.getLocale().getCountry().toUpperCase();
		ECultura retorno = ECultura.valueOf(idCultura);

		if (retorno == null) {

			retorno = ECultura.en_US;
		}

		
		return retorno;
	
	}
}