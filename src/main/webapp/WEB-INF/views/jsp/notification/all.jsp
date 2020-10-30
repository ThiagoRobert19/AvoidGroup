<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<div class="acc-setting">
	<h3>Notification</h3>
	<c:forEach var="listNotification" items="${listNotification}">
		<div class="requests-list">
			<div class="request-details">
				<div class="noty-user-img">

					<img src="<c:url value='/resources/images/resources/r-img1.png'/>"
						alt="">
				</div>
				<div class="request-info">
					<h3>${listNotification.follow.name}</h3>
					<span>${listNotification.extra}</span> <span>${listNotification.dateOfNotification}
					</span>

				</div>
				<div class="accept-feat">
					<ul>
						<li><a href="<c:url value='/notification/read/${listNotification.id}'/>" class="accept-req">Read</a></li>
					</ul>
				</div>
				<!--accept-feat end-->
			</div>

		</div>
	</c:forEach>
</div>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />