<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<div class="row">
	<div class="col-md-6 col-xl-4"></div>
	<div class="col-md-6 col-xl-4">
		<hr class="invisible">
		${error}

	</div>
</div>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />