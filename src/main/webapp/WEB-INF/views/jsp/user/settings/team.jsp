<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="tab-pane fade" id="team" role="tabpanel" aria-labelledby="nav-team-tab">
	<div class="acc-setting">
		<h3>Team Requests</h3>
		<c:forEach var="listTeamInvite" items="${listTeamInvite}">
			<div class="requests-list">
				<div class="request-details">

					<div class="user-info">

						<c:if test="${empty listTeamInvite.teamEntity.photo}">
							<img
								src="<c:url value='/resources/images/resources/pf-icon2.png'/>"
								alt="teste" height="50px">
						</c:if>
						<c:if test="${not empty listTeamInvite.teamEntity.photo}">
							<img src="${listTeamInvite.teamEntity.photo}" alt="no photo"
								height="50px">
						</c:if>


					</div>

					<div class="request-info">
						<h3><c:out value="${listTeamInvite.teamEntity.name}" /></h3>
						<span>${listTeamInvite.dateOfInvitation}</span>

					</div>
					<div class="accept-feat">
						<ul>
							<li><a
								href="<c:url value='/teaminvitation/invitation/accept/${listTeamInvite.id}'/>"
								class="accept-req">Accept</a></li>

							<li><a
								href="<c:url value='/teaminvitation/invitation/deny/${listTeamInvite.id}'/>"
								class="accept-req"> Deny </a></li>
						</ul>
					</div>
					<!--accept-feat end-->
				</div>

			</div>
		</c:forEach>

		<!--requests-list end-->
	</div>
	<!--acc-setting end-->
</div>