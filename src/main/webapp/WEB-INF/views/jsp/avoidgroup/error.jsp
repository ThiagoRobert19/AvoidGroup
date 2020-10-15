<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Avoid</title>

<!--    <link rel="stylesheet" href="_assets/_css/reset.css">-->
<link rel="stylesheet" href="<c:url value='/resources/css/style.css'/>">

<script defer src="<c:url value='/resources/js/fontawesome-all.js'/>"></script>

<style>
.container {
	width: 940px;
	margin: 50px auto;
	text-align: center;
}

.container a {
	font-family: 'Roboto', sans-serif;
	font-size: 1.2em;
	color: #ff0000;
	text-decoration: none;
}

.container h1 {
	font-family: 'Roboto', sans-serif;
	font-size: 3.2em;
	color: #000;
	margin-bottom: 1.0em;
}

.box {
	padding-bottom: 50px;
	position: relative;
	display: block;
	width: 100%;
}

.box::after {
	content: "";
	background: url(resources/img/_featured/404.png) no-repeat 0 0;
	opacity: 0.6;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	position: absolute;
}

.cover_pan {
	background: #fff url(resources/img/_featured/covers.jpg) repeat;
	height: 343px;
	margin-left: 1px;
	overflow: hidden;
	width: 100%;
	z-index: -1;
	-moz-animation-name: pan;
	-moz-animation-duration: 40s;
	-moz-animation-iteration-count: infinite;
	-moz-animation-timing-function: linear;
	-webkit-animation-name: pan;
	-webkit-animation-duration: 40s;
	-webkit-animation-iteration-count: infinite;
	-webkit-animation-timing-function: linear;
}

@
-moz-keyframes pan { 0% {
	background-position: 1338px bottom;
}

100%
{
background-position
:
 
left
 
bottom
;

    
}
}
@
-webkit-keyframes pan { 0% {
	background-position: 1338px bottom;
}
100%
{
background-position
:
 
left
 
bottom
;

    
}
}
</style>
</head>

<body>
	<div class="container">
		<div class="box">
			<div class="cover_pan"></div>
		</div>

		<h1>Ops , Pagina em Contrução</h1>
		<input type="checkbox"> <a href="<c:url value='/'/>">Retornar a
			pagina inicial</a>
	</div>
	<c:import url="/WEB-INF/cabecalho/footer.jsp" />