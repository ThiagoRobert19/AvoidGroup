<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="product-feed-tab" id="portfolio-dd">
	<div class="portfolio-gallery-sec">
		<h3>Images</h3>
		<div class="portfolio-btn">
			<a href="#" title=""><i class="fas fa-plus-square"></i> Add
				Image</a>
		</div>
		<div class="gallery_pf">
			<div class="row">
				<div class="col-lg-4 col-md-4 col-sm-6 col-6">
					<div class="gallery_pt">


						<img
							src="<c:url value='/resources/images/resources/pf-img1.jpg'/>"
							alt=""> <a href="#" title=""><img
							src="<c:url value='/resources/images/all-out.png'/>" alt=""></a>
					</div>
					<!--gallery_pt end-->
				</div>
				<div class="col-lg-4 col-md-4 col-sm-6 col-6">
					<div class="gallery_pt">
						<img
							src="<c:url value='/resources/images/resources/pf-img2.jpg'/>"
							alt=""> <a href="#" title=""><img
							src="<c:url value='/resources/images/all-out.png'/>" alt=""></a>
					</div>
					<!--gallery_pt end-->
				</div>
				<div class="col-lg-4 col-md-4 col-sm-6 col-6">
					<div class="gallery_pt">
						<img
							src="<c:url value='/resources/images/resources/pf-img3.jpg'/>"
							alt=""> <a href="#" title=""><img
							src="<c:url value='/resources/images/all-out.png'/>" alt=""></a>
					</div>
					<!--gallery_pt end-->
				</div>
				<div class="col-lg-4 col-md-4 col-sm-6 col-6">
					<div class="gallery_pt">
						<img
							src="<c:url value='/resources/images/resources/pf-img4.jpg'/>"
							alt=""> <a href="#" title=""><img
							src="<c:url value='/resources/images/all-out.png'/>" alt=""></a>
					</div>
					<!--gallery_pt end-->
				</div>
				<div class="col-lg-4 col-md-4 col-sm-6 col-6">
					<div class="gallery_pt">
						<img
							src="<c:url value='/resources/images/resources/pf-img5.jpg'/>"
							alt=""> <a href="#" title=""><img
							src="<c:url value='/resources/images/all-out.png'/>" alt=""></a>
					</div>
					<!--gallery_pt end-->
				</div>
				<div class="col-lg-4 col-md-4 col-sm-6 col-6">
					<div class="gallery_pt">
						<img
							src="<c:url value='/resources/images/resources/pf-img6.jpg'/>"
							alt=""> <a href="#" title=""><img
							src="<c:url value='/resources/images/all-out.png'/>" alt=""></a>
					</div>
					<!--gallery_pt end-->
				</div>
				<div class="col-lg-4 col-md-4 col-sm-6 col-6">
					<div class="gallery_pt">
						<img
							src="<c:url value='/resources/images/resources/pf-img7.jpg'/>"
							alt=""> <a href="#" title=""><img
							src="<c:url value='/resources/images/all-out.png'/>" alt=""></a>
					</div>
					<!--gallery_pt end-->
				</div>
				<div class="col-lg-4 col-md-4 col-sm-6 col-6">
					<div class="gallery_pt">
						<img
							src="<c:url value='/resources/images/resources/pf-img8.jpg'/>"
							alt=""> <a href="#" title=""><img
							src="<c:url value='/resources/images/all-out.png'/>" alt=""></a>
					</div>
					<!--gallery_pt end-->
				</div>
				<div class="col-lg-4 col-md-4 col-sm-6 col-6">
					<div class="gallery_pt">
						<img
							src="<c:url value='/resources/images/resources/pf-img9.jpg'/>"
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
		<h3>Create Portfolio</h3>
		<form>
			<input type="text" name="pf-name" placeholder="Portfolio Name">
			<div class="file-submit">
				<input type="file" id="file"> <label for="file">Choose
					File</label>
			</div>
			<div class="pf-img">
			
			
				<img src="<c:url value='/resources/images/resources/np.png'/>" alt="">
			</div>
			<input type="text" name="website-url"
				placeholder="htp://www.example.com">
			<button type="submit" class="save">Save</button>
			<button type="submit" class="cancel">Cancel</button>
		</form>
		<a href="#" title="" class="close-box"><i class="la la-close"></i></a>
	</div>
	<!--overview-edit end-->
</div>
<!--overview-box end-->
