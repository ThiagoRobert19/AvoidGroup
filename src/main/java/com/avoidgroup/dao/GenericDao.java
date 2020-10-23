package com.avoidgroup.dao;

import com.avoidgroup.util.EntidadeBase;
import com.avoidgroup.util.EntityManagerHelper;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Component;

@Component("GenericDao<T>")
public class GenericDao<T extends EntidadeBase> {

	public void deleteClasses(Class<T> classe, Map<String, Object> clazz, Map<String, Object> parametros,
			String tipoBusca) {
		EntityManager manager;
		manager = EntityManagerHelper.getEntityManager();
		try {
			Set<String> nameOfClasses = clazz.keySet();
			for (String nam : nameOfClasses) {
				String key1 = nam.replaceAll("\\.", "");

				// query.setParameter(key, clazz.get(nam));

				String hql = "delete from " + clazz.get(nam);
				if (parametros != null && parametros.size() > 0) {
					Set<String> params = parametros.keySet();
					boolean primeiro = true;
					for (String param : params) {
						String key = param.replaceAll("\\.", "");
						if (primeiro) {
							hql += " where " + param + " = :" + key;
							primeiro = false;
						} else {
							hql += " " + tipoBusca + " " + param + " = :" + key;
						}
					}
				}
				manager.getTransaction().begin();
				Query query = manager.createQuery(hql);

				if (parametros != null && parametros.size() > 0) {
					Set<String> params = parametros.keySet();
					for (String param : params) {
						String key = param.replaceAll("\\.", "");

						query.setParameter(key, parametros.get(param));
					}
				}

				query.executeUpdate();

				EntityManagerHelper.commit();
				EntityManagerHelper.closeEntityManager();
				// your code end
			}

		} catch (Exception e) {
			System.out.println("erro: " + e.getMessage().toString());
		}

	}

	public boolean exist(Class<T> classe, Map<String, Object> parametros, String tipoBusca) {

		boolean resp = false;
		EntityManager manager;
		manager = EntityManagerHelper.getEntityManager();

		try {
			String hql = "from " + classe.getSimpleName();
			if (parametros != null && parametros.size() > 0) {
				Set<String> params = parametros.keySet();
				boolean primeiro = true;
				for (String param : params) {
					String key = param.replaceAll("\\.", "");
					if (primeiro) {
						hql += " where " + param + " = :" + key;
						primeiro = false;
					} else {
						hql += " " + tipoBusca + " " + param + " = :" + key;
					}
				}
			}

			Query query = manager.createQuery(hql);

			if (parametros != null && parametros.size() > 0) {
				Set<String> params = parametros.keySet();
				for (String param : params) {
					String key = param.replaceAll("\\.", "");

					query.setParameter(key, parametros.get(param));
				}
			}

			resp = !query.getResultList().isEmpty();

			EntityManagerHelper.closeEntityManager();
			return resp;
		} catch (Exception e) {
			System.out.println("visualizando erro");
			System.out.println("erro: " + e.getMessage().toString());
		}

		return false;

	}

	public void delete(Class<T> classe, Map<String, Object> parametros, String tipoBusca) {
		EntityManager manager;
		manager = EntityManagerHelper.getEntityManager();
		try {
			String hql = "delete from " + classe.getSimpleName();

			if (parametros != null && parametros.size() > 0) {
				Set<String> params = parametros.keySet();
				boolean primeiro = true;
				for (String param : params) {
					String key = param.replaceAll("\\.", "");
					if (primeiro) {
						hql += " where " + param + " = :" + key;
						primeiro = false;
					} else {
						hql += " " + tipoBusca + " " + param + " = :" + key;
					}
				}
			}
			manager.getTransaction().begin();
			Query query = manager.createQuery(hql);

			if (parametros != null && parametros.size() > 0) {
				Set<String> params = parametros.keySet();
				for (String param : params) {
					String key = param.replaceAll("\\.", "");

					query.setParameter(key, parametros.get(param));
				}
			}

			query.executeUpdate();

			EntityManagerHelper.commit();
			EntityManagerHelper.closeEntityManager();
			// your code end

		} catch (Exception e) {
			System.out.println("erro: " + e.getMessage().toString());
		}

	}
	// ---------------------

