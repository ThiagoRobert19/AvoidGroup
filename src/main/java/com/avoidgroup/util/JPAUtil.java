/**
 * 
 */
package com.avoidgroup.util;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class JPAUtil {
	// private static final EntityManagerFactory factory;
	private static EntityManagerFactory emFactory;

	public static EntityManager getEntityManager() {
		emFactory = Persistence.createEntityManagerFactory("AvoidGroup");
		return emFactory.createEntityManager();
	}

	public static void close() {
		emFactory.close();
	}

	/*
	 * public EntityManager criaEntityManager() { EntityManagerFactory factory =
	 * Persistence .createEntityManagerFactory("AvoidGroup"); return
	 * factory.createEntityManager(); }
	 * 
	 */

}
