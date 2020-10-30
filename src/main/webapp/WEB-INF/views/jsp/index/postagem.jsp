<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
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
<script>
	var currentLocation = window.location;
	console.log("Hello world!");
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
				var photoPublisher = jsonObj[i].publisher.photoName;
				//var photoSharer = jsonObj[i].sharer.photoName;

				var content = jsonObj[i].content;

				var publisherName = escapeHTML(jsonObj[i].publisher.name);

				$("#publicaqui")
						.append('<div class="post-bar"> '
										+ '<div class="post_topbar">'
												+ '<div class="usy-dt">'
													+ '<img src="<c:url value="/resources/images/resources/user3.png"/>" alt="">'
													+ '<div class="usy-name">' + '<h3>'
													+ publisherName
														+ '</h3>'
														+ '	<span>'
														+ jsonObj[i].dateOfPublication
														+ '</span>'
														+ '	<span>'
														+ jsonObj[i].timeOfPublication
														+ '</span>'
													+ '</div>'
												+ '</div>'
												+ '<div class="ed-opts">'
													+ '<a href="#" title="" class="ed-opts-open"><i class="la la-ellipsis-v"></i></a>'
													+ '<ul class="ed-options">'
														+ '<li><a href="#" title="">Edit Post</a></li>'
														+ '<li><a href="#" title="">Unsaved</a></li>'
														+ '<li><a href="#" title="">Unbid</a></li>'
														+ '<li><a href="<c:url value="/publication/delete/'+jsonObj[i].id+'"/>" title="">Delete</a></li>'
														+ '<li><a href="#" title="">Hide</a></li>'
													+ '</ul>'
												+ '</div>'
										+ '</div>'
										+ '<div class="job_descp">'
												+ '<h3>'
												+ jsonObj[i].publisher.userName
												+ '</h3>'
		
												+ '<p>'
												+ jsonObj[i].content
												+ '</p>'
	
										+ '</div>'
										+ '<div class="job-status-bar">'
												+ '<ul class="like-com">'
												+ '<li><a href="#"><i class="fas fa-heart"></i> Like 25</a> </li>'
												+ '<li><a href="#"><i class="fas fa-comment-alt"></i>Comment 15</a></li>'
												+ '<li><a href="#"><i class="fas fa-share"></i>Share 15</a></li>'
												+ '</ul>' 
										 +'</div>' 
								+ '</div>'

						);

			}

		}
	};
	function escapeHTML(unsafe_str) {
		return unsafe_str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(
				/>/g, '&gt;').replace(/\"/g, '&quot;').replace(/\'/g, '&#39;')
				.replace(/\//g, '&#x2F;')
	}

	xmlhttp.send(null);
</script>

