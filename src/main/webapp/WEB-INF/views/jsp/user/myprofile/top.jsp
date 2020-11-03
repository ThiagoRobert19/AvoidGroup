<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<section class="cover-sec">
	<c:if test="${not empty clienteLogado.backPhoto}">

		<img src="<c:url value='${clienteLogado.backPhoto}'/>" alt=""
			width="1600px" height="400px">
	</c:if>
	<c:if test="${empty clienteLogado.backPhoto}">

		<img src="<c:url value='/images/resources/cover-img.jpg'/>" alt=""
			width="1600px" height="400px">
	</c:if>
	<!--img src="<c:url value='/resources/images/resources/cover-img.jpg'/>"alt=""-->
	<div class="add-pic-box">
		<div class="container">
			<div class="row no-gutters">
				<div class="col-lg-12 col-sm-12">

					<input type="file" class="post_project" id="file"> <label
						for="file">Change Image</label>
				</div>
			</div>
		</div>
	</div>
</section>
<div class="post-popup pst-pj">
	<div class="post-project">
		<h3>Change Image</h3>
		<div class="post-project-fields">
			<form action="<c:url value='/user/changeback'/>" method="POST"
				enctype="multipart/form-data">
				<div class="row">
					<div class="col-lg-12">
						<input type="file" name="userback" id="userback"
							placeholder="Title">
					</div>

					<div class="col-lg-12">
						<img id="userbackpreview" />
					</div>
					<div class="col-lg-12">
						<ul>
							<li><button class="active" type="submit" value="post">Change</button></li>
							<li><a href="<c:url value='/user/myprofile'/>" title="">Cancel</a></li>
						</ul>
					</div>
				</div>
			</form>
		</div>
		<!--post-project-fields end-->
		<a href="#" title=""><i class="la la-times-circle-o"></i></a>
	</div>
	<!--post-project end-->
</div>
<!--post-project-popup end-->

<script>
	document.getElementById("userback").onchange = function() {
		var reader = new FileReader();

		reader.onload = function(e) {
			// get loaded data and render thumbnail.
			document.getElementById("userbackpreview").src = e.target.result;
		};

		// read the image file as a data URL.
		reader.readAsDataURL(this.files[0]);
	};
</script>