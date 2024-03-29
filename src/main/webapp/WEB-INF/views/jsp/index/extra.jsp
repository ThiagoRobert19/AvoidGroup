<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="col-lg-3 pd-right-none no-pd">
	<div class="right-sidebar">
		<div class="widget widget-about">
			<img src="<c:url value='/resources/_img/_favicon/mstile-144x144.png'/>" alt="">
			<h3>
			<c:out value="AvoidGroup - Seja bem vindo(a) ${clienteLogado.name}" />
			</h3>
			<span>
			<c:out value="Pay only for the Hours worked" />
			</span>
			<div class="sign_link">
				<h3>
					<a href="sign-in.html" title="">
					<c:out value="Sign up" />
					</a>
				</h3>
				<a href="#" title="">
				<c:out value="Learn More" />
				</a>
			</div>
		</div>
		<!--widget-jobs end-->
		<div class="widget suggestions full-width">
			<div class="sd-title">
				<h3>
				<c:out value="Most Popular Teams" />
				</h3>
				<i class="la la-ellipsis-v"></i>
			</div>
			<!--sd-title end-->
			<div class="suggestions-list">
				<div class="suggestion-usd">
					<img src="<c:url value='/resources/images/resources/s4.png'/>"
						alt="">
					<div class="sgt-text">
						<h4>Bill Gates</h4>
						<span>C &amp; C++ Developer</span>
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

				<div class="view-more">
					<a href="#" title="">View More</a>
				</div>
			</div>
			<!--suggestions-list end-->
		</div>
		<!--widget-about end-->
		<div class="widget widget-jobs">
			<div class="sd-title">
				<h3>Top Jobs</h3>
				<i class="la la-ellipsis-v"></i>
			</div>
			<div class="jobs-list">
				<div class="job-info">
					<div class="job-details">
						<h3>Senior Product Designer</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
					</div>
					<div class="hr-rate">
						<span>$25/hr</span>
					</div>
				</div>
				<!--job-info end-->
				<div class="job-info">
					<div class="job-details">
						<h3>Senior UI / UX Designer</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
					</div>
					<div class="hr-rate">
						<span>$25/hr</span>
					</div>
				</div>
				<!--job-info end-->
				<div class="job-info">
					<div class="job-details">
						<h3>Junior Seo Designer</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
					</div>
					<div class="hr-rate">
						<span>$25/hr</span>
					</div>
				</div>
				<!--job-info end-->
				<div class="job-info">
					<div class="job-details">
						<h3>Senior PHP Designer</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
					</div>
					<div class="hr-rate">
						<span>$25/hr</span>
					</div>
				</div>
				<!--job-info end-->
				<div class="job-info">
					<div class="job-details">
						<h3>Senior Developer Designer</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
					</div>
					<div class="hr-rate">
						<span>$25/hr</span>
					</div>
				</div>
				<!--job-info end-->
			</div>
			<!--jobs-list end-->
		</div>
		<!--widget-jobs end-->
		<div class="widget widget-jobs">
			<div class="sd-title">
				<h3>Most Viewed This Week</h3>
				<i class="la la-ellipsis-v"></i>
			</div>
			<div class="jobs-list">
				<div class="job-info">
					<div class="job-details">
						<h3>Senior Product Designer</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
					</div>
					<div class="hr-rate">
						<span>$25/hr</span>
					</div>
				</div>
				<!--job-info end-->
				<div class="job-info">
					<div class="job-details">
						<h3>Senior UI / UX Designer</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
					</div>
					<div class="hr-rate">
						<span>$25/hr</span>
					</div>
				</div>
				<!--job-info end-->
				<div class="job-info">
					<div class="job-details">
						<h3>Junior Seo Designer</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
					</div>
					<div class="hr-rate">
						<span>$25/hr</span>
					</div>
				</div>
				<!--job-info end-->
			</div>
			<!--jobs-list end-->
		</div>

	</div>
	<!--right-sidebar end-->
</div>