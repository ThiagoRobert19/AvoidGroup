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
				var jsonObj = ${json};
				
				
					(function(win, doc, $) {
						console.log("Tamanho: "+jsonObj.length);
						var tamanho=jsonObj.length;
						
						
						if(tamanho==2){
							
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
										{"name" : "TBA","id" : "123","seed" : 1,"score" : 0}, 
										{"name" : "TBA","id" : "123","seed" : 2,"score" : 0} 
									  ]
									
								]
								, 
								
								[ 
									[ 
										{"name" : "TBA","id" : "123","seed" : 1,"displaySeed" : "01","score" : 0}
									] 
								] 
							];
						}
						if(tamanho==4){
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
													  
													,
													[
														{"name" : jsonObj[2].team1.name,"id" : jsonObj[2].team1.id,"seed" : 5,"score" : jsonObj[2].result1}, 
														{"name" : jsonObj[2].team2.name,"id" : jsonObj[2].team2.id,"seed" : 6,"score" : jsonObj[2].result2} 
													  ]
													,
												
													  [ 
														{"name" : jsonObj[3].team1.name,"id" : jsonObj[3].team1.id,"seed" : 7,"score" : jsonObj[3].result1}, 
														{"name" : jsonObj[3].team2.name,"id" : jsonObj[3].team2.id,"seed" : 8,"score" : jsonObj[3].result2} 
													  ]
												
												]
												,
												[
													  [
														{"name" : "TBA","id" : "123","seed" : 1,"score" : 0}, 
														{"name" : "TBA","id" : "123","seed" : 2,"score" : 0} 
													  ],
													  [
														{"name" : "TBA","id" : "123","seed" : 3,"score" : 0}, 
														{"name" : "TBA","id" : "123","seed" : 4,"score" : 0} 
													  ]
													
												]
												,
												[
													  [
														{"name" : "TBA","id" : "123","seed" : 1,"score" : 0}, 
														{"name" : "TBA","id" : "123","seed" : 2,"score" : 0} 
													  ]
													 
													
												]
												,
												
												[ 
													[ 
														{"name" : "TBA","id" : "123","seed" : 1,"displaySeed" : "01","score" : 0}
													] 
												] 
									];
						}
						if(tamanho==8){
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
													  
													,
													[
														{"name" : jsonObj[2].team1.name,"id" : jsonObj[2].team1.id,"seed" : 5,"score" : jsonObj[2].result1}, 
														{"name" : jsonObj[2].team2.name,"id" : jsonObj[2].team2.id,"seed" : 6,"score" : jsonObj[2].result2} 
													  ]
													,
												
													  [ 
														{"name" : jsonObj[3].team1.name,"id" : jsonObj[3].team1.id,"seed" : 7,"score" : jsonObj[3].result1}, 
														{"name" : jsonObj[3].team2.name,"id" : jsonObj[3].team2.id,"seed" : 8,"score" : jsonObj[3].result2} 
													  ]
													,
													 [
															{"name" : jsonObj[4].team1.name,"id" : jsonObj[4].team1.id,"seed" : 9,"score" : jsonObj[4].result1}, 
															{"name" : jsonObj[4].team2.name,"id" : jsonObj[4].team2.id,"seed" : 10,"score" : jsonObj[4].result2} 
													 ]
													,
													
												     [ 
															{"name" : jsonObj[5].team1.name,"id" : jsonObj[5].team1.id,"seed" : 11,"score" : jsonObj[5].result1}, 
															{"name" : jsonObj[5].team2.name,"id" : jsonObj[5].team2.id,"seed" : 12,"score" : jsonObj[5].result2} 
													]
														  
													,
													[
															{"name" : jsonObj[6].team1.name,"id" : jsonObj[6].team1.id,"seed" : 13,"score" : jsonObj[6].result1}, 
															{"name" : jsonObj[6].team2.name,"id" : jsonObj[6].team2.id,"seed" : 14,"score" : jsonObj[6].result2} 
												    ]
													,
													
												    [ 
															{"name" : jsonObj[7].team1.name,"id" : jsonObj[7].team1.id,"seed" : 15,"score" : jsonObj[7].result1}, 
															{"name" : jsonObj[7].team2.name,"id" : jsonObj[7].team2.id,"seed" : 16,"score" : jsonObj[7].result2} 
												    ]
												
												]
												,
												[
													  [
														{"name" : "TBA","id" : "123","seed" : 1,"score" : 0}, 
														{"name" : "TBA","id" : "123","seed" : 2,"score" : 0} 
													  ],
													  [
														{"name" : "TBA","id" : "123","seed" : 3,"score" : 0}, 
														{"name" : "TBA","id" : "123","seed" : 4,"score" : 0} 
													  ]
													  ,
													  [
															{"name" : "TBA","id" : "123","seed" : 5,"score" : 0}, 
															{"name" : "TBA","id" : "123","seed" : 6,"score" : 0} 
													  ],
													  [
															{"name" : "TBA","id" : "123","seed" : 7,"score" : 0}, 
															{"name" : "TBA","id" : "123","seed" : 8,"score" : 0} 
													  ]
													
												]
												,
												[
													  [
														{"name" : "TBA","id" : "123","seed" : 1,"score" : 0}, 
														{"name" : "TBA","id" : "123","seed" : 2,"score" : 0} 
													  ]
													  ,
													  [
															{"name" : "TBA","id" : "123","seed" : 3,"score" : 0}, 
															{"name" : "TBA","id" : "123","seed" : 4,"score" : 0} 
													  ]
													 
													
												]
												,
												[
													  [
														{"name" : "TBA","id" : "123","seed" : 1,"displaySeed" : "01","score" : 0}, 
														{"name" : "TBA","id" : "123","seed" : 2,"displaySeed" : "02","score" : 0} 
													  ]
													  
													
												]
												,
												
												[ 
													[ 
														{"name" : "TBA","id" : "123","seed" : 1,"displaySeed" : "01","score" : 0}
													] 
												] 
									];
						}
						

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