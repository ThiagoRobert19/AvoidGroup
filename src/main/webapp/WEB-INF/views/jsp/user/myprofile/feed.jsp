<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="product-feed-tab current" id="feed-dd">
	<div class="posts-section">

		<!--post-bar end-->

		<!--post-bar end-->

		<!--post-bar end-->
		<div class="post-bar">
			<div class="post_topbar">
				<div class="usy-dt">


					<img src="<c:url value='/resources/images/resources/us-pic.png'/>"
						alt="">
					<div class="usy-name">
						<h3>${userEntity.name}</h3>
						<span><img
							src="<c:url value='/resources/images/clock.png'/>" alt="">${userEntity.userName}</span>
					</div>
				</div>
				<div class="ed-opts">
					<a href="#" title="" class="ed-opts-open"><i
						class="la la-ellipsis-v"></i></a>
					<ul class="ed-options">
						<li><a href="#" title="">Edit Post</a></li>
						<li><a href="#" title="">Unsaved</a></li>
						<li><a href="#" title="">Unbid</a></li>
						<li><a href="#" title="">Close</a></li>
						<li><a href="#" title="">Hide</a></li>
					</ul>
				</div>
			</div>

			<div class="job_descp">
				<h3>Ios Shopping mobile app</h3>
				<ul class="job-dt">
					<li><span>$300 - $350</span></li>
				</ul>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
					luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id
					magna sit amet... <a href="#" title="">view more</a>
				</p>
				<ul class="skill-tags">
					<li><a href="#" title="">HTML</a></li>
					<li><a href="#" title="">PHP</a></li>
					<li><a href="#" title="">CSS</a></li>
					<li><a href="#" title="">Javascript</a></li>
					<li><a href="#" title="">Wordpress</a></li>
				</ul>
			</div>
			<div class="job-status-bar">
				<ul class="like-com">
					<li><a href="#"><i class="fas fa-heart"></i> Like</a> <img
						src="images/liked-img.png" alt=""> <span>25</span></li>
					<li><a href="#" class="com"><i class="fas fa-comment-alt"></i>
							Comment 15</a></li>
				</ul>
				<a href="#"><i class="fas fa-eye"></i>Views 50</a>
			</div>
		</div>
		<!--post-bar end-->
		<div class="process-comm">
			<div class="spinner">
				<div class="bounce1"></div>
				<div class="bounce2"></div>
				<div class="bounce3"></div>
			</div>
		</div>
		<!--process-comm end-->
	</div>
	<!--posts-section end-->
</div>

