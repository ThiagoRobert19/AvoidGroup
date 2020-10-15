<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<header>
	<nav class="navbar navbar-expand-md navbar-dark bg-dark nav-fix">
		<div class="container">

			<a class="navbar-brand mr-auto" href="<c:url value='/'/>"> <span
				class="icon-avoid"><img
					src="<c:url value='/resources/_css/iconfonts/logo.svg'/>" alt=""></span>
				<span class="sr-only"><fmt:message key="menu.logo" /></span>
			</a>
			<a class="navbar-brand mr-auto" href="<c:url value='/esport/pegapartida'/>"> <span
				class="icon-avoid"></span>
				Partida</span>
			</a>

			<div class="hidden-md-up">
				<a class="navbar-toggler collapsed" data-toggle="collapse"
					href="#collapsingNavbarInverse" aria-expanded="false"
					aria-controls="collapsingNavbarInverse">
					<div class="sr-only">Mobile Nav</div>
				</a>
			</div>

			<div id="collapsingNavbarInverse"
				class="collapse navbar-toggleable-custom" role="tabpanel"
				aria-labelledby="collapsingNavbarInverse">
				<ul class="nav navbar-nav float-right">

					<!--li class="nav-item dropdown hidden-md-down textselect-off"><a
						class="nav-link dropdown-toggle nav-dropdown-user"
						id="dropdownMenuInverse2" data-toggle="dropdown"
						aria-haspopup="true" aria-expanded="false"> <img class="bnd"
							width="32px" alt=""
							src="<c:url value='/resources/bandeiras/${cultura.locale}.png'/>">
							<span class="icon-caret-down"></span>
					</a>
						<div
							class="dropdown-menu dropdown-menu-right dropdown-menu-user dropdown-menu-animated"
							aria-labelledby="dropdownMenuInverse2">


							<c:if test="${cultura.locale.country!='BR' }">
								<a href="<c:url value='/language/change/pt/BR'/>"
									class="dropdown-item text-uppercase"> <img class="bnd"
									width="32px" alt=""
									src="<c:url value='/resources/bandeiras/pt_BR.png'/>">
								</a>
							</c:if>
							<c:if test="${cultura.locale.country!='ES' }">
								<a href="<c:url value='/language/change/es/ES'/>"
									class="dropdown-item text-uppercase"> <img class="bnd"
									width="32px" alt=""
									src="<c:url value='/resources/bandeiras/es_ES.png'/>">
								</a>
							</c:if>
							<c:if test="${cultura.locale.country!='US' }">
								<a href="<c:url value='/language/change/en/US'/>"
									class="dropdown-item text-uppercase"> <img class="bnd"
									width="32px" alt=""
									src="<c:url value='/resources/bandeiras/en_US.png'/>">
								</a>
							</c:if>

						</div></li-->

					<li class="nav-item nav-item-toggable active"><a
						class="nav-link" href="<c:url value='/'/>" rel="nofollow"><fmt:message
								key="menu.home" /> <span class="sr-only">(current)</span> </a></li>
					<li class="nav-item nav-item-toggable active"><a
						class="nav-link" href="<c:url value='/chat'/>" rel="nofollow">CHAT


					</a></li>
					<li class="nav-item nav-item-toggable"><a class="nav-link"
						href="<c:url value='/profile/view'/>" rel="nofollow"><fmt:message
								key="menu.profile" /></a></li>
					<li class="nav-item nav-item-toggable"><a class="nav-link"
						href="<c:url value='/esport/matches/today'/>"><fmt:message
								key="menu.esports" /></a></li>

					<li class="nav-item nav-item-toggable"><a class="nav-link"
						href="<c:url value='/amateurtournament/viewbyuser'/>"
						rel="nofollow"><fmt:message key="menu.tournament" /></a></li>
					<!--li class="nav-item nav-item-toggable"><a class="nav-link"
						href="<c:url value='/portal/general'/>" rel="nofollow"><fmt:message
								key="menu.forum" /></a></li-->
					<li class="nav-item nav-item-toggable"><a class="nav-link"
						href="<c:url value='/user/logout'/>"><fmt:message
								key="menu.logout" /></a></li>

					<!-- #################### -->
					<li class="nav-item dropdown nav-dropdown-search hidden-md-down">
						<a class="nav-link dropdown-toggle" id="dropdownMenuInverse1"
						data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<span class="icon-search"></span>
					</a>
						<div
							class="dropdown-menu dropdown-menu-right dropdown-menu-search"
							aria-labelledby="dropdownMenuInverse1">
							<form class="navbar-form"
								action="<c:url value='/search/general'/>" method="post">
								<input class="form-control navbar-search-input" type="text"
									name="name"
									placeholder="Type your search &amp; hit Enter&hellip;">

							</form>
						</div>
					</li>


					<li class="nav-item dropdown hidden-md-down textselect-off"><a
						class="nav-link dropdown-toggle nav-dropdown-user"
						id="dropdownMenuInverse2" data-toggle="dropdown"
						aria-haspopup="true" aria-expanded="false"> <img
							src="${profileLogado.photo}" height="40" width="40" alt="Avatar"
							class="rounded-circle"> <span class="icon-caret-down"></span>
					</a>
						<div
							class="dropdown-menu dropdown-menu-right dropdown-menu-user dropdown-menu-animated"
							aria-labelledby="dropdownMenuInverse2">
							<div class="media">
								<div class="media-left">

									<!-- img src="${profileLogado.photo}" height="60" width="60"
										alt="Avatar" class="rounded-circle d-flex mr-2"-->
								</div>
								<div class="media-body align-self-center">
									<h5 class="mt-0 mb-1">${profileLogado.nickName}</h5>
									<h6 class="mb-0">${clienteLogado.email}</h6>
								</div>
							</div>


							<a href="#" class="dropdown-item text-uppercase"><fmt:message
									key="menu.post" /></a> <a href="<c:url value='/team/findAll'/>"
								class="dropdown-item text-uppercase"><fmt:message
									key="menu.team" /></a> <a
								href="<c:url value='/subscription/view'/>"
								class="dropdown-item text-uppercase"><fmt:message
									key="menu.subscription" /></a>
						</div></li>

				</ul>
			</div>
		</div>
	</nav>
	<hr class="invisible">

</header>
