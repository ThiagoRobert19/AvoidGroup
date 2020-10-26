<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="tg" tagdir="/WEB-INF/tags"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />

<section class="forum-page">
	<div class="container">
		<div class="forum-questions-sec">
			<div class="row">
				<div class="col-lg-8">

					<div class="forum-questions">
						<c:forEach var="listUser" items="${pagedListHolder.pageList}">
							<div class="usr-question">
								<div class="usr_img">

									<img
										src="<c:url value='/resources/images/resources/usrr-img1.png'/>"
										alt="">
								</div>
								<div class="usr_quest">
									<h3>
										<a href="<c:url value='/user/view/${listUser.id}'/>">${listUser.name}</a>
									</h3>
									<div class="star-descp">
										<span><a href="<c:url value='/user/view/${listUser.id}'/>">${listUser.userName}</a></span>
										
									</div>
									<!--ul class="quest-tags">
										<c:if test="${listUser.perfil =='private'}">
											<li><a href="#" title="">Request</a></li>
										</c:if>
										<c:if test="${listUser.perfil !='private'}">
											<li><a href="#" title="">Follow</a></li>
										</c:if>


									</ul-->
								</div>

							</div>
						</c:forEach>
					</div>
					<!--forum-questions end-->
					<tg:paging pagedListHolder="${pagedListHolder}"
						pagedLink="${pagedLink}" />

				</div>
				<div class="col-lg-4">
					<div class="widget widget-user">
						<h3 class="title-wd">Top User of the Week</h3>
						<ul>
							<li>
								<div class="usr-msg-details">
									<div class="usr-ms-img">
										<img
											src="<c:url value='/resources/images/resources/m-img1.png'/>"
											alt="">
									</div>
									<div class="usr-mg-info">
										<h3>Jessica William</h3>
										<p>Graphic Designer</p>
									</div>

									<!--usr-mg-info end-->
								</div> <span><img
									src="<c:url value='/resources/images/price1.png'/>" alt="">1185</span>
							</li>
							<li>
								<div class="usr-msg-details">
									<div class="usr-ms-img">
										<img
											src="<c:url value='/resources/images/resources/m-img2.png'/>"
											alt="">
									</div>
									<div class="usr-mg-info">
										<h3>John Doe</h3>
										<p>PHP Developer</p>
									</div>
									<!--usr-mg-info end-->
								</div> <span><img
									src="<c:url value='/resources/images/price2.png'/>" alt="">1165</span>
							</li>

						</ul>
					</div>
					<!--widget-user end-->
					<div class="widget widget-adver">

						<img
							src="<c:url value='/resources/images/resources/adver-img.png'/>"
							alt="">
					</div>
					<!--widget-adver end-->
				</div>
			</div>
		</div>
		<!--forum-questions-sec end-->
	</div>
</section>
<!--companies-info end-->
<c:import url="/WEB-INF/cabecalho/footer.jsp" />
