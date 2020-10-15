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
					<hr class="invisible">

					<form action="<c:url value='/team/faq/save'/>" method="post"
						class="form-horizontal">
						<div class="form-group">
							<input type="hidden" name="teamID" value="${team.id}" /> <input
								class="form-control" placeholder="What is your Question?"
								name="question" required="required" /> <br />
							<button class="btn btn-info" type="submit">Ask</button>

						</div>

					</form>
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
										href="<c:url value='/friend/viewFriend/${lista.profile.id}'/>"><c:out value="${lista.profile.firstName}" />
										<c:out value="${lista.profile.lastName}" /></a>
								</div>
								<div class="h7 text-muted"><c:out value="${lista.profile.about}" /></div>
							</div>
						</div>
						<div class="dropdown">
							<button class="btn btn-link dropdown-toggle" type="button"
								id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true"
								aria-expanded="false">
								<i class="fa fa-ellipsis-h"></i>
							</button>
							<div class="dropdown-menu dropdown-menu-right"
								aria-labelledby="gedf-drop1">
								<c:if test="${lista.team.owner.user.id==clienteLogado.id}">
									<a class="dropdown-item" href="#">Delete</a>
								</c:if>
							</div>
						</div>
					</div>



				</div>
				<div class="card-body">
					<div class="text-muted h7 mb-2">${lista.dateOfQuestion}|
						${lista.timeOfQuestion}</div>
					<h5><c:out value="${lista.question}" /></h5>
					<div class="card-header">

						<div class="d-flex justify-content-between align-items-center">
							<div class="d-flex justify-content-between align-items-center">
								<div class="mr-2">


									<img class="rounded-circle" width="45"
										src="${lista.response.photo}" alt="">
								</div>
								<div class="ml-2">
									<div class="h5 m-0">
										<a
											href="<c:url value='/friend/viewFriend/${lista.response.id}'/>"><c:out value="${lista.response.firstName}" />
											<c:out value="${lista.response.lastName}" /></a>
									</div>
									<div class="h7 text-muted"><c:out value="${lista.response.about}" /></div>
								</div>
							</div>

						</div>
					</div>
					<div class="card-body">
						<div class="text-muted h7 mb-2">

							${lista.dateOfAnswer} | ${lista.timeOfAnswer}
							<h5>
								<c:out value="${lista.answer}" />
							</h5>

						</div>
					</div>
				</div>
			</div>

		</c:forEach>
	</div>

</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />