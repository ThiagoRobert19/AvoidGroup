package com.avoidgroup.util;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectsRequest;
import com.amazonaws.services.s3.model.ObjectListing;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;
import com.amazonaws.services.s3.model.S3ObjectSummary;

public class AWSAPI {
	Regions clientRegion = Regions.US_EAST_2;

	static final String ACCESS_KEY = "AKIAIL6C7PZKRZRL6QRA";
	static final String SECRET_KEY = "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";
	AWSCredentials credentials = new BasicAWSCredentials(ACCESS_KEY, SECRET_KEY);

	static final String BUCKET = "inavontsbucket";
	static final String key_name = "foto.png";
	static final String filepath = "C://Desenvolvimento//imagem.png";
	static final String caminho = "https://inavontsbucket.s3.us-east-2.amazonaws.com/";

	// http://inavontsbucket.s3.amazonaws.com/foto.png access denied

	final AmazonS3 s3 = AmazonS3ClientBuilder.standard().withCredentials(new AWSStaticCredentialsProvider(credentials))
			.withRegion(Regions.US_EAST_2).build();

	public void uploadfile(File image, String name) {

		try {
		//	s3.putObject(BUCKET, key_name, new File(filepath));
		//	s3.putObject(BUCKET, name, image);
			
			s3.putObject(new PutObjectRequest(BUCKET, name, image)
				      .withCannedAcl(CannedAccessControlList.PublicRead));
			
			
		} catch (AmazonServiceException e) {
			System.out.println(e.getErrorMessage());
		}
	}
	public String getPath() {

		return caminho;
	}

	public void list() {

		ObjectListing objectListing = s3.listObjects(BUCKET);
		for (S3ObjectSummary os : objectListing.getObjectSummaries()) {
			System.out.println(os.getKey());
		}

	}

	public void download() throws IOException {

		S3Object s3object = s3.getObject(BUCKET, "foto.png");
		S3ObjectInputStream inputStream = s3object.getObjectContent();
		FileUtils.copyInputStreamToFile(inputStream, new File("/Users/Consulado/Desktop/fotonoamazon.png"));

	}

	public void delete(String name) {

		s3.deleteObject(BUCKET, name);

	}

	public void deleteMultiplo() {

		String objkeyArr[] = { "document/hello.txt", "document/pic.png" };

		DeleteObjectsRequest delObjReq = new DeleteObjectsRequest(BUCKET).withKeys(objkeyArr);
		s3.deleteObjects(delObjReq);

	}
}
