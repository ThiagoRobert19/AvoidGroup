<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="col-lg-6 col-md-8 no-pd">
	<div class="main-ws-sec">
		<div class="post-topbar">

			<form action="<c:url value='/publication/add'/>" method="POST"
				enctype="multipart/form-data">
				<div class="form-group">
					<div class="row">
						<textarea class="form-control" rows="7"
							placeholder="What are you thinking?" name="content"></textarea>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label for="video-url">Paste a Vimeo or YouTube video URL
								here</label> <input class="form-control" id="video" name="video"
								onchange="displayIt(); return false;" placeholder="Video URL"
								type="url">
						</div>
						<div id="videocontainer" style="display: none;">
							<div class="form-group">
								<div id="video-preview"></div>
							</div>
							<div class="form-group">
								<label for="video-title">Caption/Title</label> <input
									class="form-control" id="video-title" maxlength="100"
									name="video" placeholder="Video Title" type="text">
							</div>
						</div>
					</div>
					<div class="row">
						<input class="form-control" type="file" id="customFile"
							name="file">
						<div id="filedrag"></div>
						<img id="image" />

					</div>
					<div id="videobox" style="display: none;">
						<div class="form-group">
							<div id="video-preview"></div>
						</div>
						<div class="form-group">
							<label for="video-title">Caption/Title</label> <input
								class="form-control" id="video-title" maxlength="100"
								name="video" placeholder="Video Title" type="text">
						</div>
					</div>
					<div class="row post-st">
						<ul>

							<li><button type="submit" class="btn btn-primary">Post</button></li>
						</ul>
					</div>
				</div>
			</form>

			<!--div class="user-picy">
				<img src="<c:url value='/resources/images/resources/user3.png'/>"
					alt="">
			</div>

			<div class="post-st">
				<ul>
					<li><textarea class="form-control" name="description"></textarea></li>
					<li><a class="post-jb active" href="#" title="">Post a Job</a></li>
				</ul>
			</div-->
			<!--post-st end-->
		</div>
		<!--post-topbar end-->
		<div class="posts-section">
			<div class="post-bar">
				<div class="post_topbar">
					<div class="usy-dt">
						<img src="<c:url value='/resources/images/resources/user3.png'/>"
							alt="">
						<div class="usy-name">
							<h3>John Doe</h3>
							<span><img
								src="<c:url value='/resources/images/clock.png'/>" alt="">3
								min ago</span>
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
						<li><img src="<c:url value='/resources/images/icon8.png'/>"
							alt=""><span>Epic Coder</span></li>
						<li><img src="<c:url value='/resources/images/icon9.png'/>"
							alt=""><span>India</span></li>
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
					<ul class="like-com">
						<li><a href="#"><i class="fas fa-heart"></i> Like</a> <img
							src="<c:url value='/resources/images/liked-img.png'/>" alt="">
							<span>25</span></li>
						<li><a href="#" class="com"><i class="fas fa-comment-alt"></i>
								Comment 15</a></li>
					</ul>
					<a href="#"><i class="fas fa-eye"></i>Views 50</a>
				</div>
			</div>
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
					<!--user-profy end-->
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
					<!--user-profy end-->
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
					<!--user-profy end-->
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
					<!--user-profy end-->
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
					<!--user-profy end-->
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
					<!--user-profy end-->
				</div>
				<!--profiles-slider end-->
			</div>
			<!--top-profiles end-->
			<div class="post-bar">
				<div class="post_topbar">
					<div class="usy-dt">



						<img src="<c:url value='/resources/images/resources/user3.png'/>"
							alt="">
						<div class="usy-name">
							<h3>John Doe</h3>
							<span><img
								src="<c:url value='/resources/images/clock.png'/>" alt="">3
								min ago</span>
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



						<li><img src="<c:url value='/resources/images/icon8.png'/>"
							alt=""><span>Epic Coder</span></li>
						<li><img src="<c:url value='/resources/images/icon9.png'/>"
							alt=""><span>India</span></li>
					</ul>
					<ul class="bk-links">
						<li><a href="#" title=""><i class="la la-bookmark"></i></a></li>
						<li><a href="#" title=""><i class="la la-envelope"></i></a></li>
						<li><a href="#" title="" class="bid_now">Bid Now</a></li>
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
					<ul class="like-com">
						<li><a href="#"><i class="fas fa-heart"></i> Like</a> <img
							src="<c:url value='/resources/images/liked-img.png'/>" alt="">
							<span>25</span></li>
						<li><a href="#" class="com"><i class="fas fa-comment-alt"></i>
								Comment 15</a></li>
					</ul>
					<a href="#"><i class="fas fa-eye"></i>Views 50</a>
				</div>
			</div>
			<!--post-bar end-->
			<div class="posty">
				<div class="post-bar no-margin">
					<div class="post_topbar">
						<div class="usy-dt">
							<img
								src="<c:url value='/resources/images/resources/us-pc2.png'/>"
								alt="">
							<div class="usy-name">
								<h3>John Doe</h3>
								<span><img
									src="<c:url value='/resources/images/clock.png'/>" alt="">3
									min ago</span>
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
							<li><img src="<c:url value='/resources/images/icon8.png'/>"
								alt=""><span>Epic Coder</span></li>
							<li><img src="<c:url value='/resources/images/icon9.png'/>"
								alt=""><span>India</span></li>
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
						<ul class="like-com">
							<li><a href="#"><i class="fas fa-heart"></i> Like</a> <img
								src="<c:url value='/resources/images/liked-img.png'/>" alt="">
								<span>25</span></li>
							<li><a href="#" class="com"><i
									class="fas fa-comment-alt"></i> Comment 15</a></li>
						</ul>
						<a href="#"><i class="fas fa-eye"></i>Views 50</a>
					</div>
				</div>
				<!--post-bar end-->
				<div class="comment-section">
					<a href="#" class="plus-ic"> <i class="la la-plus"></i>
					</a>
					<div class="comment-sec">
						<ul>
							<li>




								<div class="comment-list">
									<div class="bg-img">
										<img
											src="<c:url value='/resources/images/resources/bg-img1.png'/>"
											alt="">
									</div>
									<div class="comment">
										<h3>John Doe</h3>
										<span><img
											src="<c:url value='/resources/images/clock.png'/>" alt="">
											3 min ago</span>
										<p>Lorem ipsum dolor sit amet,</p>
										<a href="#" title="" class="active"><i
											class="fa fa-reply-all"></i>Reply</a>
									</div>
								</div> <!--comment-list end-->
								<ul>
									<li>
										<div class="comment-list">
											<div class="bg-img">
												<img
													src="<c:url value='/resources/images/resources/bg-img2.png'/>"
													alt="">
											</div>
											<div class="comment">
												<h3>John Doe</h3>
												<span><img
													src="<c:url value='/resources/images/clock.png'/>" alt="">
													3 min ago</span>
												<p>Hi John</p>
												<a href="#" title=""><i class="fa fa-reply-all"></i>Reply</a>
											</div>
										</div> <!--comment-list end-->
									</li>
								</ul>
							</li>
							<li>
								<div class="comment-list">
									<div class="bg-img">
										<img
											src="<c:url value='/resources/images/resources/bg-img3.png'/>"
											alt="">
									</div>
									<div class="comment">
										<h3>John Doe</h3>
										<span><img
											src="<c:url value='/resources/images/clock.png'/>" alt="">
											3 min ago</span>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing
											elit. Aliquam luctus hendrerit metus, ut ullamcorper quam
											finibus at.</p>
										<a href="#" title=""><i class="fa fa-reply-all"></i>Reply</a>
									</div>
								</div> <!--comment-list end-->
							</li>
						</ul>
					</div>
					<!--comment-sec end-->
					<div class="post-comment">
						<div class="cm_img">
							<img
								src="<c:url value='/resources/images/resources/bg-img4.png'/>"
								alt="">
						</div>
						<div class="comment_box">
							<form>
								<input type="text" placeholder="Post a comment">
								<button type="submit">Send</button>
							</form>
						</div>
					</div>
					<!--post-comment end-->
				</div>
				<!--comment-section end-->
			</div>
			<!--posty end-->
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
	<!--main-ws-sec end-->
