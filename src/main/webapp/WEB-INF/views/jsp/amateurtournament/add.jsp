<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<section class="interface">
	<div class="container gedf-wrapper">
		<hr class="invisible">
		<div class="row">
			<div class="col-md-12 col-xl-1"></div>
			<div class="col-md-12 col-xl-11">
				<div class="card card-social text-center">
					<div class="card-body has-gradient text-white">
						<h1>
							<a href="#"><font color="#ffffff">Create an Amateur
									Tournament</font></a>
						</h1>
					</div>
				</div>
				<hr class="invisible">
				<form action="<c:url value='/amateurtournament/save'/>"
					method="post" class="form-horizontal" enctype="multipart/form-data">
					<input type="hidden" value="${team.id}" name="teamID">
					<div class="row">
						<div class="col-md-12 col-xl-4">
							<div class="form-group">
								<input class="form-control" placeholder="Name" name="name"
									required />
							</div>
						</div>
						<div class="col-md-12 col-xl-5">
							<div class="form-group">
								<input class="form-control" placeholder="Description"
									name="description" required />
							</div>
						</div>
						<div class="col-md-12 col-xl-3">
							<div class="form-group">
								Max Allowed: <select name="max_allowed" class="form-group">
									<option value="4">4</option>
									<option value="8">8</option>
									<option value="16">16</option>
								</select>
							</div>

						</div>
					</div>
					<hr class="invisible">
					<div class="row">

						<div class="col-md-12 col-xl-4">
							<div class="form-group">
								Begin Date: <input id="date" type="date" name="begindate">
							</div>
						</div>
						<div class="col-md-12 col-xl-2">
							<div class="form-group">
								Match Begin: <select name="beginhour">
									<option value="01">01:00</option>
									<option value="02">02:00</option>
									<option value="03">03:00</option>
									<option value="04">04:00</option>
									<option value="05">05:00</option>
									<option value="06">06:00</option>
									<option value="07">07:00</option>
									<option value="08">08:00</option>
									<option value="09">09:00</option>
									<option value="10">10:00</option>
									<option value="11">11:00</option>
									<option value="12">12:00</option>

								</select>


							</div>
						</div>
						<div class="col-md-12 col-xl-2">
							<div class="form-group">
								Match End: <select name="endhour">
									<option value="01">01:00</option>
									<option value="02">02:00</option>
									<option value="03">03:00</option>
									<option value="04">04:00</option>
									<option value="05">05:00</option>
									<option value="06">06:00</option>
									<option value="07">07:00</option>
									<option value="08">08:00</option>
									<option value="09">09:00</option>
									<option value="10">10:00</option>
									<option value="11">11:00</option>
									<option value="12">12:00</option>
								</select>


							</div>
						</div>
						<div class="col-md-12 col-xl-4">
							<div class="form-group">
								End Date: <input id="date" type="date" id="datepicker"
									name="enddate">


							</div>
						</div>
					</div>
					<hr class="invisible">
					<div class="row">
						<div class="col-md-12 col-xl-2">
							<div class="form-group">
								AM or PM: <select name="ampm">
									<option value="AM">AM</option>
									<option value="PM">PM</option>
								</select>
							</div>
						</div>
						<div class="col-md-12 col-xl-4">
							<div class="form-group">
								Tournament Photo: <input type="file" name="file" />
							</div>
						</div>
						<div class="col-md-12 col-xl-4">
							<div class="form-group">
								About: <input type="text" id="about" class="about" name="about"
									required />
							</div>
						</div>
					</div>

					<button class="btn btn-info" type="submit">Register</button>
				</form>
				<hr class="invisible">
			</div>
		</div>

	</div>
</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />