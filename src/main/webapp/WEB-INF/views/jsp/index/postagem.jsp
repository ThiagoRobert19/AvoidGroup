<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="col-lg-6 col-md-8 no-pd">
	<div class="main-ws-sec">

		<!--post-topbar end-->
		
		<div class="posts-section">
			<div id="publicaqui"></div>



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
		<!--posts-section end-->
	</div>
	<!--main-ws-sec end-->
</div>
<script>
//$(document).ready(function () {
//	loadPublication();
//});	
	function loadPublication() {
		console.log("carregando comentarios");
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
					
					
						
						var firstnamePublisher =escapeHTML(jsonObj[i].publisher.firstName) ;
						var lastnamePublisher = escapeHTML(jsonObj[i].publisher.lastName) ;
						
						$("#publicaqui").append(
						'<div class="posts-section">'
							+'<div class="post-bar"> '
								+'<div class="post_topbar">'
									+'<div class="usy-dt">'
										+'	<img src="'+photoPublisher+'"alt="">'
										+'<div class="usy-name">'
											+'<h3>John Doe</h3>'
											+'	<span>3	min ago</span>'
										+'</div>'
									+'</div>'
									+'<div class="ed-opts">'
										+'<a href="#" title="" class="ed-opts-open"><iclass="la la-ellipsis-v"></i></a>'
										+'<ul class="ed-options">'
											+'<li><a href="#" title="">Edit Post</a></li>'
											+'<li><a href="#" title="">Unsaved</a></li>'
											+'<li><a href="#" title="">Unbid</a></li>'
											+'<li><a href="#" title="">Close</a></li>'
											+'<li><a href="#" title="">Hide</a></li>'
										+'</ul>'
									+'</div>'
							+'</div>'
							
							+'<div class="job_descp">'
								+'<h3>Senior Wordpress Developer</h3>'
							
								+'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>'
								+'<ul class="skill-tags">
								+'<li><a href="#" title="">HTML</a></li>
								+'<li><a href="#" title="">PHP</a></li>'
								+'<li><a href="#" title="">CSS</a></li>
								+'<li><a href="#" title="">Javascript</a></li>
								+'<li><a href="#" title="">Wordpress</a></li>
								+'</ul>
							+'</div>
							+'<div class="job-status-bar">'
								+'<ul class="like-com">'
								+'<li><a href="#"><i class="fas fa-heart"></i> Like 25</a> </li>'
								+'<li><a href="#" class="com"><i class="fas fa-comment-alt"></i>Comment 15</a></li>'
								+'</ul>'
								+'<a href="#"><i class="fas fa-eye"></i>Views 50</a>'
							+'</div>'
						+'</div>'
							//===========================
							
								+'<div class="d-flex justify-content-between align-items-center">'
										+'<div class="d-flex justify-content-between align-items-center">'
											+'<div class="mr-2">'
												+'<img class="rounded-circle" width="45"  alt="avatar" src="'+photoPublisher+'">'
											+'</div>'
											+'<div class="ml-2">'
												+'<div class="h5 m-0">'
													+'<a href="<c:url value="/friend/viewFriend/'+jsonObj[i].publisher.id+'"/>"> '+firstnamePublisher+'</a>'
												+'</div>'
												+'<div class="h7 text-muted">'+jsonObj[i].publisher.about+'</div>'
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



