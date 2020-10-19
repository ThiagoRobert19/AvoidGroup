<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<div class="sign-in-page ">
	<div class="signin-popup">
		<div class="signin-pop">
			<div class="row">
				<div class="col-lg-6">
					<div class="cmp-info">
						<div class="cm-logo">


							<img src="<c:url value='/resources/images/logo192.png'/>" alt="">
							<p>InAvonts, is a global Social Network focused in the Gaming
								world!</p>
							<p>We focus in bringing the best gaming content related,
								gaming tournaments, news and more!</p>
						</div>
						<!--cm-logo end-->
						<img src="<c:url value='/resources/images/cm-main-img.png'/>"
							alt="">
					</div>
					<!--cmp-info end-->
				</div>
				<div class="col-lg-6">
					<div class="login-sec">
						<ul class="sign-control">
						<c:if test="${in=='yes'}">
							<li data-tab="tab-1" class="current"><a href="#" title="">Sign
										in</a></li>
							<li data-tab="tab-2"><a href="#" title="">Sign up</a></li>
						</c:if>
						<c:if test="${in!='yes'}">
							<li data-tab="tab-1" ><a href="#" title="">Sign
										in</a></li>
							<li data-tab="tab-2" class="current"><a href="#" title="">Sign up</a></li>
						</c:if>
							
							
						</ul>
						<div class="sign_in_sec current" id="tab-1">

							<h3>Sign in</h3>
							<form action="<c:url value='/user/doLogin'/>" method="post">
								<div class="row">
									<div class="col-lg-12 no-pdd">
										<div class="sn-field">
											<input type="email" name="email"
												placeholder="something@email.com"> <i
												class="la la-user"></i>
										</div>
										<!--sn-field end-->
									</div>
									<div class="col-lg-12 no-pdd">
										<div class="sn-field">
											<input type="password" name="password" placeholder="Password">
											<i class="la la-lock"></i>
										</div>
									</div>
									<div class="col-lg-12 no-pdd">
										<div class="checky-sec">
											<!-- div class="fgt-sec">
												<input type="checkbox" name="cc" id="c1"> <label
													for="c1"> <span></span>
												</label> <small>Remember me</small>
											</div-->
											<!--fgt-sec end-->
											<a href="#" title="">Forgot Password?</a>
										</div>
									</div>
									<div class="col-lg-12 no-pdd">
										<button type="submit" value="submit">Sign in</button>
									</div>

									<c:if test="${not empty erro}">
										<div class="col-lg-12 no-pdd">
											<div class="alert alert-danger">
												<strong>Erro!</strong> ${erro}
											</div>
										</div>
									</c:if>


								</div>
							</form>

							<!-- div class="login-resources">
								<h4>Login Via Social Account</h4>
								<ul>
									<li><a href="#" title="" class="fb"><i
											class="fa fa-facebook"></i>Login Via Facebook</a></li>
									<li><a href="#" title="" class="tw"><i
											class="fa fa-twitter"></i>Login Via Twitter</a></li>
								</ul>
							</div-->
							<!--login-resources end-->
						</div>

						<!--sign_in_sec end-->
						<div class="sign_in_sec" id="tab-2">
							<!-- div class="signup-tab">
										<i class="fa fa-long-arrow-left"></i>
										<h2>johndoe@example.com</h2>
										<ul>
											<li data-tab="tab-3" class="current"><a href="#"
												title="">User</a></li>
											<li data-tab="tab-4"><a href="#" title="">Company</a></li>
										</ul>
									</div-->
							<!--signup-tab end-->
							<div class="dff-tab current" id="tab-3">
								<form action="<c:url value='/user/register'/>" method="post">
									<div class="row">
										<div class="col-lg-12 no-pdd">
											<div class="sn-field">
												<input type="text" name="name" placeholder="Full Name">
												<i class="la la-user"></i>
											</div>
										</div>
										<div class="col-lg-12 no-pdd">
											<div class="sn-field">
												<input type="text" name="userName" placeholder="Username">
												<i class="la la-user"></i>
											</div>
										</div>
										<div class="col-lg-12 no-pdd">
											<div class="sn-field">
												<input type="tel" name="phone" placeholder="Phone number">
												<i class="la la-globe"></i>
											</div>
										</div>
										<div class="col-lg-12 no-pdd">
											<div class="sn-field">
												<input type="email" name="email"
													placeholder="something@email.com"> <i
													class="la la-globe"></i>
											</div>
										</div>
										<div class="col-lg-12 no-pdd">
											<div class="sn-field">
												<input type="password" name="password"
													placeholder="Password"> <i class="la la-lock"></i>
											</div>
										</div>
										<div class="col-lg-12 no-pdd">
											<div class="sn-field">
												<input type="password" name="rePassword"
													placeholder="Repeat Password"> <i
													class="la la-lock"></i>
											</div>
										</div>
										<div class="col-lg-12 no-pdd">
											<div class="checky-sec st2">
												<div class="fgt-sec">
													<input type="checkbox" name="cc" id="c2" required="required"> <label
														for="c2"> <span></span>
													</label> <small>Yes, I understand and agree to the InAvonts
														Terms & Conditions.</small>
												</div>
												<!--fgt-sec end-->
											</div>
										</div>
										<div class="col-lg-12 no-pdd">
											<button type="submit" value="submit">Get Started</button>
										</div>
										<c:if test="${not empty erro}">
											<div class="col-lg-12 no-pdd">
												<div class="alert alert-danger">
													<strong>Erro!</strong> ${erro}
												</div>
											</div>
										</c:if>
									</div>
								</form>
							</div>


							<!--dff-tab end-->
						</div>
					</div>
					<!--login-sec end-->
				</div>
			</div>
		</div>
		<!--signin-pop end-->
	</div>


	<!--signin-popup end-->
	<div class="footy-sec">
		<div class="container">
			<ul>
				<li><a href="help-center.html" title="">Help Center</a></li>
				<li><a href="about.html" title="">About</a></li>
				<li><a href="#" title="">Privacy Policy</a></li>
				<li><a href="#" title="">Community Guidelines</a></li>
				<li><a href="#" title="">Cookies Policy</a></li>
				<li><a href="#" title="">Career</a></li>
				<li><a href="forum.html" title="">Forum</a></li>
				<li><a href="#" title="">Language</a></li>
				<li><a href="#" title="">Copyright Policy</a></li>
			</ul>
			<p>
				<img src="<c:url value='/resources/images/copy-icon.png'/>" alt="">Copyright
				2019


			</p>
		</div>
	</div>
	<!--footy-sec end-->
</div>


<c:import url="/WEB-INF/cabecalho/footer.jsp" />