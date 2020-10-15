<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<section class="interface">
	<div class="container gedf-wrapper">
		<div class="row">
			<div class="col-md-6 col-xl-3">
				<hr class="invisible">
				<section class="wp wp-6">
					<div class="card card-social text-center">
						<div class="card-body has-gradient text-white">

							<img src="${summaries.avatarmedium}" height="120" alt="Avatar"
								class="rounded-circle" />


							<h5 class="card-title pb-3"><c:out value="${summaries.personaname}" /></h5>

							<div class="h6 text-muted">Creation:
								<c:out value="${summaries.timecreated}" /></div>
							

							<div class="h6 text-muted">Level</div>
							<div class="h5"><c:out value="${summaries.level}" /></div>
						</div>
					</div>

					<div class="card">
						<div class="card-body">
							<div class="h7 text-muted">
								<a href="${summaries.profileurl}">Click Here to see at Steam:
									</a>
									
							</div>
							<div class="h7">Last time played: <c:out value="${summaries.lastlogoff}" /></div>
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item">

								<div class="h6 text-muted">
									<a href="<c:url value='/steam/logout'/>">Steam Logout</a>
								</div>
							</li>
						</ul>
					</div>
				</section>
				<hr class="invisible">
			</div>
			<!-- ######################################################### -->
			<div class="col-md-12 col-xl-6">
				<hr class="invisible">
				<h1>Recently Played Games</h1>
				<!-- Post -->
				<c:forEach var="listPlayed" items="${listPlayed}">
					<div class="card gedf-card">
						<div class="card-header">
							<div class="d-flex justify-content-between align-items-center">
								<div class="d-flex justify-content-between align-items-center">
									<div class="mr-2">


										<img width="200"
											src="http://media.steampowered.com/steamcommunity/public/images/apps/${listPlayed.appid}/${listPlayed.imageURL}.jpg"
											alt="" />
									</div>
									<div class="ml-2">
										<div class="h5 m-0">

											<a href="<c:url value='/steam/newsapp/${listPlayed.appid}/${listPlayed.name}/${listPlayed.imageURL}'/>"><c:out value="${listPlayed.name}" /></a>

										</div>
										<div class="h7 text-muted">Time Played Last 2 weeks:
											<c:out value="${listPlayed.playtime_2weeks}" /></div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</c:forEach>
			</div>
			<c:import url="/WEB-INF/views/jsp/steam/advertising.jsp" />
		</div>
	</div>
</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />