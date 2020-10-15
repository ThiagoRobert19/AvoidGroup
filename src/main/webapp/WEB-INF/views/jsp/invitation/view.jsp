<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />



<section class="interface">
	<div class="container gedf-wrapper">
		<div class="row">

			<div class="col-md-12 col-xl-6">

				<hr class="invisible">
				<h1>View Invitations</h1>
				<!-- Post -->
				<c:forEach var="lista" items="${lista}">
					<div class="card gedf-card">
						<div class="card-header">

							<div class="d-flex justify-content-between align-items-center">
								<div class="d-flex justify-content-between align-items-center">
									<div class="mr-2">
										<img class="rounded-circle" width="45"
												src="${lista.requester.photo}" alt="">
										
									</div>
									<div class="ml-2">
										<div class="h5 m-0">
											<a
												href="<c:url value='/friend/viewFriend/${lista.requester.id}'/>">
												<c:out value ="${lista.requester.firstName}"/> <c:out value ="${lista.requester.lastName}"/>
												</a>
										</div>

										<div class="h7 text-muted"><c:out value ="${lista.requester.about}"/></div>

									</div>
								</div>
								<div>
									<div class="dropdown">
										<button class="btn btn-link dropdown-toggle" type="button"
											id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true"
											aria-expanded="false">
											<i class="fa fa-ellipsis-h"></i>
										</button>
										<div class="dropdown-menu dropdown-menu-right"
											aria-labelledby="gedf-drop1">
											<div class="h6 dropdown-header pb-4">Answer</div>

											<a class="dropdown-item"
												href="<c:url value='/invitation/accept/${lista.id}'/>">Accept
											</a> <a class="dropdown-item"
												href="<c:url value='/invitation/deny/${lista.id}'/>">Deny
											</a>

										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</c:forEach>
				<!-- Post -->
				<hr class="invisible">


			</div>
		</div>
	</div>
</section>
<!--  interface-->
<c:import url="/WEB-INF/cabecalho/footer.jsp" />