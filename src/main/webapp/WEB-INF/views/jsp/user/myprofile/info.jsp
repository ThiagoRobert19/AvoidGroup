<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="product-feed-tab" id="info-dd">
	<div class="user-profile-ov">
		<h3>

			<a href="#" title="" class="overview-open">About</a> <a href="#"
				title="" class="overview-open"><i class="fa fa-pencil"></i></a>

		</h3>
		<p>
			<c:out value="${userEntity.about}" />
		</p>
	</div>
	<div class="user-profile-ov">
		<h3>
			<a href="#" title="" class="skills-open">Tags</a> <a href="#"
				title="" class="skills-open"><i class="fa fa-pencil"></i></a> <a
				href="#"><i class="fa fa-plus-square"></i></a>
		</h3>
		<ul>
			<li><a href="#" title="">HTML</a></li>
			<li><a href="#" title="">PHP</a></li>
			<li><a href="#" title="">CSS</a></li>
			<li><a href="#" title="">Javascript</a></li>
			<li><a href="#" title="">Wordpress</a></li>
			<li><a href="#" title="">Photoshop</a></li>
			<li><a href="#" title="">Illustrator</a></li>
			<li><a href="#" title="">Corel Draw</a></li>
		</ul>
	</div>

</div>


<div class="overview-box" id="overview-box">
	<div class="overview-edit">
		<h3>About</h3>

		<form action="<c:url value='/user/about/edit'/>" method="POST"
			enctype="multipart/form-data">

			<textarea name="changeAbout"><c:out
					value="${userEntity.about}" /></textarea>
			<button type="submit" class="save">Save</button>

		</form>
		<a href="#" title="" class="close-box"><i class="la la-close"></i></a>
	</div>
	<!--overview-edit end-->
</div>
<!--overview-box end-->

