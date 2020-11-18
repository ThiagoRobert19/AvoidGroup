<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="product-feed-tab" id="info-dd">
	<div class="user-profile-ov">
		<h3>
			<c:if
				test="${teamEntity.owner.id==clienteLogado.id || teamEntity.admin.id==clienteLogado.id}">
				<a href="#" title="" class="overview-open">About</a>
				<a href="#" title="" class="overview-open"><i
					class="fa fa-pencil"></i></a>
			</c:if>
			<c:if
				test="${teamEntity.owner.id!=clienteLogado.id && teamEntity.admin.id!=clienteLogado.id}">
						About
		</c:if>
		</h3>
		<p>${teamEntity.about}</p>
	</div>
	<div class="usy-dt">

		<img src="<c:url value="${teamEntity.owner.photo}"/>" alt="no image"
			style="width: 80px">
		<div class="usy-name">
			<h3>
				<a href="<c:url value="/user/view/${teamEntity.owner.id}"/>">${teamEntity.owner.userName}</a>
			</h3>
			<spam>Owner</spam>

		</div>
	</div>
	<c:if test="${not empty teamEntity.admin.id}">
		<div class="usy-dt">

			<img src="<c:url value="${teamEntity.admin.photo}"/>" alt="no image"
				style="width: 80px">
			<div class="usy-name">
				<h3>
					<a href="<c:url value="/user/view/${teamEntity.admin.id}"/>">${teamEntity.admin.userName}</a>
				</h3>
				<spam>Admin</spam>

			</div>
		</div>
	</c:if>
</div>


<div class="overview-box" id="overview-box">
	<div class="overview-edit">
		<h3>About</h3>

		<form action="<c:url value='/team/about/edit'/>" method="POST"
			enctype="multipart/form-data">
			<input type="hidden" name="teamID" value="${teamEntity.id}" />
			<textarea name="changeAbout">${teamEntity.about}</textarea>
			<button type="submit" class="save">Save</button>

		</form>
		<a href="#" title="" class="close-box"><i class="la la-close"></i></a>
	</div>
	<!--overview-edit end-->
</div>
<!--overview-box end-->
