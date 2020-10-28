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
		<form class="radio-form"
			action="<c:url value='/setting/changeprivacy'/>" method="post">
			<div class="row">
				<div class="col-12">

					Profile Type: ${clienteLogado.perfil}
					<div>
						<p>Choose your profile type</p>
						<div class="row">

							<div class="col-md-9 col-sm-12">

								<input type="hidden" name="id" value="${userEntity.id}" />
								<c:if test="${userEntity.perfil =='private'}">
									<div class="custom-control custom-checkbox">

										<input type="radio" name="tipoPerfil" value="private" checked
											class="custom-control-input" id="private"> <label
											class="custom-control-label" for="private">Private</label>
									</div>
									<div class="custom-control custom-checkbox">

										<input type="radio" name="tipoPerfil" value="public"
											class="custom-control-input" id="public"> <label
											class="custom-control-label" for="public">Public</label>
									</div>
								</c:if>
								<c:if test="${userEntity.perfil !='private'}">
									<div class="custom-control custom-checkbox">

										<input type="radio" name="tipoPerfil" value="private"
											class="custom-control-input" id="private"> <label
											class="custom-control-label" for="private">Private</label>
									</div>
									<div class="custom-control custom-checkbox">

										<input type="radio" name="tipoPerfil" value="public" checked
											class="custom-control-input" id="public"> <label
											class="custom-control-label" for="public">Public</label>
									</div>
								</c:if>

							</div>

						</div>
					</div>

				</div>
			</div>

			<div class="save-stngs pd2">
				<ul>
					<li><button type="submit" value="Save">Save</button></li>
					

				</ul>
			</div>
		</form>
	</div>
</div>