<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<section class="interface">
	<div class="container gedf-wrapper">
		<div class="row">
			<c:forEach var="listSport" items="${listSport}">
				<div class="col-md-12 col-xl-12">

					<div class="row">
						<c:if test="${listSport.videogame=='LOL'}">
							<img class="rounded-circle" height="50"
								src="<c:url value='/resources/_img/_logo/lol_logo.png'/>" alt="" />



						</c:if>
						<c:if test="${listSport.videogame=='CS:GO'}">
							<img class="rounded-circle" height="50"
								src="<c:url value='/resources/_img/_logo/csgo.png'/>" alt="" />



						</c:if>
						<c:if test="${listSport.videogame=='OVERWATCH'}">
							<img class="rounded-circle" height="50"
								src="<c:url value='/resources/_img/_logo/ow.png'/>" alt="" />


						</c:if>
						<c:if test="${listSport.videogame=='DOTA 2'}">
							<img class="rounded-circle" height="50"
								src="<c:url value='/resources/_img/_logo/dota2.jpeg'/>" alt="" />


						</c:if>
						<h3>
							<c:out value="${listSport.serie_full_name}" />
							-
							<c:out value="${listSport.tournament_name}" />
						</h3>


					</div>

					<hr class="invisible">
					<div class="row">

						<h5>Hour: <c:out value ="${listSport.beginHour}"/></h5>
					</div>
					<hr class="invisible">
					<div class="row">
						<div class="col-md-12 col-xl-5">

							<div class="card gedf-card">

								<div class="card-body">

									<img width="90" src="${listSport.opponent1_image_url}"
										alt="avatar"> <b><c:out
											value="${listSport.opponent1_name}" /></b>
											
											-
											<b><c:out
											value="${listSport.results_score1}" /></b>
								</div>
							</div>
						</div>
						<div class="col-md-12 col-xl-2">
							<img class="rounded-circle" width="100"
								src="<c:url value='/resources/_img/_featured/versus.png'/>"
								alt="" />
						</div>
						<div class="col-md-12 col-xl-5">

							<div class="card gedf-card">

								<div class="card-body">

									<img width="90" src="${listSport.opponent2_image_url}"
										alt="avatar"> <b><c:out
											value="${listSport.opponent2_name}" /></b>
											-
											<b><c:out
											value="${listSport.results_score2}" /></b>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr>

			</c:forEach>
		</div>
	</div>
</section>
<!--  interface-->
<c:import url="/WEB-INF/cabecalho/footer.jsp" />

