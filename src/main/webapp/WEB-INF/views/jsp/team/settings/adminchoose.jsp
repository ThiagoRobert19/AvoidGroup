<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="tab-pane fade" id="adminchoose" role="tabpanel"
	aria-labelledby="nav-adminchoose-tab">
	<div class="acc-setting">
		<h3>Choose an Admin</h3>
		<c:forEach var="listTeamPlayers" items="${listTeamPlayers}">
			<div class="requests-list">
				<div class="request-details">
					<div class="noty-user-img">

						<img src="${listTeamPlayers.userEntity.photo}" alt="">
					</div>
					<div class="request-info">
						<h3>
							<c:out value="${listTeamPlayers.userEntity.name}" />
						</h3>
						<span><c:out value="${listTeamPlayers.userEntity.userName}" /></span>

					</div>
					<div class="accept-feat">
						<ul>
							<li><a
								href="<c:url value='/teamsetting/chooseadmin/${listTeamInvitation.id}'/>"
								class="accept-req">Make admin</a></li>

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