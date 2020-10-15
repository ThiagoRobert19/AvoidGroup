package com.avoidgroup.util;

import java.io.UnsupportedEncodingException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Random;
import java.util.TimeZone;

import javax.mail.Address;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;

import com.avoidgroup.dao.GenericDao;
import com.avoidgroup.model.ProfileEntity;
import com.avoidgroup.model.UserEntity;

@Component("Common")
public class Common {

	public void sendResetVerification(String email, String uuid)
			throws UnsupportedEncodingException, MessagingException {

		Properties properties = new Properties();
		properties.put("mail.smtp.host", "localhost");

		properties.put("mail.transport.protocol", "smtp");
		properties.put("mail.smtp.port", 8025);
		properties.put("mail.smtp.auth", "true");
		properties.put("mail.smtp.starttls.enable", "false");
		properties.put("mail.user", "no-reply@avoidgroup.com");
		properties.put("mail.password", "O3bh^^K(lLr2");
		// properties.put("mail.password", ";@{l^ma!S;]$");
		properties.put("mail.debug", "true!");

		Authenticator auth = new Authenticator() {
			@Override
			public PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("no-reply@avoidgroup.com", "O3bh^^K(lLr2");
			}
		};
		Session session = Session.getInstance(properties, auth);

		Message msg = new MimeMessage(session);
		msg.setFrom(new InternetAddress("no-reply@avoidgroup.com", "No Reply Avoid Group"));
		msg.setSubject("Avoid Group");

		Address[] toUser = InternetAddress // Destinatário(s)
				.parse(email);

		msg.setRecipients(Message.RecipientType.TO, toUser);

		MimeBodyPart textPart = new MimeBodyPart();
		Multipart mps = new MimeMultipart();

		textPart.setContent(
				"<html>Seja bem vindo ao Avoid Group,<br> " + "Clique no Link abaixo para resetar sua Senha:<br> "
						+ "<a href='https://www.avoidgroup.com/user/doReset/" + uuid.trim()
						+ "'><b> https://www.avoidgroup.com/user/doReset/" + uuid + "</b></a><br>"
						+ "<br>Aproveite nossa plataforma e compartilhe com seus amigos!<br><br><br>"
						+ "No Reply | Avoid Group       <a href='https://www.avoidgroup.com' target='_blank'>https://www.avoidgroup.com</a> <br>"
						+ "<img src='https://www.dropbox.com/s/22j3xmtwatlj7pt/mstile-310x310.png?raw=1'  width='150' height='150'>"
						+ "</html>",
				"text/html; charset=utf-8");
		mps.addBodyPart(textPart);

		// Monta a mensagem SMTP inserindo o conteudo, texto e anexos

