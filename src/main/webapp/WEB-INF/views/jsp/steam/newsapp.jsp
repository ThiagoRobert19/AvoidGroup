<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<section class="interface">
	<div class="container gedf-wrapper">
		<div class="row">
			<div class="col-md-6 col-xl-1">
				<hr class="invisible">
				
				<hr class="invisible">
			</div>
			<!-- ######################################################### -->
			<div class="col-md-12 col-xl-10">
			<section class="wp wp-6">
					<div class="card card-social text-center">
						<div class="card-body has-gradient text-white">
							<img width="220"
								src="http://media.steampowered.com/steamcommunity/public/images/apps/${appid}/${image_url}.jpg"
								alt="" />
							
							<h1><c:out value="${name}" /></h1>
						</div>
					</div>

					
				</section>
				<hr class="invisible">
				<h1>News For The App</h1>
				<!-- Post -->
				<c:forEach var="newsList" items="${newsList}">
					<div class="card gedf-card">
						<div class="card-header">
							<div class="d-flex justify-content-between align-items-center">
								<div class="d-flex justify-content-between align-items-center">

									<div class="ml-2">
										<div class="h5 m-0">

											<a href="#"><c:out value="${newsList.title}" /></a>

										</div>
										<hr class="invisible">
										<div  class="h5 m-0">
											<a href="#">Date: <c:out value="${newsList.date_new}" /></a>
										</div>
										<div class="h7 text-muted">
											<a href="${newsList.url}">URL: <c:out value="${newsList.url}" /></a>
										</div>
										
										<div class="h7 text-muted">
											<a href="#"><c:out value="${newsList.contents}" /></a>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</c:forEach>
			</div>

		</div>
	</div>
</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />