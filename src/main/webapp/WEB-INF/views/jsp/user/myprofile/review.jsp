<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="product-feed-tab" id="rewivewdata">
	<section></section>
	<div class="posts-section">
		<div class="post-bar reviewtitle">
			<h2>Reviews</h2>
		</div>
		<!--post-bar end-->
		<div class="post-bar ">
			<div class="post_topbar">
				<div class="usy-dt">
				
				
					<img src="<c:url value='/resources/images/resources/bg-img3.png'/>" alt="">
					<div class="usy-name">
						<h3>Rock William</h3>
						<span>UserName</span>
					</div>
				</div>
			</div>

			<div class="job_descp mngdetl">
				<div class="star-descp review">
					<ul>
						<li><i class="fa fa-star"></i></li>
						<li><i class="fa fa-star"></i></li>
						<li><i class="fa fa-star"></i></li>
						<li><i class="fa fa-star"></i></li>
						<li><i class="fa fa-star-half-o"></i></li>
					</ul>

				</div>
				<div class="reviewtext">
					<p>Lorem ipsum dolor sit amet, adipiscing elit. Nulla luctus mi
						et porttitor ultrices</p>
					<hr>
				</div>

				<div class="post_topbar post-reply">
					<div class="usy-dt">
						<img src="<c:url value='/resources/images/resources/bg-img4.png'/>" alt="">
						<div class="usy-name">
							<h3>John Doe</h3>
							<div class="epi-sec epi2">
								<p>
									<i class="la la-clock-o"></i>3 min ago
								</p>
								<p class="tahnks">Thanks :)</p>
							</div>
						</div>
					</div>
				</div>
				<div class="post_topbar rep-post rep-thanks">
					<hr>
					<div class="usy-dt">
						<img src=""<c:url value='/resources/images/resources/bg-img4.png'/>" alt=""> <input
							class="reply" type="text" placeholder="Reply"> <a
							class="replybtn" href="#">Send</a>

					</div>
				</div>

			</div>
		</div>

	</div>
</div>