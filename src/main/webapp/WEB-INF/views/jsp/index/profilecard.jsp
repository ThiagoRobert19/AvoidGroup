<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="col-md-6 col-xl-3">
	<section class="wp wp-6">
		<hr class="invisible">

		<div class="card card-social text-center">
			<div class="card-body has-gradient text-white">
				<img src="${profileLoged.photo}" height="90" alt="Avatar"
					class="rounded-circle" />
				<h5 class="card-title pb-3">
					<c:out value="${profileLoged.nickName}" />
				</h5>
			</div>
		</div>

		<div class="card">
			<div class="card-body">
				<div class="h7 text-muted">
					<c:out value="${profileLoged.firstName}" />
					<c:out value="${profileLoged.lastName}" />
				</div>
				<div class="h7">
					<c:out value="${profileLoged.about}" />
				</div>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">
					<div class="h6 text-muted">
						<a href="<c:url value='/friend/viewYourList'/>">${friends}
							Friends </a>
					</div>
				</li>

				<li class="list-group-item">
					<div class="h6 text-muted">
						<a href="<c:url value='/team/findAll'/>">${qtTeam} <fmt:message
								key="menu.team" />
						</a>

					</div>

				</li>
				<li class="list-group-item"><a
					href="<c:url value='/profile/view'/>">Profile</a></li>


			</ul>
		</div>
	</section>
	<hr class="invisible">
</div>