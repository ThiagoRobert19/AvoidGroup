<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="tab-pane fade" id="deactivated" role="tabpanel" aria-labelledby="nav-deactivated-tab">
	<div class="acc-setting">
		<h3>Deactivated Teams</h3>
		<c:forEach var="listDeactivated" items="${listDeactivated}">
		<div class="requests-list">
			<div class="request-details">
				<div class="noty-user-img">
				<c:if test="${not empty listDeactivated.photo}">
					<img src="${listDeactivated.photo}" alt="">
				</c:if>
				<c:if test="${empty listDeactivated.photo}">
					<img src="<c:url value='/resources/images/resources/r-img1.png'/>" alt="">
				</c:if>
					
				</div>
				<div class="request-info">
					<h3><c:out value="${listDeactivated.name}" /></h3>
					
					
				</div>
				<div class="accept-feat">
					<ul>
					<li><a href="#" class="accept-req">Reactivate</a></li>
						<!-- li><a href="<c:url value='/setting/request/acceptandfollow/}'/>" class="accept-req">Accept and Follow</a></li-->
						<li><a href="#" class="close-req">
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