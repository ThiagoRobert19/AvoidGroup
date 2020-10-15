<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<section class="interface">
	<div class="container gedf-wrapper">
		<div class="row">
			<div class="col-md-2 col-xl-2"></div>
			<div class="col-md-6 col-xl-8">
				<h1>Team Edit</h1>
				
					<form action="<c:url value='/team/update'/>" method="post">
					<input type="hidden" name="id" value="${team.id}">
						<div class="row px-12">
						<label ><font color="black"> Name: <c:out value="${team.name}" /> </font></label>
							<div class="form-group">
								 Name: <input type="text" id="name"
									class="form-control" name="name" required />
							</div>
						</div>
						
						<div class="row px-12">
						<label ><font color="black"> About:  <c:out value="${team.about}" /></font></label>
							<div class="form-group">
								About:<input type="text" id="about"
									class="form-control" name="about" required />
							</div>
						</div>
						
						<div class="row px-12">
							<div class="form-group">
								<button type="submit" class="btn btn-primary">Edit</button>
							</div>
						</div>

					</form>
				
			</div>
		</div>

	</div>
</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />