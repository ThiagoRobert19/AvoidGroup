<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="tab-pane fade" id="socialmedia" role="tabpanel"
	aria-labelledby="social">


	<div class="privac">
		<div class="row">
			<div class="col-12">
				<h3>Social Media</h3>
			</div>
		</div>
		<hr>
		<form class="radio-form"
			action="<c:url value='/setting/changesocial'/>" method="post">
			<input type="hidden" name="id" value="${userEntity.id}" />
			<div class="row">
				<div class="col-12">

					<h3>Facebook</h3>
					<div class="form-group">
						<input type="text" value="<c:out value="${userEntity.facebook}" />" class="form-control" name="facebook">
					</div>
					<hr>

					<h3>Instagram</h3>
					<div class="form-group">
						<input type="text" value="<c:out value="${userEntity.instagram}" />" class="form-control" name="instagram">
					</div>
					<hr>

					<h3>Twitter</h3>
					<div class="form-group">
						<input type="text" value="<c:out value="${userEntity.twitter}" />" class="form-control" name="twitter">
					</div>
					<hr>

					<h3>Youtube</h3>
					<div class="form-group">
						<input type="text" value="<c:out value="${userEntity.youtube}" />" class="form-control" name="youtube">
					</div>

				</div>
			</div>

			<div class="save-stngs pd2">
				<ul>
					<li><button type="submit" value="Save">Save</button></li>


				</ul>
			</div>
		</form>
	</div>
</div>