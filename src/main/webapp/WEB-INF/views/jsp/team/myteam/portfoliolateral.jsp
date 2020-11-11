<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
				<div class="col-lg-3">
					<div class="right-sidebar">
						<div class="message-btn">
						<c:if test="${teamEntity.owner.id == clienteLogado.id || teamEntity.admin.id == clienteLogado.id}">
						<a href="<c:url value='/team/setting/settings'/>" title=""><i
								class="fas fa-cog"></i> Setting</a>
						
						</c:if>
							
						</div>
						<div class="widget widget-portfolio">
							<div class="wd-heady">
								<h3>Portfolio</h3>
								
								<img src="<c:url value='/resources/images/photo-icon.png'/>" alt="">
							</div>
							<div class="pf-gallery">
								<ul>
								
								
									<li><a href="#" title=""><img
											src="<c:url value='/resources/images/resources/pf-gallery1.png'/>" alt=""></a></li>
									<li><a href="#" title=""><img
											src="<c:url value='/resources/images/resources/pf-gallery2.png'/>" alt=""></a></li>
									<li><a href="#" title=""><img
											src="<c:url value='/resources/images/resources/pf-gallery3.png'/>" alt=""></a></li>
									<li><a href="#" title=""><img
											src="<c:url value='/resources/images/resources/pf-gallery4.png'/>" alt=""></a></li>
									<li><a href="#" title=""><img
											src="<c:url value='/resources/images/resources/pf-gallery5.png'/>" alt=""></a></li>
									<li><a href="#" title=""><img
											src="<c:url value='/resources/images/resources/pf-gallery6.png'/>" alt=""></a></li>
									<li><a href="#" title=""><img
											src="<c:url value='/resources/images/resources/pf-gallery7.png'/>" alt=""></a></li>
									<li><a href="#" title=""><img
											src="<c:url value='/resources/images/resources/pf-gallery8.png'/>" alt=""></a></li>
									<li><a href="#" title=""><img
											src="<c:url value='/resources/images/resources/pf-gallery9.png'/>" alt=""></a></li>
									
								</ul>
							</div>
							<!--pf-gallery end-->
						</div>
						<!--widget-portfolio end-->
					</div>
					<!--right-sidebar end-->
				</div>