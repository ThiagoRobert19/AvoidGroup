<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<header>
	<div class="container">
		<div class="header-data">

			<div class="search-bar">
				<form action="<c:url value='/user/pesquisa'/>" method="POST"
					enctype="multipart/form-data">
					<input type="text" name="texto" placeholder="Search...">
					<button type="submit">
						<i class="la la-search"></i>
					</button>
				</form>
			</div>
			<!--search-bar end-->
			<nav>
				<ul>
					<li><a href="<c:url value='/'/>" title=""> <span><img
								src="<c:url value='/resources/images/icon1.png'/>" alt=""></span>
							Home
					</a></li>
					<li><a href="<c:url value='/team/data'/>" title=""> <span><img
								src="<c:url value='/resources/images/icon2.png'/>" alt=""></span>
							Team
					</a></li>
					<li><a href="<c:url value='/user/data'/>" title=""> <span><img
								src="<c:url value='/resources/images/icon4.png'/>" alt=""></span>
							Profiles
					</a></li>
					<li><a href="#" title=""> <span><img
								src="<c:url value='/resources/images/icon3.png'/>" alt=""></span>
							Projects
					</a></li>

					<li><a href="#" title=""> <span><img
								src="<c:url value='/resources/images/icon5.png'/>" alt=""></span>
							Jobs
					</a></li>
					<li><a href="#" title="" class="not-box-openm"> <span><img
								src="<c:url value='/resources/images/icon6.png'/>" alt=""></span>
							Messages
					</a>
						<div class="notification-box msg" id="message">
							<div class="nt-title">
								<h4>Setting</h4>
								<a href="#" title="">Clear all</a>
							</div>
							<div class="nott-list">
								<div class="notfication-details">
									<div class="noty-user-img">
										<img
											src="<c:url value='/resources/images/resources/ny-img1.png'/>"
											alt="">
									</div>
									<div class="notification-info">
										<h3>
											<a href="messages.html" title="">Jassica William</a>
										</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing
											elit, sed do.</p>
										<span>2 min ago</span>
									</div>
									<!--notification-info -->
								</div>
								<div class="notfication-details">
									<div class="noty-user-img">
										<img
											src="<c:url value='/resources/images/resources/ny-img2.png'/>"
											alt="">
									</div>
									<div class="notification-info">
										<h3>
											<a href="messages.html" title="">Jassica William</a>
										</h3>
										<p>Lorem ipsum dolor sit amet.</p>
										<span>2 min ago</span>
									</div>
									<!--notification-info -->
								</div>
								<div class="notfication-details">
									<div class="noty-user-img">
										<img
											src="<c:url value='/resources/images/resources/ny-img3.png'/>"
											alt="">
									</div>
									<div class="notification-info">
										<h3>
											<a href="messages.html" title="">Jassica William</a>
										</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing
											elit, sed do eiusmod tempo incididunt ut labore et dolore
											magna aliqua.</p>
										<span>2 min ago</span>
									</div>
									<!--notification-info -->
								</div>
								<div class="view-all-nots">
									<a href="messages.html" title="">View All Messsages</a>
								</div>
							</div>
							<!--nott-list end-->
						</div>
					<li><c:if test="${countNotification > 0}">
							<span class="msg-notifc">${countNotification}</span>
						</c:if> <a href="#" class="not-box-open"> <span><img
								src="<c:url value='/resources/images/icon7.png'/>" alt=""></span>
							Notification
					</a>
						<div class="notification-box noti" id="notification">
							<div class="nt-title">
								<h4>Setting</h4>
								<a href="<c:url value='/notification/clear'/>" title="">Clear all</a>
							</div>
							<div class="nott-list">
								<c:forEach var="listNotification" items="${listNotification}">
									<div class="notfication-details">
										<div class="noty-user-img">
											<img
												src="<c:url value='/resources/images/resources/ny-img1.png'/>"
												alt="">
										</div>
										<div class="notification-info">
											<h3>
												<a href="#" title="">${listNotification.follow}</a> ${listNotification.preview}
											</h3>
											<span>${listNotification.dateOfNotification} ${listNotification.timeOfNotification}</span>
										</div>
										<!--notification-info -->
									</div>
								</c:forEach>
								<!--div class="view-all-nots">
									<a href="<c:url value='/notification/all'/>" title="">View All Notification</a>
								</div-->
							</div>
							<!--nott-list end-->
						</div> <!--notification-box end--></li>
				</ul>

			</nav>
			<!--nav end-->
			<div class="menu-btn">
				<a href="#" title=""><i class="fa fa-bars"></i></a>
			</div>
			<!--menu-btn end-->
			<div class="user-account">
				<div class="user-info">
					<img src="<c:url value='/resources/images/resources/user3.png'/>"
						alt="" width="40" height="40"> <a href="#" title=""></a> <i
						class="la la-sort-down"></i>
				</div>
				<div class="user-account-settingss" id="users">


					<h3>Setting</h3>
					<ul class="us-links">
						<li><a href="<c:url value='/user/settings'/>" title="">Account
								Setting</a></li>
						<li><a href="#" title="">Privacy</a></li>
						<li><a href="#" title="">Faqs</a></li>
						<li><a href="#" title="">Terms & Conditions</a></li>
					</ul>
					<h3 class="tc">
						<a href="<c:url value='/user/logout'/>" title="">Logout</a>
					</h3>
				</div>
				<!--user-account-settingss end-->
			</div>
		</div>
		<!--header-data end-->
	</div>
</header>
<!--header end-->
