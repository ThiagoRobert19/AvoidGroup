<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="col-md-6 col-xl-3">
	<hr class="invisible">
	<section class="wp wp-6">
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

			</div>

		</div>

		<div class="card">
			<div class="card-body">
				<div class="h7 text-muted">
					<a href="<c:url value='/friend/viewFriend/${team.owner.id}'/>">Owner
						: <c:out value="${team.owner.firstName}" /> <c:out
							value="${team.owner.lastName}" />
					</a>
				</div>
				<div class="h7">
					Team About:
					<c:out value="${team.about}" />
				</div>
				<div class="h7">
					<a href="<c:url value='/team/viewUsers/${team.id}'/>">Users
						${quantidade}</a>
				</div>

			</div>
			<ul class="list-group list-group-flush">
				<c:if test="${cargo=='owner'}">
					<li class="list-group-item">

						<div class="h6 text-muted">
							<a href="<c:url value='/team/delete/${team.id}'/>">Delete</a>
						</div>

					</li>
					<li class="list-group-item">
						<div class="h6 text-muted">
							<a href="<c:url value='/team/administrator/${team.id}'/>">Administrador</a>
						</div>

					</li>
					<li class="list-group-item">
						<div class="h6 text-muted">
							<a href="<c:url value='/team/edit/${team.id}'/>">Editar</a>
						</div>

					</li>
					<li class="list-group-item">
						<div class="h6 text-muted">
							<a href="<c:url value='/team/viewRequest/${team.id}'/>">Request
								${solicitation}</a>
						</div>

					</li>
					<li class="list-group-item">
						<div class="h6 text-muted">
							<a
								href="<c:url value='/amateurtournament/viewyourrequests/${team.id}'/>">Tournament Request | ${requestT}</a>
						</div>

					</li>
					<li class="list-group-item">
						<div class="h6 text-muted">
							<a href="<c:url value='/team/viewFaq/${team.id}'/>">Open FAQ
								${faq} </a>
						</div>

					</li>
				</c:if>
				<c:if test="${cargo=='admin'}">
					<li class="list-group-item">
						<div class="h6 text-muted">
							<c:if test="${solicitation>0}">
								<a href="<c:url value='/team/viewRequest/${team.id}'/>">Request
									${solicitation}</a>

							</c:if>
							<c:if test="${solicitation==0}">
								<a href="#">Request ${solicitation}</a>

							</c:if>
						</div>

					</li>
					<li class="list-group-item">
						<div class="h6 text-muted">
							<a href="<c:url value='/team/leave/${team.id}'/>">Leave Group</a>
						</div>

					</li>
				</c:if>
				<c:if test="${cargo=='noGroup'}">
					<c:if test="${aguardando=='none'}">
						<li class="list-group-item">
							<div class="h6 text-muted">
								<a href="<c:url value='/team/request/${team.id}'/>">Request
									Group</a>
							</div>

						</li>


					</c:if>
					<c:if test="${aguardando=='aguardando'}">
						<li class="list-group-item">
							<div class="h6 text-muted">
								<a href="<c:url value='/team/cancel/${team.id}'/>">Cancel
									Request</a>
							</div>

						</li>

					</c:if>
					<c:if test="${cargo=='group'}">
						<li class="list-group-item">
							<div class="h6 text-muted">
								<a href="<c:url value='/team/leave/${team.id}'/>">Leave
									Group</a>
							</div>

						</li>

					</c:if>
				</c:if>

			</ul>
		</div>
	</section>
	<hr class="invisible">
</div>
