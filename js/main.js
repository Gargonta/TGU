$('.curses-right-info.active .info-number').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({ countNum: $this.text()}).animate({
                    countNum: countTo
                },
                {
                    duration: 2000,
                    easing:'linear',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
        });
function setProgress(index) {
  const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

  $progressBar
    .css('background-size', `${calc}% 100%`)
    .attr('aria-valuenow', calc);

  // $progressBarLabel.text(`${calc.toFixed(2)}% completed`);
}

const $slider = $('.teacher-slider');
const $progressBar = $('.progress');
// const $progressBarLabel = $('.slider__label');

$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
  setProgress(nextSlide);
});

$slider.slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 400,
  	prevArrow:'<div class="slick-arrow slick-prev"><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.0721748" cx="32" cy="32" r="32" transform="rotate(-180 32 32)" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25 32L35 24L35 40L25 32Z" fill="white"/></svg></div>',
  	nextArrow:'<div class="slick-arrow slick-next"><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.045662" cx="32" cy="32" r="32" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M39 32L29 40L29 24L39 32Z" fill="white"/></svg></div>',
    responsive: [
    {
      breakpoint: 1205,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    },
        {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
  ]
});  

setProgress(0);

$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;
    
    var dropdownlink = this.el.find('.dropdownlink');
    dropdownlink.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
  };
  
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
    }
  }
  
  var accordion = new Accordion($('.accordion-menu'), false);
})
function setProgresst(index) {
  const calc = ((index + 1) / ($slidert.slick('getSlick').slideCount)) * 100;

  $progressBart
    .css('background-size', `${calc}% 100%`)
    .attr('aria-valuenow', calc);

  // $progressBarLabel.text(`${calc.toFixed(2)}% completed`);
}

const $slidert = $('.teacherb-slider');
const $progressBart = $('.progresst');
// const $progressBarLabel = $('.slider__label');

$slidert.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
  setProgresst(nextSlide);
});

$slidert.slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 400,
  	prevArrow:'<div class="slick-arrow slick-prev"><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.0721748" cx="32" cy="32" r="32" transform="rotate(-180 32 32)" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25 32L35 24L35 40L25 32Z" fill="white"/></svg></div>',
  	nextArrow:'<div class="slick-arrow slick-next"><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.045662" cx="32" cy="32" r="32" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M39 32L29 40L29 24L39 32Z" fill="white"/></svg></div>',
  responsive: [
    {
      breakpoint: 1205,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
  ]
});  

setProgresst(0);


$(document).ready(function(){
$(".header-nav-list a,.footer-nav-list a, .header-sign-up a, .more-details").on('click', function(e){
  var fixed_offset = 90;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

$(window).scroll(function() {
		let sc = $('.header-main').offset().top;
	    let scroll_status = $(document).scrollTop();
	    if(scroll_status > sc) {
	        $('.wrap-header-nav').addClass("fixhed");
	    }
	    else {
	        $(".wrap-header-nav").removeClass("fixhed");
	    }
});
$('.icon-stages-1').paroller({ factor: 0.6, factorXs: 0.2, type: 'foreground' });
$('.quest-ico-rb').paroller({ factor: 0.6, factorXs: 0.2, type: 'foreground' });
$('.icon-stages-2').paroller({ factor: 0.5, factorXs: 0.2, type: 'foreground' });
$('.round-figure').paroller({ factor: 0.5, factorXs: 0.2, type: 'foreground' });
$('.icon-stages-3').paroller({ factor: 0.7, factorXs: 0.2, type: 'foreground' });
$('.quest-ico-lt').paroller({ factor: 0.7, factorXs: 0.2, type: 'foreground' });
$('.icon-stages-4').paroller({ factor: 0.25, factorXs: 0.2, type: 'foreground' });
$('.icon_bg_inivers').paroller({ factor: 0.25, factorXs: 0.2, type: 'foreground' });
$('.funnel').paroller({ factor: 0.2, factorXs: 0.2, type: 'foreground', direction: 'horizontal' });
});
$('.gamburger').on('click', function(){
$('.gamb-menu').addClass('active');
});
$('.gamb-nav-menu-top span').on('click', function(){
$('.gamb-menu').removeClass('active');
});

