<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="col-lg-3">
	<div class="main-left-sidebar">
		<div class="user_profile">
			<div class="user-pro-img">
				<c:if test="${empty userEntity.photo}">
					<img
						src="<c:url value='/resources/images/resources/pf-icon2.png'/>"
						alt="teste" style="width: 200px">
				</c:if>
				<c:if test="${not empty userEntity.photo}">
					<img src="${userEntity.photo}" alt="no photo"
						style="width: 200px">
				</c:if>

				


			</div>
			<!--user-pro-img end-->
			<div class="user_pro_status">
				<ul class="flw-status">
					<li><span>Following</span> <b>${countfollowing}</b></li>
					<li><span>Followers</span> <b>${countfollowers}</b></li>
				</ul>
			</div>
			<!--user_pro_status end-->
			<ul class="social_links">
				<c:if test="${not empty userEntity.facebook}">
					<li><a href="${userEntity.facebook}" target="_blank"><i class="fa fa-facebook-square"></i>
							<c:out value="${userEntity.facebook}" /></a></li>
				</c:if>
				<c:if test="${not empty userEntity.twitter}">
					<li><a href="${userEntity.twitter}" target="_blank"><i class="fa fa-twitter"></i>
							<c:out value="${userEntity.twitter}" /></a></li>
				</c:if>
				<c:if test="${not empty userEntity.instagram}">
					<li><a href="${userEntity.instagram}" target="_blank"><i class="fa fa-instagram"></i>
							<c:out value="${userEntity.instagram}" /></a></li>
				</c:if>
				<c:if test="${not empty userEntity.youtube}">
					<li><a href="${userEntity.youtube}" target="_blank"><i class="fa fa-youtube"></i>
							<c:out value="${userEntity.youtube}" /></a></li>
				</c:if>
			</ul>
		</div>
		<!--user_profile end-->
		<div class="suggestions full-width">
			<div class="sd-title">
				<h3>Teams</h3>
				<i class="la la-ellipsis-v"></i>
			</div>
			<!--sd-title end-->

			<div class="suggestions-list">
				<c:forEach var="listTeamUser" items="${listTeamUser}">
					<div class="suggestion-usd">


						<img src="<c:url value='${listTeamUser.teamEntity.photo}'/>"
							alt="" style="width: 50px">
						<div class="sgt-text">
							<h4>
								<a
									href="<c:url value='/team/view/${listTeamUser.teamEntity.id}'/>"><c:out value="${listTeamUser.teamEntity.name}" /></a>
							</h4>
							<!--span>${listTeamUser.teamEntity.about}</span-->
						</div>

					</div>
				</c:forEach>

				<div class="view-more">
					<a href="#" title="">View More</a>
				</div>
			</div>
			<!--suggestions-list end-->
		</div>
		<!--suggestions end-->
	</div>
	<!--main-left-sidebar end-->
</div>

<script>
	document.getElementById("uploadImage").onchange = function() {
		alert('teste');
	};
</script>