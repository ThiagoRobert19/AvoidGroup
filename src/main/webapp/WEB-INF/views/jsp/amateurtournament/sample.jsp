<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<script type="text/javascript"
	src="<c:url value='/resources/_js/test.js'/>"></script>
<section class="interface">
	<div class="container gedf-wrapper">
		<div class="row">
			<div class="col-md-12 col-xl-10">
				<h1 align="center">jQuery Gracket.js: Single Elimation
					Tournament Bracket Generator Example</h1>
				<!-- empty gracket element -->
				<div class="my_gracket"></div>

				<script type="text/javascript">
					(function(win, doc, $) {

						console
								.warn("Make sure the min-width of the .gracket_h3 element is set to width of the largest name/player. Gracket needs to build its canvas based on the width of the largest element. We do this my giving it a min width. I'd like to change that!");

						
						win.TestData = [
			<!--ROUND 1-->
							<!--	PRIMEIRO      -->
							[ [ {
							"name" : "Thiago Robert",
							"id" : "thiagorobert19",
							"seed" : 1,
							"displaySeed" : "01",
							"score" : 20
						}, {
							"name" : "Rafael Girico",
							"id" : "rafaGi",
							"seed" : 2,
							"displaySeed" : "02",
							"score" : 13
						} ]
						,
						<!--	SEGUNDO      -->
						[ {
							"name" : "Bruno Quuel",
							"id" : "brunoQuuel",
							"seed" : 3,
							"displaySeed" : "03",
							"score" : 15
						}, {
							"name" : "Sam Merrill",
							"id" : "sam-merrill",
							"seed" : 4,
							"displaySeed" : "03",
							"score" : 18
						} ]
						, 
						<!--	TERCEIRO      -->
						[ {
							"name" : "David Muniz",
							"id" : "davidM",
							"seed" : 3,
							"displaySeed" : "05",
							"score" : 27
						}, {
							"name" : "B12",
							"id" : "B12",
							"seed" : 6,
							"displaySeed" : "06",
							"score" : 3
						} ]
						, 
						<!--	QUARTO      -->
						[ {
							"name" : "John Scott",
							"id" : "john-scott",
							"seed" : 7
						}, {
							"name" : "Teddy Koufus",
							"id" : "teddy-koufus",
							"seed" : 8
						} ]
						, 
						<!--	QUINTO      -->
						[ {
							"name" : "Arnold Palmer",
							"id" : "arnold-palmer",
							"seed" : 9
						}, {
							"name" : "Ryan Anderson",
							"id" : "ryan-anderson",
							"seed" : 10
						} ]
						,
						<!--	SEXTO      -->
						[ {
							"name" : "Jesse James",
							"id" : "jesse-james",
							"seed" : 11
						}, {
							"name" : "Scott Anderson",
							"id" : "scott-anderson",
							"seed" : 12
						} ]
						,
						<!--	SETIMO      -->
						[ {
							"name" : "Josh Groben",
							"id" : "josh-groben",
							"seed" : 13
						}, {
							"name" : "Sammy Zettersten",
							"id" : "sammy-zettersten",
							"seed" : 14
						} ]
						,
						<!--	OITAVO      -->
						[ {
							"name" : "Jake Coutry",
							"id" : "jake-coutry",
							"seed" : 15
						}, {
							"name" : "Spencer Zettersten",
							"id" : "spencer-zettersten",
							"seed" : 16
						} ] 
						]
			<!--	ROUND 2      -->
						
						, [ [ {
							"name" : "Thiago Robert",
							"id" : "thiagorobert19",
							"seed" : 1,
							"displaySeed" : "01",
							"score" : 18
						}, {
							"name" : "Bruno Quuel",
							"id" : "brunoQuuel",
							"seed" : 3,
							"displaySeed" : "03",
							"score" : 15
						} ], [ {
							"name" : "Anothy Hopkins",
							"id" : "anthony-hopkins",
							"seed" : 5
						}, {
							"name" : "Teddy Koufus",
							"id" : "teddy-koufus",
							"seed" : 8
						} ], [ {
							"name" : "Ryan Anderson",
							"id" : "ryan-anderson",
							"seed" : 10
						}, {
							"name" : "Scott Anderson",
							"id" : "scott-anderson",
							"seed" : 12
						} ], [ {
							"name" : "Sammy Zettersten",
							"id" : "sammy-zettersten",
							"seed" : 14
						}, {
							"name" : "Jake Coutry",
							"id" : "jake-coutry",
							"seed" : 15
						} ] ]
				<!--	ROUND 3      -->
						
						, [ [ {
							"name" : "Thiago Robert",
							"id" : "thiagorobert19",
							"seed" : 1,
							"displaySeed" : "01",
							"score" : 13
						}, {
							"name" : "Anothy Hopkins",
							"id" : "anthony-hopkins",
							"seed" : 5
						} ], [ {
							"name" : "Ryan Anderson",
							"id" : "ryan-anderson",
							"seed" : 10
						}, {
							"name" : "Sammy Zettersten",
							"id" : "sammy-zettersten",
							"seed" : 14
						} ] ]
						
				<!--	ROUND 4      -->
						, [ [ {
							"name" : "Thiago Robert",
							"id" : "thiagorobert19",
							"seed" : 1,
							"displaySeed" : "01",
							"score" : 21
						}, {
							"name" : "Ryan Anderson",
							"id" : "ryan-anderson",
							"seed" : 10
						} ] ],
						<!--	CAMPEÃO     -->
						[ [ {
							"name" : "Thiago Robert",
							"id" : "thiagorobert19",
							"seed" : 1
						} ] ] ];

						// initializer
						$(".my_gracket").gracket({
							src : win.TestData
						});

					})(window, document, jQuery);
				</script>

			</div>
		</div>
	</div>
</section>
<c:import url="/WEB-INF/cabecalho/footer.jsp" />