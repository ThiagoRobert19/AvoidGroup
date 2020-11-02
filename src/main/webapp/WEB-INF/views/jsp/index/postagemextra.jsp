<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="posts-section">
	<c:forEach var="listUser" items="${pagedListHolder.pageList}">
		<div class="post-bar">
			<div class="post_topbar">
				<div class="usy-dt">
					<img src="images/resources/us-pic.png" alt="">
					<div class="usy-name">
						<h3>John Doe</h3>
						<span><img src="images/clock.png" alt="">3 min ago</span>
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
			<div class="epi-sec">
				<ul class="descp">
					<li><img src="images/icon8.png" alt=""><span>Epic
							Coder</span></li>
					<li><img src="images/icon9.png" alt=""><span>India</span></li>
				</ul>
				<ul class="bk-links">
					<li><a href="#" title=""><i class="la la-bookmark"></i></a></li>
					<li><a href="#" title=""><i class="la la-envelope"></i></a></li>
				</ul>
			</div>
			<div class="job_descp">
				<h3>Senior Wordpress Developer</h3>
				<ul class="job-dt">
					<li><a href="#" title="">Full Time</a></li>
					<li><span>$30 / hr</span></li>
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

				<a href="#"><i class="fas fa-heart"></i> Like 25</a> <a href="#"
					id="dropComment" onClick="carregarComentarios(${lista.id})"
					data-toggle="dropdown"><i class="fas fa-comment-alt"></i>Comment</a>
				<input type="hidden" id="idPub${lista.id}" value="${lista.id}">

				<a href="#"><i class="fas fa-share"></i>Shares 50</a>


				<div id="dropComment"
					class="dropdown-menu dropdown-menu-right card-link pr-5 pl-5"
					aria-labelledby="gedf-drop1">


					<form action="<c:url value='/comment/addCommentPublication'/>"
						method="post">
						<input type="hidden" name="publicationID" value="${lista.id}">
						<textarea class="form-control" rows="3" placeholder="Comment"
							name="content"></textarea>



						<button class="float-right" type="submit">Send</button>

					</form>
					<br> <br>

					<div class="container">
						<ul id="listCa${lista.id}">

						</ul>
					</div>
				</div>
			</div>

		</div>

	</c:forEach>
	<!--post-bar end-->
	<div class="top-profiles">
		<div class="pf-hd">
			<h3>Top Profiles</h3>
			<i class="la la-ellipsis-v"></i>
		</div>
		<div class="profiles-slider">
			<div class="user-profy">
				<img src="<c:url value='/resources/images/resources/user3.png'/>"
					alt="">
				<h3>John Doe</h3>
				<span>Graphic Designer</span>
				<ul>
					<li><a href="#" title="" class="followw">Follow</a></li>



					<li><a href="#" title="" class="envlp"><img
							src="<c:url value='/resources/images/envelop.png'/>" alt=""></a></li>
					<li><a href="#" title="" class="hire">hire</a></li>
				</ul>
				<a href="#" title="">View Profile</a>
			</div>

		</div>

	</div>


	<div class="process-comm">
		<div class="spinner">
			<div class="bounce1"></div>
			<div class="bounce2"></div>
			<div class="bounce3"></div>
		</div>
	</div>
	<!--process-comm end-->
</div>
