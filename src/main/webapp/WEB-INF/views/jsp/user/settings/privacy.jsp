<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="tab-pane fade show active" id="privacy" role="tabpanel"
	aria-labelledby="nav-privacy-tab">
	<div class="privac">
		<div class="row">
			<div class="col-12">
				<h3>Privacy</h3>
			</div>
		</div>
		<hr>
		<div class="row">
			<div class="col-12">
				<div class="dropdown privacydropd">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">Profile
						Type: ${clienteLogado.perfil}</a>
					<div class="dropdown-menu">
						<p>Choose who can see your email address on your profile</p>
						<div class="row">
							<div class="col-md-9 col-sm-12">
								<form class="radio-form">
									<div class="custom-control custom-checkbox">
										<input type="radio" name="tipoPerfil" checked="checked" class="custom-control-input"
											id="customCheck1"> <label
											class="custom-control-label" for="customCheck1">Private</label>
									</div>
									<div class="custom-control custom-checkbox">
										<input type="radio" name="tipoPerfil" class="custom-control-input"
											id="customCheck2"> <label
											class="custom-control-label" for="customCheck2">Public</label>
									</div>
								</form>
							</div>
							<div class="col-md-3 col-sm-12">
								<p style="float: right;">${clienteLogado.perfil}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<hr>
		<div class="row">
			<div class="col-12">
				<div class="privabtns">
					<a href="#">Save</a> <a href="#">Cancel</a>
				</div>
			</div>
		</div>
	</div>
</div>