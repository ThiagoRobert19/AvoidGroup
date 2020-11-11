<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<section class="companies-info">
	<div class="container">
	<div class="row">
		<div class="right-sidebar">
						<div class="message-btn">
							<a href="<c:url value='/team/create'/>" title=""> Create a Team</a>
						</div></div></div>
		<div class="row">
			<div class="search-sec">
				<div class="container">
					<div class="search-box">
						<form>
							<input type="text" name="search" placeholder="Search keywords">
							<button type="submit">Search</button>
						</form>
					</div>
					<!--search-box end-->
				</div>
			</div>
		</div>
		<br />
		<!--search-sec end-->
		<div class="companies-list">
			<div class="row">
				<c:forEach var="listTeam" items="${pagedListHolder.pageList}">
					<div class="col-lg-3 col-md-4 col-sm-6">
						<div class="company_profile_info">
							<div class="company-up-info">

								<img src="<c:url value='${listTeam.photo}'/>" alt="">
								<h3>${listTeam.name}</h3>
								<h4>${listTeam.about}</h4>
								<ul>
									<li><a href="#" title="" class="follow">Follow</a></li>
									<li><a href="#" title="" class="message-us"><i
											class="fa fa-envelope"></i></a></li>
								</ul>
							</div>
							<a href="company-profile.html" title="" class="view-more-pro">View
								Profile</a>
						</div>
						<!--company_profile_info end-->
					</div>
				</c:forEach>
			</div>
		</div>
		<!--companies-list end-->
		<div class="process-comm">
			<div class="spinner">
				<div class="bounce1"></div>
				<div class="bounce2"></div>
				<div class="bounce3"></div>
			</div>
		</div>
		<!--process-comm end-->
	</div>
</section>
<div class="overview-box" id="question-box">
	<div class="overview-edit">
		<h3>Create a Team</h3>
		<form>
			<input type="text" name="question" placeholder="Type Question Here">
			<input type="text" name="tags" placeholder="Tags">
			<textarea placeholder="Description"></textarea>
			<button type="submit" class="save">Submit</button>
			<button type="submit" class="cancel">Cancel</button>
		</form>
		<a href="#" title="" class="close-box"><i class="la la-close"></i></a>
	</div>
	<!--overview-edit end-->
</div>
<!--overview-box end-->
<!--companies-info end-->
<c:import url="/WEB-INF/cabecalho/footer.jsp" />

