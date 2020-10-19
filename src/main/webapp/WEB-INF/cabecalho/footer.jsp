<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
</div><!--theme-layout end-->

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


<script type="text/javascript" src="<c:url value='/resources/js/jquery.min.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/popper.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/bootstrap.min.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/jquery.mCustomScrollbar.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/lib/slick/slick.min.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/scrollbar.js'/>"></script>
<script type="text/javascript" src="<c:url value='/resources/js/script.js'/>"></script>

</body>
</html>