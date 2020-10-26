<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<section class="cover-sec">
	<img src="<c:url value='/resources/images/resources/valorant.jpg'/>"alt="" width="1600px" height="400px">
	<!--img src="<c:url value='/resources/images/resources/cover-img.jpg'/>"alt=""-->
	<div class="add-pic-box">
		<div class="container">
			<div class="row no-gutters">
				<div class="col-lg-12 col-sm-12">
					<input type="file" id="file"> <label for="file">Change
						Image</label>
				</div>
			</div>
		</div>
	</div>
</section>