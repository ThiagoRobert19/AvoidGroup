<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="tab-pane fade" id="adminchange" role="tabpanel"
	aria-labelledby="nav-adminchange-tab">
	<div class="acc-setting">
		<h3>Change Admin</h3>
		<form action="<c:url value='/teamsetting/changeadmin/make'/>"
			method="post">

			<input type="hidden" name="teamID" value="${teamEntity.id}" />
			<div class="col-lg-12 no-pdd form-group">
				<select name="userID" class="form-control">
					<option value="${teamEntity.admin.id}">${teamEntity.admin.name}</option>

					<c:forEach var="listTeamUser" items="${listTeamUser}">
						<c:if test="${teamEntity.admin.id != listTeamUser.userEntity.id}">
							<c:if test="${listTeamUser.userEntity.id != clienteLogado.id}">
								<option value="${listTeamUser.userEntity.id}">${listTeamUser.userEntity.name}</option>

							</c:if>
						</c:if>
					</c:forEach>
				</select>


			</div>


			<div class="col-lg-12 no-pdd">
				<button type="submit" class="btn botaopreto" value="submit">Change</button>
			</div>
		</form>

	</div>
	<!--acc-setting end-->
</div>