<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="product-feed-tab" id="portfolio-dd">
	<div class="portfolio-gallery-sec">
		<h3>Images</h3>
		
		<div class="gallery_pf">
		<c:if test="${userEntity.follow =='unfollow'}">
			<div class="row">
				<c:forEach var="listUserAlbumPrivate"
					items="${listUserAlbumPrivate}">
					<div class="col-lg-4 col-md-4 col-sm-6 col-6">
						<div class="gallery_pt">


							<img src="<c:url value='${listUserAlbumPrivate.image}'/>" alt="">
							<a href="#" title=""><img
								src="<c:url value='/resources/images/all-out.png'/>" alt=""></a>
						</div>
					</div>
				</c:forEach>
				<div class="col-lg-4 col-md-4 col-sm-6 col-6">
					<div class="gallery_pt">


						<img
							src="<c:url value='/resources/images/resources/pf-img1.jpg'/>"
							alt=""> <a href="#" title=""><img
							src="<c:url value='/resources/images/all-out.png'/>" alt=""></a>
					</div>
					<!--gallery_pt end-->
				</div>
			</div>
			</c:if>
			<div class="row">
				<c:forEach var="listUserAlbumPublic"
					items="${listUserAlbumPublic}">
					<div class="col-lg-4 col-md-4 col-sm-6 col-6">
						<div class="gallery_pt">


							<img src="<c:url value='${listUserAlbumPublic.image}'/>" alt="">
							<a href="#" title=""><img
								src="<c:url value='/resources/images/all-out.png'/>" alt=""></a>
						</div>
					</div>
				</c:forEach>
				<div class="col-lg-4 col-md-4 col-sm-6 col-6">
					<div class="gallery_pt">


						<img
							src="<c:url value='/resources/images/resources/pf-img1.jpg'/>"
							alt=""> <a href="#" title=""><img
							src="<c:url value='/resources/images/all-out.png'/>" alt=""></a>
					</div>
					<!--gallery_pt end-->
				</div>
			</div>
		</div>
		<!--gallery_pf end-->
	</div>
	<!--portfolio-gallery-sec end-->
</div>