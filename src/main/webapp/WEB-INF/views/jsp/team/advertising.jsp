<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="col-md-6 col-xl-3">
	<hr class="invisible">
	<section class="wp wp-6">
		<div class="card">
			<ul class="list-group list-group-flush">
				<li class="list-group-item">
					<div class="h6 text-muted">
						<a href="#">Quests</a>
					</div>
				</li>
				<li class="list-group-item">
					<div class="h6 text-muted">
						<a href="#">Events</a>
					</div>
				</li>

				<li class="list-group-item">
					<div class="h6 text-muted">
						<a href="#">Training</a>
					</div>
				</li>
				<c:if test="${cargo=='owner'}">
				<li class="list-group-item">
					<div class="h6 text-muted">
						<a
								href="<c:url value='/amateurtournament/viewbyteam/${team.id}'/>">Tournament</a>
					</div>
				</li>
				</c:if>
				<li class="list-group-item">
					<div class="h6 text-muted">
						<a href="#">Opinion</a>
					</div>
				</li>
				<li class="list-group-item">
					<div class="h6 text-muted">
						<a href="<c:url value='/team/faq/${team.id}'/>">FAQ</a>
					</div>
				</li>
			</ul>
		</div>
	</section>
	<hr class="invisible">
</div>
