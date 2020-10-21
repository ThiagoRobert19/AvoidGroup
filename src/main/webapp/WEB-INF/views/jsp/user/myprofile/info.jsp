<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="product-feed-tab" id="info-dd">
	<div class="user-profile-ov">
		<h3>
			<a href="#" title="" class="overview-open">Overview</a> <a href="#"
				title="" class="overview-open"><i class="fa fa-pencil"></i></a>
		</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Quisque tempor aliquam felis, nec condimentum ipsum commodo id.
			Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus
			consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu
			efficitur faucibus. Aliquam accumsan ac magna convallis bibendum.
			Quisque laoreet augue eget augue fermentum scelerisque. Vivamus
			dignissim mollis est dictum blandit. Nam porta auctor neque sed
			congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit amet,
			consectetur adipiscing elit. Donec eget vestibulum lorem.</p>
	</div>

	<div class="user-profile-ov">
		<h3>
			<a href="#" title="" class="skills-open">Tags</a> <a href="#"
				title="" class="skills-open"><i class="fa fa-pencil"></i></a> <a
				href="#"><i class="fa fa-plus-square"></i></a>
		</h3>
		<ul>
			<li><a href="#" title="">HTML</a></li>
			<li><a href="#" title="">PHP</a></li>
			<li><a href="#" title="">CSS</a></li>
			<li><a href="#" title="">Javascript</a></li>
			<li><a href="#" title="">Wordpress</a></li>
			<li><a href="#" title="">Photoshop</a></li>
			<li><a href="#" title="">Illustrator</a></li>
			<li><a href="#" title="">Corel Draw</a></li>
		</ul>
	</div>
	<!--user-profile-ov end-->
</div>




<div class="overview-box" id="overview-box">
	<div class="overview-edit">
		<h3>Overview</h3>
		<span>5000 character left</span>
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