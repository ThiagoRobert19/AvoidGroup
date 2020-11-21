<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<section class="companies-info">
	<div class="container">
	
		<div class="row">
			
		</div>
		<br />
		<!--search-sec end-->
		<div class="companies-list">
			<div class="row">
				<c:forEach var="listUser" items="${listUser}">
					<div class="col-lg-3 col-md-4 col-sm-6">
						<div class="company_profile_info">
							<div class="company-up-info">

								<img src="<c:url value='${listUser.photo}'/>" alt="">
								<h3>${listUser.name}</h3>
								<h4>${listUser.about}</h4>
								<ul>
									<li><a href="#" title="" class="follow">Invite</a></li>
									<li><a href="#" title="" class="message-us"><i
											class="fa fa-envelope"></i></a></li>
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

