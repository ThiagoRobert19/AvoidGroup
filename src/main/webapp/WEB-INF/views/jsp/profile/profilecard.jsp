<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="col-md-6 col-xl-3">
	<section class="wp wp-6">
		<div class="card card-social text-center">
			<div class="card-body has-gradient text-white">


				<img src="${profile.photo}" height="90" alt="Avatar"
					class="rounded-circle" />
				<h5 class="card-title pb-3">
					<c:out value="${profile.nickName}" />
				</h5>
				<h5 class="card-title pb-3">
					<a href="<c:url value='/profile/changephoto'/>">change photo</a>
				</h5>
			</div>
		</div>

		<div class="card">
			<div class="card-body">
				<div class="row ">

					<div class="col-md-6 col-xl-3">
						<c:if test="${steam =='yes'}">
							<a href="<c:url value='/steam/yourdata'/>"
								class="btn btn-login-steam" title="Steam"> <span
								class="fab fa-steam"></span></a>

						</c:if>
						<c:if test="${steam =='no'}">
							<a href="<c:url value='/steam/login/simple/steam'/>"
								class="btn btn-login-steam" title="Steam"> <span
								class="fab fa-steam"></span></a>
						</c:if>
					</div>

					<div class="col-md-6 col-xl-3">
						<c:if test="${twitch =='yes'}">
							<a href="#" class="btn btn-login-twitch" title="Twitch"> <span
								class="fab fa-twitch"></span>
							</a>
						</c:if>
						<c:if test="${twitch =='no'}">
							<a
								href="https://id.twitch.tv/oauth2/authorize?client_id=1afzrxcxqvcu1h3tok5mysmzar99ga&redirect_uri=http://localhost:8080/AvoidGroup/twitch/auth&response_type=code&scope=analytics:read:extensions analytics:read:games bits:read channel:read:subscriptions"
								class="btn btn-login-twitch" title="Twitch"> <span
								class="fab fa-twitch"></span>
							</a>

						</c:if>
					</div>


					<div class="col-md-6 col-xl-3">
						<a href="#" class="btn btn-login-xbox" title="Xbox"> <span
							class="fab fa-xbox"></span>
						</a>
					</div>


				</div>
				<br />
				<div class="h7 text-muted">
					Name :
					<c:out value="${profile.firstName}" />
					<c:out value="${profile.lastName}" />
				</div>
				<div class="h7"><c:out value ="${profile.about}"/></div>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">
					<div class="h6 text-muted">
						<a href="<c:url value='/profile/edit'/>">Edit</a>
					</div>

				</li>
				<li class="list-group-item">
					<div class="h6 text-muted">
						<a href="<c:url value='/profile/editPassword'/>">Change
							Password</a>
					</div>

				</li>

				<li class="list-group-item">
					<div class="h6 text-muted">
						<a href="<c:url value='/invitation/view/'/>">Requests |
							${invitacao}</a>
					</div>
				</li>


				<li class="list-group-item">
					<div class="h6 text-muted">
						<a href="<c:url value='/friend/viewYourList'/>">Friends |
							${friends}</a>
					</div>
				</li>

				<li class="list-group-item">
					<div class="h6 text-muted">
						<a href="<c:url value='/team/findAll'/>">Team</a>
					</div>
				</li>
				<c:if test="${twitch =='yes'}">
					<li class="list-group-item">
						<div class="h6 text-muted">
							<a href="<c:url value='/twitch/logout'/>">Twitch Logout</a>
						</div>

					</li>

				</c:if>
			</ul>
		</div>
	</section>
	<hr class="invisible">
</div>
