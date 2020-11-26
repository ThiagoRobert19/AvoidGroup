<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="tab-pane fade" id="nav-deactivate" role="tabpanel"
	aria-labelledby="nav-deactivate-tab">
	<div class="acc-setting">
		<h3>Deactivate Team</h3>
		<form class="radio-form"
			action="<c:url value='/teamsetting/deleteteam'/>" method="post">
			<input type="hidden" name="teamID" value="${teamEntity.id }" />
			<div class="cp-field">
				<h5>Owner Email</h5>
				<div class="cpp-fiel">
					<input type="text" name="owner_email" placeholder="Email"> <i
						class="fa fa-envelope"></i>
				</div>
			</div>
			<div class="cp-field">
				<h5>Owner Password</h5>
				<div class="cpp-fiel">
					<input type="password" name="owner_password" placeholder="Password">
					<i class="fa fa-lock"></i>
				</div>
			</div>
			
			<div class="cp-field">
				
				<p>You can reactivate your team in the future by going to your setting account!</p>
			</div>
			<div class="save-stngs pd3">
				<ul>
					<li><button type="submit">Deactivate</button></li>
					
				</ul>
			</div>
			<!--save-stngs end-->
		</form>
	</div>
	<!--acc-setting end-->
</div>