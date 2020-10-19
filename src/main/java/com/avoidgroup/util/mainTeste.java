package com.avoidgroup.util;

import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PublicKey;
import java.security.SecureRandom;
import java.security.Signature;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.crypto.Cipher;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;

import com.avoidgroup.dao.GenericDao;

public class mainTeste {

	public static void main(String args[]) throws Exception {

		SecureRandom random = new SecureRandom();
		byte[] salt = new byte[16];
		random.nextBytes(salt);
		
		String saltString = salt.toString();
		String saltString2 = salt.toString();
		System.out.println(saltString);
		System.out.println(saltString2);
		
		
		
		
	
	//	String senha = Crypt.criptografar("Mondial19!");

	//	String senha2 = Crypt.criptografar("Mondial19!");

	/*	
		if(senha.hashCode()==senha2.hashCode()){
			System.out.println("é igual hash");
		}else{
			System.out.println("é diferente  hash");
		}
		

		if (senha.equals(senha2)) {
			System.out.println("Sao iguais");
			System.out.println("Senha1: " + senha);
			System.out.println("Senha2: " + senha2);
		} else {
			System.out.println("Diferentes");
			System.out.println("Senha1: " + senha);
			System.out.println("Senha2: " + senha2);
		}
		*/
	}

}
