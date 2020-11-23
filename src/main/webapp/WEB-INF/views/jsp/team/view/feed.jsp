<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="product-feed-tab current" id="feed-dd">
	<div class="posts-section">

		<c:forEach var="listPub" items="${pagedListHolder.pageList}">
			<c:if test="${listPub.privacy=='public'}">
				<div class="post-bar">
					<div class="post_topbar">
						<div class="usy-dt">
							<c:if test="${empty listPub.publisher.photo}">
								<img
									src="<c:url value='/resources/images/resources/pf-icon2.png'/>"
									alt="no image" style="width: 80px">
							</c:if>
							<c:if test="${not empty listPub.publisher.photo}">
								<img src="<c:url value="${listPub.publisher.photo}"/>"
									alt="no image" style="width: 80px">
							</c:if>
							<div class="usy-name">
								<h3>
									<a href="<c:url value="/user/view/${listPub.publisher.id}"/>"><c:out value="${listPub.publisher.name}" /></a>
								</h3>


								<span> ${listPub.dateOfPublication}
									${listPub.timeOfPublication} (${listPub.privacy})</span>
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
							<p><c:out value="${listPub.content}" /></p>
						</div>

					</div>

				</div>

			</c:if>

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

