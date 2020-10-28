<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="col-lg-3">
	<div class="right-sidebar">
		<div class="message-btn">
			<c:if test="${userEntity.follow =='follow'}">
				<a href="<c:url value='/friend/follow/${userEntity.id}'/>" title=""><i
					class="fas fa-share"></i> Follow</a>
			</c:if>
			<c:if test="${userEntity.follow =='unfollow'}">
				<a href="<c:url value='/friend/unfollow/${userEntity.id}'/>"
					title=""><i class="fas fa-share"></i> Unfollow</a>
			</c:if>
			<c:if test="${userEntity.follow =='followback'}">
				<a href="<c:url value='/friend/follow/${userEntity.id}'/>"
					title=""><i class="fas fa-share"></i> Follow Back</a>
			</c:if>
			<c:if test="${userEntity.follow =='requested'}">
				<a href="<c:url value='/friend/cancelrequest/${userEntity.id}'/>"
					title=""><i class="fas fa-share"></i>Cancel Request</a>
			</c:if>

		</div>
		<c:if test="${userEntity.perfil =='public' || (userEntity.follow =='unfollow')}">
			<div class="widget widget-portfolio">
				<div class="wd-heady">
					<h3>Portfolio</h3>

					<img src="<c:url value='/resources/images/photo-icon.png'/>" alt="">
				</div>
				<div class="pf-gallery">
					<ul>


						<li><a href="#" title=""><img
								src="<c:url value='/resources/images/resources/pf-gallery1.png'/>"
								alt=""></a></li>
						<li><a href="#" title=""><img
								src="<c:url value='/resources/images/resources/pf-gallery2.png'/>"
								alt=""></a></li>
						<li><a href="#" title=""><img
								src="<c:url value='/resources/images/resources/pf-gallery3.png'/>"
								alt=""></a></li>
						<li><a href="#" title=""><img
								src="<c:url value='/resources/images/resources/pf-gallery4.png'/>"
								alt=""></a></li>
						<li><a href="#" title=""><img
								src="<c:url value='/resources/images/resources/pf-gallery5.png'/>"
								alt=""></a></li>
						<li><a href="#" title=""><img
								src="<c:url value='/resources/images/resources/pf-gallery6.png'/>"
								alt=""></a></li>
						<li><a href="#" title=""><img
								src="<c:url value='/resources/images/resources/pf-gallery7.png'/>"
								alt=""></a></li>
						<li><a href="#" title=""><img
								src="<c:url value='/resources/images/resources/pf-gallery8.png'/>"
								alt=""></a></li>
						<li><a href="#" title=""><img
								src="<c:url value='/resources/images/resources/pf-gallery9.png'/>"
								alt=""></a></li>

					</ul>
				</div>
				<!--pf-gallery end-->
			</div>
		</c:if>
		<!--widget-portfolio end-->
	</div>
	<!--right-sidebar end-->
</div>