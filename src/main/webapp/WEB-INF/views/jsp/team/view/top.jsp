<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<section class="cover-sec">
<c:if test="${not empty teamEntity.backPhoto}">
	<img src="${teamEntity.backPhoto}" alt=" no image" width="1600px"
		height="400px">
</c:if>
<c:if test="${empty teamEntity.backPhoto}">
	<img src="<c:url value='/resources/images/resources/cover-img.jpg'/>"alt="">
</c:if>
	
	<div class="add-pic-box">
		<div class="container">
			<div class="row no-gutters">
				<div class="col-lg-12 col-sm-12"></div>
			</div>
		</div>
	</div>
</section>
