<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<main>
<div class="main-section">
	<div class="container">
		<div class="main-section-data">
			<div class="row">
				<c:import url="/WEB-INF/views/jsp/index/profilecard.jsp" />
				<c:import url="/WEB-INF/views/jsp/index/pub.jsp" />
				<c:import url="/WEB-INF/views/jsp/index/extra.jsp" />
			</div>
		</div>

	</div>
</div>
</main>

<c:import url="/WEB-INF/views/jsp/index/postprojectpopup.jsp" />
<c:import url="/WEB-INF/views/jsp/index/postjobpopup.jsp" />
<c:import url="/WEB-INF/cabecalho/footer.jsp" />
