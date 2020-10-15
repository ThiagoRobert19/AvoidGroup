<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="col-md-12 col-xl-6">

	<hr class="invisible">
	
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
										href="<c:url value='/friend/viewFriend/${lista.publisher.id}'/>"><c:out value="${lista.publisher.firstName}"/> <c:out value="${lista.publisher.lastName}"/></a>
								</c:if>
								<c:if test="${lista.shared=='yes'}">
									<a
										href="<c:url value='/friend/viewFriend/${lista.sharer.id}'/>"><c:out value="${lista.sharer.firstName}"/>
										<c:out value="${lista.sharer.lastName}"/></a>
								</c:if>
							</div>
							<c:if test="${lista.shared!='yes'}">
								<div class="h7 text-muted"><c:out value="${lista.publisher.about}"/></div>
							</c:if>
							<c:if test="${lista.shared=='yes'}">
								<div class="h7 text-muted"><c:out value="${lista.sharer.about}"/></div>
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
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card-body">
				<div class="text-muted h7 mb-2">
					<!-- i class="far fa-clock"></i> ${lista.timeago} min ago | -->
					<c:if test="${lista.shared!='yes'}">
					<c:out value="${lista.dateOfPublication}"/> | <c:out value="${lista.timeOfPublication}"/>
					</c:if>
					<c:if test="${lista.shared=='yes'}">
						<a href="#" class="card-link pr-0"><i class="fa fa-share"></i>
							Shared</a>	| <c:out value ="${lista.dateOfShare}"/> | <c:out value ="${lista.timeOfShare}"/>
					</c:if>
				</div>

				<p class="card-text">
					<c:if test="${lista.shared!='yes'}">
						<h5><c:out value="${lista.content}"/></h5>
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
							<c:out value ="${lista.dateOfPublication}"/> | <c:out value ="${lista.timeOfPublication}"/>
						</div>
						
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
				<a href="#" onclick="FormComment();" class="card-link pr-5 pl-5"><i
					class="fa fa-comment"></i> Comment</a>
				<div id="FormComment" style="display: none">
					<form action="<c:url value='/comment/addCommentPublication'/>"
						method="post">
						<input type="hidden" name="publicationID" value="${lista.id}">
						<label>Comment: </label> <input type="text" name="content">
						<input type="submit">
					</form>
				</div>
				<c:if test="${clienteLogado.email!=lista.publisher.user.email}">
					<c:if test="${clienteLogado.email!=lista.sharer.user.email}">
						<a href="<c:url value='/publication/share/${lista.id}'/>"
							class="card-link pr-0"><i class="fa fa-share"></i> Share</a>
					</c:if>
				</c:if>

			</div>
		</div>
	</c:forEach>
	<!-- Post -->
	<hr class="invisible">


</div>