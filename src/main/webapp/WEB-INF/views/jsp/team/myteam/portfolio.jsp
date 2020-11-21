<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="product-feed-tab" id="portfolio-dd">
	<div class="portfolio-gallery-sec">
		<h3>Images</h3>
		<div class="portfolio-btn">
			<a href="#" title=""><i class="fas fa-plus-square"></i> Add Image</a>
		</div>
		<div class="gallery_pf">
			<div class="row">
				<c:forEach var="listTeamAlbumPrivate"
					items="${listTeamAlbumPrivate}">
					<div class="col-lg-4 col-md-4 col-sm-6 col-6">
						<div class="gallery_pt">


							<img src="<c:url value='${listTeamAlbumPrivate.image}'/>" alt="">
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
			<hr>
			<div class="row">
				<c:forEach var="listTeamAlbumPublic"
					items="${listTeamAlbumPublic}">
					<div class="col-lg-4 col-md-4 col-sm-6 col-6">
						<div class="gallery_pt">


							<img src="<c:url value='${listTeamAlbumPublic.image}'/>" alt="">
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

<div class="overview-box" id="create-portfolio">
	<div class="overview-edit">
		<h3>New Image</h3>
		<form action="<c:url value='/team/newimage'/>" method="POST"
			enctype="multipart/form-data">
			<input type="hidden" name="teamID" value="${teamEntity.id}">
			<input type="text" name="subtitle" placeholder="Subtitle"
				required="required"> <select name="privacy">
				<option value="private">Private</option>
				<option value="public">Public</option>
			</select>

			<div class="file-submit">
				<input type="file" id="file" name="file"> <label for="file">Choose
					File</label>
			</div>
			<div class="pf-img">

				<img id="preview-image"
					src="<c:url value='/resources/images/resources/np.png'/>"
					style="width: 250px">
			</div>

			<button type="submit" class="save">Save</button>

		</form>
		<a href="#" title="" class="close-box"><i class="la la-close"></i></a>
	</div>

</div>

<script>
	document.getElementById("file").onchange = function() {
		var reader = new FileReader();

		reader.onload = function(e) {

			document.getElementById("preview-image").src = e.target.result;

		};

		// read the image file as a data URL.
		reader.readAsDataURL(this.files[0]);
	};
</script>