<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="tab-pane fade" id="privcy" role="tabpanel"
	aria-labelledby="nav-privcy-tab">
	<div class="acc-setting">
		<h3>Requests</h3>
		<c:forEach var="listRequest" items="${listRequest}">
		<div class="requests-list">
			<div class="request-details">
				<div class="noty-user-img">
				
					<img src="<c:url value='/resources/images/resources/r-img1.png'/>" alt="">
				</div>
				<div class="request-info">
					<h3>${listRequest.follower.name}</h3>
					<span>${listRequest.follower.userName}</span>
				</div>
				<div class="accept-feat">
					<ul>
						<li><a href="<c:url value='/setting/request/accept/${listRequest.id}'/>" class="accept-req">Accept</a></li>
						<li><a href="<c:url value='/setting/request/deny/${listRequest.id}'/>" class="close-req">
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