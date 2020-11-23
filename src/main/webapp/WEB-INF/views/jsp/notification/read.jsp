<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<div class="acc-setting">
	<h3>Notification</h3>

	<div class="requests-list">
		<div class="request-details">
			<div class="noty-user-img">

				<img src="<c:url value='/resources/images/resources/r-img1.png'/>"
					alt="">
			</div>
			<div class="request-info">
				<h3><c:out value="${notificationEntity.follow.name}" /></h3>
				<span>${notificationEntity.extra} ${notificationEntity.dateOfNotification}
				</span>

			</div>

			<!--accept-feat end-->
		</div>

	</div>
</div>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />