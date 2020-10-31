package com.inavonts.util;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.inavonts.dao.GenericDao;
import com.inavonts.publication.model.GeneralCommentEntity;
import com.inavonts.publication.model.GeneralLikeEntity;
import com.inavonts.publication.model.GeneralPublicationEntity;
import com.inavonts.user.model.UserEntity;


public class PublicationUtil {

	public List<GeneralPublicationEntity> getPublicationNoFriend(Integer id) throws ParseException {
		GenericDao<GeneralPublicationEntity> daoPublication = new GenericDao<GeneralPublicationEntity>();
		GenericDao<GeneralLikeEntity> daoLike = new GenericDao<GeneralLikeEntity>();
		GenericDao<GeneralCommentEntity> daoComment = new GenericDao<GeneralCommentEntity>();

		List<GeneralPublicationEntity> listaPublication = new ArrayList<GeneralPublicationEntity>();

		Map<String, Object> mapP = new HashMap<String, Object>();
		mapP.put("publisher.id", id);

		listaPublication = daoPublication.listarProperty(GeneralPublicationEntity.class, mapP, "and");
/*
		Map<String, Object> mapGeral = new HashMap<String, Object>();
		mapGeral.put("publisher.user.email", "account@avoidgroup.com");

		List<GeneralPublicationEntity> listaPAvoid = new ArrayList<GeneralPublicationEntity>();
		List<GeneralPublicationEntity> listaPAvoidLast = new ArrayList<GeneralPublicationEntity>();

		listaPAvoidLast = daoPublication.listarProperty(GeneralPublicationEntity.class, mapGeral, "and");

		// ---------------------
		 
		for (GeneralPublicationEntity general : listaPAvoidLast) {

			SimpleDateFormat dateParse = new SimpleDateFormat("yyyy-MM-dd");

			Date d1 = new Date();
			String data = dateParse.format(d1);

			d1 = dateParse.parse(data);

			Date d2 = general.getDateOfPublication();

			long dt = (d1.getTime() - d2.getTime());

			if ((dt / 86400000L) > 10) {
				listaPAvoid.add(general);

			}

		}*/
		Collections.sort(listaPublication);
		Collections.reverse(listaPublication);

		/*for (GeneralPublicationEntity general : listaPublication) {
			listaPAvoid.add(general);
		}
		List<GeneralPublicationEntity> listPubFinalEND = new ArrayList<GeneralPublicationEntity>();
		int pass = 0;
		if (listaPAvoid.size() < 10) {
			pass = listaPAvoid.size();
		} else {
			pass = 10;
		}
		for (int tam = 0; tam < pass; tam++) {
			Integer countComment;
			countComment = daoComment.count("GeneralCommentEntity", "publication.id",
					listaPAvoid.get(tam).getId().toString());

			Integer countLike;
			countLike = daoLike.count("GeneralLikeEntity", "publication.id", listaPAvoid.get(tam).getId().toString());
			listaPAvoid.get(tam).setCountLike(countLike);

			listaPAvoid.get(tam).setCountComment(countComment);

			Integer countShared;
			countShared = daoPublication.count2Properties("GeneralPublicationEntity", "shared", "yes", "originalID",
					listaPAvoid.get(tam).getId().toString());
			listaPAvoid.get(tam).setCountShared(countShared);

			Map<String, Object> mapLike = new HashMap<String, Object>();
			mapLike.put("publication.id", listaPAvoid.get(tam).getId());
			mapLike.put("liker.id", id);

			if (daoLike.exist(GeneralLikeEntity.class, mapLike, "and")) {
				listaPAvoid.get(tam).setYouLiked("yes");
			} else {
				listaPAvoid.get(tam).setYouLiked("no");
			}

			listPubFinalEND.add(listaPAvoid.get(tam));
		}*/
		return listaPublication;

	}

	public List<GeneralPublicationEntity> getPublication(UserEntity userEntity) throws ParseException {
		GenericDao<GeneralPublicationEntity> daoPublication = new GenericDao<GeneralPublicationEntity>();
		GenericDao<GeneralLikeEntity> daoLike = new GenericDao<GeneralLikeEntity>();
		GenericDao<GeneralCommentEntity> daoComment = new GenericDao<GeneralCommentEntity>();

		List<GeneralPublicationEntity> listaPublication = new ArrayList<GeneralPublicationEntity>();
		List<GeneralPublicationEntity> finalList = new ArrayList<GeneralPublicationEntity>();
		List<GeneralPublicationEntity> semseguir = new ArrayList<GeneralPublicationEntity>();
		
		
		listaPublication = daoPublication.listPublication(userEntity.getId().toString());
		
		for (int i = 0; i < listaPublication.size(); i++) {
			boolean resp=false;
            for (int j = i+1; j <listaPublication.size() ; j++) {
            	
                if(listaPublication.get(i).equals(listaPublication.get(j))){
                   // System.out.println("VEEEER: "+listaPublication.get(i).toString());
                    resp=true;
                }
            }
            if(!resp){
            	semseguir.add(listaPublication.get(i));
            }
        }
		
		for(GeneralPublicationEntity pub : semseguir){
	//	for(GeneralPublicationEntity pub : listaPublication){
			Integer countComment = daoComment.count("GeneralCommentEntity", "publication.id",pub.getId().toString());
			Integer countLike = daoLike.count("GeneralLikeEntity", "publication.id", pub.getId().toString());
			Integer countShared = daoPublication.count2Properties("GeneralPublicationEntity", "shared", "yes", "originalID",pub.getId().toString());
			
			pub.setCountComment(countComment);
			pub.setCountLike(countLike);
			pub.setCountShared(countShared);
			
			Map<String, Object> mapLike = new HashMap<String, Object>();
			mapLike.put("publication.id", pub.getId());
			mapLike.put("liker.id", userEntity.getId());

			if (daoLike.exist(GeneralLikeEntity.class, mapLike, "and")) {
				pub.setYouLiked("yes");
			} else {
				pub.setYouLiked("no");
			}
			finalList.add(pub);
		}
		Collections.sort(finalList);
		Collections.reverse(finalList);

		return finalList;
	}

}
