<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="col-md-6 col-xl-3">
	<c:if test="${twitch =='yes'}">
	<hr class="invisible">
		<div id="twitch-embed"></div>

		<!-- Load the Twitch embed script -->
		<script src="https://embed.twitch.tv/embed/v1.js"></script>

		<script type="text/javascript">
		
			new Twitch.Embed("twitch-embed", {
				width : 300,
				height : 300,
				channel : "${profileTwitch.channelName}"
			});
		</script>
	</c:if>
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
	<hr class="invisible">
	<div class="card gedf-card wp wp-3">
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