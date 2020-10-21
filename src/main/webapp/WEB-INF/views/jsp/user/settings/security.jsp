<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="tab-pane fade" id="security-login" role="tabpanel"
	aria-labelledby="security">
	<div class="privacy security">
		<div class="row">
			<div class="col-12">
				<h3>Security and Login</h3>
				<hr>
				<h3>Two - Step Verification</h3>
				<p>Help protect your account by enabling extra layers of
					security.</p>
				<hr>
				<h3>Security question</h3>
				<i class="la la-edit"></i>
				<div class="custom-control custom-checkbox">
					<input type="checkbox" class="custom-control-input"
						id="customCheck1"> <label class="custom-control-label"
						for="customCheck1">Conform your identity with a question
						only you know the answer to</label>
				</div>
				<hr>
				<h3>Security question</h3>
				<p>Before can you set a new security question,</p>
				<hr>
				<h3>Current Question</h3>
				<p>Q: Your favorite actor?</p>
				<br>
				<h3>New Question</h3>
				<form>
					<div class="form-group">
						<select class="form-control" id="exampleFormControlSelect1"
							style="-webkit-appearance: menulist-button;">
							<option>Please Select New Question</option>
							<option>Select Second Queston</option>
						</select>
					</div>
				</form>
				<h3>Answer</h3>
				<form>

					<div class="form-group">
						<input type="text" class="form-control" id="exampleInputPassword1"
							placeholder=" Answer here">
					</div>
				</form>
				<div class="checkbox">
					<div class="form-check">
						<div class="custom-control custom-radio">
							<input type="radio" id="customRadio1" name="customRadio"
								class="custom-control-input"> <label
								class="custom-control-label" for="customRadio1">I
								understand my account will be locked if I am unable to answer
								this question</label>
						</div>
					</div>
					<div class="form-check">
						<div class="custom-control custom-radio">
							<input type="radio" id="customRadio2" name="customRadio"
								class="custom-control-input"> <label
								class="custom-control-label" for="customRadio2">Remember
								this device</label>
						</div>
					</div>
				</div>
				<hr>
			</div>
		</div>
		<div class="btns">
			<a href="#">Save</a> <a href="#">Cancel</a>
		</div>
	</div>
</div>