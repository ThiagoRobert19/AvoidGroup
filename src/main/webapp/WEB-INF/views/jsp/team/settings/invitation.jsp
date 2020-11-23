<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="tab-pane fade show active" id="privcy" role="tabpanel"
	aria-labelledby="nav-privcy-tab">
	<div class="acc-setting">
		<h3>Invitations</h3>
		<c:forEach var="listTeamInvitation" items="${listTeamInvitation}">
		<div class="requests-list">
			<div class="request-details">
				<div class="noty-user-img">
				
					<img src="${listTeamInvitation.userEntity.photo}" alt="">
				</div>
				<div class="request-info">
					<h3><c:out value="${listTeamInvitation.userEntity.name}" /></h3>
					<span>Invited by <c:out value="${listTeamInvitation.whoInvited.name}" /></span>
					
				</div>
				<div class="accept-feat">
					<ul>
					<li><a href="<c:url value='/teamsetting/invitation/cancel/${listTeamInvitation.id}'/>" class="accept-req">Cancel</a></li>
						
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