<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<div class="col-lg-6 col-md-8 no-pd">
	<div class="main-ws-sec">
		<div class="post-topbar">

			<form action="<c:url value='/publication/add'/>" method="POST"
				enctype="multipart/form-data">
				<div class="form-group">
					<div class="row">
						<textarea class="form-control" rows="7"
							placeholder="What are you thinking?" name="content"></textarea>
					</div>

					<div class="row">
						<input class="form-control" type="file" id="customFile"
							name="file">
						<div id="filedrag"></div>
						<img id="image" />

					</div>

					<div class="row post-st">
						<ul>

							<li><button type="submit" class="btn btn-primary ">Post</button></li>
						</ul>
					</div>
				</div>
			</form>

		</div>
		<c:import url="/WEB-INF/views/jsp/index/postagem.jsp" />
		<!--posts-section end-->
	</div>
	<!--main-ws-sec end-->
</div>




