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
				<c:forEach var="lista" items="${lista}">
					<div class="card gedf-card">
						<div class="card-header">
							<h1>
							<c:out value="${lista.team.name}" /> 
							Request</h1>
							<div class="d-flex justify-content-between align-items-center">
								<div class="d-flex justify-content-between align-items-center">
									<div class="mr-2">
										<img class="rounded-circle" width="100"
											src="${lista.requester.photo}" alt="">
									</div>
									<div class="ml-2">
										<div class="h5 m-0">
											<a
												href="<c:url value='/friend/viewFriend/${lista.requester.id}'/>">
												<c:out value="${lista.requester.firstName}" /> 
												<c:out value="${lista.requester.lastName}" /> 
												</a>
										</div>
										<div class="h7 text-muted">
										<c:out value="${lista.requester.about}" /> 
										</div>
										<div class="h7 text-muted">
											<c:out value="${lista.dateOfRequest}" /> | <c:out value="${lista.timeOfRequest}" />
										</div>
										<div class="h7">
											<a href="<c:url value='/team/acceptrequest/${lista.id}'/>">Accept</a>
											| <a href="<c:url value='/team/denyrequest/${lista.id}'/>">Deny</a>
										</div>
									</div>

								</div>

							</div>
						</div>
					</div>

				</c:forEach>
			</div>
		</div>

	</div>
</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />