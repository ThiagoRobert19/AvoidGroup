package com.inavonts.util;

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

import com.inavonts.dao.GenericDao;

public class mainTeste {

	public static void main(String args[]) throws Exception {

		AWSAPI aws = new AWSAPI();
		System.out.println("tenta upload");
		aws.uploadfile();
		System.out.println("fez");
		
		aws.list();
		//aws.delete();
		System.out.println("ver lista");
		aws.list();
	
	}

}
