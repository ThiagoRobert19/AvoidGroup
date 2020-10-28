<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="tab-pane fade" id="nav-password" role="tabpanel"
	aria-labelledby="nav-password-tab">
	<div class="acc-setting">
		<h3>Password Setting</h3>
		<form class="radio-form"
			action="<c:url value='/setting/changepassword'/>" method="post">
			<div class="cp-field">
				<h5>Old Password</h5>
				<div class="cpp-fiel">
					<input type="password" name="oldpassword"
						placeholder="Old Password"> <i class="fa fa-lock"></i>
				</div>
			</div>
			<div class="cp-field">
				<h5>New Password</h5>
				<div class="cpp-fiel">
					<input type="password" name="newpassword"
						placeholder="New Password"> <i class="fa fa-lock"></i>
				</div>
			</div>
			<div class="cp-field">
				<h5>Repeat Password</h5>
				<div class="cpp-fiel">
					<input type="password" name="repeatpassword"
						placeholder="Repeat Password"> <i class="fa fa-lock"></i>
				</div>
			</div>

			<div class="save-stngs pd2">
				<ul>
					<li><button class="btn botaopreto" type="submit">Save</button></li>

				</ul>
			</div>
			<!--save-stngs end-->
		</form>
	</div>
	<!--acc-setting end-->
</div>