<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="col-md-6 col-xl-3">
	<section class="wp wp-6">
		<div class="card card-social text-center">
			<div class="card-body has-gradient text-white">
				<img src="${profile.photo}" width="90" alt="Avatar"
					class="rounded-circle" />
				<h5 class="card-title pb-3"><c:out value="${profile.nickName}"/></h5>
			</div>
		</div>

		<div class="card">
			<div class="row ">
			
				<div class="col-md-6 col-xl-3">
					<c:if test="${steam =='yes'}">
						<a href="<c:url value='/steam/frienddata/${profile.id}'/>"
							class="btn btn-login-steam" title="Steam"> <span
							class="fab fa-steam"></span></a>

					</c:if>
					<c:if test="${steam =='no'}">
						<a href="#" class="btn btn-login-steam" title="Steam"> <span
							class="fab fa-steam"></span></a>
					</c:if>
				</div>

				<div class="col-md-6 col-xl-3">
					<a href="#" class="btn btn-login-twitch" title="Twitch"> <span
						class="fab fa-twitch"></span>
					</a>

				</div>


				<div class="col-md-6 col-xl-3">
					<a href="#" class="btn btn-login-xbox" title="Xbox"> <span
						class="fab fa-xbox"></span>
					</a>
				</div>
			</div>

			<div class="card-body">
				<div class="h7 text-muted">Name : <c:out value="${profile.firstName}"/> <c:out value="${profile.lastName}"/> 
					</div>
				<div class="h7"><c:out value="${profile.about}"/></div>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">
					<div class="h6 text-muted">
						<a href="<c:url value='/friend/viewFriendList/${profile.id}'/>">Friends</a>
					</div>
					<div class="h5">${friends}</div>
				</li>
				<li class="list-group-item">
					<div class="h6 text-muted">

						<c:if test="${resp=='esperando'}">
							<a href="<c:url value='/friend/cancel/${profile.id}'/>">
								Cancel</a>
						</c:if>
						<c:if test="${resp=='nada'}">
							<a href="<c:url value='/friend/add/${profile.id}'/>"> Add as
								Friend</a>
						</c:if>
						<c:if test="${resp=='invitado'}">

							<a href="<c:url value='/friend/accept/${profile.id}'/>">Accept</a>

							<a href="<c:url value='/friend/deny/${profile.id}'/>">Deny</a>

						</c:if>


					</div>

				</li>







				<li class="list-group-item">
					<div class="h6 text-muted">Team</div>
					<div class="h5">${qtTeam}</div>
				</li>

			</ul>
		</div>
	</section>
	<hr class="invisible">
</div>