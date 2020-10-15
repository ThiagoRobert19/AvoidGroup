;( function( $, window, undefined ) {

	'use strict';

	// global
	var Modernizr = window.Modernizr;

	$.Slider = function( options, element ) {
		this.$el = $( element );
		this._init( options );
	};

	$.Slider.defaults = {
		speed : 500,
		easing : 'ease'
	};

		setInterval(function() {
		if(jQuery('.next').css('display') != 'none'){
		jQuery('.next').click();
		}
		else jQuery('.dots span:first-child').click();
		}, 20000);


	$.Slider.prototype = {
		_init : function( options ) {

			this.options = $.extend( true, {}, $.Slider.defaults, options );
			this._config();
			this._initEvents();
		},
		_config : function() {


			this.$list = this.$el.children( 'ul' );
			this.$items = this.$list.children( 'li' );
			this.itemsCount = this.$items.length;
			this.support = Modernizr.csstransitions && Modernizr.csstransforms;
			this.support3d = Modernizr.csstransforms3d;

			var transProperties = {
				'WebkitTransition' : { transitionEndEvent : 'webkitTransitionEnd', tranformName : '-webkit-transform' },
				'MozTransition' : { transitionEndEvent : 'transitionend', tranformName : '-moz-transform' },
				'OTransition' : { transitionEndEvent : 'oTransitionEnd', tranformName : '-o-transform' },
				'msTransition' : { transitionEndEvent : 'MSTransitionEnd', tranformName : '-ms-transform' },
				'transition' : { transitionEndEvent : 'transitionend', tranformName : 'transform' }
			};
			if( this.support ) {
				this.transEndEventName = transProperties[ Modernizr.prefixed( 'transition' ) ].transitionEndEvent + '.Slider';
				this.transformName = transProperties[ Modernizr.prefixed( 'transition' ) ].tranformName;
			}

			this.current = 0;
			this.old = 0;
			this.isAnimating = false;
			this.$list.css( 'width', 100 * this.itemsCount + '%' );

			if( this.support ) {
				this.$list.css( 'transition', this.transformName + ' ' + this.options.speed + 'ms ' + this.options.easing );
			}

			this.$items.css( 'width', 100 / this.itemsCount + '%' );

			if( this.itemsCount > 1 ) {

				this.$navPrev = $( '<span class="prev"><</span>' ).hide();
				this.$navNext = $( '<span class="next">></span>' );
				$( '<nav/>' ).append( this.$navPrev, this.$navNext ).appendTo( this.$el );

				var dots = '';
				for( var i = 0; i < this.itemsCount; ++i ) {
					var dot = i === this.current ? '<span class="current"></span>' : '<span></span>';
					dots += dot;
				}
				var navDots = $( '<div class="dots"/>' ).append( dots ).appendTo( this.$el );
				this.$navDots = navDots.children( 'span' );

			}

		},
		_initEvents : function() {

			var self = this;
			if( this.itemsCount > 1 ) {
				this.$navPrev.on( 'click.Slider', $.proxy( this._navigate, this, 'previous' ) );
				this.$navNext.on( 'click.Slider', $.proxy( this._navigate, this, 'next' ) );
				this.$navDots.on( 'click.Slider', function() { self._jump( $( this ).index() ); } );
			}

		},
		_navigate : function( direction ) {

			if( this.isAnimating ) {
				return false;
			}

			this.isAnimating = true;
			this.old = this.current;
			if( direction === 'next' && this.current < this.itemsCount - 1 ) {
				++this.current;
			}
			else if( direction === 'previous' && this.current > 0 ) {
				--this.current;
			}
			this._slide();

		},
		_slide : function() {

			this._toggleNavControls();
			var translateVal = -1 * this.current * 100 / this.itemsCount;
			if( this.support ) {
				this.$list.css( 'transform', this.support3d ? 'translate3d(' + translateVal + '%,0,0)' : 'translate(' + translateVal + '%)' );
			}
			else {
				this.$list.css( 'margin-left', -1 * this.current * 100 + '%' );
			}

			var transitionendfn = $.proxy( function() {
				this.isAnimating = false;
			}, this );

			if( this.support ) {
				this.$list.on( this.transEndEventName, $.proxy( transitionendfn, this ) );
			}
			else {
				transitionendfn.call();
			}

		},
		_toggleNavControls : function() {

			switch( this.current ) {
				case 0 : this.$navNext.show(); this.$navPrev.hide(); break;
				case this.itemsCount - 1 : this.$navNext.hide(); this.$navPrev.show(); break;
				default : this.$navNext.show(); this.$navPrev.show(); break;
			}
			this.$navDots.eq( this.old ).removeClass( 'current' ).end().eq( this.current ).addClass( 'current' );

		},
		_jump : function( position ) {

			if( position === this.current || this.isAnimating ) {
				return false;
			}
			this.isAnimating = true;
			this.old = this.current;
			this.current = position;
			this._slide();

		},
		destroy : function() {

			if( this.itemsCount > 1 ) {
				this.$navPrev.parent().remove();
				this.$navDots.parent().remove();
			}
			this.$list.css( 'width', 'auto' );
			if( this.support ) {
				this.$list.css( 'transition', 'none' );
			}
			this.$items.css( 'width', 'auto' );

		}
	};

	var logError = function( message ) {
		if ( window.console ) {
			window.console.error( message );
		}
	};

	$.fn.Slider = function( options ) {
		if ( typeof options === 'string' ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			this.each(function() {
				var instance = $.data( this, 'Slider' );
				if ( !instance ) {
					logError( "cannot call methods on Slider prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for Slider instance" );
					return;
				}
				instance[ options ].apply( instance, args );
			});
		}
		else {
			this.each(function() {
				var instance = $.data( this, 'Slider' );
				if ( instance ) {
					instance._init();
				}
				else {
					instance = $.data( this, 'Slider', new $.Slider( options, this ) );
				}
			});
		}
		return this;
	};

} )( jQuery, window );
