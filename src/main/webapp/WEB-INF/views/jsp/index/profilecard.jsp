<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="col-lg-3 col-md-4 pd-left-none no-pd">
	<div class="main-left-sidebar no-margin">
		<div class="user-data full-width">
			<div class="user-profile">

				<div class="username-dt">
					<div class="usr-pic">
						<img src="<c:url value='/resources/images/resources/user3.png'/>"
							alt="">
					</div>
				</div>
				<!--username-dt end-->
				<div class="user-specs">
					<h3>John Doe</h3>
					<span>Graphic Designer at Self Employed</span>
				</div>
			</div>
			<!--user-profile end-->
			<ul class="user-fw-status">
				<li>
					<h4>Following</h4> <span>34</span>
				</li>
				<li>
					<h4>Followers</h4> <span>155</span>
				</li>
				<li><a href="my-profile.html" title="">View Profile</a></li>
			</ul>
		</div>
		<!--user-data end-->
		<div class="suggestions full-width">
			<div class="sd-title">
				<h3>Suggestions</h3>
				<i class="la la-ellipsis-v"></i>
			</div>
			<!--sd-title end-->
			<div class="suggestions-list">
				<div class="suggestion-usd">

					<img src="<c:url value='/resources/images/resources/s1.png'/>"
						alt="">
					<div class="sgt-text">
						<h4>Jessica William</h4>
						<span>Graphic Designer</span>
					</div>
					<span><i class="la la-plus"></i></span>
				</div>
				<div class="suggestion-usd">
					<img src="<c:url value='/resources/images/resources/s2.png'/>"
						alt="">
					<div class="sgt-text">
						<h4>John Doe</h4>
						<span>PHP Developer</span>
					</div>
					<span><i class="la la-plus"></i></span>
				</div>
				<div class="suggestion-usd">
					<img src="<c:url value='/resources/images/resources/s3.png'/>"
						alt="">
					<div class="sgt-text">
						<h4>Poonam</h4>
						<span>Wordpress Developer</span>
					</div>
					<span><i class="la la-plus"></i></span>
				</div>
				<div class="suggestion-usd">
					<img src="<c:url value='/resources/images/resources/s4.png'/>"
						alt="">
					<div class="sgt-text">
						<h4>Bill Gates</h4>
						<span>C & C++ Developer</span>
					</div>
					<span><i class="la la-plus"></i></span>
				</div>
				<div class="suggestion-usd">
					<img src="<c:url value='/resources/images/resources/s5.png'/>"
						alt="">
					<div class="sgt-text">
						<h4>Jessica William</h4>
						<span>Graphic Designer</span>
					</div>
					<span><i class="la la-plus"></i></span>
				</div>
				<div class="suggestion-usd">
					<img src="<c:url value='/resources/images/resources/s6.png'/>"
						alt="">
					<div class="sgt-text">
						<h4>John Doe</h4>
						<span>PHP Developer</span>
					</div>
					<span><i class="la la-plus"></i></span>
				</div>
				<div class="view-more">
					<a href="#" title="">View More</a>
				</div>
			</div>
			<!--suggestions-list end-->
		</div>
		<!--suggestions end-->
		<div class="tags-sec full-width">
			<ul>
				<li><a href="#" title="">Help Center</a></li>
				<li><a href="#" title="">About</a></li>
				<li><a href="#" title="">Privacy Policy</a></li>
				<li><a href="#" title="">Community Guidelines</a></li>
				<li><a href="#" title="">Cookies Policy</a></li>
				<li><a href="#" title="">Career</a></li>
				<li><a href="#" title="">Language</a></li>
				<li><a href="#" title="">Copyright Policy</a></li>
			</ul>



			<div class="cp-sec">
				<img src="<c:url value='/resources/images/logo2.png'/>" alt="">
				<p>
					<img src="<c:url value='/resources/images/cp.png'/>" alt="">Copyright
					2019
				</p>
			</div>
		</div>
		<!--tags-sec end-->
	</div>
	<!--main-left-sidebar end-->
</div>

<!--
header {
	float: left;
	width: 100%;
	background-color: #e44d3a;
}

  -->
