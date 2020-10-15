<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
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
		<form action="<c:url value='/user/verify'/>" method="post"
									class="form-horizontal">
			<!-- Acess -->
			<section class="form-login px-5">

				<a class="navbar-brand mr-auto py-5" href="<c:url value='/'/>">
					<span class="icon-avoid-login"><img
						src="<c:url value='/resources/css/iconfonts/logo.svg'/>"
						alt="[Avoid Group]"></span> <span class="sr-only">Avoid
						Group</span>
				</a>
				
				<!--div class="form-group has-icon-left form-control-name">
					<label class="sr-only" for="inputName">Your name</label> <input
						type="text" class="form-control form-control-lg" id="inputName"
						placeholder="Informe o seu Nome">
				</div-->
				<div class="form-group has-icon-left form-control-email">
					<label class="sr-only" for="inputEmail">Your email</label> <input
						type="email" class="form-control form-control-lg" id="inputEmail"
						placeholder="Informe o seu Email" name="email" autocomplete="on">
				</div>
				<div class="form-group has-icon-left form-control-password">
					<label class="sr-only" for="inputPassword">Enter a password</label>
					<input type="password" class="form-control form-control-lg"
						id="inputPassword"  name="password" placeholder="Informe um Senha"
						autocomplete="on">
				</div>
				<div class="form-group has-icon-left form-control-password">
					<label class="sr-only" for="inputPassword">Re-type password</label>
					<input type="password" class="form-control form-control-lg"
						id="inputPassword"  name="confirmPassword" placeholder="Informe um Senha"
						autocomplete="on">
				</div>
				<label class="c-input c-checkbox"> <input type="checkbox"
					checked> <span class="c-indicator"></span> I agree to Avoid
					<a href="#" class="c-input-terms">terms of service</a>
				</label>
				<hr class="invisible">
			</section>
			<!-- Acess -->
			<!-- Btn Acess -->
			<section class="form-login-btn">
			
				
				<hr class="invisible">
				<button type="submit"
					class="btn btn-primary has-gradient btn-block btn-lg">Setup</button>
				<hr class="invisible">
				<div class="form-login-social text-center pb-5">
					<h3>Or</h3>
					<hr class="invisible">
					<a href="#"
						class="btn btn-social btn-social-icon btn-social-facebook"> <span
						class="icon-facebook"></span>
					</a> <a href="#"
						class="btn btn-social btn-social-icon btn-social-twitter"> <span
						class="icon-twitter"></span>
					</a> <a href="#"
						class="btn btn-social btn-social-icon btn-social-google"> <span
						class="icon-google"></span>
					</a> <a href="#"
						class="btn btn-social btn-social-icon btn-social-linkedin"> <span
						class="icon-linkedin"></span>
					</a>
				</div>
			</section>
			</form>
			<!-- Btn Acess -->
		</div>
	</div>
	<!-- row -->
</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />
