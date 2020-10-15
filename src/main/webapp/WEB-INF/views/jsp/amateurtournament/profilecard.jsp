<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="col-md-6 col-xl-3">
	<hr class="invisible">
	<section class="wp wp-6">
		<div class="card card-social text-center">
			<div class="card-body has-gradient text-white">

				<img src="${tournament.image_default}" height="90" width="90"
					alt="Avatar" class="rounded-circle" />
				<h5 class="card-title pb-3">
					<c:out value="${tournament.name}" />
				</h5>
				<c:if test="${tournament.creator.game.name!=null}">
					<div class="h6 text-muted">
						<c:out value="${tournament.creator.game.name}" />
					</div>
				</c:if>

			</div>
		</div>

		<div class="card">
			<div class="card-body">
				<div class="h7 text-muted">
					<a href="<c:url value='/team/viewTeam/${tournament.creator.id}'/>">Owner:
						<c:out value="${tournament.creator.name}" />
					</a>
				</div>

			</div>
			<ul class="list-group list-group-flush">
				<c:if test="${tournament.creator.owner.user.id==clienteLogado.id}">
					<c:if test="${line<tournament.max_allowed}">
						<li class="list-group-item">
							<div class="h6 text-muted">
								<a
									href="<c:url value='/amateurtournament/createrequest/${tournament.id}'/>">Send
									Request</a>
							</div>
						</li>
					</c:if>
				</c:if>
				<li class="list-group-item">
					<div class="h6 text-muted">
						<a
							href="<c:url value='/amateurtournament/lineup/${tournament.id}'/>">LineUp</a>
					</div>
				</li>
				<li class="list-group-item">
					<div class="h6 text-muted">
						<a href="#">Begin Date <c:out value="${tournament.begin_date}" />
						</a>
					</div>
				</li>
				<li class="list-group-item">
					<div class="h6 text-muted">
						<a href="#">End Date <c:out value="${tournament.end_date}" /></a>
					</div>
				</li>
				<c:if test="${tournament.creator.owner.user.id==clienteLogado.id}">
					<c:if test="${line==tournament.max_allowed}">
						<c:if test="${matchsetup=='yes'}">
							<li class="list-group-item">
								<div class="h6 text-muted">
									<a
										href="<c:url value='/amateurtournament/viewMatches/${tournament.id}'/>">View Matches</a>
								</div>
							</li>
						</c:if>
						<c:if test="${matchsetup=='no'}">
							<li class="list-group-item">
								<div class="h6 text-muted">
									<a
										href="<c:url value='/amateurtournament/generatematches/${tournament.id}'/>">Schedule
										Matches</a>
								</div>
							</li>
						</c:if>


					</c:if>
				</c:if>
			</ul>
		</div>
	</section>
	<hr class="invisible">
</div>