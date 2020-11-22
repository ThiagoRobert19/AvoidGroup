<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="product-feed-tab current" id="feed-dd">
	<div class="posts-section">
		<div class="post-topbar">

			<form action="<c:url value='/teampublication/add'/>" method="POST"
				enctype="multipart/form-data">
				<input type="hidden" name="teamID" value="${teamEntity.id}" />
				<div class="form-group">
					<div class="row">
						<textarea class="form-control" rows="3"
							placeholder="What are you thinking?" name="content"></textarea>
					</div>

					<div class="row">
						<input class="form-control" type="file" id="customFile"
							name="file">
						<div id="filedrag"></div>
						<img id="image" />

					</div>

					<div class="row post-st">

						<ul>


							<li><button type="submit" class="btn botaopreto">
									Post</button></li>

						</ul>

					</div>
				</div>
			</form>

		</div>

		<c:forEach var="listPub" items="${pagedListHolder.pageList}">

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
					<c:if
						test="${listPub.publisher.id==clienteLogado.id || teamEntity.owner.id==clienteLogado.id || teamEntity.admin.id==clienteLogado.id}">
						<div class="ed-opts">
							<a href="#" title="" class="ed-opts-open"><i
								class="la la-ellipsis-v"></i></a>
							<ul class="ed-options">
								<c:if test="${listPub.publisher.id==clienteLogado.id}">
									<li><a href="#" title="">Edit Post</a></li>
								</c:if>

								<li><a
									href="<c:url value="/teampublication/delete/${listPub.id}"/>"
									title="">Delete</a></li>
							</ul>
						</div>
					</c:if>
				</div>
				<div class="job_descp">

					<div class="row">
						<c:if test="${not empty listPub.image}">
							<p>
								<img src="<c:url value="${listPub.image}"/>" alt="no image"
									style="width: 700px">
							</p>
						</c:if>
					</div>
					<div class="row">
						<p>${listPub.content}</p>
					</div>

				</div>
				<div class="job-status-bar">
					<ul class="like-com">
						<li><a href="#"><i class="fas fa-heart"></i> Like
								${listPub.countLike}</a></li>
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
							<ul id="listCa+ ${listPub.id}">

							</ul>
						</div>
					</div>
				</div>
			</div>


		</c:forEach>

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
<script>



	document.getElementById("customFile").onchange = function() {
		var reader = new FileReader();

		reader.onload = function(e) {
			// get loaded data and render thumbnail.
			document.getElementById("image").src = e.target.result;
		};

		// read the image file as a data URL.
		reader.readAsDataURL(this.files[0]);
	};
</script>