package com.avoidgroup.util;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;
import java.util.concurrent.SynchronousQueue;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.avoidgroup.dao.GenericDao;



@Component
@EnableScheduling
public class ScheduledTasks {
	

	/*@Scheduled(fixedRate = 1800000)
	public void scheduledESports() {

		Thread one = new Thread() {
			public void run() {
				try {
					TimeZone zone = TimeZone.getTimeZone("America/New_York");

					SimpleDateFormat sd = new SimpleDateFormat("yyyy/MM/dd");
					sd.setTimeZone(zone);
					Date d = Calendar.getInstance().getTime();
					String today = sd.format(d);

					Map<String, Object> map = new HashMap<String, Object>();
					daoMatchOfTheDay.delete(MatchOfTheDayEntity.class, map, "");
					listSport.clear();
					listSport = createMatches(zone, today);
					System.out.println("Criando partidas");
					saveMatches(listSport);

				} catch (JSONException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

			}
		};

		one.start();
	}

	@Scheduled(fixedRate = 900000)
	public void scheduledNews() {
		System.out.println("Criando news");
		Thread one = new Thread() {
			public void run() {
				NewsAPI api = new NewsAPI();
				String json = api.getNews();

				JSONObject obj = new JSONObject(json);
				JSONArray values = obj.getJSONArray("results");

				for (int i = 0; i < values.length(); i++) {
					try {

						JSONObject topH = values.getJSONObject(i);

						System.out.println("Title: " + topH.get("title").toString());

						System.out.println("Abstract: " + topH.get("abstract").toString());

						System.out.println("Thumbnail: " + topH.get("thumbnail_standard").toString());

						System.out.println("Source: " + topH.get("source").toString());

						String datareal = topH.get("first_published_date").toString();
						String result = "";
						result = datareal.substring(0, 10);
						System.out.println("Data: " + result);

						JSONArray mult = topH.getJSONArray("multimedia");
						JSONObject m = mult.getJSONObject(mult.length() - 1);

						System.out.println("Imagem: " + m.get("url").toString());

					} finally {
						continue;
					}

				}

			}
		};

		one.start();
	}

	@Scheduled(fixedRate = 86400000)
	public void scheduledTournamentsPlayersTeamsLeaguesSeries() {

		Thread one = new Thread() {
			public void run() {
				try {

					Map<String, Object> map = new HashMap<String, Object>();

					daoTournament.delete(ESportTournamentEntity.class, map, "");
					listTournament.clear();
					listTournament = createTournaments();

					saveTournaments(listTournament);

					// =====================

					daoPlayer.delete(ESportPlayerEntity.class, map, "");
					listPlayer.clear();
					listPlayer = createPlayers();

					savePlayers(listPlayer);

					// =====================

					daoTeam.delete(ESportTeamEntity.class, map, "");
					listTeam.clear();
					listTeam = createTeams();

					saveTeams(listTeam);

					// =====================

					daoLeague.delete(ESportLeagueEntity.class, map, "");
					listLeague.clear();
					listLeague = createLeagues();

					saveLeagues(listLeague);

					// =====================

					daoSerie.delete(ESportSerieEntity.class, map, "");
					listSerie.clear();
					listSerie = createSeries();

					saveSeries(listSerie);

				} catch (JSONException e) { // TODO Auto-generated catch block
					e.printStackTrace();
				}

			}
		};

		one.start();
	}

	public List<MatchOfTheDayEntity> createMatches(TimeZone zone, String today) {
		List<MatchOfTheDayEntity> list = new ArrayList<MatchOfTheDayEntity>();
		SimpleDateFormat formatador = new SimpleDateFormat("yyyy-MM-dd");
		formatador.setTimeZone(zone);
		Calendar calendario = Calendar.getInstance();

		Date dataparamatch = calendario.getTime();
		calendario.add(Calendar.DAY_OF_MONTH, -1);
		dataparamatch = calendario.getTime();
		String umpassado = formatador.format(dataparamatch);

		calendario = Calendar.getInstance();
		calendario.add(Calendar.DAY_OF_MONTH, 1);
		dataparamatch = calendario.getTime();
		String umfuturo = formatador.format(dataparamatch);

		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");

		TimeZone tzInAmerica = TimeZone.getTimeZone("America/New_York");
		dateFormat.setTimeZone(tzInAmerica);

		for (int y = 1; y < 3; y++) {
			JSONArray appscs = new PandaScoreMatchesUtil().GetGamesMatches(y, umpassado, umfuturo);
			if (appscs != null) {

				for (int i = 0; i < appscs.length(); i++) {
					MatchOfTheDayEntity matchOfDay = new MatchOfTheDayEntity();
					JSONObject value = appscs.getJSONObject(i);

					if (value.get("begin_at") != null && !value.get("begin_at").toString().equals("")
							&& value.get("begin_at").toString() != null) {

						try {

							matchOfDay.setBegin_at(value.get("begin_at").toString());

							matchOfDay.setDateUpdate(today);

							matchOfDay.setWinner(value.get("winner").toString());
							matchOfDay.setWinner_id(value.get("winner_id").toString());

							matchOfDay.setMatch_type(value.get("match_type").toString());
							matchOfDay.setNumber_of_games(value.get("number_of_games").toString());

							JSONArray opponents = value.getJSONArray("opponents");

							for (int x = 0; x < opponents.length(); x++) {

								JSONObject v = opponents.getJSONObject(x);
								matchOfDay.setOpponent_type(v.get("type").toString());
								JSONObject op = (JSONObject) v.get("opponent");

								if (x == 0) {
									matchOfDay.setOpponent1_id(op.get("id").toString());
									matchOfDay.setOpponent1_image_url(op.get("image_url").toString());
									matchOfDay.setOpponent1_name(op.get("name").toString());
								} else {
									matchOfDay.setOpponent2_id(op.get("id").toString());
									matchOfDay.setOpponent2_image_url(op.get("image_url").toString());
									matchOfDay.setOpponent2_name(op.get("name").toString());
								}

							}
							JSONArray results = value.getJSONArray("results");

							for (int x = 0; x < results.length(); x++) {

								JSONObject v = results.getJSONObject(x);

								if (x == 0) {
									matchOfDay.setResults_score1(v.get("score").toString());
									matchOfDay.setResults_team_id1(v.get("team_id").toString());
								} else {
									matchOfDay.setResults_score2(v.get("score").toString());
									matchOfDay.setResults_team_id2(v.get("team_id").toString());
								}

							}
							JSONObject videogame = (JSONObject) value.get("videogame");

							matchOfDay.setVideogame(videogame.get("name").toString());
							matchOfDay.setVideogame(matchOfDay.getVideogame().toUpperCase());
							matchOfDay.setVideogame_img(videogame.get("slug").toString());
							JSONObject serie = (JSONObject) value.get("serie");

							matchOfDay.setSerie_id(serie.get("id").toString());
							matchOfDay.setSerie_begin(serie.get("begin_at").toString());
							matchOfDay.setSerie_end_at(serie.get("end_at").toString());
							matchOfDay.setSerie_description(serie.get("description").toString());
							matchOfDay.setSerie_full_name(serie.get("full_name").toString());
							matchOfDay.setSerie_name(serie.get("name").toString());
							matchOfDay.setSerie_prize(serie.get("prizepool").toString());
							matchOfDay.setSerie_season(serie.get("season").toString());
							matchOfDay.setSerie_year(serie.get("year").toString());

							JSONObject tournament = (JSONObject) value.get("tournament");
							matchOfDay.setTournament_begin_at(tournament.get("begin_at").toString());
							matchOfDay.setTournament_end_at(tournament.get("end_at").toString());
							matchOfDay.setTournament_id(tournament.get("id").toString());
							matchOfDay.setTournament_name(tournament.get("name").toString());
							list.add(matchOfDay);
						} finally {
							continue;
						}

					}

				}

			}
		}

		return list;
	}

	public void saveMatches(List<MatchOfTheDayEntity> list) {
		for (MatchOfTheDayEntity matchOfDay : list) {
			daoMatchOfTheDay.saveUpdate(matchOfDay);
		}
	}

	public List<ESportTournamentEntity> createTournaments() {
		List<ESportTournamentEntity> list = new ArrayList<ESportTournamentEntity>();
		for (int y = 1; y < 5; y++) {
			JSONArray appscs = new PandaScoreMatchesUtil().GetTournaments(y);

			if (appscs != null) {

				for (int i = 0; i < appscs.length(); i++) {
					ESportTournamentEntity tournament = new ESportTournamentEntity();
					JSONObject value = appscs.getJSONObject(i);

					if (value.get("begin_at") != null && !value.get("begin_at").toString().equals("")
							&& value.get("begin_at").toString() != null) {

						try {
							tournament.setIdentificador(value.get("id").toString());
							tournament.setBegin_at(value.get("begin_at").toString());

							if (value.get("end_at") != null && !value.get("end_at").toString().equals("")
									&& value.get("end_at").toString() != null) {
								tournament.setEnd_at(value.get("end_at").toString());
							}
							tournament.setModified_at(value.get("modified_at").toString());

							tournament.setName(value.get("name").toString());

							tournament.setWinner_id(value.get("winner_id").toString());

							tournament.setWinner_type(value.get("winner_type").toString());

							JSONObject videogame = (JSONObject) value.get("videogame");

							tournament.setVideogame(videogame.get("name").toString());
							tournament.setVideogame(tournament.getVideogame().toUpperCase());

							JSONObject serie = (JSONObject) value.get("serie");

							tournament.setSerie_id(serie.get("id").toString());
							tournament.setSerie_begin(serie.get("begin_at").toString());
							tournament.setSerie_end_at(serie.get("end_at").toString());
							tournament.setSerie_description(serie.get("description").toString());
							tournament.setSerie_full_name(serie.get("full_name").toString());
							tournament.setSerie_name(serie.get("name").toString());
							tournament.setSerie_prize(serie.get("prizepool").toString());
							tournament.setSerie_season(serie.get("season").toString());
							tournament.setSerie_year(serie.get("year").toString());

							JSONObject league = (JSONObject) value.get("league");
							tournament.setLeague_id(league.get("id").toString());
							tournament.setLeague_name(league.get("name").toString());

							list.add(tournament);

						} finally {
							continue;
						}

					}

				}

			}
		}
		return list;
	}

	public void saveTournaments(List<ESportTournamentEntity> list) {
		for (ESportTournamentEntity tournament : list) {
			daoTournament.saveUpdate(tournament);
		}
	}

	public List<ESportPlayerEntity> createPlayers() {

		List<ESportPlayerEntity> list = new ArrayList<ESportPlayerEntity>();
		for (int y = 1; y < 21; y++) {
			JSONArray appscs = new PandaScoreMatchesUtil().GetPlayers(y);
			if (appscs != null) {

				for (int i = 0; i < appscs.length(); i++) {
					ESportPlayerEntity player = new ESportPlayerEntity();
					JSONObject value = appscs.getJSONObject(i);

					try {

						player.setIdentificador(value.get("id").toString());
						player.setCurrent_team(value.get("current_team").toString());
						player.setCurrent_videogame(value.get("current_videogame").toString());
						player.setFirst_name(value.get("first_name").toString());
						player.setLast_name(value.get("last_name").toString());
						player.setHometown(value.get("hometown").toString());
						player.setImage_url(value.get("image_url").toString());
						player.setName(value.get("name").toString());
						player.setRole(value.get("role").toString());
						list.add(player);
					} finally {
						continue;
					}

				}

			}
		}
		return list;

	}

	public void savePlayers(List<ESportPlayerEntity> list) {
		for (ESportPlayerEntity player : list) {
			daoPlayer.saveUpdate(player);
		}
	}

	public List<ESportTeamEntity> createTeams() {

		List<ESportTeamEntity> list = new ArrayList<ESportTeamEntity>();
		for (int y = 1; y < 11; y++) {
			JSONArray appscs = new PandaScoreMatchesUtil().GetTeams(y);
			if (appscs != null) {

				for (int i = 0; i < appscs.length(); i++) {
					ESportTeamEntity team = new ESportTeamEntity();
					JSONObject value = appscs.getJSONObject(i);

					try {

						team.setIdentificador(value.get("id").toString());

						team.setImage_url(value.get("image_url").toString());
						team.setName(value.get("name").toString());
						team.setAcronym(value.get("acronym").toString());
						list.add(team);
					} finally {
						continue;
					}

				}

			}
		}
		return list;
	}

	public void saveTeams(List<ESportTeamEntity> list) {
		for (ESportTeamEntity team : list) {
			daoTeam.saveUpdate(team);
		}
	}

	public List<ESportLeagueEntity> createLeagues() {

		List<ESportLeagueEntity> list = new ArrayList<ESportLeagueEntity>();
		for (int y = 1; y < 3; y++) {
			JSONArray appscs = new PandaScoreMatchesUtil().GetLeagues(y);
			if (appscs != null) {

				for (int i = 0; i < appscs.length(); i++) {
					ESportLeagueEntity league = new ESportLeagueEntity();
					JSONObject value = appscs.getJSONObject(i);

					try {

						league.setIdentificador(value.get("id").toString());

						league.setImage_url(value.get("image_url").toString());
						league.setName(value.get("name").toString());
						league.setUrl(value.get("url").toString());

						JSONObject videogame = (JSONObject) value.get("videogame");
						league.setVideogame(videogame.get("name").toString());

						list.add(league);
					} finally {
						continue;
					}

				}

			}
		}
		return list;
	}

	public void saveLeagues(List<ESportLeagueEntity> list) {
		for (ESportLeagueEntity league : list) {
			daoLeague.saveUpdate(league);
		}
	}

	public List<ESportSerieEntity> createSeries() {

		// =========
		TimeZone zone = TimeZone.getTimeZone("America/New_York");

		SimpleDateFormat formatador = new SimpleDateFormat("yyyy");
		formatador.setTimeZone(zone);
		Calendar calendario = Calendar.getInstance();

		Date dataparamatch = calendario.getTime();

		calendario = Calendar.getInstance();
		calendario.add(Calendar.YEAR, 1);
		dataparamatch = calendario.getTime();
		String anofuturo = formatador.format(dataparamatch);

		calendario = Calendar.getInstance();
		calendario.add(Calendar.YEAR, -1);
		dataparamatch = calendario.getTime();
		String anopassado = formatador.format(dataparamatch);

		// =========

		List<ESportSerieEntity> list = new ArrayList<ESportSerieEntity>();

		for (int y = 1; y < 5; y++) {
			JSONArray appscs = new PandaScoreMatchesUtil().GetSeries(y, anopassado, anofuturo);
			if (appscs != null) {

				for (int i = 0; i < appscs.length(); i++) {
					ESportSerieEntity serie = new ESportSerieEntity();
					JSONObject value = appscs.getJSONObject(i);

					try {

						serie.setIdentificador(value.get("id").toString());
						serie.setBegin_at(value.get("begin_at").toString());
						serie.setDescription(value.get("description").toString());
						serie.setEnd_at(value.get("end_at").toString());
						serie.setFull_name(value.get("full_name").toString());
						serie.setName(value.get("name").toString());
						serie.setPrizepool(value.get("prizepool").toString());
						serie.setSeason(value.get("season").toString());
						serie.setWinner_id(value.get("winner_id").toString());
						serie.setWinner_type(value.get("winner_type").toString());
						serie.setYear(value.get("year").toString());

						JSONObject league = (JSONObject) value.get("league");
						serie.setLeague_id(league.get("id").toString());
						serie.setLeague_name(league.get("name").toString());

						JSONObject videogame = (JSONObject) value.get("videogame");
						serie.setVideogame(videogame.get("name").toString());

						list.add(serie);
					} finally {
						continue;
					}

				}

			}
		}
		return list;
	}

	public void saveSeries(List<ESportSerieEntity> list) {
		for (ESportSerieEntity serie : list) {
			daoSerie.saveUpdate(serie);
		}
	}*/
}
