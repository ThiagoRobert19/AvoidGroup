<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="col-md-12 col-xl-6">

	<section>
		<input type="hidden" id="clientID" value="${clienteLogado.id}" />
		<div class="tabs tabs-style-flip ">
			<nav>

				<ul>
					<li><a href="#section-flip-1" class=""><span>Make a
								publication</span></a></li>
					<li><a href="#section-flip-2" class=""><span>Photo/Video</span></a></li>

				</ul>
			</nav>
			<form action="<c:url value='/publication/add'/>" method="POST"
				enctype="multipart/form-data">

				<div class="content-wrap">
					<section id="section-flip-1 card-body">
						<div class="form-group">
							<label class="sr-only" for="message">post</label>
							<textarea class="form-control" id="message" rows="7"
								placeholder="What are you thinking?" name="content"></textarea>

						</div>

						<div class="row px-5">

							<div class="col-md-12 col-xl-6">
								<div class="btn-toolbar justify-content-between">
									<div class="btn-group">
										<button type="submit" class="btn btn-primary">share</button>
									</div>
								</div>
							</div>

							<div class="col-md-12 col-xl-6">
								<div class="btn-group">
									<button id="btnGroupDrop1" type="button"
										class="btn btn-link dropdown-toggle" data-toggle="dropdown"
										aria-haspopup="true" aria-expanded="false">
										<i class="icon-user"></i>
									</button>
									<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
										<a class="dropdown-item" href="#">Public Post</a> <a
											class="dropdown-item" href="#">Friends</a> <a
											class="dropdown-item" href="#">Just me</a>
									</div>
								</div>
							</div>

						</div>

					</section>
					<section id="section-flip-2 card-body">
						<div class="form-group">
							<div class="custom-file">


								<input type="file" id="customFile" name="file">
								<div id="filedrag">or drop files here</div>
								<!--label
									class="custom-file-label" for="customFile"></label-->
								<img id="image" width="200" height="200" />
							</div>
						</div>

						<div class="row px-5">
							<div class="col-md-12 col-xl-6">
								<div class="btn-toolbar justify-content-between">
									<div class="btn-group">
										<button type="submit" class="btn btn-primary">share</button>
									</div>
								</div>
							</div>
						</div>

					</section>

				</div>
			</form>

		</div>
		<!-- /tabs -->
	</section>
	<hr class="invisible">
	<div id="publicaqui"></div>
	<!-- Post -->
	<c:forEach var="lista" items="${lista}">
		<div class="card gedf-card">
			<div class="card-header">

				<div class="d-flex justify-content-between align-items-center">
					<div class="d-flex justify-content-between align-items-center">
						<div class="mr-2" id="photoUser">
							<c:if test="${lista.shared!='yes'}">


								<img class="rounded-circle" width="45"
									src="${lista.publisher.photo}" alt="">

							</c:if>
							<c:if test="${lista.shared=='yes'}">


								<img class="rounded-circle" width="45"
									src="${lista.sharer.photo}" alt="">

							</c:if>
						</div>
						<div class="ml-2" id="summarieUser">
							<div class="h5 m-0">
								<c:if test="${lista.shared!='yes'}">
									<a
										href="<c:url value='/friend/viewFriend/${lista.publisher.id}'/>">
										<c:out value="${lista.publisher.firstName}" /> <c:out
											value="${lista.publisher.lastName}" />

									</a>
								</c:if>
								<c:if test="${lista.shared=='yes'}">
									<a
										href="<c:url value='/friend/viewFriend/${lista.sharer.id}'/>"><c:out
											value="${lista.sharer.firstName}" /> <c:out
											value="${lista.sharer.lastName}" /></a>
								</c:if>
							</div>
							<c:if test="${lista.shared!='yes'}">
								<div class="h7 text-muted">
									<c:out value="${lista.publisher.about}" />
								</div>
							</c:if>
							<c:if test="${lista.shared=='yes'}">
								<div class="h7 text-muted">
									<c:out value="${lista.sharer.about}" />
								</div>
							</c:if>
						</div>
					</div>
					<div>
						<div class="dropdown">
							<button class="btn btn-link dropdown-toggle" type="button"
								id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true"
								aria-expanded="false">
								<i class="fa fa-ellipsis-h"></i>
							</button>
							<div class="dropdown-menu dropdown-menu-right"
								aria-labelledby="gedf-drop1">
								<div class="h6 dropdown-header pb-4">Configuration</div>
								<c:if test="${lista.publisher.user.id!=clienteLogado.id}">
									<a class="dropdown-item" href="#">Save Post</a>

								</c:if>
								<c:if test="${lista.shared=='yes'}">
									<c:if test="${clienteLogado.id==lista.sharer.user.id}">
										<a class="dropdown-item"
											href="<c:url value='/publication/delete/${lista.id}/shared'/>">Delete
											Share Post</a>
									</c:if>
								</c:if>
								<c:if test="${lista.shared=='no'}">

									<c:if test="${clienteLogado.id==lista.publisher.user.id}">
										<a class="dropdown-item"
											href="<c:url value='/publication/delete/${lista.id}'/>">Delete
											Your Post</a>
									</c:if>
								</c:if>



							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card-body">
				<div class="text-muted h7 mb-2 " id="dateTimePub">
					<!-- i class="far fa-clock"></i> ${lista.timeago} min ago | -->
					<c:if test="${lista.shared!='yes'}">
						<c:out value="${lista.dateOfPublication}" /> | <c:out
							value="${lista.timeOfPublication}" />
					</c:if>
					<c:if test="${lista.shared=='yes'}">
						<a href="#" class="card-link pr-0"><i class="fa fa-share"></i>
							Shared</a>	| <c:out value="${lista.dateOfShare}" /> | <c:out
							value="${lista.timeOfShare}" />
					</c:if>
				</div>

				<p class="card-text" id="contentPub">
					<c:if test="${lista.shared!='yes'}">
						<h5>
							<c:out value="${lista.content}" />
						</h5>
					</c:if>
				</p>
				<c:if test="${lista.shared!='yes'}">
					<c:if test="${lista.image!=null}">
						<p class="card-text" id="imagePub">
							<img height="150" src="${lista.image}" alt="">
						</p>
					</c:if>
				</c:if>
				<c:if test="${lista.shared=='yes'}">
					<!-- TESTE DE COMPARTILHAMENTO -->
					<div class="card-header">

						<div class="d-flex justify-content-between align-items-center">
							<div class="d-flex justify-content-between align-items-center">
								<div class="mr-2">


									<img class="rounded-circle" width="45"
										src="${lista.publisher.photo}" alt="">


								</div>
								<div class="ml-2">
									<div class="h5 m-0">
										<a
											href="<c:url value='/friend/viewFriend/${lista.publisher.id}'/>">
											<c:out value="${lista.publisher.firstName}" /> <c:out
												value="${lista.publisher.lastName}" />
										</a>
									</div>
									<div class="h7 text-muted">
										<c:out value="${lista.publisher.about}" />
									</div>
								</div>
							</div>

						</div>
					</div>
					<div class="card-body">
						<div class="text-muted h7 mb-2">

							<c:out value="${lista.dateOfPublication}" />
							|
							<c:out value="${lista.timeOfPublication}" />
							<h5>
								<c:out value="${lista.content}" />
							</h5>
							<c:if test="${lista.image!=null}">
								<p class="card-text">
									<img height="150" src="${lista.image}" alt="">
								</p>
							</c:if>
						</div>
					</div>
				</c:if>
			</div>
			<div class="card-text text-center">
				<span class="pr-3">${lista.countLike} Likes</span> <span
					class="pr-3"> ${lista.countComment} Comments</span> <span
					class="pr-3">${lista.countShared} Shares</span>
			</div>
			<div class="card-footer text-center">
				<c:if test="${lista.youLiked=='yes'}">
					<a href="<c:url value='/like/addDeslikePublication/${lista.id}'/>"
						class="card-link pr-0"><i class="fa fa-thumbs-down"></i>
						Deslike</a>
				</c:if>
				<c:if test="${lista.youLiked=='no'}">
					<a href="<c:url value='/like/addLikePublication/${lista.id}'/>"
						class="card-link pr-0"><i class="fa fa-thumbs-up"></i> Like</a>
				</c:if>
				<!-- ########################################################################### -->
				<a href="#" onClick="carregarComentarios(${lista.id})"
					class="card-link pr-5 pl-5 dropdown-toggle" data-toggle="dropdown">
					<i class="fa fa-comment"></i> ${lista.countComment} Comments
				</a> <input type="hidden" id="idPub${lista.id}" value="${lista.id}">

				<div class="dropdown-menu dropdown-menu-right card-link pr-5 pl-5"
					aria-labelledby="gedf-drop1">


					<form action="<c:url value='/comment/addCommentPublication'/>"
						method="post">
						<input type="hidden" name="publicationID" value="${lista.id}">
						<textarea class="form-control" rows="3" placeholder="Comment"
							name="content"></textarea>



						<button class="btn-circle has-gradient float-right" type="submit">
							<span class="sr-only">Send</span> <span class="icon-edit"></span>
						</button>

					</form>
					<br> <br>

					<div class="container">
						<ul id="listCa${lista.id}">

						</ul>
					</div>
				</div>
				<!-- ########################################################################### -->

				<c:if test="${lista.publisher.user.email!='account@avoidgroup.com'}">
					<c:if test="${clienteLogado.email!=lista.publisher.user.email}">
						<c:if test="${clienteLogado.email!=lista.sharer.user.email}">
							<a href="<c:url value='/publication/share/${lista.id}'/>"
								class="card-link pr-0"><i class="fa fa-share"></i> Share</a>
						</c:if>
					</c:if>
				</c:if>

			</div>
		</div>

	</c:forEach>
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
					var commenterID = jsonObj[i].commenter.user.id;
					var userID = document.getElementById("clientID").value;
					var content = jsonObj[i].content;
					
					if (commenterID == userID) {
						
						var firstname =escapeHTML(jsonObj[i].commenter.firstName) ;
						var lastname = escapeHTML(jsonObj[i].commenter.lastName) ;
						var timecomment =escapeHTML(jsonObj[i].timeOfComment) ; 
						var content=escapeHTML(jsonObj[i].content);
						$("#listCa" + idPub)
								.append(
										'<li>'
												+ '<hr> <img src="'+jsonObj[i].commenter.photo+'" height="50" alt="Avatar" class="rounded-circle">'
												+ ' '
												+ firstname+ ' '+ lastname
												+ ' <br> '
												+ timecomment
												+ ' <br> '
												+content
												+ ' <br>'
												+ '<a href="<c:url value="/comment/delete/'+jsonObj[i].id+'"/>"  class="button-comment button1-comment" >'
												+ ' ' + 'delete' + '</a>'
												+ '</li>');
					} else {

						$("#listCa" + idPub)
								.append(
										'<li>'
												+ '<hr> <img src="'+jsonObj[i].commenter.photo+'" height="50" alt="Avatar" class="rounded-circle">'
												+ ' '
												+ firstname+ ' '+ lastname
												+ ' <br> '
												+ timecomment
												+ ' <br> '
												+content
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
						'<div class="card gedf-card">'
							+'<div class="card-header"> '
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


