$(document).ready(function(){
  var modals = $('article.project').find('.proj-modal');
  modals.detach();
  modals.insertAfter('body');
  modals.hide();

  var launchModal = $('a.modalBtn');
  var closeModal = modals.find('.modal-header a.modalClose');

  launchModal.click(function(e){
    e.preventDefault();
    var modalId = '#' + $(this).data('modal');
    var modal = $(modalId);

    //var topOfScreen = $(window).scrollTop();

    $('body').addClass('noScroll');
    //$('body').offset({top:-1000, left: 0});

    $('body').bind('touchstart touchmove', function(event) {
      event.preventDefault();
      return;
    });

    $('main').velocity('stop')
      .velocity({
        blur: 5
      },{duration: 250});

    modal.velocity('stop')
      .velocity("fadeIn", {display: 'flex'},{ duration: 350 });

    //modal.addClass('addFlex');
  });

  closeModal.bind('click', function(e){
    e.preventDefault();
    var modal = $(this).parent().parent('.proj-modal');

    $('body').removeClass('noScroll');
    $('body').unbind('touchstart touchmove');

    $('main').velocity('stop')
      .velocity({
        blur: 0
      },{duration: 250});

    modal.velocity('stop')
      .velocity({opacity: 0}, {display: 'none'},{ duration: 350 });

    //modal.delay(900).removeClass('addFlex');
  });

    var navTog = $('a.navToggle');
    var nav = $('ul.nav');
    var navLinks = nav.find('li a');

    navWidth = nav.outerWidth();

    nav.css('left', -navWidth)

    var tension = 350;
    var friction = 25;

    navVisible = null;
    navTog.bind('click', function(e){
      e.preventDefault;

        if(navVisible){

        } else {

        }
      if(navVisible){
        navVisible = !navVisible;
        console.log('closed');
        nav.velocity('stop')
          .velocity({
            left: -navWidth,
            opacity: 0
          }, 700, [tension, friction]);
      } else {
        navVisible = !navVisible;
        console.log('opened');
        nav.velocity('stop')
          .velocity({
            left: 0,
            opacity: 1
          }, 700, [tension, friction]);
      }
    });

    navLinks.bind('click', function(){
      navVisible = !navVisible;
      nav.velocity('stop')
        .velocity({
          left: -navWidth,
          opacity: 0
        }, 700, [tension, friction]);
    });
})
