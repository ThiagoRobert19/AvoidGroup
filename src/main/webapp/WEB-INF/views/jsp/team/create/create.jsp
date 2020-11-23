<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<c:import url="/WEB-INF/views/jsp/team/create/top.jsp" />
<main>
<div class="main-section">
	<div class="container">
		<div class="main-section-data">
			<div class="row">
				<c:import url="/WEB-INF/views/jsp/team/create/profilecard.jsp" />
				<div class="col-lg-9">
					<div class="main-ws-sec">
						<div class="row">
							<div class="col-lg-12">
								<h3>Create a new Team</h3>
								<form class="radio-form" action="<c:url value='/team/add'/>"
									method="post" enctype="multipart/form-data">
									<div class="cp-field">
										<h5>Name</h5>
										<div class="cpp-fiel">
											<input type="text" name="name" placeholder="Name"
												required="required">
										</div>
									</div>
									<div class="cp-field">
										<h5>About</h5>
										<div class="cpp-fiel">
											<textarea class="form-control" rows="7" placeholder="About"
												name="about" required="required"></textarea>
											<i class="fa fa-address-card"></i>

										</div>
									</div>
									<div class="cp-field">
										<h5>Game</h5>
										<div class="cpp-fiel">
											<select name="gameID" class="form-control">

												<c:forEach var="listGame" items="${listGame}">
													<option value="${listGame.id}">
														<c:out value="${listGame.name}" /></option>
												</c:forEach>
											</select>

										</div>
									</div>
									<div class="cp-field">
										<h5>Image Profile</h5>
										<div class="cpp-fiel">
											<input type="file" name="imageProfile" id="imageProfile"
												required="required"> <i class="far fa-image"></i>
										</div>
									</div>
									<div class="cp-field">
										<h5>Image Background</h5>
										<div class="cpp-fiel">
											<input type="file" name="imageBack" id="imageBack"
												required="required"> <i class="far fa-image"></i>
										</div>
									</div>
									<div class="cp-field">
										<h5>Youtube</h5>
										<div class="cpp-fiel">
											<input type="text" name="youtube"
												placeholder="Youtube Link if any"> <i
												class="fa fa-youtube"></i>
										</div>
									</div>
									<div class="cp-field">
										<h5>Instagram</h5>
										<div class="cpp-fiel">
											<input type="text" name="instagram"
												placeholder="Instagram Link if any"> <i
												class="fa fa-instagram"></i>
										</div>
									</div>
									<div class="cp-field">
										<h5>Facebook</h5>
										<div class="cpp-fiel">
											<input type="text" name="facebook"
												placeholder="Facebook Link if any"> <i
												class="fa fa-facebook-square"></i>
										</div>
									</div>
									<div class="cp-field">
										<h5>Twitter</h5>
										<div class="cpp-fiel">
											<input type="text" name="twitter"
												placeholder="Twitter Link if any"> <i
												class="fa fa-twitter"></i>
										</div>
									</div>
									<div class="save-stngs pd2">
										<ul>
											<li><button class="btn botaopreto" type="submit">Save</button></li>

										</ul>
									</div>
									<!--save-stngs end-->
								</form>
							</div>

						</div>
					</div>
					<!--main-ws-sec end-->
				</div>

			</div>
		</div>
		<!-- main-section-data end-->
	</div>
</div>
</main>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />

<script>
	document.getElementById("imageProfile").onchange = function() {
		var reader = new FileReader();

		reader.onload = function(e) {
			// get loaded data and render thumbnail.
			document.getElementById("profileImage").src = e.target.result;
		};

		// read the image file as a data URL.
		reader.readAsDataURL(this.files[0]);
	};
	document.getElementById("imageBack").onchange = function() {
		var reader = new FileReader();

		reader.onload = function(e) {
			// get loaded data and render thumbnail.
			document.getElementById("backImage").src = e.target.result;
		};

		// read the image file as a data URL.
		reader.readAsDataURL(this.files[0]);
	};
</script>

