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
				<div class="card card-social text-center">
					<div class="card-body has-gradient text-white">
						<h1>
							<a href="<c:url value='/team/add'/>"><font color="#ffffff">Create
									a Team</font></a>
						</h1>
					</div>
				</div>
				<hr class="invisible">

				<form action="<c:url value='/team/find'/>" method="post"
					class="form-horizontal">
					<div class="form-group">
						<input class="form-control" placeholder="Name Of the Team"
							name="name" required="required" /> <br />
						<button class="btn btn-info" type="submit">Find</button>

					</div>

				</form>
			</div>
		</div>
		<hr class="invisible">
		<div class="row">
			<div class="col-md-12 col-xl-1"></div>
			<div class="col-md-12 col-xl-11">
				<c:forEach var="lista" items="${lista}">
					<div class="card gedf-card">
						<div class="card-header">

							<div class="d-flex justify-content-between align-items-center">
								<div class="d-flex justify-content-between align-items-center">
									<div class="mr-2">
										<img class="rounded-circle" width="100"
											src="${lista.team.image}" alt="">
									</div>
									<div class="ml-2">
										<div class="h5 m-0">
											<a href="<c:url value='/team/viewTeam/${lista.team.id}'/>">
											 <c:out value="${lista.team.name}" />
											</a>
										</div>
										<div class="h7 text-muted"> <c:out value="${lista.team.about}" /></div>
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