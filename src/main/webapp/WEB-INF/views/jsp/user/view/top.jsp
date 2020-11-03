<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<section class="cover-sec">
	<c:if test="${not empty userEntity.backPhoto}">

		<img src="<c:url value='${userEntity.backPhoto}'/>" alt=""
			width="1600px" height="400px">
	</c:if>
	<c:if test="${empty userEntity.backPhoto}">

		<img src="<c:url value='/resources/images/resources/valorant.jpg'/>"
			alt="" width="1600px" height="400px">
	</c:if>



</section>