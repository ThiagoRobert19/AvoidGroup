<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="col-md-6 col-xl-3">
	<div class="row">
		
		<div class="col-md-6 col-xl-12">
			<h5>Twitch Top Games</h5>
			<c:forEach var="listTopGames" items="${listTopGames}">
				<a href="${listTopGames.game_link}" target="_blank"><img class="myTop" src="${listTopGames.game_img}" width="400"></a>
			</c:forEach>

		</div>
	</div>
	<!--div class="row">
		<div class="col-md-6 col-xl-12">
			<h5>News</h5>
			<img class="mySlides"
				src="<c:url value='/resources/_img/_slider (delete)/1.jpg'/>"
				width="500" height="200"> <img class="mySlides"
				src="<c:url value='/resources/_img/_slider (delete)/2.jpg'/>"
				width="500" height="200"> <img class="mySlides"
				src="<c:url value='/resources/_img/_slider (delete)/3.jpg'/>"
				width="500" height="200"> <img class="mySlides"
				src="<c:url value='/resources/_img/_slider (delete)/4.jpg'/>"
				width="500" height="200"> <img class="mySlides"
				src="<c:url value='/resources/_img/_slider (delete)/5.jpg'/>"
				width="500" height="200">
		</div>
		
	</div-->
	<!-- hr class="invisible">
	<div class="row">
		<div class="col-md-6 col-xl-12">
			<h5>Most Streaming at Twitch</h5>
			<div id="twitch-embed"></div>

			
			<script src="https://embed.twitch.tv/embed/v1.js"></script>

			<script type="text/javascript">
				new Twitch.Embed("twitch-embed", {
					width : 400,
					height : 300,
					channel : "${channel}"
				});
			</script>
		</div>

	</div-->
<hr class="invisible">



<div class="card gedf-card wp wp-5">
	<div class="card-body">
		<h5 class="card-title">Ads</h5>
		<h6 class="card-subtitle mb-2 text-muted">Card Ads</h6>
		<p class="card-text">Some quick example text to build on the card
			title and make up the bulk of the card's content.</p>
		<a href="#" class="card-link">Card link</a> <a href="#"
			class="card-link">Another link</a>
	</div>
</div>


</div>
<script>
	var slideIndex = 0;
	carousel();

	function carousel() {
		var i;
		var x = document.getElementsByClassName("mySlides");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		slideIndex++;
		if (slideIndex > x.length) {
			slideIndex = 1
		}
		x[slideIndex - 1].style.display = "block";
		setTimeout(carousel, 4000);

	}
</script>
<script>
	var slideIndex = 0;
	scra();

	function scra() {

		var t;
		var k = document.getElementsByClassName("myTop");
		for (t = 0; t < k.length; t++) {
			k[t].style.display = "none";
		}
		slideIndex++;
		if (slideIndex > k.length) {
			slideIndex = 1
		}
		k[slideIndex - 1].style.display = "block";
		setTimeout(scra, 4500);
	}
</script>
