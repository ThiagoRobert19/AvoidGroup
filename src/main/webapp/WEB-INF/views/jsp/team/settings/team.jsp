<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="tab-pane fade" id="team" role="tabpanel"
	aria-labelledby="nav-team-tab">
	<div class="acc-setting">
		<h3>Team Requests</h3>
		<c:forEach var="listTeamInvite" items="${listTeamInvite}">
		<div class="requests-list">
			<div class="request-details">
				<div class="noty-user-img">
				
					<img src="${listTeamInvite.teamEntity.photo}" alt="">
				</div>
				<div class="request-info">
					<h3>${listTeamInvite.teamEntity.name}</h3>
					<span>${listTeamInvite.dateOfInvitation}</span>
					
				</div>
				<div class="accept-feat">
					<ul>
					<li><a href="<c:url value='/teaminvitation/invitation/accept/${listTeamInvite.id}'/>" class="accept-req">Accept</a></li>
						<!-- li><a href="<c:url value='/setting/request/acceptandfollow/${listRequest.id}'/>" class="accept-req">Accept and Follow</a></li-->
						<li><a href="<c:url value='/teaminvitation/invitation/deny/${listTeamInvite.id}'/>" class="close-req">
								<i class="la la-close"></i>
							</a></li>
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