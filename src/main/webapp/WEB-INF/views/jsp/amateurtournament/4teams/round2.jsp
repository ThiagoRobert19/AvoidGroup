<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:import url="/WEB-INF/cabecalho/header.jsp" />
<c:import url="/WEB-INF/cabecalho/menu.jsp" />
<script type="text/javascript"
	src="<c:url value='/resources/_js/test.js'/>"></script>
<section class="interface">
	<div class="container gedf-wrapper">
		<div class="row">
			<div class="col-md-12 col-xl-12">
				<h1 align="center">Tournaments Matches</h1>
				<div class="my_gracket"></div>

				<script type="text/javascript">
				var jsonObj = ${json1};
				var jsonObj2 = ${json2};
				
				
					(function(win, doc, $) {
						console.log("Tamanho: "+jsonObj.length);
						var tamanho=jsonObj.length;
						
						win.TestData = [
								[ 
									  [
										{"name" : jsonObj[0].team1.name,"id" : jsonObj[0].team1.id,"seed" : 1,"score" : jsonObj[0].result1}, 
										{"name" : jsonObj[0].team2.name,"id" : jsonObj[0].team2.id,"seed" : 2,"score" : jsonObj[0].result2} 
									  ]
									,
								
									  [ 
										{"name" : jsonObj[1].team1.name,"id" : jsonObj[1].team1.id,"seed" : 3,"score" : jsonObj[1].result1}, 
										{"name" : jsonObj[1].team2.name,"id" : jsonObj[1].team2.id,"seed" : 4,"score" : jsonObj[1].result2} 
									  ]
								
								]
								,
								[
									  [
										  {"name" : jsonObj2[0].team1.name,"id" : jsonObj2[0].team1.id,"seed" : 3,"score" : jsonObj2[0].result1}, 
											{"name" : jsonObj2[0].team2.name,"id" : jsonObj2[0].team2.id,"seed" : 4,"score" : jsonObj2[0].result2} 
									  ]
									
								]
								, 
								
								[ 
									[ 
										{"name" : "TBA","id" : "123","seed" : 1,"displaySeed" : "01","score" : 0}
									] 
								] 
							];
					
						
						
						

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