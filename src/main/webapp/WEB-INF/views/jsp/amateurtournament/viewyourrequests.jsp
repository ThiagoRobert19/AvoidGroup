<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<section class="interface">
	<div class="container gedf-wrapper">
		<hr class="invisible">
		<div class="row">
			<div class="col-md-12 col-xl-1"></div>
			<div class="col-md-12 col-xl-11">
				<div class="row">
					<div class="card card-social text-center">
						<div class="card-body has-gradient text-white">
							<h1>
								<a href="#"><font color="#ffffff">View Tournaments
										Requests</font></a>
							</h1>
						</div>
					</div>
				</div>
				<hr class="invisible">
				<div class="row">
					<div class="col-md-12 col-xl-12">
						<c:forEach var="lista" items="${listInvitationTournament}">
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
													<a href="#"> <c:out value="${lista.tournament.name}" />
													</a>
												</div>
												<div class="h7 text-muted">
													<b>Owner:</b> <a
														href="<c:url value='/team/viewTeam/${lista.tournament.creator.id}'/>">
														<c:out value="${lista.tournament.creator.name}" />
													</a>
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



												<a class="dropdown-item"
													href="<c:url value='/amateurtournament/acceptrequest/${lista.id}'/>">Accept
												</a> <a class="dropdown-item"
													href="<c:url value='/amateurtournament/declinerequest/${lista.id}'/>">Decline
												</a>



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