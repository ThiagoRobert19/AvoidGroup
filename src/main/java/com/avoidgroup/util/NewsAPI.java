package com.avoidgroup.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.URL;
import java.nio.charset.Charset;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.XML;

import com.avoidgroup.model.NewsEntity;


public class NewsAPI {

	static final String API_KEY = "KTXRMvC8XKGpgY2tIYJySOpLGdFoYNUl";

	public String getNews() throws JSONException {
		String json = "";
		HttpGet request = new HttpGet(
				"https://api.nytimes.com/svc/news/v3/content/all/technology.json?api-key=" + API_KEY);

		request.setHeader("apiKey", API_KEY);
		HttpResponse response = null;
		try {
			HttpClient httpClient = new DefaultHttpClient();
			response = httpClient.execute(request);

			json = EntityUtils.toString(response.getEntity(), "UTF-8");

		} catch (ClientProtocolException e) {
			System.out.println("Erro1: " + e.getMessage());

		} catch (IOException e) {
			System.out.println("Erro2: " + e.getMessage());
		}
		return json;
	}

	public List<NewsEntity> getGeneral(String topic) {
		List<NewsEntity> list = new ArrayList<NewsEntity>();
		String xmlText = "";
		try {
			xmlText = readJsonFromUrl("https://news.google.com/rss/search?q=" + topic + "&hl=en-US&gl=US&ceid=US:en");
			JSONObject xmlJSONObj = XML.toJSONObject(xmlText);

			JSONObject source = (JSONObject) xmlJSONObj.get("rss");

			JSONObject channel = (JSONObject) source.get("channel");

			JSONArray item = channel.getJSONArray("item");

			for (int i = 0; i < item.length(); i++) {
				NewsEntity n = new NewsEntity();

				JSONObject topH = item.getJSONObject(i);

				n.setContent(topH.get("description").toString());
				n.setDescription(topH.get("description").toString());
				n.setTitle(topH.get("title").toString());

				n.setPublishedAt(topH.get("pubDate").toString());

				n.setUrl(topH.get("link").toString());

				list.add(n);
			}

			return list;
		} catch (Exception e) {
			System.out.println("erro: " + e.getMessage());
			System.out.println("erro 2: " + e.getMessage().toString());
			return list;
		}

	}
	


	private static String readAll(Reader rd) throws IOException {
		StringBuilder sb = new StringBuilder();
		int cp;
		while ((cp = rd.read()) != -1) {
			sb.append((char) cp);
		}
		return sb.toString();
	}

	private static String readJsonFromUrl(String url) throws IOException, JSONException {
		InputStream is = new URL(url).openStream();
		try {
			BufferedReader rd = new BufferedReader(new InputStreamReader(is, Charset.forName("UTF-8")));
			String xmlText = readAll(rd);

			return xmlText;
		} finally {
			is.close();
		}
	}
}
