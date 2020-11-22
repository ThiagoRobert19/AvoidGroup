<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="tab-pane fade" id="nav-deactivate" role="tabpanel"
	aria-labelledby="nav-deactivate-tab">
	<div class="acc-setting">
		<h3>Deactivate Account</h3>
		<form>
			<div class="cp-field">
				<h5>Email</h5>
				<div class="cpp-fiel">
					<input type="text" name="email" placeholder="Email"> <i
						class="fa fa-envelope"></i>
				</div>
			</div>
			<div class="cp-field">
				<h5>Password</h5>
				<div class="cpp-fiel">
					<input type="password" name="password" placeholder="Password">
					<i class="fa fa-lock"></i>
				</div>
			</div>
			<div class="cp-field">
				<h5>Please Explain Further</h5>
				<textarea></textarea>
			</div>
			<div class="cp-field">
				<div class="fgt-sec">
					<input type="checkbox" name="cc" id="c4"> <label for="c4">
						<span></span>
					</label> <small>Email option out</small>
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Vivamus pretium nulla quis erat dapibus, varius hendrerit neque
					suscipit. Integer in ex euismod, posuere lectus id,</p>
			</div>
			<div class="save-stngs pd3">
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