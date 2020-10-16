<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>InAvonts</title>
<meta name="viewport"
	content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="description" content="InAvonts - Social Games Networking" />
<meta name="keywords"
	content="games game-online inavonts most-popular-games profile online-social-games-networking" />
<meta name="author" content="InAvonts Group" />


<!-- FAVICON -->
<link rel="apple-touch-icon" sizes="57x57"
	href="<c:url value='/resources/_img/_favicon/apple-touch-icon-57x57.png'/>">
<link rel="apple-touch-icon" sizes="60x60"
	href="<c:url value='/resources/_img/_favicon/apple-touch-icon-60x60.png'/>">
<link rel="apple-touch-icon" sizes="76x76"
	href="<c:url value='/resources/_img/_favicon/apple-touch-icon-76x76.png'/>">
<link rel="apple-touch-icon" sizes="114x114"
	href="<c:url value='/resources/_img/_favicon/apple-touch-icon-114x114.png'/>">
<link rel="apple-touch-icon" sizes="120x120"
	href="<c:url value='/resources/_img/_favicon/apple-touch-icon-120x120.png'/>">
<link rel="apple-touch-icon" sizes="144x144"
	href="<c:url value='/resources/_img/_favicon/apple-touch-icon-144x144.png'/>">
<link rel="apple-touch-icon" sizes="152x152"
	href="<c:url value='/resources/_img/_favicon/apple-touch-icon-152x152.png'/>">
<link rel="apple-touch-icon" sizes="180x180"
	href="<c:url value='/resources/_img/_favicon/apple-touch-icon-180x180.png'/>">

<link rel="icon" type="image/png"
	href="<c:url value='/resources/_img/_favicon/android-chrome-192x192.png'/>"
	sizes="192x192">

<link rel="icon" type="image/png"
	href="<c:url value='/resources/_img/_favicon/favicon-16x16.png'/>"
	sizes="16x16">
<link rel="icon" type="image/png"
	href="<c:url value='/resources/_img/_favicon/favicon-32x32.png'/>"
	sizes="32x32">
<link rel="icon" type="image/png"
	href="<c:url value='/resources/_img/_favicon/favicon-96x96.png'/>"
	sizes="96x96">

<link rel="manifest"
	href="<c:url value='/resources/_img/_favicon/manifest.json'/>">
<link rel="shortcut icon" type='image/x-icon'
	href="<c:url value='/resources/_img/_favicon/favicon.ico'/>">



<meta name="msapplication-TileColor" content="#2754eb">
<meta name="msapplication-TileImage"
	content="<c:url value='/resources/_img/_favicon/mstile-144x144.png'/>">
<meta name="msapplication-config"
	content="<c:url value='/resources/_img/_favicon/browserconfig.xml'/>">


<!-- END FAVICON -->



<link rel="stylesheet" type="text/css"
	href="<c:url value='/resources/css/animate.css'/>">
<link rel="stylesheet" type="text/css"
	href="<c:url value='/resources/css/bootstrap.min.css'/>">
<link rel="stylesheet" type="text/css"
	href="<c:url value='/resources/css/line-awesome.css'/>">
<link rel="stylesheet" type="text/css"
	href="<c:url value='/resources/css/line-awesome-font-awesome.min.css'/>">
<link
	href="<c:url value='/resources/vendor/fontawesome-free/css/all.min.css'/>"
	rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css"
	href="<c:url value='/resources/css/font-awesome.min.css'/>">
<link rel="stylesheet" type="text/css"
	href="<c:url value='/resources/css/jquery.mCustomScrollbar.min.css'/>">
<link rel="stylesheet" type="text/css"
	href="<c:url value='/resources/lib/slick/slick.css'/>">
<link rel="stylesheet" type="text/css"
	href="<c:url value='/resources/lib/slick/slick-theme.css'/>">
<link rel="stylesheet" type="text/css"
	href="<c:url value='/resources/css/style.css'/>">
<link rel="stylesheet" type="text/css"
	href="<c:url value='/resources/css/responsive.css'/>">
