/*
 ************** Drop Down on Profile***************
*/

(function (d, b, e) {
    var c = d("html, body");
    d.avoidGroupProfile = function (f, g) {
        this.$el = d(g);
        this._init(f)
    };
    d.avoidGroupProfile.defaults = {};
    d.avoidGroupProfile.prototype = {
        _init: function (f) {
            this.options = d.extend(true, {}, d.avoidGroupProfile.defaults, f);
            this._config();
            this._initEvents()
        },
        _config: function () {
            this.$items = this.$el.find(".select")
        },
        _initEvents: function () {
            this.$items.on("click.avoidGroupProfile", function () {
                var f = d(this).parent();
                if (f.hasClass("open")) {
                    f.removeClass("open")
                } else {
                    f.addClass("open");
                    c.scrollTop(f.offset().top)
                }
            })
        },
        destroy: function () {
            this.$items.off(".avoidGroupProfile").parent().removeClass("open")
        }
    };
    var a = function (f) {
        if (b.console) {
            b.console.error(f)
        }
    };
    d.fn.avoidGroupProfile = function (g) {
        if (typeof g === "string") {
            var f = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var h = d.data(this, "avoidGroupProfile");
                if (!h) {
                    a("cannot call methods on avoidGroupProfile prior to initialization; attempted to call method '" + g + "'");
                    return
                }
                if (!d.isFunction(h[g]) || g.charAt(0) === "_") {
                    a("no such method '" + g + "' for avoidGroupProfile instance");
                    return
                }
                h[g].apply(h, f)
            })
        } else {
            this.each(function () {
                var h = d.data(this, "avoidGroupProfile");
                if (h) {
                    h._init()
                } else {
                    h = d.data(this, "avoidGroupProfile", new d.avoidGroupProfile(g, this))
                }
            })
        }
        return this
    }
})(jQuery, window);

/*
 ************** Login - Signup - Forgot***************
*/

jQuery(document).ready(function($){
	var formModal = $('.cd-user-modal'),
		formLogin = formModal.find('#cd-login'),
		formSignup = formModal.find('#cd-signup'),
		formForgotPassword = formModal.find('#cd-reset-password'),
		formModalTab = $('.cd-switcher'),
		tabLogin = formModalTab.children('li').eq(0).children('a'),
		tabSignup = formModalTab.children('li').eq(1).children('a'),
		forgotPasswordLink = formLogin.find('.cd-form-bottom-message a'),
		backToLoginLink = formForgotPassword.find('.cd-form-bottom-message a'),
		mainNav = $('.main-nav')
		;

	//switch
	formModalTab.on('click', function(event) {
		event.preventDefault();
		( $(event.target).is( tabLogin ) ) ? login_selected() : signup_selected();
	});

	$('.hide-password').on('click', function(){
		var togglePass= $(this),
			passwordField = togglePass.prev('input');

		( 'password' == passwordField.attr('type') ) ? passwordField.attr('type', 'text') : passwordField.attr('type', 'password');
		( 'Show' == togglePass.text() ) ? togglePass.text('Hide') : togglePass.text('Show');
		passwordField.putCursorAtEnd();
	});

	forgotPasswordLink.on('click', function(event){
		event.preventDefault();
		forgot_password_selected();
	});

	backToLoginLink.on('click', function(event){
		event.preventDefault();
		login_selected();
	});

	function login_selected(){
		mainNav.children('ul').removeClass('is-visible');
		formModal.addClass('is-visible');
		formLogin.addClass('is-selected');
		formSignup.removeClass('is-selected');
		formForgotPassword.removeClass('is-selected');
		tabLogin.addClass('selected');
		tabSignup.removeClass('selected');
	}

	function signup_selected(){
		mainNav.children('ul').removeClass('is-visible');
		formModal.addClass('is-visible');
		formLogin.removeClass('is-selected');
		formSignup.addClass('is-selected');
		formForgotPassword.removeClass('is-selected');
		tabLogin.removeClass('selected');
		tabSignup.addClass('selected');
	}

	function forgot_password_selected(){
		formLogin.removeClass('is-selected');
		formSignup.removeClass('is-selected');
		formForgotPassword.addClass('is-selected');
	}

	//error messages
	formLogin.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		formLogin.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	});
	formSignup.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		formSignup.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	});

	// IE9 Hack
	//credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
		  	}
		}).blur(function() {
		 	var input = $(this);
		  	if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.val(input.attr('placeholder'));
		  	}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  	$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
			 		input.val('');
				}
		  	})
		});
	}

});

;( function( window ) {

	'use strict';

	function extend( a, b ) {
		for( var key in b ) {
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function FWTabs( el, options ) {
		this.el = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	FWTabs.prototype.options = {
		start : 0
	};

	FWTabs.prototype._init = function() {

		this.tabs = [].slice.call( this.el.querySelectorAll( 'nav > ul > li' ) );
		this.items = [].slice.call( this.el.querySelectorAll( '.content-wrap > section' ) );
		this.current = -1;
		this._show();
		this._initEvents();
	};

	FWTabs.prototype._initEvents = function() {
		var self = this;
		this.tabs.forEach( function( tab, idx ) {
			tab.addEventListener( 'click', function( ev ) {
				ev.preventDefault();
				self._show( idx );
			} );
		} );
	};

	FWTabs.prototype._show = function( idx ) {
		if( this.current >= 0 ) {
			this.tabs[ this.current ].className = this.items[ this.current ].className = '';
		}
		this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
		this.tabs[ this.current ].className = 'tab-current';
		this.items[ this.current ].className = 'content-current';
	};
	window.FWTabs = FWTabs;

})( window );

/*
 ************** Upload IMG previews***************
*/

$(function(){
	var container = $('.browser-pic'), inputFile = $('#file'), img, btn, txt = 'Browse a picture', txtAfter = 'Browse another picture';
			
	if(!container.find('#upload').length){
		container.find('.input').append('<input type="button" value="'+txt+'" id="upload">');
		btn = $('#upload');
		container.prepend('<img src="" class="hidden px-2" alt="Uploaded file" id="uploadImg" width="250">');
		img = $('#uploadImg');
	}
			
	btn.on('click', function(){
		img.animate({opacity: 0}, 300);
		inputFile.click();
	});

	inputFile.on('change', function(e){
		container.find('label').html( inputFile.val() );
		
		var i = 0;
		for(i; i < e.originalEvent.srcElement.files.length; i++) {
			var file = e.originalEvent.srcElement.files[i], 
				reader = new FileReader();

			reader.onloadend = function(){
				img.attr('src', reader.result).animate({opacity: 1}, 700);
			}
			reader.readAsDataURL(file);
			img.removeClass('hidden');
		}
		
		btn.val( txtAfter );
	});
});