</div>

<script>
//$(document).ready(function () {
//	loadPublication();
//});	
	function loadPublication() {
		console.log("carregando publicacao");
		var currentLocation = window.location;

		var url = currentLocation + "publication/viewPublications";
		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest(); //for IE7+, Firefox, Chrome, Opera, Safari
		} else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //for IE6, IE5
		}

		xmlhttp.open("GET", url, true);

		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4) {

				var jsonObj = JSON.parse(xmlhttp.responseText);
				
				for (i = 0; i < jsonObj.length; i++) {
					var photoPublisher = jsonObj[i].publisher.photo;
					var photoSharer = jsonObj[i].sharer.photo;
					
					
					var content = jsonObj[i].content;
					
					
						
						var publisherName =escapeHTML(jsonObj[i].publisher.name) ;
						
						
						$("#publicaqui").append(
						'<div class="card gedf-card">'
							+'<div class="card-header"> '
								+'<div class="d-flex justify-content-between align-items-center">'
										+'<div class="d-flex justify-content-between align-items-center">'
											+'<div class="mr-2">'
												+'<img class="rounded-circle" width="45"  alt="avatar" src="'+photoPublisher+'">'
											+'</div>'
											+'<div class="ml-2">'
												+'<div class="h5 m-0">'
													+'<a href="<c:url value="/friend/viewFriend/'+jsonObj[i].publisher.id+'"/>"> '+publisherName+'</a>'
												+'</div>'
												+'<div class="h7 text-muted">'+jsonObj[i].publisher.userName+'</div>'
											+'</div>'
										+'</div>'
								+'</div>'
							+'</div>'
							
							
							+'<div class="card-body">'
							+'<div class="text-muted h7 mb-2">'
								+jsonObj[i].dateOfPublication+' | '
								+jsonObj[i].timeOfPublication
								
								
							+'</div>'

							+'<p class="card-text">'
								+'<h5>'
								+jsonObj[i].content
								+'</h5>'
								
							+'</p>'
							+'<p class="card-text">'
								+'<img height="150"  alt="avatar" src="'+jsonObj[i].image+'">'
							+'</p>'
							
								+'<div class="card-header">'

									+'<div class="d-flex justify-content-between align-items-center">'
										+'<div class="d-flex justify-content-between align-items-center">'
											+'<div class="mr-2">'
											+'<img class="rounded-circle" width="45"  alt="avatar" src="'+photoPublisher+'">'
											+'</div>'
											+'<div class="ml-2">'
												+'<div class="h5 m-0">'
													+'<a href="<c:url value="/friend/viewFriend/'+jsonObj[i].publisher.id+'"/>"> '+firstnamePublisher+'</a>'
												+'</div>'
												+'<div class="h7 text-muted">'
												+jsonObj[i].publisher.about
												+'</div>'
											+'</div>'
										+'</div>'

									+'</div>'
								+'</div>'
								+'<div class="card-body">'
									+'<div class="text-muted h7 mb-2">'
									+jsonObj[i].dateOfPublication +' | '
									+jsonObj[i].timeOfPublication
										
										+'<h5>'
										+jsonObj[i].content
										
										+'</h5>'
										
											+'<p class="card-text">'
											+'<img height="150"  alt="avatar" src="'+jsonObj[i].image+'">'
											+'</p>'
										
									+'</div>'
									+'</div>'
							
									+'</div>'
						+'</div>'
								
						
						);
						
						
					
						
					
				}

			}
		};
		function escapeHTML (unsafe_str) {
		    return unsafe_str
		      .replace(/&/g, '&amp;')
		      .replace(/</g, '&lt;')
		      .replace(/>/g, '&gt;')
		      .replace(/\"/g, '&quot;')
		      .replace(/\'/g, '&#39;')
		      .replace(/\//g, '&#x2F;')
		}

		xmlhttp.send(null);

	}
</script>