</head>
<body>

	<div class="wrapper">
		<div class="sign-in-page sign-in-with-back">
			<div class="signin-popup">
				<div class="signin-pop">
					<div class="row">
						<div class="col-lg-6">
							<div class="cmp-info">
								<div class="cm-logo">
								
								
									<img src="<c:url value='/resources/images/logo192.png'/>" alt="">
									<p>Workwise, is a global freelancing platform and social
										networking where businesses and independent professionals
										connect and collaborate remotely</p>
								</div>
								<!--cm-logo end-->
								<img src="<c:url value='/resources/images/cm-main-img.png'/>" alt="">
							</div>
							<!--cmp-info end-->
						</div>
						<div class="col-lg-6">
							<div class="login-sec">
								<ul class="sign-control">
									<li data-tab="tab-1" class="current"><a href="#" title="">Sign
											in</a></li>
									<li data-tab="tab-2"><a href="#" title="">Sign up</a></li>
								</ul>
								<div class="sign_in_sec current" id="tab-1">

									<h3>Sign in</h3>
									<form>
										<div class="row">
											<div class="col-lg-12 no-pdd">
												<div class="sn-field">
													<input type="text" name="username" placeholder="Username">
													<i class="la la-user"></i>
												</div>
												<!--sn-field end-->
											</div>
											<div class="col-lg-12 no-pdd">
												<div class="sn-field">
													<input type="password" name="password"
														placeholder="Password"> <i class="la la-lock"></i>
												</div>
											</div>
											<div class="col-lg-12 no-pdd">
												<div class="checky-sec">
													<div class="fgt-sec">
														<input type="checkbox" name="cc" id="c1"> <label
															for="c1"> <span></span>
														</label> <small>Remember me</small>
													</div>
													<!--fgt-sec end-->
													<a href="#" title="">Forgot Password?</a>
												</div>
											</div>
											<div class="col-lg-12 no-pdd">
												<button type="submit" value="submit">Sign in</button>
											</div>
										</div>
									</form>
									<div class="login-resources">
										<h4>Login Via Social Account</h4>
										<ul>
											<li><a href="#" title="" class="fb"><i
													class="fa fa-facebook"></i>Login Via Facebook</a></li>
											<li><a href="#" title="" class="tw"><i
													class="fa fa-twitter"></i>Login Via Twitter</a></li>
										</ul>
									</div>
									<!--login-resources end-->
								</div>
								<!--sign_in_sec end-->
								<div class="sign_in_sec" id="tab-2">
									<div class="signup-tab">
										<i class="fa fa-long-arrow-left"></i>
										<h2>johndoe@example.com</h2>
										<ul>
											<li data-tab="tab-3" class="current"><a href="#"
												title="">User</a></li>
											<li data-tab="tab-4"><a href="#" title="">Company</a></li>
										</ul>
									</div>
									<!--signup-tab end-->
									<div class="dff-tab current" id="tab-3">
										<form>
											<div class="row">
												<div class="col-lg-12 no-pdd">
													<div class="sn-field">
														<input type="text" name="name" placeholder="Full Name">
														<i class="la la-user"></i>
													</div>
												</div>
												<div class="col-lg-12 no-pdd">
													<div class="sn-field">
														<input type="text" name="country" placeholder="Country">
														<i class="la la-globe"></i>
													</div>
												</div>
												<div class="col-lg-12 no-pdd">
													<div class="sn-field">
														<select>
															<option>Category</option>
															<option>Category 1</option>
															<option>Category 2</option>
															<option>Category 3</option>
															<option>Category 4</option>
														</select> <i class="la la-dropbox"></i> <span><i
															class="fa fa-ellipsis-h"></i></span>
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
														<input type="password" name="repeat-password"
															placeholder="Repeat Password"> <i
															class="la la-lock"></i>
													</div>
												</div>
												<div class="col-lg-12 no-pdd">
													<div class="checky-sec st2">
														<div class="fgt-sec">
															<input type="checkbox" name="cc" id="c2"> <label
																for="c2"> <span></span>
															</label> <small>Yes, I understand and agree to the
																workwise Terms & Conditions.</small>
														</div>
														<!--fgt-sec end-->
													</div>
												</div>
												<div class="col-lg-12 no-pdd">
													<button type="submit" value="submit">Get Started</button>
												</div>
											</div>
										</form>
									</div>
									<!--dff-tab end-->
									<div class="dff-tab" id="tab-4">
										<form>
											<div class="row">
												<div class="col-lg-12 no-pdd">
													<div class="sn-field">
														<input type="text" name="company-name"
															placeholder="Company Name"> <i
															class="la la-building"></i>
													</div>
												</div>
												<div class="col-lg-12 no-pdd">
													<div class="sn-field">
														<input type="text" name="country" placeholder="Country">
														<i class="la la-globe"></i>
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
														<input type="password" name="repeat-password"
															placeholder="Repeat Password"> <i
															class="la la-lock"></i>
													</div>
												</div>
												<div class="col-lg-12 no-pdd">
													<div class="checky-sec st2">
														<div class="fgt-sec">
															<input type="checkbox" name="cc" id="c3"> <label
																for="c3"> <span></span>
															</label> <small>Yes, I understand and agree to the
																workwise Terms & Conditions.</small>
														</div>
														<!--fgt-sec end-->
													</div>
												</div>
												<div class="col-lg-12 no-pdd">
													<button type="submit" value="submit">Get Started</button>
												</div>
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
						<img src="<c:url value='/resources/images/copy-icon.png'/>" alt="">Copyright 2019
						
						
					</p>
				</div>
			</div>
			<!--footy-sec end-->
		</div>

	</div>
	<!--theme-layout end-->


	<script type="text/javascript" src="<c:url value='/resources/js/jquery.min.js'/>"></script>
	<script type="text/javascript" src="<c:url value='/resources/js/pooper.js'/>"></script>
	<script type="text/javascript" src="<c:url value='/resources/js/bootstrap.min.js'/>"></script>
	<script type="text/javascript" src="<c:url value='/resources/lib/slick/slick.min.js'/>"></script>
	<script type="text/javascript" src="<c:url value='/resources/js/script.js'/>"></script>
</body>
</html>