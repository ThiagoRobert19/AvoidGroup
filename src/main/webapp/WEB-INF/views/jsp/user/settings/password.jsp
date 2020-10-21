<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="tab-pane fade" id="nav-password" role="tabpanel"
	aria-labelledby="nav-password-tab">
	<div class="acc-setting">
		<h3>Account Setting</h3>
		<form>
			<div class="cp-field">
				<h5>Old Password</h5>
				<div class="cpp-fiel">
					<input type="text" name="old-password" placeholder="Old Password">
					<i class="fa fa-lock"></i>
				</div>
			</div>
			<div class="cp-field">
				<h5>New Password</h5>
				<div class="cpp-fiel">
					<input type="text" name="new-password" placeholder="New Password">
					<i class="fa fa-lock"></i>
				</div>
			</div>
			<div class="cp-field">
				<h5>Repeat Password</h5>
				<div class="cpp-fiel">
					<input type="text" name="repeat-password"
						placeholder="Repeat Password"> <i class="fa fa-lock"></i>
				</div>
			</div>
			<div class="cp-field">
				<h5>
					<a href="#" title="">Forgot Password?</a>
				</h5>
			</div>
			<div class="save-stngs pd2">
				<ul>
					<li><button type="submit">Save Setting</button></li>
					<li><button type="submit">Restore Setting</button></li>
				</ul>
			</div>
			<!--save-stngs end-->
		</form>
	</div>
	<!--acc-setting end-->
</div>