<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<c:if test="${empty erro}">
	<section class="interface">
		<div class="container">
			<br> <br> <br>
			<div class="row">
				<div class="col col-2">
					<section class="profile-section">
						<h1>We are sorry to hear that you want to leave us!</h1>
						<br>
						<h1>Are you sure that you want to delete your account?</h1>
						<br>
						<h2>
							<a href="<c:url value='/profile/doDelete'/>">Yes</a><br> <br>

						</h2>
						<h2>

							<a href="<c:url value='/'/>">No</a><br> <br>

						</h2>

						<section class="profile-block">
							<section class="profile clearfix"></section>

						</section>
						<!-- Profile e Rankingitg-->
					</section>

				</div>
			</div>


		</div>
	</section>
</c:if>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />
