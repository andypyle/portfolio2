$(document).ready(function(){
  var modals = $('article.project').find('.proj-modal');
  modals.detach();
  modals.insertAfter('main');
  modals.hide();

  var launchModal = $('article.project').find('a.modalBtn');
  var closeModal = modals.find('.modal-header a.modalClose');

  launchModal.bind('click', function(e){
    e.preventDefault();
    var modalId = '#' + $(this).data('modal');
    var modal = $(modalId);

    $('body').addClass('noScroll');

    $('main').bind('touchstart', function(event) {
      event.preventDefault();
      return;
    });

    $('main').velocity('stop')
      .velocity({
        blur: 5
      },{duration: 250});

    modal.velocity('stop')
      .velocity("fadeIn", { duration: 350 })
  });

  closeModal.bind('click', function(e){
    e.preventDefault();
    var modal = $(this).parent().parent('.proj-modal');

    $('body').removeClass('noScroll');
    $('main').unbind('touchstart');

    $('main').velocity('stop')
      .velocity({
        blur: 0
      },{duration: 250});

    modal.velocity('stop')
      .velocity("fadeOut", { duration: 350 });
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
