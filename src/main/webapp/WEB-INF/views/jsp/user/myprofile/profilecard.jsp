<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="col-lg-3">
	<div class="main-left-sidebar">
		<div class="user_profile">
			<div class="user-pro-img">

				<img
					src="<c:url value='/resources/images/resources/user-pro-img.png'/>"
					alt="">
				<div class="add-dp">
					<form action="<c:url value='/user/changeimage'/>" method="post" id="myForm"
						enctype="multipart/form-data">
						

						<input type="file" value="teste" id="fileInput" name="photoFile" onchange="javascript:this.form.submit();"> <label
							for="file"><i class="fas fa-camera"></i></label>
					</form>



				</div>
			</div>
			<!--user-pro-img end-->
			<div class="user_pro_status">
				<ul class="flw-status">
					<li><span>Following</span> <b>${countfollowing}</b></li>
					<li><span>Followers</span> <b>${countfollowers}</b></li>
				</ul>
			</div>
			<!--user_pro_status end-->
			<ul class="social_links">
				<li><a href="#" title=""><i class="la la-globe"></i>
						www.example.com</a></li>
				<li><a href="#" title=""><i class="fa fa-facebook-square"></i>
						Http://www.facebook.com/john...</a></li>
				<li><a href="#" title=""><i class="fa fa-twitter"></i>
						Http://www.Twitter.com/john...</a></li>
				<li><a href="#" title=""><i
						class="fa fa-google-plus-square"></i>
						Http://www.googleplus.com/john...</a></li>
				<li><a href="#" title=""><i class="fa fa-behance-square"></i>
						Http://www.behance.com/john...</a></li>
				<li><a href="#" title=""><i class="fa fa-pinterest"></i>
						Http://www.pinterest.com/john...</a></li>
				<li><a href="#" title=""><i class="fa fa-instagram"></i>
						Http://www.instagram.com/john...</a></li>
				<li><a href="#" title=""><i class="fa fa-youtube"></i>
						Http://www.youtube.com/john...</a></li>
			</ul>
		</div>
		<!--user_profile end-->
		<div class="suggestions full-width">
			<div class="sd-title">
				<h3>People Viewed Profile</h3>
				<i class="la la-ellipsis-v"></i>
			</div>
			<!--sd-title end-->
			<div class="suggestions-list">
				<div class="suggestion-usd">


					<img src="<c:url value='/resources/images/resources/s1.png'/>"
						alt="">
					<div class="sgt-text">
						<h4>Jessica William</h4>
						<span>Graphic Designer</span>
					</div>
					<span><i class="la la-plus"></i></span>
				</div>


				<div class="view-more">
					<a href="#" title="">View More</a>
				</div>
			</div>
			<!--suggestions-list end-->
		</div>
		<!--suggestions end-->
	</div>
	<!--main-left-sidebar end-->
</div>

<script>
document.getElementById("fileInput").onchange = function()  {
	alert('asd');
	
	  $('#myForm').submit();
	});
</script>