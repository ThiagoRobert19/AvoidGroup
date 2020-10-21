<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="tab-pane fade" id="privacy" role="tabpanel"
	aria-labelledby="nav-privacy-tab">
	<div class="privac">
		<div class="row">
			<div class="col-12">
				<h3>Privacy</h3>
			</div>
		</div>
		<hr>
		<div class="row">
			<div class="col-12">
				<div class="dropdown privacydropd">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">Who
						can see your email address</a>
					<div class="dropdown-menu">
						<p>Choose who can see your email address on your profile</p>
						<div class="row">
							<div class="col-md-9 col-sm-12">
								<form class="radio-form">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input"
											id="customCheck1"> <label
											class="custom-control-label" for="customCheck1">Everyone</label>
									</div>
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input"
											id="customCheck2"> <label
											class="custom-control-label" for="customCheck2">Friends</label>
									</div>
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input"
											id="customCheck3"> <label
											class="custom-control-label" for="customCheck3">Only
											Me</label>
									</div>
								</form>
							</div>
							<div class="col-md-3 col-sm-12">
								<p style="float: right;">Everyone</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<hr>
		<div class="row">
			<div class="col-12">
				<div class="dropdown privacydropd">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">Who
						can see your Friends</a>
					<div class="dropdown-menu">
						<p>Choose who can see your list of connections</p>
						<div class="row">
							<div class="col-md-9 col-sm-12">
								<form class="radio-form">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input"
											id="customCheck4"> <label
											class="custom-control-label" for="customCheck4">Everyone</label>
									</div>
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input"
											id="customCheck5"> <label
											class="custom-control-label" for="customCheck5">Friends</label>
									</div>
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input"
											id="customCheck6"> <label
											class="custom-control-label" for="customCheck6">Only
											Me</label>
									</div>
								</form>
							</div>
							<div class="col-md-3 col-sm-12">
								<p style="float: right;">Everyone</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<hr>
		<div class="row">
			<div class="col-12">
				<div class="dropdown privacydropd">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">Manage
						who can discover your profile from your email address</a>
					<div class="dropdown-menu">
						<p>Choose who can discover your profile if they are not
							connected to you but have your email address</p>
						<div class="row">
							<div class="col-md-9 col-sm-12">
								<form class="radio-form">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input"
											id="customCheck7"> <label
											class="custom-control-label" for="customCheck7">Everyone</label>
									</div>
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input"
											id="customCheck8"> <label
											class="custom-control-label" for="customCheck8">Friends</label>
									</div>
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input"
											id="customCheck9"> <label
											class="custom-control-label" for="customCheck9">Only
											Me</label>
									</div>
								</form>
							</div>
							<div class="col-md-3 col-sm-12">
								<p style="float: right;">Everyone</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<hr>
		<div class="row">
			<div class="col-12">
				<div class="dropdown privacydropd">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">Search
						history</a>
					<div class="dropdown-menu">
						<p>Clear all previous searches performed on LinkedIn</p>
						<div class="row">
							<div class="col-12">
								<form class="radio-form">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input"
											id="customCheck10"> <label
											class="custom-control-label" for="customCheck10">Clear
											All History</label>
									</div>
								</form>
								<div class="privabtns">
									<a href="#">Clear All History</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<hr>
		<div class="row">
			<div class="col-12">
				<div class="dropdown privacydropd">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">Sharing
						your profile when you click apply</a>
					<div class="dropdown-menu">
						<p>Chose if you want to share your full profile with the job
							poster when you're taken off linkedin after clicking apply</p>
						<div class="row">
							<div class="col-md-9 col-sm-12">
								<form class="radio-form">
									<div class="custom-control custom-radio">
										<input type="radio" id="customRadio5" name="customRadio"
											class="custom-control-input"> <label
											class="custom-control-label" for="customRadio5">Yes</label>
									</div>
									<div class="custom-control custom-radio">
										<input type="radio" id="customRadio6" name="customRadio"
											class="custom-control-input"> <label
											class="custom-control-label" for="customRadio6">Yes</label>
									</div>
								</form>
							</div>
							<div class="col-md-3 col-sm-12">
								<p style="float: right;">Yes</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<hr>
		<div class="row">
			<div class="col-12">
				<div class="privabtns">
					<a href="#">Save</a> <a href="#">Cancel</a>
				</div>
			</div>
		</div>
	</div>
</div>