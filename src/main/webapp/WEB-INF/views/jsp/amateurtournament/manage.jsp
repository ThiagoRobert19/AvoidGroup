<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<section class="interface">
	<div class="container gedf-wrapper">
		<div class="row">
			<c:import url="/WEB-INF/views/jsp/amateurtournament/profilecard.jsp" />
			<c:import url="/WEB-INF/views/jsp/amateurtournament/pub.jsp" />
			<!-- c:import url="/WEB-INF/views/jsp/amateurtournament/advertising.jsp" /-->
		</div>
	</div>
</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />