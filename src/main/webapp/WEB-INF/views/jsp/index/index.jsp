<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<!--  cabeçalho-->

<c:if test="${clienteLogado.email!=null}">
	<section class="interface">
		<div class="container gedf-wrapper">
			<div class="row">
				<c:import url="/WEB-INF/views/jsp/index/profilecard.jsp" />

				<c:import url="/WEB-INF/views/jsp/index/pub.jsp" />

				<c:import url="/WEB-INF/views/jsp/index/advertising.jsp" />
			</div>

		</div>

	</section>
</c:if>

<!--  interface-->
<c:import url="/WEB-INF/cabecalho/footer.jsp" />