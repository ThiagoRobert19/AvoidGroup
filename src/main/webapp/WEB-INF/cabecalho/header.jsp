<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html>
<html lang="pt-br">

<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title>Avoid Group</title>
<meta name="description" content="Avoid - Social Games Networking" />
<meta name="keywords"
	content="games game-online avoid most-popular-games profile online-social-games-networking" />
<meta name="author" content="Avoid Group" />

<!--[if IE]>
      <link rel="shortcut icon" href="<c:url value='/resources/_img/_favicon/favicon.ico'/>">
  <![endif]-->

<link rel="apple-touch-icon" sizes="57x57"
	href="<c:url value='/resources/_img/_favicon/apple-touch-icon-57x57.png'/>">
<link rel="apple-touch-icon" sizes="60x60"
	href="<c:url value='/resources/_img/_favicon/apple-touch-icon-60x60.png'/>">
<link rel="apple-touch-icon" sizes="72x72"
	href="<c:url value='/resources/_img/_favicon/apple-touch-icon-72x72.png'/>">
<link rel="apple-touch-icon" sizes="76x76"
	href="<c:url value='/resources/_img/_favicon/apple-touch-icon-76x76.png'/>">
<link rel="apple-touch-icon" sizes="114x114"
	href="<c:url value='/resources/_img/_favicon/apple-touch-icon-114x114.png'/>">
<link rel="apple-touch-icon" sizes="120x120"
	href="<c:url value='/resources/_img/_favicon/apple-touch-icon-120x120.png'/>">
<link rel="apple-touch-icon" sizes="144x144"
	href="<c:url value='/resources/_img/_favicon/apple-touch-icon-144x144.png'/>">
<link rel="apple-touch-icon" sizes="152x152"
	href="<c:url value='/resources/_img/_favicon/apple-touch-icon-152x152.png'/>">
<link rel="apple-touch-icon" sizes="180x180"
	href="<c:url value='/resources/_img/_favicon/apple-touch-icon-180x180.png'/>">
<link rel="icon" type="image/png"
	href="<c:url value='/resources/_img/_favicon/favicon-32x32.png'/>"
	sizes="32x32">
<link rel="icon" type="image/png"
	href="<c:url value='/resources/_img/_favicon/android-chrome-192x192.png'/>"
	sizes="192x192">
<link rel="icon" type="image/png"
	href="<c:url value='/resources/_img/_favicon/favicon-96x96.png'/>"
	sizes="96x96">
<link rel="icon" type="image/png"
	href="<c:url value='/resources/_img/_favicon/favicon-16x16.png'/>"
	sizes="16x16">
<link rel="manifest"
	href="<c:url value='/resources/_img/_favicon/manifest.json'/>">
<link rel="shortcut icon"
	href="<c:url value='/resources/_img/_favicon/favicon.ico'/>">





<meta name="msapplication-TileColor" content="#2754eb">
<meta name="msapplication-TileImage"
	content="<c:url value='/resources/_img/_favicon/mstile-144x144.png'/>">
<meta name="msapplication-config"
	content="<c:url value='/resources/_img/_favicon/browserconfig.xml'/>">

<!-- =================================================== -->

<link rel="stylesheet"
	href="<c:url value='/resources/_css/style-cst.css'/>">
<link rel="stylesheet"
	href="<c:url value='/resources/_css/style-fixed-layout.css'/>">

<link rel="stylesheet"
	href="<c:url value='/resources/_css/brackets.css'/>">

<script src="<c:url value='/resources/_js/modernizr.custom.js'/>"></script>
<script src="<c:url value='/resources/_js/fontawesome-all.js'/>"></script>



<!-- $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ -->
<link href="https://www.jqueryscript.net/css/jquerysctipttop.css"
	rel="stylesheet" type="text/css">
<!-- basic styles -->
<style type="text/css">
body {
	background-color: #fafafa;
}

canvas {
	
}

.g_gracket {
	width: 1300px;
	background-color: #fafafa;
	padding: 55px 15px 5px;
	line-height: 100%;
	position: relative;
	overflow: hidden;
}

.g_round {
	float: left;
	margin-right: 70px;
}

.g_game {
	position: relative;
	margin-bottom: 15px;
}

.g_gracket h3 {
	margin: 0;
	padding: 10px 8px 8px;
	font-size: 18px;
	font-weight: normal;
	color: #fff
}

.g_team {
	background: #3597AE;
}

.g_team:last-child {
	background: #FCB821;
}

.g_round:last-child {
	margin-right: 20px;
}

.g_winner {
	background: #444;
}

.g_winner .g_team {
	background: none;
}

.g_current {
	cursor: pointer;
	background: #A0B43C !important;
}

.g_round_label {
	top: -5px;
	font-weight: normal;
	color: #CCC;
	text-align: center;
	font-size: 18px;
}
</style>

<!-- dependencies -->
<script src="https://code.jquery.com/jquery-3.3.1.min.js"
	integrity="sha384-tsQFqpEReu7ZLhBV2VZlAu7zcOV+rXbYlF2cqB8txI/8aZajjp4Bqd+V6D5IgvKT"
	crossorigin="anonymous"></script>

<!-- main lib -->
<script type="text/javascript"
	src="<c:url value='/resources/_js/jquery.gracket.js'/>"></script>
<script type="text/javascript"
	src="<c:url value='/resources/_js/jquery.gracket.min.js'/>"></script>

<!-- $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ -->
<script>
	FontAwesomeConfig = {
		searchPseudoElements : true
	};
</script>

<link rel="icon"
	href="<c:url value='/resources/_img/_logo/av_logo.png'/>" />
<link rel="stylesheet"
	href="<c:url value='/resources/_css/comment.css'/>">

<!-- GOOGLE ADSENSE-->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-3787215141602475",
          enable_page_level_ads: true
     });
</script>
<!-- GOOGLE ADSENSE-->
</head>

<body>
	<c:if test="${not empty cultura.locale}">
		<fmt:setLocale value="${cultura.locale}" scope="session" />

	</c:if>
	<main>