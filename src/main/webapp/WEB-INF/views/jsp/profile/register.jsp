<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />

<section class="interface">
	<div class="row">
		<div class="col-md-6">
			<!-- Testimonials -->
			<section class="section-testimonials text-center bg-dark">
				<div class="container">
					<h3 class="sr-only">Comentarios</h3>
					<div id="carousel-testimonials" class="carousel slide"
						data-ride="carousel" data-interval="0">
						<div class="carousel-inner">
							<div class="carousel-item">
								<blockquote class="blockquote">

									<img src="<c:url value='/resources/_img/_users/face1.jpg'/>"
										height="80" width="80" alt="[Cold]" class="rounded-circle">
									<p class="h3">Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Magni pariatur cupiditate, architecto iste
										exercitationem ea, animi eius mollitia veritatis sequi, vero
										voluptas, explicabo dolorem minima ducimus quibusdam dolores
										ut rerum?</p>
									<footer>Cold</footer>
								</blockquote>
							</div>
							<div class="carousel-item">
								<blockquote class="blockquote">

									<img src="<c:url value='/resources/_img/_users/face2.jpg'/>"
										height="80" width="80" alt="[Taco]" class="rounded-circle">
									<p class="h3">Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Magni pariatur cupiditate, architecto iste
										exercitationem ea, animi eius mollitia veritatis sequi, vero
										voluptas, explicabo dolorem minima ducimus quibusdam dolores
										ut rerum?.</p>
									<footer>Taco</footer>
								</blockquote>
							</div>
							<div class="carousel-item active">
								<blockquote class="blockquote">
									<img src="<c:url value='/resources/_img/_users/face3.jpg'/>"
										height="80" width="80" alt="[Fer]" class="rounded-circle">
									<p class="h3">Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Magni pariatur cupiditate, architecto iste
										exercitationem ea, animi eius mollitia veritatis sequi, vero
										voluptas, explicabo dolorem minima ducimus quibusdam dolores
										ut rerum?</p>
									<footer>Fer</footer>
								</blockquote>
							</div>
							<div class="carousel-item">
								<blockquote class="blockquote">
									<img src="<c:url value='/resources/_img/_users/face4.jpg'/>"
										height="80" width="80" alt="[Felps]" class="rounded-circle">
									<p class="h3">Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Magni pariatur cupiditate, architecto iste
										exercitationem ea, animi eius mollitia veritatis sequi, vero
										voluptas, explicabo dolorem minima ducimus quibusdam dolores
										ut rerum?</p>
									<footer>Felps</footer>
								</blockquote>
							</div>
							<div class="carousel-item">
								<blockquote class="blockquote">
									<img src="<c:url value='/resources/_img/_users/face5.jpg'/>"
										height="80" width="80" alt="[Fallen]" class="rounded-circle">
									<p class="h3">Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Magni pariatur cupiditate, architecto iste
										exercitationem ea, animi eius mollitia veritatis sequi, vero
										voluptas, explicabo dolorem minima ducimus quibusdam dolores
										ut rerum?.</p>
									<footer>Fallen</footer>
								</blockquote>
							</div>
						</div>
						<ol class="carousel-indicators">

							<li data-target="#carousel-testimonials" data-slide-to="0"><img
								src="<c:url value='/resources/_img/_users/face1.jpg'/>"
								alt="Navigation avatar" class="img-fluid rounded-circle"></li>
							<li data-target="#carousel-testimonials" data-slide-to="1"><img
								src="<c:url value='/resources/_img/_users/face2.jpg'/>"
								alt="Navigation avatar" class="img-fluid rounded-circle"></li>
							<li data-target="#carousel-testimonials" data-slide-to="2"
								class="active"><img
								src="<c:url value='/resources/_img/_users/face3.jpg'/>"
								alt="Navigation avatar" class="img-fluid rounded-circle"></li>
							<li data-target="#carousel-testimonials" data-slide-to="3"><img
								src="<c:url value='/resources/_img/_users/face4.jpg'/>"
								alt="Navigation avatar" class="img-fluid rounded-circle"></li>
							<li data-target="#carousel-testimonials" data-slide-to="4"><img
								src="<c:url value='/resources/_img/_users/face5.jpg'/>"
								alt="Navigation avatar" class="img-fluid rounded-circle"></li>
						</ol>
					</div>
				</div>
			</section>
			<!-- Testimonials -->
		</div>
		<div class="col-md-6">

			<form action="<c:url value='/profile/save'/>" method="post"
				class="form-horizontal" enctype="multipart/form-data">
				<!-- Acess -->
				<section class="form-login px-5">

					<a class="navbar-brand mr-auto" href="<c:url value='/'/>"> <span
						class="icon-avoid-login"><img
							src="<c:url value='/resources/_css/iconfonts/logo.svg'/>"
							alt="[Avoid Group]"></span> <span class="sr-only">Avoid
							Group</span>
					</a>
					<c:if test="${not empty erro}">
						<h1>${erro}</h1>

					</c:if>
					<!--div class="form-group has-icon-left form-control-name">
					<label class="sr-only" for="inputName">Your name</label> <input
						type="text" class="form-control form-control-lg" id="inputName"
						placeholder="Informe o seu Nome">
				</div-->
					<div class="form-group has-icon-left form-control-email">
						<label class="sr-only" for="inputFirstName">First Name:</label> <input
							type="text" class="form-control form-control-lg"
							id="inputFirstName" placeholder="First Name" name="firstName"
							autocomplete="on" required>
					</div>
					<div class="form-group has-icon-left form-control-email">
						<label class="sr-only" for="inputLastName">Last Name:</label> <input
							type="text" class="form-control form-control-lg"
							id="inputLastName" placeholder="Last Name" name="lastName"
							autocomplete="on" required>
					</div>
					<div class="form-group has-icon-left form-control-email">
						<label class="sr-only" for="Imagem">Photo:</label> <input
							type="file" class="form-control form-control-lg" id="Imagem"
							placeholder="Profile Photo" name="file">
					</div>
					<div class="form-group has-icon-left form-control-email">
						<label class="sr-only" for="About">About:</label> <input
							type="text" class="form-control form-control-lg" id="About"
							placeholder="About" name="about">
					</div>
					<div class="form-group has-icon-left form-control-email">
						<label class="sr-only" for="Date Of Birth">Date Of Birth</label> <input
							type="date" class="form-control form-control-lg"
							id="Date Of Birth" placeholder="Date Of Birth" name="dateOfBirth">
					</div>
					<div class="form-group has-icon-left form-control-email">
						<label class="sr-only" for="nickName">NickName: </label> <input
							type="text" class="form-control form-control-lg" id="nickName"
							placeholder="NickName" name="nickName">
					</div>
					<div class="form-group has-icon-left form-control-email">
						<label class="sr-only" for="country">Country: </label> <select
							class="form-control form-control-lg" id="country" name="country">
							<option value="United States">United States</option>
						</select>
					</div>



					<label class="c-input c-checkbox"> <input type="checkbox"
						checked> <span class="c-indicator"></span> I agree to
						Avoid <a href="#" class="c-input-terms">terms of service</a>
					</label>
					<hr class="invisible">
				</section>
				<!-- Acess -->
				<!-- Btn Acess -->
				<section class="form-login-btn">
					<button type="submit" class="btn btn-primary btn-block btn-lg">Create
						Profile</button>
					<hr class="invisible">

					<hr class="invisible">

				</section>
			</form>
			<!-- Btn Acess -->
		</div>
	</div>
	<!-- row -->
</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />

