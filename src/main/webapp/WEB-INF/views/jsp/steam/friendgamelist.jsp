<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<section class="interface">
	<div class="container">
		<br> <br> <br> <br> <br> <br>
		<div class="row">
			<div class="col col-sidebar">
				<section class="featured-section">
					<h1>List of Game owned</h1>
					<c:forEach var="gameList" items="${gameList}">
						<section class="featured clearfix">
							<img
								src="http://media.steampowered.com/steamcommunity/public/images/apps/${gameList.appid}/${gameList.img_logo_url}.jpg"
								alt="[5]" title="5" />
							<article class="featured-fix">
								<h1><c:out value="${gameList.name}" /></h1>

								<p>Time Played Forever: <c:out value="${gameList.playtime_forever}" /></p>
							</article>

						</section>
					</c:forEach>

				</section>
				<!-- featured -->
			</div>
		</div>
		<!-- row featured / comments-->
	</div>
	<!--  container-->
</section>
<!--  interface-->
<c:import url="/WEB-INF/cabecalho/footer.jsp" />
