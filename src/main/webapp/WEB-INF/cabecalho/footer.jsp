<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<section class="interface">
	<div class="container">
		<div class="row">
			<div class="col col-2">
				<section class="profile-section">
					<section class="profile-block">
						<section class="profile clearfix">
							<article class="profile-fix">
								<c:if test="${not empty erro}">
									<h1>${erro}</h1>

								</c:if>
							</article>
						</section>
					</section>
				</section>
			</div>
		</div>
	</div>
</section>
<footer class="footer-main">
	<header class="header-footer">

		<div class="row">
			<div class="col">
				<section class="social">
					<div class="fa-2x fa-icon-social-footer">
						<span class="fa-layers fa-fw"> <a href=""
							title="<fmt:message key="footer.facebook" />" target="_blank">
								<i class="fab fa-facebook-f"></i>
						</a>
						</span> <span class="fa-layers fa-fw"> <a href=""
							title="<fmt:message key="footer.twitter" />" target="_blank">
								<i class="fab fa-twitter"></i>
						</a>
						</span> <span class="fa-layers fa-fw"> <a href=""
							title="<fmt:message key="footer.twitch" />" target="_blank">
								<i class="fab fa-twitch"></i>
						</a>
						</span> <span class="fa-layers fa-fw"> <a href=""
							title="<fmt:message key="footer.youtube" />" target="_blank">
								<i class="fab fa-youtube"></i>
						</a>
						</span>
					</div>
				</section>
			</div>
		</div>

	</header>
	<footer class="footer-bottom">
		<div class="terms">
			<p>
				&copy 2019, Avoid Group -
				<fmt:message key="footer.direitos" />
			</p>
			<a href="<c:url value='/avoidgroup/terms'/>"><fmt:message
					key="footer.termos" /></a> | <a
				href="<c:url value='/avoidgroup/privacy'/>"><fmt:message
					key="footer.privacidade" /> |</a> <a
				href="<c:url value='/avoidgroup/about'/>"><fmt:message
					key="footer.sobre" /></a> | <a href="#4"><fmt:message
					key="footer.contate" /></a>
		</div>
	</footer>
</footer>
<!--Fim do Rodapé-->

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="<c:url value='/resources/_js/script-lib-cst.js'/>"></script>
<script src="<c:url value='/resources/_js/script.js'/>"></script>



<script>
	(function() {

		[].slice.call(document.querySelectorAll('.tabs')).forEach(function(el) {
			new FWTabs(el);
		});

	})();
</script>
<script>
	document.getElementById("customFile").onchange = function() {
		var reader = new FileReader();

		reader.onload = function(e) {
			// get loaded data and render thumbnail.
			document.getElementById("image").src = e.target.result;
		};

		// read the image file as a data URL.
		reader.readAsDataURL(this.files[0]);
	};
</script>


</main>
</body>

</html>