		msg.setContent(mps);
		Transport.send(msg);

	}

	public void sendVerification(String email, String uuid) throws UnsupportedEncodingException, MessagingException {

		Properties properties = new Properties();
		properties.put("mail.smtp.host", "localhost");

		properties.put("mail.transport.protocol", "smtp");
		properties.put("mail.smtp.port", 8025);
		properties.put("mail.smtp.auth", "true");
		properties.put("mail.smtp.starttls.enable", "false");
		properties.put("mail.user", "no-reply@avoidgroup.com");
		properties.put("mail.password", "O3bh^^K(lLr2");
		// properties.put("mail.password", ";@{l^ma!S;]$");
		properties.put("mail.debug", "true!");

		Authenticator auth = new Authenticator() {
			@Override
			public PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("no-reply@avoidgroup.com", "O3bh^^K(lLr2");
			}
		};
		Session session = Session.getInstance(properties, auth);

		Message msg = new MimeMessage(session);
		msg.setFrom(new InternetAddress("no-reply@avoidgroup.com", "No Reply Avoid Group"));
		msg.setSubject("Avoid Group");

		Address[] toUser = InternetAddress // Destinatário(s)
				.parse(email);

		msg.setRecipients(Message.RecipientType.TO, toUser);

		MimeBodyPart textPart = new MimeBodyPart();
		Multipart mps = new MimeMultipart();

		textPart.setContent("<html>Seja bem vindo ao Avoid Group,<br> "
				+ "Para verificarmos seu email por favor acesse o link abaixo:<br> "
				+ "<a href='https://www.avoidgroup.com/user/doVerification/" + uuid.trim()
				+ "'><b> https://www.avoidgroup.com/user/doVerification/" + uuid + "</b></a><br>"
				+ "<br>Aproveite nossa plataforma e compartilhe com seus amigos!<br><br><br>"
				+ "No Reply | Avoid Group       <a href='https://www.avoidgroup.com' target='_blank'>https://www.avoidgroup.com</a> <br>"
				+ "<img src='https://www.dropbox.com/s/22j3xmtwatlj7pt/mstile-310x310.png?raw=1'  width='150' height='150'>"
				+ "</html>", "text/html; charset=utf-8");
		mps.addBodyPart(textPart);

		// Monta a mensagem SMTP inserindo o conteudo, texto e anexos

		msg.setContent(mps);
		Transport.send(msg);

	}

	public boolean checkProfile(UserEntity user) {
		GenericDao<ProfileEntity> pdao = new GenericDao<ProfileEntity>();

		Map<String, Object> map150 = new HashMap<String, Object>();
		map150.put("user.id", user.getId());

		if (pdao.exist(ProfileEntity.class, map150, "and")) {

			return true;
		} else {
			return false;
		}

	}

	public boolean checkOnline(HttpServletRequest request) {
		UserEntity user = new UserEntity();
		user = (UserEntity) request.getSession().getAttribute("clienteLogado");
		if (user == null) {

			return false;
		} else {

			return true;
		}

	}

	public Date RandomDateRound(Date min) throws ParseException {

		Calendar calMin = Calendar.getInstance();
		calMin.setTime(min);
		int yearMIN = calMin.get(Calendar.YEAR);
		int monthMIN = calMin.get(Calendar.MONTH);
		int dayMIN = calMin.get(Calendar.DAY_OF_MONTH);

		Calendar calMax = Calendar.getInstance();
		calMax.setTime(min);

		calMax.add(Calendar.DATE, +5);

		int yearMAX = calMax.get(Calendar.YEAR);
		int monthMAX = calMax.get(Calendar.MONTH);
		int dayMAX = calMax.get(Calendar.DAY_OF_MONTH);

		Random random = new Random();
		int minDay = (int) LocalDate.of(yearMIN, monthMIN, dayMIN).toEpochDay();
		int maxDay = (int) LocalDate.of(yearMAX, monthMAX, dayMAX).toEpochDay();
		long randomDay = minDay + random.nextInt(maxDay - minDay);

		LocalDate randomDate = LocalDate.ofEpochDay(randomDay);
		String dateDone = randomDate.toString();

		Date dataFinal = new SimpleDateFormat("yyyy-MM-dd").parse(dateDone);

		return dataFinal;

	}

	public String RandomDate(Date min, Date max) {

		Calendar calMin = Calendar.getInstance();
		calMin.setTime(min);
		int yearMIN = calMin.get(Calendar.YEAR);
		int monthMIN = calMin.get(Calendar.MONTH);
		int dayMIN = calMin.get(Calendar.DAY_OF_MONTH);

		Calendar calMax = Calendar.getInstance();
		calMax.setTime(max);
		int yearMAX = calMax.get(Calendar.YEAR);
		int monthMAX = calMax.get(Calendar.MONTH);
		int dayMAX = calMax.get(Calendar.DAY_OF_MONTH);

		Random random = new Random();
		int minDay = (int) LocalDate.of(yearMIN, monthMIN, dayMIN).toEpochDay();
		int maxDay = (int) LocalDate.of(yearMAX, monthMAX, dayMAX).toEpochDay();
		long randomDay = minDay + random.nextInt(maxDay - minDay);

		LocalDate randomDate = LocalDate.ofEpochDay(randomDay);
		String dateDone = randomDate.toString();

		return dateDone;

	}

	public Date RandomTime(int min, int max, String AMPM) throws ParseException {
		Random random = new Random();

		int hour = random.nextInt(max - min) + min;

		List<Integer> list = new ArrayList<>();
		list.add(15);
		list.add(30);
		list.add(45);
		list.add(00);

		Integer minutes = list.get(random.nextInt(list.size()));
		String hourDone = hour + ":" + minutes + " " + AMPM;

		Date horaFinal = new SimpleDateFormat("HH:mm").parse(hourDone);

		return horaFinal;

	}
}
