<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="col-lg-3">
	<div class="main-left-sidebar">
		<div class="user_profile">
			<div class="user-pro-img">
				<c:if test="${empty clienteLogado.photo}">
					<img
						src="<c:url value='/resources/images/resources/user-pro-img.png'/>"
						alt="">
				</c:if>
				<c:if test="${not empty clienteLogado.photo}">
					<img src="<c:url value='${clienteLogado.photo}'/>" alt="">
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
							<ul>
								<li><button type="button" onclick="myCrop()">Make
										Crop</button></li>

							</ul>
						</div>

						<div class="col-lg-12">
							<div id="result"></div>


						</div>
						<div class="col-lg-12">
							<ul>
								<li><button type="button" id="button"
										style="visibility: hidden;">Crop</button></li>
								<li><button id="post" class="active" type="submit"
										value="post" style="visibility: hidden;">Post</button></li>
								<li><a href="#" title="">Cancel</a></li>
							</ul>
						</div>
						<div>
							<input type="text" id="123" name="croppedlocation"
								readonly="readonly">

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
        	 document.getElementById("post").style.visibility = "visible";
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
             result.innerHTML = '';
             result.appendChild(roundedImage);
            
             
             
             
             document.getElementById('123').value=roundedImage.src;
             
             roundedCanvas.toBlob(function (blob) {
            	 
            	 var formData = new FormData();

                 formData.append('avatar', blob, 'avatar.jpg');
                 alert('tenta formatar para imagem'+formData.values());  
                 
                 
                 $.ajax('http://localhost:8080/InAvonts/user/changeimage', {
                     method: 'POST',
                     data: formData,
                     processData: false,
                     contentType: false,
                     
                     
                     success: function () {
                    	 console.log('Success');  
                       },

                       error: function () {
                         avatar.src = initialAvatarURL;
                         console.log('Erro');  
                       },

                       complete: function () {
                    	   console.log('Completo');  
                       },
                     
                 });
                 
      		});
             
         }
    
    }
   
    
    
  </script>