	@SuppressWarnings("unchecked")
	public List<T> listarProperty(Class<T> classe, Map<String, Object> parametros, String tipoBusca) {
		EntityManager manager;
		manager = EntityManagerHelper.getEntityManager();
		List<T> lista = new ArrayList<T>();
		try {
			String hql = "from " + classe.getSimpleName();
			if (parametros != null && parametros.size() > 0) {
				Set<String> params = parametros.keySet();
				boolean primeiro = true;
				for (String param : params) {
					String key = param.replaceAll("\\.", "");
					if (primeiro) {
						hql += " where " + param + " = :" + key;
						primeiro = false;
					} else {
						hql += " " + tipoBusca + " " + param + " = :" + key;
					}
				}
			}
			Query query = manager.createQuery(hql);

			if (parametros != null && parametros.size() > 0) {
				Set<String> params = parametros.keySet();
				for (String param : params) {
					String key = param.replaceAll("\\.", "");
					query.setParameter(key, parametros.get(param));
				}
			}

			lista = query.getResultList();
			EntityManagerHelper.closeEntityManager();

		} catch (Exception e) {
			System.out.println("erro: " + e.getMessage().toString());
		}
		return lista;
	}

	@SuppressWarnings("unchecked")
	public T findByProperty(Class<T> classe, Map<String, Object> parametros, String tipoBusca) {
		EntityManager manager;
		manager = EntityManagerHelper.getEntityManager();
		List<T> lista = new ArrayList<T>();

		try {
			String hql = "from " + classe.getSimpleName();
			if (parametros != null && parametros.size() > 0) {
				Set<String> params = parametros.keySet();
				boolean primeiro = true;
				for (String param : params) {
					String key = param.replaceAll("\\.", "");
					if (primeiro) {
						hql += " where " + param + " = :" + key;
						primeiro = false;
					} else {
						hql += " " + tipoBusca + " " + param + " = :" + key;
					}
				}
			}
			Query query = manager.createQuery(hql);

			if (parametros != null && parametros.size() > 0) {
				Set<String> params = parametros.keySet();
				for (String param : params) {
					String key = param.replaceAll("\\.", "");
					query.setParameter(key, parametros.get(param));
				}
			}

			lista = query.getResultList();
			EntityManagerHelper.closeEntityManager();

		} catch (Exception e) {
			System.out.println("erro: " + e.getMessage().toString());
		}

		T t = null;
		for (int linha = 0; linha < lista.size(); linha++) {
			t = lista.get(linha);

		}
		return t;

	}

	// -----------------------
	public T buscaId(Class<T> clazz, Integer id) {
		T t = null;
		EntityManager manager;
		manager = EntityManagerHelper.getEntityManager();

		t = manager.find(clazz, id);
		EntityManagerHelper.closeEntityManager();

		return t;

	}

	public void saveUpdate(T obj) {
		EntityManager manager;
		manager = EntityManagerHelper.getEntityManager();

		try {
			manager.getTransaction().begin();
			if (obj.getId() == null) {

				manager.persist(obj);
			} else {

				manager.merge(obj);
			}

			EntityManagerHelper.commit();
			EntityManagerHelper.closeEntityManager();

		} catch (Exception e) {
			System.out.println("Erro: " + e.getMessage().toString());
			EntityManagerHelper.rollback();
		}
	}

	public void remove(Class<T> clazz, Integer id) {

		T t = buscaId(clazz, id);
		EntityManager manager;
		manager = EntityManagerHelper.getEntityManager();

		try {

			EntityManagerHelper.beginTransaction();
			manager.remove(manager.merge(t));

			EntityManagerHelper.commit();
			EntityManagerHelper.closeEntityManager();
		} catch (Exception e) {

			System.out.println("Erro: " + e.getMessage().toString());
			EntityManagerHelper.rollback();
		}
	}

