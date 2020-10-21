package com.avoidgroup.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import com.dropbox.core.DbxException;
import com.dropbox.core.DbxRequestConfig;
import com.dropbox.core.v2.DbxClientV2;
import com.dropbox.core.v2.files.CreateFolderErrorException;
import com.dropbox.core.v2.files.FileMetadata;
import com.dropbox.core.v2.files.FolderMetadata;
import com.dropbox.core.v2.files.ListFolderResult;
import com.dropbox.core.v2.files.Metadata;
import com.dropbox.core.v2.sharing.RequestedVisibility;
import com.dropbox.core.v2.sharing.SharedLinkMetadata;
import com.dropbox.core.v2.sharing.SharedLinkSettings;
import com.dropbox.core.v2.users.FullAccount;

public class DropBoxUtil {
//private static final String ACCESS_TOKEN = "i_mj4H3VjGAAAAAAAAAADJEAs4hmFFd2yewGjm7N4vpcUFrFXuAGEdVYjqUII4sU";
	private static final String ACCESS_TOKEN = "sl.AkBhBaNI_d5JgnxGs3zJzqo_cKCs3_EU69GKWBVq71EqxgYoXimj2Ek51sNjpVkJTvIh_XfMXiaPzEZWhn95rZ9sNbEgpBe7pMNK6xr_6KOaB3nmGhuzwv8G81rjfLnP0l7cTQ60";
	private static final DbxRequestConfig config = new DbxRequestConfig("dropbox/java-tutorial", "en_US");
	private static final DbxClientV2 client = new DbxClientV2(config, ACCESS_TOKEN);

	public static String uploadFile(File arquivo, String name) {
		String url = "";
		try {
			InputStream in = new FileInputStream(arquivo);

			FileMetadata metadata = client.files().uploadBuilder(name).uploadAndFinish(in);
			SharedLinkMetadata sharedLinkMetadata = client.sharing().createSharedLinkWithSettings(name,
					SharedLinkSettings.newBuilder().withRequestedVisibility(RequestedVisibility.PUBLIC).build());
			url = sharedLinkMetadata.getUrl();
			url = url.replaceAll("dl=0", "raw=1");

			
		} catch (FileNotFoundException fne) {
			fne.printStackTrace();
		} catch (IOException ioe) {
			ioe.printStackTrace();
		} catch (DbxException dbxe) {
			dbxe.printStackTrace();
		}
		return url;
	}

	public static String getUrl(File arquivo, String name) {
		String url = "";

		try {

			SharedLinkMetadata sharedLinkMetadata = client.sharing().createSharedLinkWithSettings(name,
					SharedLinkSettings.newBuilder().withRequestedVisibility(RequestedVisibility.PUBLIC).build());
			url = sharedLinkMetadata.getUrl();
			url = url.replaceAll("dl=0", "raw=1");

			System.out.println("url1234: " + sharedLinkMetadata.getUrl());

		} catch (DbxException dbxe) {
			dbxe.printStackTrace();
		}
		return url;
	}

	public static void deleteFile(String path) {
		try {
			Metadata metadata = client.files().delete(path);
		} catch (DbxException dbxe) {
			dbxe.printStackTrace();
		}
	}

	public static FileOutputStream readFile(String n, String nome, String path) throws FileNotFoundException {
		FileOutputStream downloadFile = new FileOutputStream(path + "/" + n);
		try {
			// output file for download --> storage location on local system to
			// download file

			try {
				FileMetadata metadata = client.files().downloadBuilder(nome).download(downloadFile);
			} finally {
				downloadFile.close();
			}
		}
		// exception handled
		catch (DbxException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return downloadFile;
	}

	public static void listFolder() {

		try {
			FullAccount account = client.users().getCurrentAccount();
			System.out.println(account.getName().getDisplayName());

			ListFolderResult result = client.files().listFolder("");

			while (true) {
				for (Metadata metadata : result.getEntries()) {
					System.out.println(metadata.getPathLower());
					System.out.println(metadata.toString());
					System.out.println(metadata.getParentSharedFolderId());

					System.out.println(metadata.getName());
					System.out.println(metadata.getPathDisplay());

				}

				if (!result.getHasMore()) {
					break;
				}

				result = client.files().listFolderContinue(result.getCursor());
			}
		} catch (DbxException dbxe) {
			dbxe.printStackTrace();
		}
	}

	public static void main(String args[]) throws DbxException, IOException {

		listFolder();

		// readFile("/d1.jpg");

		// uploadFile("C:/b2b/CONTRATO.pdf", "/CONTRATO.pdf");
		// readFile( "/CONTRATO.pdf", "CONTRATO.pdf");
		// deleteFile("/CONTRATO.pdf");
	}

}
