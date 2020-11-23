<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="col-lg-3">
	<div class="main-left-sidebar">
		<div class="user_profile">
			<div class="user-pro-img">
				<c:if test="${empty teamEntity.photo}">
					<img
						src="<c:url value='/resources/images/resources/pf-icon2.png'/>"
						alt="teste" style="width: 200px">
				</c:if>
				<c:if test="${not empty teamEntity.photo}">
					<img src="${teamEntity.photo}" alt="no photo" style="width: 200px">
				</c:if>
			</div>
			<!--user-pro-img end-->
			<div class="user_pro_status">
				<ul class="flw-status">

					<li><span>Players</span> <b>${countPlayer}</b></li>
				</ul>
			</div>
			<!--user_pro_status end-->
			<ul class="social_links">
				<c:forEach var="listTeamLink" items="${listTeamLink}">
					<c:if test="${listTeamLink.linkFor == 'facebook'}">
						<li><a href="#" title=""><i class="fa fa-facebook-square"></i>
								${listTeamLink.url}</a></li>
					</c:if>
					<c:if test="${listTeamLink.linkFor == 'twitter'}">
						<li><a href="#" title=""><i class="fa fa-twitter"></i>
								${listTeamLink.url}</a></li>
					</c:if>
					<c:if test="${listTeamLink.linkFor == 'instagram'}">
						<li><a href="#" title=""><i class="fa fa-instagram"></i>
								${listTeamLink.url}</a></li>
					</c:if>
					<c:if test="${listTeamLink.linkFor == 'youtube'}">
						<li><a href="#" title=""><i class="fa fa-youtube"></i>
								${listTeamLink.url}</a></li>
					</c:if>


				</c:forEach>
			</ul>
		</div>
		<!--user_profile end-->
		<div class="suggestions full-width">
			<div class="sd-title">
				<h3>Players</h3>

			</div>
			<!--sd-title end-->

			<div class="suggestions-list">
				<c:forEach var="listTeamUser" items="${listTeamUser}">
					<div class="suggestion-usd">
						<c:if test="${empty listTeamUser.userEntity.photo}">
							<img
								src="<c:url value='/resources/images/resources/pf-icon2.png'/>"
								alt="teste" style="width: 50px">
						</c:if>
						<c:if test="${not empty listTeamUser.userEntity.photo}">
							<img src="${listTeamUser.userEntity.photo}" alt="no photo"
								style="width: 50px">
						</c:if>




						<div class="sgt-text">
							<h4>
								<a
									href="<c:url value='/user/view/${listTeamUser.userEntity.id}'/>"><c:out value="${listTeamUser.userEntity.userName}" /></a>
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

