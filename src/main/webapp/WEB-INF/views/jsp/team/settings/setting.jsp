<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<section class="profile-account-setting">

			<div class="container">
				<div class="account-tabs-setting">
					<div class="row">
						<div class="col-lg-3">
						
							<div class="acc-leftbar">
								<div class="nav nav-tabs" id="nav-tab" role="tablist">
								
					
								    <a class="nav-item nav-link active" id="nav-privcy-tab" data-toggle="tab" href="#privcy" role="tab" aria-controls="privacy" aria-selected="true"><i class="fas fa-plus-circle"></i>Player Invitation</a>
								    <a class="nav-item nav-link" id="nav-players-tab" data-toggle="tab" href="#players" role="tab" aria-controls="players" aria-selected="false"><i class="fa fa-group"></i>Players</a>
								  
								  	 <c:if test="${empty teamEntity.admin.id && teamEntity.owner.id==clienteLogado.id}">
								  	 <a class="nav-item nav-link" id="nav-adminchoose-tab" data-toggle="tab" href="#adminchoose" role="tab" aria-controls="adminchoose" aria-selected="false"><i class="fas fa-user-shield"></i>Choose an Admin</a>
								  	 </c:if>
								  	 <c:if test="${not empty teamEntity.admin.id && teamEntity.owner.id==clienteLogado.id}">
								  	 <a class="nav-item nav-link" id="nav-deactivate-tab" data-toggle="tab" href="#nav-deactivate" role="tab" aria-controls="nav-deactivate" aria-selected="false"><i class="fas fa-user-shield"></i>Change Admin</a>
								  	 </c:if>
								   <c:if test="${teamEntity.owner.id == clienteLogado.id}">
								     <a class="nav-item nav-link" id="nav-deactivate-tab" data-toggle="tab" href="#nav-deactivate" role="tab" aria-controls="nav-deactivate" aria-selected="false"><i class="fas fa-minus-circle"></i>Deactivate Team</a>
								  	</c:if>
								  <c:if test="${not empty erro}">
								  		<div class="nav-item nav-link">
											<div class="alert alert-danger">
												<strong>Erro!</strong> ${erro}
											</div>
										</div>
								  </c:if>
								  </div>
							</div><!--acc-leftbar end-->
						</div>
						<div class="col-lg-9">
							<div class="tab-content" id="nav-tabContent">
							  
								<c:import url="/WEB-INF/views/jsp/team/settings/invitation.jsp" />  
								<c:import url="/WEB-INF/views/jsp/team/settings/adminchoose.jsp" /> 
								<c:import url="/WEB-INF/views/jsp/team/settings/players.jsp" />
								
								<c:import url="/WEB-INF/views/jsp/team/settings/delete.jsp" /> 	
							
							</div>
						</div>
					</div>
				</div><!--account-tabs-setting end-->
			</div>
		</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />
