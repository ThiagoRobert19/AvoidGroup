<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="product-feed-tab current" id="feed-dd">
	<div class="posts-section">


		<c:forEach var="listPub" items="${pagedListHolder.pageList}">
			<c:if test="${listPub.shared=='yes'}">
				<!-- #########################################################if(shared=="yes"){ -->
				<div class="post-bar">
					<div class="post_topbar">
						<div class="usy-dt">


							<img src="<c:url value="${listPub.sharer.photo}"/>"
								alt="no image" style="width: 80px">
							<div class="usy-name">
								<h3>${listPub.sharer.name}</h3>
								<span> ${listPub.dateOfShare} </span> <span>${listPub.timeOfShare}
								</span>
							</div>
						</div>
						<c:if test="${listPub.sharer.id==clienteLogado.id}">
							<div class="ed-opts">
								<a href="#" title="" class="ed-opts-open"><i
									class="la la-ellipsis-v"></i></a>
								<ul class="ed-options">
									<li><a href="#" title="">Edit Post</a></li>
									<li><a
										href="<c:url value="/publication/delete/${listPub.id}/shared"/>"
										title="">Delete</a></li>
								</ul>
							</div>
						</c:if>
					</div>
					<div class="post-bar">
						<div class="post_topbar">
							<div class="usy-dt">



								<img src="<c:url value="${listPub.publisher.photo}"/>"
									alt="no image" style="width: 80px">
								<div class="usy-name">
									<h3>
										${listPub.publisher.name} <i class="fas fa-share"></i>
									</h3>
									<span> ${listPub.dateOfPublication} </span> <span>${listPub.timeOfPublication}
									</span>
								</div>
							</div>

						</div>
						<div class="job_descp">
							
							<p>${listPub.content}</p>
							<ul class="skill-tags">
								<li><a href="#" title="">HTML</a></li>
								<li><a href="#" title="">PHP</a></li>
								<li><a href="#" title="">JAVA</a></li>
							</ul>
						</div>

					</div>
					<div class="job-status-bar">
						<ul class="like-com">
							<li><a href="#"><i class="fas fa-heart"></i> Like
									${listPub.countLike}</a></li>
							<li><a
								href="<c:url value="/publication/share/${listPub.id}"/>"><i
									class="fas fa-share"></i>Shares ${listPub.countShared}</a></li>
						</ul>
						<a href="#" id="dropComment"
							onClick="carregarComentarios(${listPub.id})"
							data-toggle="dropdown"><i class="fas fa-comment-alt"></i>Comment
							${listPub.countComment} </a>
						<div id="dropComment"
							class="dropdown-menu dropdown-menu-right card-link pr-5 pl-5"
							aria-labelledby="gedf-drop1">

							<form action="<c:url value="/comment/addCommentPublication"/>"
								method="post">
								<input type="hidden" name="publicationID" value="${listPub.id}">
								<textarea class="form-control" rows="3" placeholder="Comment"
									name="content"></textarea>
								<button class="float-right btn botaopreto" type="submit">Send</button>
							</form>
							<br> <br>
							<div class="container">
								<ul id="listCa'+${listPub.id}">

								</ul>
							</div>
						</div>
					</div>
				</div>
				<!-- ######################################################### -->
			</c:if>
			<c:if test="${listPub.shared!='yes'}">

				<!-- #########################################################if(shared!="yes"){ -->
				<div class="post-bar">
					<div class="post_topbar">
						<div class="usy-dt">
							<img src="<c:url value="${listPub.publisher.photo}"/>"
								alt="no image" style="width: 80px">
							<div class="usy-name">
								<h3>${listPub.publisher.name}</h3>
								<span> ${listPub.dateOfPublication} </span> <span>
									${listPub.timeOfPublication} </span>
							</div>
						</div>
						<c:if test="${listPub.publisher.id==clienteLogado.id}">
							<div class="ed-opts">
								<a href="#" title="" class="ed-opts-open"><i
									class="la la-ellipsis-v"></i></a>
								<ul class="ed-options">
									<li><a href="#" title="">Edit Post</a></li>
									<li><a
										href="<c:url value="/publication/delete/${listPub.id}/shared"/>"
										title="">Delete</a></li>
								</ul>
							</div>
						</c:if>
					</div>
					<div class="job_descp">
						
						<p>${listPub.content}</p>
						<ul class="skill-tags">
							<li><a href="#" title="">HTML</a></li>
							<li><a href="#" title="">PHP</a></li>
							<li><a href="#" title="">JAVA</a></li>
						</ul>
					</div>
					<div class="job-status-bar">
						<ul class="like-com">
							<li><a href="#"><i class="fas fa-heart"></i> Like
									${listPub.countLike}</a></li>
							<li><a
								href="<c:url value="/publication/share/${listPub.id}"/>"><i
									class="fas fa-share"></i>Shares ${listPub.countShared}</a></li>
						</ul>
						<a href="#" id="dropComment"
							onClick="carregarComentarios(${listPub.id})"
							data-toggle="dropdown"><i class="fas fa-comment-alt"></i>Comment
							${listPub.countComment} </a>
						<div id="dropComment"
							class="dropdown-menu dropdown-menu-right card-link pr-5 pl-5"
							aria-labelledby="gedf-drop1">
							'
							<form action="<c:url value="/comment/addCommentPublication"/>"
								method="post">
								<input type="hidden" name="publicationID" value="${listPub.id}">
								<textarea class="form-control" rows="3" placeholder="Comment"
									name="content"></textarea>
								<button class="float-right btn botaopreto" type="submit">Send</button>
							</form>
							<br> <br>
							<div class="container">
								<ul id="listCa'+ ${listPub.id}">

								</ul>
							</div>
						</div>
					</div>
				</div>
			</c:if>

		</c:forEach>
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

	</div>

</div>
<script>
	
	function carregarComentarios(idPub) {
		
		$("#listCa" + idPub).empty();
		
		
		var currentLocation = window.location;

		var url = currentLocation + "comment/viewComments/" + idPub;
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
					var commenterID = jsonObj[i].commenter.id;
					var userID = ${clienteLogado.id};
					
					var timecomment =jsonObj[i].timeOfComment ; 
					var datecomment =jsonObj[i].dateOfComment ; 
					var content=escapeHTML(jsonObj[i].content);
					
					var name=escapeHTML(jsonObj[i].commenter.name);
					
					
					if (commenterID == userID) {
						
						$("#listCa"+ idPub)
								.append(
										'<li>'
												+ '<hr> <img src="'+jsonObj[i].commenter.photo+'" height="50" alt="Avatar" class="rounded-circle">'
												+ name
												+ ' <br> '
												+timecomment
												+ ' <br> '
												+'<input class="form-control"  placeholder="Comment" name="content" value="'+content+'" readonly />'
												+ ' <br>'
												+ '<a href="<c:url value="/comment/delete/'+jsonObj[i].id+'"/>"  class="btn botaopreto" > Delete </a>'
												+ '</li>');
					} else {

						$("#listCa" + idPub)
								.append('<li>'
												+ '<hr> <img src="'+jsonObj[i].commenter.photo+'" height="50" alt="Avatar" class="rounded-circle">'
												+ ' '
												+ name
												+ ' <br> '
												+timecomment
												+ ' <br> '
												+'<input class="form-control"  placeholder="Comment" name="content" value="'+content+'" readonly />'
												+ '</li>');
					}

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
