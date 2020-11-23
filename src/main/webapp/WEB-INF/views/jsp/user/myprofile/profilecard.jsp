<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="col-lg-3">
	<div class="main-left-sidebar">
		<div class="user_profile">
			<div class="user-pro-img">

				<c:if test="${empty userEntity.photo}">
					<img
						src="<c:url value='/resources/images/resources/pf-icon2.png'/>"
						alt="teste" style="width: 200px">
				</c:if>
				<c:if test="${not empty userEntity.photo}">
					<img src="${userEntity.photo}" alt="no photo" style="width: 200px">
				</c:if>



				<div class="add-dp">
					<a class="post-jb active" href="#" title=""><label for="file"><i
							class="fas fa-camera"></i></label></a>
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
				<c:if test="${not empty userEntity.facebook}">
					<li><a href="${userEntity.facebook}" target="_blank"><i class="fa fa-facebook-square"></i>
							<c:out value="${userEntity.facebook}" /></a></li>
				</c:if>
				<c:if test="${not empty userEntity.twitter}">
					<li><a href="${userEntity.twitter}" target="_blank"><i class="fa fa-twitter"></i>
							<c:out value="${userEntity.twitter}" /></a></li>
				</c:if>
				<c:if test="${not empty userEntity.instagram}">
					<li><a href="${userEntity.instagram}" target="_blank"><i class="fa fa-instagram"></i>
							<c:out value="${userEntity.instagram}" /></a></li>
				</c:if>
				<c:if test="${not empty userEntity.youtube}">
					<li><a href="${userEntity.youtube}" target="_blank"><i class="fa fa-youtube"></i>
							<c:out value="${userEntity.youtube}" /></a></li>
				</c:if>
			</ul>
		</div>
		<!--user_profile end-->
		<div class="suggestions full-width">
			<div class="sd-title">
				<h3>My Teams</h3>
				<i class="la la-ellipsis-v"></i>
			</div>
			<!--sd-title end-->

			<div class="suggestions-list">
				<c:forEach var="listTeamUser" items="${listTeamUser}">
					<div class="suggestion-usd">


						<img src="<c:url value='${listTeamUser.teamEntity.photo}'/>"
							alt="" style="width: 50px">
						<div class="sgt-text">
							<h4>
								<a
									href="<c:url value='/team/view/${listTeamUser.teamEntity.id}'/>"><c:out value="${listTeamUser.teamEntity.name}" /></a>
							</h4>
							<!--span>${listTeamUser.teamEntity.about}</span-->
						</div>

					</div>
				</c:forEach>

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

<!-- #################################POP UP FOTO PERFIL -->
<div class="post-popup job_post">
	<div class="post-project">
		<h3>Change profile photo</h3>
		<div class="post-project-fields">
			<div class="containercropround">
				<form action="<c:url value='/user/changeimage'/>" method="POST"
					enctype="multipart/form-data">
					<div class="row">
						<div class="col-lg-12">
							<input type="file" id="picuser" name="picuser">

						</div>

						<div>
							<img id="picuserpreview" />
						</div>


						<div class="col-lg-12">
							<div id="result"></div>


						</div>
						<div class="col-lg-12">
							<ul>
								<li><button id="make" type="button" onclick="myCrop()">Make
										Crop</button></li>
								<li><button type="button" id="button"
										style="visibility: hidden;">Crop</button></li>

								<li><a href="" <c:url value='/user/myprofile'/>"" title="">Cancel</a></li>
							</ul>
						</div>

					</div>
				</form>
			</div>

		</div>
		<!--post-project-fields end-->
		<a href="#" title=""><i class="la la-times-circle-o"></i></a>
	</div>

</div>
<!--post-project-popup end-->
<script>
	document.getElementById("picuser").onchange = function() {
		var reader = new FileReader();

		reader.onload = function(e) {
			// get loaded data and render thumbnail.
			
			document.getElementById("picuserpreview").src = e.target.result;
			
		
			
		//	document.getElementById("picuserpreview").src = e.target.result;
			
		};

		// read the image file as a data URL.
		reader.readAsDataURL(this.files[0]);
	};
	
	
	
</script>
<script>
    function getRoundedCanvas(sourceCanvas) {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var width = sourceCanvas.width;
      var height = sourceCanvas.height;

      canvas.width = width;
      canvas.height = height;
      context.imageSmoothingEnabled = true;
      context.drawImage(sourceCanvas, 0, 0, width, height);
      context.globalCompositeOperation = 'destination-in';
      context.beginPath();
      context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
      context.fill();
      return canvas;
    }
    function myCrop() {
    	  document.getElementById("button").style.visibility = "visible";
    	  document.getElementById("make").style.visibility = "hidden";
    	 var image = document.getElementById('picuserpreview');
         var button = document.getElementById('button');
         var result = document.getElementById('result');
         var croppable = false;
         var cropper = new Cropper(image, {
           aspectRatio: 1,
           viewMode: 1,
           ready: function () {
             croppable = true;
           },
         });
         button.onclick = function () {
        	
        	
        	 var croppedCanvas;
             var roundedCanvas;
             var roundedImage;

            
             // Crop
             croppedCanvas = cropper.getCroppedCanvas();

             // Round
             roundedCanvas = getRoundedCanvas(croppedCanvas);

             // Show
             roundedImage = document.createElement('img');
             roundedImage.src = roundedCanvas.toDataURL()
         //    result.innerHTML = '';
           //  result.appendChild(roundedImage);
            
            
             var  formData = roundedCanvas.toDataURL("image/jpeg").split(';base64,')[1];
          
           $.ajax({
        	      type: "POST",
        	      url:  "http://localhost:8080/AvoidGroup/user/changeimage",
        	      data: { 
        	         imgBase64: formData
        	      }
        	    }).done(function(o) {
        	      console.log('saved'); 
        	      window.location.reload();
        	    });
           
        
           
         
             
         }
    
    }
   
    
    
  </script>