<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="col-md-12 col-xl-6">

	<c:if test="${cargo=='owner' || cargo=='admin' || cargo=='group'}">
		<section>
		
			<div class="tabs tabs-style-flip ">
				<nav>
					<ul>
						<li><a href="#section-flip-1" class=""><span>Make
									a publication</span></a></li>
						<li><a href="#section-flip-2" class=""><span>Photo/Video</span></a></li>

					</ul>
				</nav>


				<form action="<c:url value='/teamPublication/save'/>" method="POST"
					enctype="multipart/form-data">
					<div class="content-wrap">
						<section id="section-flip-1 card-body">
							<div class="form-group">
								<label class="sr-only" for="message">post</label>
								<textarea class="form-control" id="message" rows="7"
									placeholder="What are you thinking?" name="content"></textarea>
								<input type="hidden" name="idTeam" value="${team.id}">

							</div>

							<div class="row px-5">

								<div class="col-md-12 col-xl-6">
									<div class="btn-toolbar justify-content-between">
										<div class="btn-group">
											<button type="submit" class="btn btn-primary">Publish</button>
										</div>
									</div>
								</div>
							</div>

						</section>
						<section id="section-flip-2 card-body">
							<div class="form-group">
								<div class="custom-file">
									<input type="file" class="custom-file-input" id="customFile"
										name="file"> <label class="custom-file-label"
										for="customFile"></label> <img id="image" width="200"
										height="200" />
								</div>
							</div>

							<div class="row px-5"></div>

						</section>

					</div>
				</form>

			</div>
			<!-- /tabs -->
		</section>
	</c:if>
	<hr class="invisible">

	<!-- Post -->
	<c:forEach var="lista" items="${lista}">
		<div class="card gedf-card">
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
									<c:out value="${lista.publisher.firstName}" /> 
										<c:out value="${lista.publisher.lastName}" /> 
									
									</a>

							</div>
							<div class="h7 text-muted"><c:out value="${lista.publisher.about}" /> </div>
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
								<c:if test="${lista.publisher.user.id==clienteLogado.id}">
									<a class="dropdown-item"
										href="<c:url value='/teamPublication/publication/delete/${lista.id}'/>">Delete
										Your Post</a>
								</c:if>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card-body">
				<div class="text-muted h7 mb-2">
					<c:out value="${lista.dateOfComment}" /> | <c:out value="${lista.timeOfComment}" />
				</div>

				
				<h5><c:out value="${lista.content}" /> </h5>
				
				<c:if test="${lista.image!=null}">
					<p class="card-text">
						<img height="150" src="${lista.image}" alt="">
					</p>
				</c:if>

			</div>
			
		</div>

	</c:forEach>

</div>
