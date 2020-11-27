<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<section class="companies-info">
	<div class="container">

		<div class="row">
			<h3>
				<b>Invinted for <c:out value="${teamEntity.name}" /></b>
			</h3>

		</div>
		<br />
		<!--search-sec end-->
		<div class="companies-list">
			<div class="row">
				<c:forEach var="listTeamInvite" items="${listTeamInvite}">
					<div class="col-lg-3 col-md-4 col-sm-6">
						<div class="company_profile_info">
							<div class="company-up-info">

								<img src="<c:url value='${listTeamInvite.userEntity.photo}'/>"
									alt="">
								<h3><c:out value="${listTeamInvite.userEntity.name}" /></h3>
								<h4><c:out value="${listTeamInvite.userEntity.userName}" /></h4>
								<h4>${listTeamInvite.dateOfInvitation}</h4>
								<ul>
									<li><a
										href="<c:url value='/teaminvitation/invitation/cancel/${listTeamInvite.id}'/>"
										title="" class="follow">Cancel</a></li>

								</ul>
							</div>

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

<c:import url="/WEB-INF/cabecalho/footer.jsp" />

