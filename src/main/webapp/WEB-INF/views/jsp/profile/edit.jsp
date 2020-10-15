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
							<a href="#"><font color="#ffffff">Edit Profile</font></a>
						</h1>
					</div>
				</div>
				<hr class="invisible">
				<form action="<c:url value='/profile/update'/>"
					method="post" class="form-horizontal">
					<input type="hidden" name="id" value="${profile.id}">
					<div class="row">
						<div class="col-md-12 col-xl-4">
							<div class="form-group">
								First Name: <input class="form-control" placeholder="First Name" name="firstName" value="${profile.firstName}"
									required />
							</div>
						</div>
						<div class="col-md-12 col-xl-4">
							<div class="form-group">
								Last Name: <input class="form-control" placeholder="Last Name" name="lastName" value="${profile.lastName}"
									required />
							</div>
						</div>
						<div class="col-md-12 col-xl-4">
							<div class="form-group">
								NickName: <input class="form-control" placeholder="NickName" name="nickName" value="${profile.nickName}"
									required />
							</div>
						</div>
						
					</div>
					<div class="row">
						<div class="col-md-12 col-xl-12">
							<div class="form-group">
								About: <input class="form-control" placeholder="About" name="about" value="${profile.about}"
									required />
							</div>
						</div>
						
						
					</div>
					<hr class="invisible">
					<button class="btn btn-info" type="submit">Edit</button>
				</form>
				<hr class="invisible">
			</div>
		</div>

	</div>
</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />