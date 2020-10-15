<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="col-md-12 col-xl-6">

	<hr class="invisible">

	<input type="hidden" id="clientID" value="${clienteLogado.id}" />
	<c:forEach var="lista" items="${listaP}">
		<div class="card gedf-card">
			<div class="card-header">

				<div class="d-flex justify-content-between align-items-center">
					<div class="d-flex justify-content-between align-items-center">
						<div class="mr-2">
							<c:if test="${lista.shared!='yes'}">


								<img class="rounded-circle" width="45"
									src="${lista.publisher.photo}" alt="">
							</c:if>
							<c:if test="${lista.shared=='yes'}">


								<img class="rounded-circle" width="45"
									src="${lista.sharer.photo}" alt="">

							</c:if>
						</div>
						<div class="ml-2">
							<div class="h5 m-0">
								<c:if test="${lista.shared!='yes'}">
									<a
										href="<c:url value='/friend/viewFriend/${lista.publisher.id}'/>"><c:out
											value="${lista.publisher.firstName}" /> <c:out
											value="${lista.publisher.lastName}" /></a>
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

								<c:if test="${lista.publisher.user.id==clienteLogado.id}">
									<a class="dropdown-item"
										href="<c:url value='/publication/delete/${lista.id}'/>">Delete
										Post</a>

								</c:if>
								<c:if test="${lista.sharer.user.id==clienteLogado.id}">
									<a class="dropdown-item"
										href="<c:url value='/publication/delete/${lista.id}/shared'/>">Delete
										Post</a>

								</c:if>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card-body">
				<div class="text-muted h7 mb-2">
					<!-- i class="far fa-clock"></i> ${lista.timeago} min ago | -->
					<c:if test="${lista.shared!='yes'}">
					<c:out value="${lista.dateOfPublication}" /> | <c:out value="${lista.timeOfPublication}" />
					</c:if>
					<c:if test="${lista.shared=='yes'}">
						<a href="#" class="card-link pr-0"><i class="fa fa-share"></i>
							Shared</a>	| <c:out value="${lista.dateOfShare}" /> | <c:out value="${lista.timeOfShare}" />
					</c:if>
				</div>

				<p class="card-text">
					<c:if test="${lista.shared!='yes'}">
						<h5>
							<c:out value="${lista.content}" />
						</h5>
					</c:if>
				</p>
				<c:if test="${lista.shared!='yes'}">
					<c:if test="${lista.image!=null}">
						<p class="card-text">
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
											href="<c:url value='/friend/viewFriend/${lista.publisher.id}'/>"><c:out value ="${lista.publisher.firstName}"/>
											<c:out value ="${lista.publisher.lastName}"/></a>
									</div>
									<div class="h7 text-muted"><c:out value ="${lista.publisher.about}"/></div>
								</div>
							</div>

						</div>
					</div>
					<div class="card-body">
						<div class="text-muted h7 mb-2">
							<!-- i class="far fa-clock"></i> ${lista.timeago} min ago | -->
							<c:out value="${lista.dateOfPublication}" /> | <c:out value="${lista.timeOfPublication}" />
						</div>
						<!--a class="card-link" href="#">
					
						<h5>${lista.content}</h5>
				</a-->

						<h5><c:out value ="${lista.content}"/></h5>

						<c:if test="${lista.image!=null}">
							<p class="card-text">
								<img height="150" src="${lista.image}" alt="">
							</p>
						</c:if>
					</div>


					<!-- TESDE DE COMPARTILHAMENTO -->
				</c:if>
			</div>
			<div class="card-text text-center">
				<span class="pr-3">${lista.countLike} Likes</span> <span
					class="pr-3">${lista.countComment} Comments</span> <span
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
				<a href="#" id="myBtn${lista.id}"
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
						<ul id="listC${lista.id}">
						</ul>
					</div>
				</div>
				<!-- ########################################################################### -->



				<c:if test="${clienteLogado.email!=lista.publisher.user.email}">
					<c:if test="${clienteLogado.email!=lista.sharer.user.email}">
						<a href="<c:url value='/publication/share/${lista.id}'/>"
							class="card-link pr-0"><i class="fa fa-share"></i> Share</a>
					</c:if>
				</c:if>
			</div>
		</div>
		<script>
			document.getElementById("myBtn${lista.id}").onclick = displayDate;
			document.getElementById("myBtn2${lista.id}").onclick = displayDate;
			function displayDate() {

				var idPub = document.getElementById("idPub${lista.id}").value;

				var currentLocation = window.location;

				var url = currentLocation + "/viewComments/" + idPub;
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
						$("#listC${lista.id}").empty();
						for (i = 0; i < jsonObj.length; i++) {
							var commenterID = jsonObj[i].commenter.user.id;
							var userID = document.getElementById("clientID").value;
							if (commenterID == userID) {

								$("#listC${lista.id}")
										.append(
												'<li>'
														+ '<hr> <img src="'+jsonObj[i].commenter.photo+'" height="50" alt="Avatar" class="rounded-circle">'
														+ ' '
														+ jsonObj[i].commenter.firstName
														+ ' '
														+ jsonObj[i].commenter.lastName
														+ '<br> '
														+ jsonObj[i].timeOfComment
														+ '<br>'
														+'<c:out value ="'+jsonObj[i].content+'"/>'
														+ 
														+ ' <br>'
														+ '<a href="<c:url value="/comment/profile/delete/'+jsonObj[i].id+'"/>"   id="myBtn2${lista.id}" class="button-comment button1-comment" >'
														+ ' ' + 'delete'
														+ '</a>' + '</li>');
							} else {
								$("#listC${lista.id}")
										.append(
												'<li>'
														+ '<hr> <img src="'+jsonObj[i].commenter.photo+'" height="50" alt="Avatar" class="rounded-circle">'
														+ ' '
														+ jsonObj[i].commenter.firstName
														+ ' '
														+ jsonObj[i].commenter.lastName
														+ ' <br> '
														+ jsonObj[i].timeOfComment
														+ '<br>'
														+'<c:out value ="'+jsonObj[i].content+'"/>'
														+ '</li>');
							}

						}

					}
				};

				xmlhttp.send(null);

			}
		</script>
	</c:forEach>
	<!-- Post -->
	<hr class="invisible">


</div>