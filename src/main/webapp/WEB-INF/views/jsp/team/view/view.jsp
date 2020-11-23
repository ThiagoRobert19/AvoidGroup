<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<c:import url="/WEB-INF/views/jsp/team/myteam/top.jsp" />
<main>

<div class="main-section">
	<div class="container">
		<div class="main-section-data">
			<div class="row">
				<c:import url="/WEB-INF/views/jsp/team/view/profilecard.jsp" />
				<div class="col-lg-6">
					<div class="main-ws-sec">
						<div class="user-tab-sec rewivew">
							<h3><c:out value="${teamEntity.name}" /></h3>
							<div class="star-descp">
								<span><c:out value="${teamEntity.about}" /></span>
								
							</div>
							<!--star-descp end-->
							<div class="tab-feed st2 settingjb">
								<ul>
									<li data-tab="feed-dd" class="active"><a href="#" title="">

											<img src="<c:url value='/resources/images/ic1.png'/>" alt="">
											<span>Feed</span>
									</a></li>
									<li data-tab="info-dd"><a href="#" title=""> <img
											src="<c:url value='/resources/images/ic2.png'/>" alt="">
											<span>Info</span>
									</a></li>


									<li data-tab="portfolio-dd"><a href="#" title=""> <img
											src="<c:url value='/resources/images/ic3.png'/>" alt="">
											<span>Images</span>
									</a></li>
									<li data-tab="rewivewdata"><a href="#" title=""> <img
											src="<c:url value='/resources/images/review.png'/>" alt="">
											<span>Reviews</span>
									</a></li>
									


								</ul>
							</div>
							<!-- tab-feed end-->
						</div>
						<!--user-tab-sec end-->

						<c:import url="/WEB-INF/views/jsp/team/view/feed.jsp" />
						<c:import url="/WEB-INF/views/jsp/team/view/info.jsp" />
						<c:import url="/WEB-INF/views/jsp/team/view/portfolio.jsp" />
						<c:import url="/WEB-INF/views/jsp/team/view/review.jsp" />

						<!--product-feed-tab end-->


						<!--product-feed-tab end-->


					</div>
					<!--main-ws-sec end-->
				</div>
				<c:import
					url="/WEB-INF/views/jsp/team/view/portfoliolateral.jsp" />
			</div>
		</div>
		<!-- main-section-data end-->
	</div>
</div>
</main>





<c:import url="/WEB-INF/cabecalho/footer.jsp" />
