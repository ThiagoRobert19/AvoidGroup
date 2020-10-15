<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<section class="interface">
	<div class="container gedf-wrapper">
		<div class="row">
			<div class="col-md-2 col-xl-4"></div>
			<div class="col-md-6 col-xl-6">
				<h1>Change Profile Photo</h1>
				<section class="form-login px-5">
					<form action="<c:url value='/profile/savephoto'/>" method="post"
						class="form-horizontal" enctype="multipart/form-data">

						<div class="form-group  form-control-email">
							<label class="sr-only" for="inputFirstName">Profile
								Photo:</label> <input type="file" name="file"
								class="form-control form-control-lg" placeholder="Choose a file"
								required>
						</div>
						<input type="hidden" name="id" value="${profile.id}" />


						<div class="row px-12">
							<div class="form-group">
								<button type="submit" class="btn btn-primary">Edit</button>
							</div>
						</div>

					</form>
				</section>
			</div>
		</div>

	</div>
</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />