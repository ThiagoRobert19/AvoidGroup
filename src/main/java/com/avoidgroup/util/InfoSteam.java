package com.avoidgroup.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.URL;
import java.nio.charset.Charset;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


public class InfoSteam {
/*
	private static String readAll(Reader rd) throws IOException {
		StringBuilder sb = new StringBuilder();
		int cp;
		while ((cp = rd.read()) != -1) {
			sb.append((char) cp);
		}
		return sb.toString();
	}

	private static JSONObject readJsonFromUrl(String url) throws IOException, JSONException {
		InputStream is = new URL(url).openStream();
		try {
			BufferedReader rd = new BufferedReader(new InputStreamReader(is, Charset.forName("UTF-8")));
			String jsonText = readAll(rd);
			JSONObject json = new JSONObject(jsonText);
			return json;
		} finally {
			is.close();
		}
	}

	public JSONArray GetPlayerAchievements(String steamID, int gameID) {

		steamID = "76561198050400232";
		try {
			JSONObject json = readJsonFromUrl(
					"http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=" + gameID
							+ "&key=1475981AF46E91A208CA576A3F244070&steamid=" + steamID);
			JSONObject j = (JSONObject) json.get("response");
			JSONArray values = j.getJSONArray("games");
			return values;
		} catch (Exception e) {
			return null;
		}

	}

	public JSONArray GetRecentlyPlayedGames(String steamID) {

		try {
			JSONObject json = readJsonFromUrl(
					"http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=1475981AF46E91A208CA576A3F244070&steamid="
							+ steamID + "&format=json");
			JSONObject j = (JSONObject) json.get("response");
			JSONArray values = j.getJSONArray("games");
			return values;
		} catch (Exception e) {
			return null;
		}

	}

	public JSONArray GetFriends(String steamID) {
		// http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=1475981AF46E91A208CA576A3F244070&steamid=76561198050400232&relationship=friend
		try {
			JSONObject json = readJsonFromUrl(
					"http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=1475981AF46E91A208CA576A3F244070&steamid="
							+ steamID + "&relationship=friend");
			JSONObject j = (JSONObject) json.get("response");
			JSONArray values = j.getJSONArray("friends");
			return values;
		} catch (Exception e) {
			return null;
		}
	}

	public JSONArray GetSummarie(String steamID) {
		// http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=1475981AF46E91A208CA576A3F244070&steamids=76561197960435530
		try {
			JSONObject json = readJsonFromUrl(
					" http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=1475981AF46E91A208CA576A3F244070&steamids="
							+ steamID);
			JSONObject j = (JSONObject) json.get("response");
			JSONArray values = j.getJSONArray("players");
			return values;
		} catch (Exception e) {
			return null;
		}
	}

	public JSONObject GetSteamLevel(String steamID) {
		// http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=1475981AF46E91A208CA576A3F244070&steamid=76561197960434622&include_appinfo=1&format=json
		try {
	
		System.out.println("Buscando level");
			JSONObject json = readJsonFromUrl(
					"http://api.steampowered.com/IPlayerService/GetSteamLevel/v0001/?key=1475981AF46E91A208CA576A3F244070&steamid="
							+ steamID);
			JSONObject j = (JSONObject) json.get("response");
			
			return j;
		} catch (Exception e) {
			return null;
		}
	}

	public JSONArray GetOwnedGames(String steamID) {
		// http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=1475981AF46E91A208CA576A3F244070&steamid=76561197960434622&include_appinfo=1&format=json
		try {
			JSONObject json = readJsonFromUrl(
					" http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=1475981AF46E91A208CA576A3F244070&steamid="
							+ steamID + "&include_appinfo=1&format=json");
			JSONObject j = (JSONObject) json.get("response");
			JSONArray values = j.getJSONArray("games");
			return values;
		} catch (Exception e) {
			return null;
		}
	}

	public JSONArray GetAllGames(String steamID) {
		// http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=STEAMKEY&format=json
		// http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=1475981AF46E91A208CA576A3F244070&format=json
		try {
			JSONObject json = readJsonFromUrl(
					" http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=STEAMKEY&format=json");
			JSONObject j = (JSONObject) json.get("applist");
			JSONArray values = j.getJSONArray("apps");
			return values;
		} catch (Exception e) {
			System.out.println("erro: " + e);
			return null;
		}
	}

	public AboutFeaturedEntity GetGameInfo(String appId) {
		AboutFeaturedEntity aboutF = new AboutFeaturedEntity();
		try {
			JSONObject json = readJsonFromUrl("  https://store.steampowered.com/api/appdetails?appids=" + appId);
			JSONObject j = (JSONObject) json.get(appId);

			JSONObject ja = (JSONObject) j.get("data");

			aboutF.setAbout(ja.get("about_the_game").toString());
			aboutF.setDescription(ja.get("short_description").toString());
			aboutF.setPcRequirements(ja.get("pc_requirements").toString());

			return aboutF;
		} catch (Exception e) {
			System.out.println("erro: " + e);
			return null;
		}
	}

	public JSONArray GetNewsApp(String appid) {
		// http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json
		try {
			JSONObject json = readJsonFromUrl(" http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid="
					+ appid + "&count=10&maxlength=2000&format=json");
			JSONObject j = (JSONObject) json.get("appnews");
			JSONArray values = j.getJSONArray("newsitems");
			return values;
		} catch (Exception e) {
			return null;
		}
	}
*/
}
