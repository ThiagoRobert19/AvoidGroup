<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="product-feed-tab" id="info-dd">
	<div class="user-profile-ov">
		<h3>About</h3>
		<p>
			<c:out value="${teamEntity.about}" />
		</p>
	</div>
	<div class="row">
		<div class="user-profile-ov">
			<div class="usy-dt">

				<c:if test="${empty teamEntity.owner.photo}">
					<img
						src="<c:url value='/resources/images/resources/pf-icon2.png'/>"
						alt="no image" style="width: 80px">
				</c:if>
				<c:if test="${not empty teamEntity.owner.photo}">
					<img src="<c:url value="${teamEntity.owner.photo}"/>"
						alt="no image" style="width: 80px">
				</c:if>
				<div class="usy-name">
					<h3>
						<a href="<c:url value="/user/view/${teamEntity.owner.id}"/>"><c:out
								value="${teamEntity.owner.userName}" /></a>
					</h3>
					<spam>Owner</spam>

				</div>
			</div>
		</div>
	</div>

	<c:if test="${not empty teamEntity.admin.id}">
		<div class="row">
			<div class="user-profile-ov">
				<div class="usy-dt">

					<c:if test="${empty teamEntity.admin.photo}">
						<img
							src="<c:url value='/resources/images/resources/pf-icon2.png'/>"
							alt="no image" style="width: 80px">
					</c:if>
					<c:if test="${not empty teamEntity.admin.photo}">
						<img src="<c:url value="${teamEntity.admin.photo}"/>"
							alt="no image" style="width: 80px">
					</c:if>
					<div class="usy-name">
						<h3>
							<a href="<c:url value="/user/view/${teamEntity.admin.id}"/>"><c:out
									value="${teamEntity.admin.userName}" /></a>
						</h3>
						<spam>Admin</spam>

					</div>
				</div>
			</div>
		</div>
	</c:if>
</div>

