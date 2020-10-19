package com.avoidgroup.util;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

public class Crypt {
	public static byte[] criptografar(String passwordToHash, String saltString) throws NoSuchAlgorithmException {
	//	SecureRandom random = new SecureRandom();
	//	byte[] salt = new byte[16];
	//	random.nextBytes(salt);
		MessageDigest md = MessageDigest.getInstance("SHA-512");
		md.update(saltString.getBytes());
		byte[] hashedPassword = md.digest(passwordToHash.getBytes(StandardCharsets.UTF_8));
		return hashedPassword;
		//return (new String(hashedPassword));
	}

}
