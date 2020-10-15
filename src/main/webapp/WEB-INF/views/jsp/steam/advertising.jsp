<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="col-md-6 col-xl-3">
	
	<c:forEach var="gameList" items="${gameList}">
	
	<hr class="invisible">
	<section class="wp wp-6">
		<div class="card">
			<ul class="list-group list-group-flush">
				<li class="list-group-item">
					<div class="h6 text-muted">
						<h4><c:out value="${gameList.name}" /></h4>
					</div>

				</li>

			
					<li class="list-group-item">
						<div class="h6 text-muted">
							<img width="200"
								src="http://media.steampowered.com/steamcommunity/public/images/apps/${gameList.appid}/${gameList.img_logo_url}.jpg" />
						</div>
						
						<div class="h6 text-muted">Time Played Forever:
							<c:out value="${gameList.playtime_forever}" /></div>
					</li>
			
			</ul>
		</div>
	</section>
	</c:forEach>
	<hr class="invisible">
</div>