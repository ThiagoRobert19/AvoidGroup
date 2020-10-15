<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<!--  cabeçalho-->

<c:if test="${clienteLogado.email!=null}">
	<section class="interface">
		<div class="container gedf-wrapper">
			<div class="row">
				<c:import url="/WEB-INF/views/jsp/friend/profilecard.jsp" />

				<!-- card-profile -->

				<!-- publication -->
				<c:import url="/WEB-INF/views/jsp/friend/pub.jsp" />
				<!-- publication -->


				<!-- Post -->
				<!-- advertisements -->
				<c:import url="/WEB-INF/views/jsp/friend/advertising.jsp" />
			</div>
			<!-- row -->
		</div>
		<!-- container -->
	</section>
</c:if>

<!--  interface-->
<c:import url="/WEB-INF/cabecalho/footer.jsp" />