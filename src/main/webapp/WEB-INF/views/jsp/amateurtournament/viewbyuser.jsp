<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<section class="interface">
	<div class="container gedf-wrapper">
		<hr class="invisible">
		<div class="row">

			<div class="col-md-12 col-xl-12">
				<div class="card card-social text-center">
					<div class="card-body has-gradient text-white">
						<h1>
							Amateur Tournaments <br />
							<br /> You Are Participating
						</h1>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 col-xl-12">
						<c:forEach var="lista" items="${listLineUp}">
							<div class="card gedf-card">
								<div class="card-header">

									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex justify-content-between align-items-center">
											<div class="mr-2">
												<img class="rounded-circle" width="45"
													src="${lista.tournament.image_default}" alt="">
											</div>
											<div class="ml-12">
												<div class="h5 m-8">
													<a
														href="<c:url value='/amateurtournament/manage/${lista.tournament.id}'/>"><c:out
															value="${lista.tournament.name}" /></a>


												</div>
												<div class="h7 text-muted">
													<b>Begin Date:</b>
													<c:out value="${lista.tournament.begin_date}" />
												</div>
												<div class="h7 text-muted">
													<b>End Date:</b>
													<c:out value="${lista.tournament.end_date}" />
												</div>
												<div class="h7 text-muted">
													<b>Number of Team Allowed:</b>
													<c:out value="${lista.tournament.max_allowed}" />
												</div>
												<div class="h7 text-muted">
													<b>Description:</b>
													<c:out value="${lista.tournament.description}" />
												</div>
												<div class="h7 text-muted">
													<b>Match Status:</b>
													<c:out value="${lista.tournament.matchstatus}" />
												</div>
											</div>
										</div>

									</div>
								</div>

							</div>

						</c:forEach>

					</div>
				</div>


			</div>
		</div>

	</div>
</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />