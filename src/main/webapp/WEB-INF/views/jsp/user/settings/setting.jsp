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
								<a class="nav-item nav-link active" id="nav-privacy-tab" data-toggle="tab" href="#privacy" role="tab" aria-controls="privacy" aria-selected="true"><i class="fa fa-paw"></i>Privacy</a>
								    <!-- a class="nav-item nav-link " id="nav-acc-tab" data-toggle="tab" href="#nav-acc" role="tab" aria-controls="nav-acc" aria-selected="false"><i class="la la-cogs"></i>Account Setting</a-->
								    <a class="nav-item nav-link" id="nav-status-tab" data-toggle="tab" href="#nav-status" role="tab" aria-controls="nav-status" aria-selected="false"><i class="fa fa-line-chart"></i>Status</a>
								    <a class="nav-item nav-link" id="nav-password-tab" data-toggle="tab" href="#nav-password" role="tab" aria-controls="nav-password" aria-selected="false"><i class="fa fa-lock"></i>Change Password</a>
								    <a class="nav-item nav-link" id="nav-privcy-tab" data-toggle="tab" href="#privcy" role="tab" aria-controls="privacy" aria-selected="false"><i class="fa fa-group"></i>Requests</a>
								    <a class="nav-item nav-link" id="security" data-toggle="tab" href="#security-login" role="tab" aria-controls="security-login" aria-selected="false"><i class="fa fa-user-secret"></i>Security and Login</a>
								    
								    <a class="nav-item nav-link" id="nav-deactivate-tab" data-toggle="tab" href="#nav-deactivate" role="tab" aria-controls="nav-deactivate" aria-selected="false"><i class="fa fa-random"></i>Deactivate Account</a>
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
							    <c:import url="/WEB-INF/views/jsp/user/settings/privacy.jsp" /> 
								<c:import url="/WEB-INF/views/jsp/user/settings/account.jsp" />
								<c:import url="/WEB-INF/views/jsp/user/settings/status.jsp" />  
								<c:import url="/WEB-INF/views/jsp/user/settings/password.jsp" />    	
								<c:import url="/WEB-INF/views/jsp/user/settings/request.jsp" />  
								<c:import url="/WEB-INF/views/jsp/user/settings/security.jsp" /> 
							
								<c:import url="/WEB-INF/views/jsp/user/settings/deactivate.jsp" /> 	
							</div>
						</div>
					</div>
				</div><!--account-tabs-setting end-->
			</div>
		</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />
