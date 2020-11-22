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
								
								    <!-- a class="nav-item nav-link " id="nav-acc-tab" data-toggle="tab" href="#nav-acc" role="tab" aria-controls="nav-acc" aria-selected="false"><i class="la la-cogs"></i>Account Setting</a-->
					
					
								    <a class="nav-item nav-link active" id="nav-privcy-tab" data-toggle="tab" href="#privcy" role="tab" aria-controls="privacy" aria-selected="true"><i class="fa fa-group"></i>User Invitation</a>
								    
								    <a class="nav-item nav-link" id="security" data-toggle="tab" href="#security-login" role="tab" aria-controls="security-login" aria-selected="false"><i class="fa fa-user-secret"></i>Security and Login</a>
								    
								    <a class="nav-item nav-link" id="nav-deactivate-tab" data-toggle="tab" href="#nav-deactivate" role="tab" aria-controls="nav-deactivate" aria-selected="false"><i class="fa fa-random"></i>Delete Team</a>
								  	
								  
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
							  
								<c:import url="/WEB-INF/views/jsp/team/settings/account.jsp" />
								
							   	
								<c:import url="/WEB-INF/views/jsp/team/settings/invitation.jsp" />  
								<c:import url="/WEB-INF/views/jsp/team/settings/security.jsp" /> 
							
								<c:import url="/WEB-INF/views/jsp/team/settings/delete.jsp" /> 	
								<c:import url="/WEB-INF/views/jsp/team/settings/team.jsp" />
							</div>
						</div>
					</div>
				</div><!--account-tabs-setting end-->
			</div>
		</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />
