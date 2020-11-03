<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="product-feed-tab current" id="feed-dd">
		<div class="posts-section">


		<c:forEach var="listPub" items="${pagedListHolder.pageList}">
		
			<!-- #########################################################if(shared=="yes"){ -->
			<div class="post-bar">
				<div class="post_topbar">
					<div class="usy-dt">


						<img src="<c:url value="${listPub.sharer.photoName}"/>"
							alt="no image">
						<div class="usy-name">
							<h3>${listPub.sharer.name}</h3>
							<span> ${listPub.dateOfShare} </span> <span>${listPub.timeOfShare}
							</span>
						</div>
					</div>
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
				</div>
				<div class="post-bar">
					<div class="post_topbar">
						<div class="usy-dt">



							<img src="<c:url value="${listPub.publisher.photoName}"/>"
								alt="no image">
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
						<h3>${listPub.publisher.userName}</h3>
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
							<ul id="listCa'+${listPub.id}">

							</ul>
						</div>
					</div>
				</div>
			</div>
			<!-- ######################################################### -->
			<!-- #########################################################if(shared!="yes"){ -->
			<div class="post-bar">
				<div class="post_topbar">
					<div class="usy-dt">
						<img src="<c:url value="${listPub.publisher.photoName}"/>"
							alt="no image">
						<div class="usy-name">
							<h3>${listPub.publisher.name}</h3>
							 <span> ${listPub.dateOfPublication} </span> <span>
								${listPub.timeOfPublication} </span>
						</div>
					</div>
					<div class="ed-opts">
						<a href="#" title="" class="ed-opts-open"><i
							class="la la-ellipsis-v"></i></a>
						<ul class="ed-options">
							<li><a href="#" title="">Edit Post</a></li>
							<li><a
								href="<c:url value="/publication/delete/${listPub.id}"/>"
								title="">Delete</a></li>
						</ul>
					</div>
				</div>
				<div class="job_descp">
					<h3>${listPub.publisher.userName}</h3>
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

