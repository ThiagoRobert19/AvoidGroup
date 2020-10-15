<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<section class="interface">
	<div class="container gedf-wrapper">
		<div class="row">
			<div class="col-md-2 col-xl-4"></div>
			<div class="col-md-6 col-xl-6">
				<h1>Create a Team</h1>
				
					<form action="<c:url value='/team/save'/>" method="post"
						enctype="multipart/form-data">
						<div class="row px-12">
							<div class="form-group">
								 Name: <input type="text" id="name"
									class="form-control" name="name" required />
							</div>
						</div>
						<div class="row px-12">
							<div class="form-group">
								Team Photo:
									<input type="file" 
									class="form-control" name="file" />
							</div>
						</div>
						<div class="row px-12">
							<div class="form-group">
								About:<input type="text" id="about"
									class="form-control" name="about" required />
							</div>
						</div>
						<div class="row px-12">
							<div class="form-group">
								Select the game: <select 
									required="required" name="gameID">
									<c:forEach var="game" items="${listGames}">
										<option id="game" value="${game.id}"><c:out value="${game.name}" /></option>
									</c:forEach>
								</select>
							</div>
						</div>
						<div class="row px-12">
							<div class="form-group">
								<button type="submit" class="btn btn-primary">Register</button>
							</div>
						</div>

					</form>
				
			</div>
		</div>

	</div>
</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />