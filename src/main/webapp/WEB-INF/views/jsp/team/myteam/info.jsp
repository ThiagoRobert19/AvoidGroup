<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="product-feed-tab" id="info-dd">
	<div class="user-profile-ov">
		<h3>
			<a href="#" title="" class="overview-open">About</a> <a href="#"
				title="" class="overview-open"><i class="fa fa-pencil"></i></a>
		</h3>
		<p>${teamEntity.about}</p>
	</div>

	
</div>




<div class="overview-box" id="overview-box">
	<div class="overview-edit">
		<h3>About</h3>
		
		<form>
			<textarea></textarea>
			<button type="submit" class="save">Save</button>
			<button type="submit" class="cancel">Cancel</button>
		</form>
		<a href="#" title="" class="close-box"><i class="la la-close"></i></a>
	</div>
	<!--overview-edit end-->
</div>
<!--overview-box end-->
<div class="overview-box" id="skills-box">
			<div class="overview-edit">
				<h3>Skills</h3>
				<ul>
					<li><a href="#" title="" class="skl-name">HTML</a><a href="#" title="" class="close-skl"><i class="la la-close"></i></a></li>
					<li><a href="#" title="" class="skl-name">php</a><a href="#" title="" class="close-skl"><i class="la la-close"></i></a></li>
					<li><a href="#" title="" class="skl-name">css</a><a href="#" title="" class="close-skl"><i class="la la-close"></i></a></li>
				</ul>
				<form>
					<input type="text" name="skills" placeholder="Skills">
					<button type="submit" class="save">Save</button>
					<button type="submit" class="save-add">Save & Add More</button>
					<button type="submit" class="cancel">Cancel</button>
				</form>
				<a href="#" title="" class="close-box"><i class="la la-close"></i></a>
			</div><!--overview-edit end-->
		</div><!--overview-box end-->