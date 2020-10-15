<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<section class="interface">
	<div class="container gedf-wrapper">
		<div class="col-md-12 col-xl-6">
			<hr class="invisible">
			<h1>List of Friends of <c:out value ="${profile.firstName}"/> <c:out value ="${profile.lastName}"/></h1>
			<c:forEach var="lista" items="${lista}">
				<div class="card gedf-card">
					<div class="card-header">

						<div class="d-flex justify-content-between align-items-center">
							<div class="d-flex justify-content-between align-items-center">
								<div class="mr-2">
									<img class="rounded-circle" width="45" src="${lista.photo}"
										alt="">
								</div>
								<div class="ml-2">
									<div class="h5 m-0">
										<a href="<c:url value='/friend/viewFriend/${lista.id}'/>"><c:out value="${lista.firstName}"/>
											<c:out value="${lista.lastName}"/></a>
									</div>
									<div class="h7 text-muted">About: <c:out value="${lista.about}"/></div>
								</div>
							</div>

						</div>
					</div>

				</div>

			</c:forEach>

		</div>
	</div>
</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />