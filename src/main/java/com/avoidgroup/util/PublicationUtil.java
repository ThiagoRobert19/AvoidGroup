package com.avoidgroup.util;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.avoidgroup.dao.GenericDao;
import com.avoidgroup.friendship.model.FollowEntity;
import com.avoidgroup.publication.model.GeneralCommentEntity;
import com.avoidgroup.publication.model.GeneralLikeEntity;
import com.avoidgroup.publication.model.GeneralPublicationEntity;
import com.avoidgroup.user.model.UserEntity;


public class PublicationUtil {

	public List<GeneralPublicationEntity> getPublicationNoFriend(Integer id) {
		GenericDao<GeneralPublicationEntity> daoPublication = new GenericDao<GeneralPublicationEntity>();
		GenericDao<GeneralLikeEntity> daoLike = new GenericDao<GeneralLikeEntity>();
		GenericDao<GeneralCommentEntity> daoComment = new GenericDao<GeneralCommentEntity>();

		List<GeneralPublicationEntity> listaPublication = new ArrayList<GeneralPublicationEntity>();

		Map<String, Object> mapP = new HashMap<String, Object>();
		mapP.put("publisher.id", id);

		listaPublication = daoPublication.listarProperty(GeneralPublicationEntity.class, mapP, "and");

		Collections.sort(listaPublication);
		Collections.reverse(listaPublication);

		return listaPublication;

	}
public List<GeneralPublicationEntity> getAll(UserEntity userEntity){
	
	List<GeneralPublicationEntity> listaPublication = new ArrayList<GeneralPublicationEntity>();
	GenericDao<GeneralPublicationEntity> daoPublication = new GenericDao<GeneralPublicationEntity>();
	
	GenericDao<GeneralCommentEntity> daoComment = new GenericDao<GeneralCommentEntity>();
	GenericDao<GeneralLikeEntity> daoLike = new GenericDao<GeneralLikeEntity>();
	
	GenericDao<FollowEntity> daoFollow =  new GenericDao<FollowEntity>();
	Map<String, Object> mapfollow = new HashMap<String, Object>();
	mapfollow.put("follower.id", userEntity.getId());
	
	
	if (daoFollow.exist(FollowEntity.class, mapfollow, "and")) {

		listaPublication = getPublication(userEntity);

	} else {
		List<GeneralPublicationEntity> listPassa = new ArrayList<GeneralPublicationEntity>();
		Map<String, Object> mapP = new HashMap<String, Object>();
		mapP.put("publisher.id", userEntity.getId());

		listPassa = daoPublication.listarProperty(GeneralPublicationEntity.class, mapP, "and");

		Collections.sort(listPassa);
		Collections.reverse(listPassa);

		for (GeneralPublicationEntity pub : listPassa) {
			// for(GeneralPublicationEntity pub : listaPublication){
			Integer countComment = daoComment.count("GeneralCommentEntity", "publication.id",
					pub.getId().toString());
			Integer countLike = daoLike.count("GeneralLikeEntity", "publication.id", pub.getId().toString());
			Integer countShared = daoPublication.count2Properties("GeneralPublicationEntity", "shared", "yes",
					"originalID", pub.getId().toString());

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
			listaPublication.add(pub);
		}

	}
	return listaPublication;
}
	public List<GeneralPublicationEntity> getPublication(UserEntity userEntity) {
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
