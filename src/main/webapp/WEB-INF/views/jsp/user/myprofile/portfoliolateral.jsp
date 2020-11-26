<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="col-lg-3">
	<div class="right-sidebar">
		<div class="message-btn">
			<a href="<c:url value='/setting/settings'/>" title=""><i
				class="fas fa-cog"></i> Setting</a>
		</div>
		<div class="widget widget-portfolio">
			<div class="wd-heady">
				<h3>Private Images</h3>

				<img src="<c:url value='/resources/images/photo-icon.png'/>" alt="">
			</div>
			<div class="pf-gallery">
				<ul>
					<c:forEach var="listUserAlbumPrivate"
						items="${listUserAlbumPrivate}">
						<li><a href="#" title=""><img
								src="<c:url value='${listUserAlbumPrivate.image}'/>" alt=""></a></li>
					</c:forEach>

					<li><a href="#" title=""><img
							src="<c:url value='/resources/images/resources/pf-gallery1.png'/>"
							alt=""></a></li>
					<li><a href="#" title=""><img
							src="<c:url value='/resources/images/resources/pf-gallery2.png'/>"
							alt=""></a></li>
					<li><a href="#" title=""><img
							src="<c:url value='/resources/images/resources/pf-gallery3.png'/>"
							alt=""></a></li>


				</ul>
			</div>
			<!--pf-gallery end-->
		</div>
		<div class="widget widget-portfolio">
			<div class="wd-heady">
				<h3>Public Images</h3>

				<img src="<c:url value='/resources/images/photo-icon.png'/>" alt="">
			</div>
			<div class="pf-gallery">
				<ul>
					<c:forEach var="listUserAlbumPublic" items="${listUserAlbumPublic}">
						<li><a href="#" title=""><img
								src="<c:url value='${listUserAlbumPublic.image}'/>" alt=""></a></li>
					</c:forEach>

					<li><a href="#" title=""><img
							src="<c:url value='/resources/images/resources/pf-gallery1.png'/>"
							alt=""></a></li>
					<li><a href="#" title=""><img
							src="<c:url value='/resources/images/resources/pf-gallery2.png'/>"
							alt=""></a></li>
					<li><a href="#" title=""><img
							src="<c:url value='/resources/images/resources/pf-gallery3.png'/>"
							alt=""></a></li>


				</ul>
			</div>
			<!--pf-gallery end-->
		</div>
		<!--widget-portfolio end-->
	</div>
	<!--right-sidebar end-->
</div>