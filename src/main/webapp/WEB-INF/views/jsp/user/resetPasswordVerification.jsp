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

									<img src="<c:url value='/resources/img/_users/face1.jpg'/>"
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

									<img src="<c:url value='/resources/img/_users/face2.jpg'/>"
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
									<img src="<c:url value='/resources/img/_users/face3.jpg'/>"
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
									<img src="<c:url value='/resources/img/_users/face4.jpg'/>"
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
									<img src="<c:url value='/resources/img/_users/face5.jpg'/>"
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
								src="<c:url value='/resources/img/_users/face1.jpg'/>"
								alt="Navigation avatar" class="img-fluid rounded-circle"></li>
							<li data-target="#carousel-testimonials" data-slide-to="1"><img
								src="<c:url value='/resources/img/_users/face2.jpg'/>"
								alt="Navigation avatar" class="img-fluid rounded-circle"></li>
							<li data-target="#carousel-testimonials" data-slide-to="2"
								class="active"><img
								src="<c:url value='/resources/img/_users/face3.jpg'/>"
								alt="Navigation avatar" class="img-fluid rounded-circle"></li>
							<li data-target="#carousel-testimonials" data-slide-to="3"><img
								src="<c:url value='/resources/img/_users/face4.jpg'/>"
								alt="Navigation avatar" class="img-fluid rounded-circle"></li>
							<li data-target="#carousel-testimonials" data-slide-to="4"><img
								src="<c:url value='/resources/img/_users/face5.jpg'/>"
								alt="Navigation avatar" class="img-fluid rounded-circle"></li>
						</ol>
					</div>
				</div>
			</section>
			<!-- Testimonials -->
		</div>
		<div class="col-md-6">

			<!-- Acess -->
			<h1>Enter on your email and click on the link to complete the
				Reset</h1>
			<section class="form-login px-5">

				<a class="navbar-brand mr-auto py-5" href="<c:url value='/'/>">
					<span class="icon-avoid-login"><img
						src="<c:url value='/resources/css/iconfonts/logo.svg'/>"
						alt="[Avoid Group]"></span> <span class="sr-only">Avoid
						Group</span>
				</a>


				<hr class="invisible">
			</section>
			<!-- Acess -->
			<!-- Btn Acess -->
			<section class="form-login-btn">


				<hr class="invisible">



			</section>

			<!-- Btn Acess -->
		</div>
	</div>
	<!-- row -->
</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />