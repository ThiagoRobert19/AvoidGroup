/**
 * 
 */
package com.avoidgroup.controller;

import javax.persistence.EntityManager;

import com.avoidgroup.util.JPAUtil;


public class Conexao {
	static EntityManager em= null;
    static Conexao connAccess = null;

    public static EntityManager Connection(){
        if ((em == null) || (!em.isOpen())) {
        	em = new JPAUtil().getEntityManager();
    		em.getTransaction().begin();
            
        }

        return em;
    }
}
