<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<section class="interface">
	<div class="container gedf-wrapper">
		<div class="row">
			<div class="col-md-12 col-xl-12">
				<div class="card card-social text-center">
					<div class="card-body has-gradient text-white">

						<img src="${team.image}" height="90" width="90" alt="Avatar"
							class="rounded-circle" />


						<h5 class="card-title pb-3">
							<c:out value="${team.name}" />
						</h5>
						<c:if test="${team.game.name!=null}">
							<div class="h6 text-muted">
								<c:out value="${team.game.name}" />
							</div>
						</c:if>
						<h5 class="card-title pb-3">
							<a href="<c:url value='/amateurtournament/add/${team.id}'/>"><font
								color="#ffffff">Create Tournament</font></a>
						</h5>


					</div>
				</div>
			</div>
		</div>
		<hr class="invisible">
		<div class="row">
			<div class="col-md-12 col-xl-6">
				<div class="card card-social text-center">
					<div class="card-body has-gradient text-white">
						<h1>Amateur Tournaments That You Created</h1>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 col-xl-12">
						<c:forEach var="lista" items="${listATournament}">
							<div class="card gedf-card">
								<div class="card-header">

									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex justify-content-between align-items-center">
											<div class="mr-2">
												<img class="rounded-circle" width="45"
													src="${lista.image_default}" alt="">
											</div>
											<div class="ml-12">
												<div class="h5 m-8">
													<a
														href="<c:url value='/amateurtournament/manage/${lista.id}'/>">
														<c:out value="${lista.name}" />
													</a>
												</div>
												<div class="h7 text-muted">
													<b>Begin Date:</b>
													<c:out value="${lista.begin_date}" />
												</div>
												<div class="h7 text-muted">
													<b>End Date:</b>
													<c:out value="${lista.end_date}" />
												</div>
												<div class="h7 text-muted">
													<b>Number of Team Allowed:</b>
													<c:out value="${lista.max_allowed}" />
												</div>
												<div class="h7 text-muted">
													<b>Description:</b>
													<c:out value="${lista.description}" />
												</div>
												<div class="h7 text-muted">
													<b>Match Status:</b>
													<c:out value="${lista.matchstatus}" />
												</div>
											</div>
										</div>
										<div class="dropdown">
											<button class="btn btn-link dropdown-toggle" type="button"
												id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true"
												aria-expanded="false">
												<i class="fa fa-ellipsis-h"></i>
											</button>
											<div class="dropdown-menu dropdown-menu-right"
												aria-labelledby="gedf-drop1">
												<c:if
													test="${lista.creator.owner.user.id==clienteLogado.id}">
													<a class="dropdown-item" href="#">Delete</a>
												</c:if>
											</div>
										</div>

									</div>
								</div>

							</div>

						</c:forEach>

					</div>
				</div>


			</div>
			<!-- +++++++++++++++++++++++++++ -->
			<div class="col-md-12 col-xl-6">
				<div class="card card-social text-center">
					<div class="card-body has-gradient text-white">
						<h1>Amateur Tournaments That You Are Participating</h1>
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