	public List<T> list(Class<T> clazz) {
		EntityManager manager;

		manager = EntityManagerHelper.getEntityManager();
		CriteriaBuilder cb = manager.getCriteriaBuilder();
		CriteriaQuery<T> cq = cb.createQuery(clazz);
		Root<T> raiz = cq.from(clazz);
		cq.select(raiz);
		List<T> lista = new ArrayList<T>();
		lista = manager.createQuery(cq).getResultList();

		EntityManagerHelper.closeEntityManager();

		return lista;
	}
	@SuppressWarnings("unchecked")
	public List<T> listarPropertyLike(Class<T> classe, Map<String, Object> parametros, String tipoBusca) {
		EntityManager manager;
		manager = EntityManagerHelper.getEntityManager();
		List<T> lista = new ArrayList<T>();
		try {
			String hql = "from " + classe.getSimpleName();
			if (parametros != null && parametros.size() > 0) {
				Set<String> params = parametros.keySet();
				boolean primeiro = true;
				for (String param : params) {
					String key = param.replaceAll("\\.", "");
					if (primeiro) {
						hql += " where " + param + " LIKE :" + key;
						primeiro = false;
					} else {
						hql += " " + tipoBusca + " " + param + " LIKE :" + key;
					}
				}
			}
			Query query = manager.createQuery(hql);

			if (parametros != null && parametros.size() > 0) {
				Set<String> params = parametros.keySet();
				for (String param : params) {
					String key = param.replaceAll("\\.", "");
					query.setParameter(key, parametros.get(param)+"%'");
				}
			}

			lista = query.getResultList();
			EntityManagerHelper.closeEntityManager();

		} catch (Exception e) {
			System.out.println("erro: " + e.getMessage().toString());
		}
		return lista;
	}
	@SuppressWarnings("unchecked")
	public List<T> listByPropertyLike(Class<T> entidade, String clazz, String property, String value) {
		EntityManager manager;
		manager = EntityManagerHelper.getEntityManager();

		List<T> lista = new ArrayList<T>();

		lista = manager.createQuery("select u from " + clazz + " u where lower(u." + property + ") LIKE lower('%"+value+"%')")
				.getResultList();

		EntityManagerHelper.closeEntityManager();

		return lista;
	}

	@SuppressWarnings("unchecked")
	public List<T> listBy3PropertyLike(Class<T> entidade, String clazz, String property, String property2,
			String property3, String value) {
		EntityManager manager;
		manager = EntityManagerHelper.getEntityManager();

		List<T> lista = new ArrayList<T>();

		lista = manager
				.createQuery("select u from " + clazz + " u where u." + property + " LIKE '" + value + "%' or u."
						+ property2 + " LIKE '" + value + "%' or u." + property3 + " LIKE '" + value + "%'")
				.getResultList();

		EntityManagerHelper.closeEntityManager();
		return lista;
	}

	public int count(String clazz, String property, String value) {
		EntityManager manager;
		manager = EntityManagerHelper.getEntityManager();

		int count = ((Long) manager
				.createQuery("select count(*) from " + clazz + " where " + property + " = '" + value + "' ")
				.getSingleResult()).intValue();

		EntityManagerHelper.closeEntityManager();

		return count;

	}

	public int count(String clazz) {
		EntityManager manager;
		manager = EntityManagerHelper.getEntityManager();

		int count = ((Long) manager.createQuery("select count(*) from " + clazz + "' ").getSingleResult()).intValue();

		EntityManagerHelper.closeEntityManager();

		return count;

	}

	public int count2Properties(String clazz, String property, String value, String property2, String value2) {
		EntityManager manager;
		manager = EntityManagerHelper.getEntityManager();

		int count = ((Long) manager.createQuery("select count(*) from " + clazz + " where " + property + " = '" + value
				+ "' and " + property2 + " = '" + value2 + "'").getSingleResult()).intValue();

		EntityManagerHelper.closeEntityManager();

		return count;

	}

	
	@SuppressWarnings("unchecked")
	public List<T> listPublication(String id) {
		EntityManager manager;
		manager = EntityManagerHelper.getEntityManager();
		List<T> lista = new ArrayList<T>();
		String active = "1";
		lista = manager.createQuery("select ge from GeneralPublicationEntity ge inner join UserEntity"
				+ " pe on ge.publisher.id = pe.id inner join FriendEntity fe "
				+ " on fe.userEntity1.id = pe.id or fe.userEntity2.id = pe.id where fe.userEntity1.id = '" + id
				+ "' or fe.userEntity2.id = '" + id + "' ORDER  BY ge.id ASC")
				.getResultList();

		EntityManagerHelper.closeEntityManager();
		return lista;
	}

}
