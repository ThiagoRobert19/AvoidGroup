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
							<a href="#"><font color="#ffffff">Password Change</font></a>
						</h1>
					</div>
				</div>
				<hr class="invisible">
				<form action="<c:url value='/profile/updatePassword'/>"
					method="post" class="form-horizontal">
					<input type="hidden" name="id" value="${userEntity.id}">
					<input type="hidden" name="id" value="${profile.id}">
					<div class="row">
						<div class="col-md-12 col-xl-4">
							<div class="form-group">
								Old Password: <input type="password" class="form-control" placeholder="Old Password" name="oldPassword" 
									required />
							</div>
						</div>
						<div class="col-md-12 col-xl-4">
							<div class="form-group">
								New Password: <input type="password" class="form-control" placeholder="New Password" name="newPassword" 
									required />
							</div>
						</div>
						<div class="col-md-12 col-xl-4">
							<div class="form-group">
								Re-type New Password: <input type="password" class="form-control" placeholder="Re-type New Password" name="reNewPassword" 
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