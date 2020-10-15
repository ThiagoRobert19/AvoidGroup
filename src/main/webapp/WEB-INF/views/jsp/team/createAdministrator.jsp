<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<section class="interface">
	<div class="container gedf-wrapper">
		<hr class="invisible">
		<div class="row">
			<div class="col-md-12 col-xl-1"></div>
			<div class="col-md-12 col-xl-11">
				<section>

					<div class="card card-social text-center">
						<div class="card-body has-gradient text-white">
							
								<img src="${team.image}" height="120" alt="Avatar"
									class="rounded-circle" />
							

							<h1><c:out value="${team.name}" /></h1>
							<c:if test="${team.game.name!=null}">
								<div class="h6 text-muted"><c:out value="${team.game.name}" /></div>
							</c:if>

						</div>
					</div>

				</section>
			</div>
		</div>
		<hr class="invisible">

		<!-- Post -->
		<c:forEach var="lista" items="${lista}">
			<div class="card gedf-card">
				<div class="card-header">

					<div class="d-flex justify-content-between align-items-center">
						<div class="d-flex justify-content-between align-items-center">
							<div class="mr-2">
								<img class="rounded-circle" width="45"
									src="${lista.profile.photo}" alt="">
							</div>
							<div class="ml-2">
								<div class="h5 m-0">
									<a
										href="<c:url value='/friend/viewFriend/${lista.profile.id}'/>">
										<c:out value="${lista.profile.firstName}" />
										<c:out value="${lista.profile.lastName}" />
										</a>
								</div>
								<div class="h7 text-muted">
								<c:out value="${lista.profile.about}" />
								</div>
							</div>
							<div class="ml-2">
								<div class="h5 m-0">
									<a
										href="<c:url value='/team/addAsAdmin/${lista.profile.id}/${team.id}'/>">Add
										as Administrator</a>
								</div>

							</div>
						</div>

					</div>



				</div>

			</div>

		</c:forEach>
	</div>

</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />