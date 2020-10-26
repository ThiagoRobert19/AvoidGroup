<%@ tag language="java" pageEncoding="ISO-8859-1"%>
<%@ tag import="org.springframework.util.StringUtils"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ attribute name="pagedListHolder" required="true"
	type="org.springframework.beans.support.PagedListHolder"%>
<%@ attribute name="pagedLink" required="true" type="java.lang.String"%>
<c:if test="${pagedListHolder.pageCount>1}">
<nav aria-label="Page navigation example" class="full-pagi">
	<ul class="pagination">
		<c:if test="${!pagedListHolder.firstPage}">
			<li class="page-item"><a class="page-link pvr"
				href="<c:url value='/${folder}/${url}/${pagedListHolder.getPage()-1}/${texto}'/>">Previous</a></li>

		</c:if>

		<c:forEach begin="${pagedListHolder.firstLinkedPage}"
			end="${pagedListHolder.lastLinkedPage}" var="i">
			<c:choose>
				<c:when test="${pagedListHolder.page==i}">
					<li class="page-item"><a class="page-link active"
						href="<c:url value='/${folder}/${url}/${i}/${texto}'/>">${i+1}</a></li>
				</c:when>
				<c:otherwise>
					<li class="page-item"><a class="page-link"
						href="<c:url value='/${folder}/${url}/${i}/${texto}'/>">${i+1}</a></li>


				</c:otherwise>
			</c:choose>


		</c:forEach>
		<c:if
			test="${pagedListHolder.lastLinkedPage < (pagedListHolder.pageCount - 2)}">

			<li class="page-item "><a class="page-link" href="#">...</a></li>
		</c:if>
		<c:if
			test="${pagedListHolder.lastLinkedPage < (pagedListHolder.pageCount - 1)}">

			<li class="page-item "><a class="page-link"
				href="<c:url value='/${folder}/${url}/${pagedListHolder.pageCount}/${texto}'/>">${pagedListHolder.pageCount}</a></li>

		</c:if>
		<c:if test="${pagedListHolder.page != pagedListHolder.lastLinkedPage}">

			<li class="page-item "><a class="page-link pvr"
				href="<c:url value='/${folder}/${url}/${pagedListHolder.getPage()+1}/${texto}'/>">Next</a></li>


		</c:if>

	</ul>
</nav>
</c:if>

