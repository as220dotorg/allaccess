$( document ).ready(function() {

    // Open side navbar for handsets
    $('.navbar-burger').on('click tap', function(e) {
      $(this).toggleClass('is-active');
      $(this).parent().parent().find('#navbar-menu').toggleClass('is-active');
    });

    $('.navbar-dropdown-toggle').on('click tap', function(e) {
      $(this).parent().toggleClass('is-open');
    });

    // Current link
    var path = window.location.pathname.split("/").pop();
    var subnav = $('.menu-list a[href="'+path+'"]');
    subnav.addClass('is-active');

    $('.navbar-item').each(function(i,item) {
      if (path.indexOf($(this).data('dir')) >= 0) {
        $(this).addClass('is-active');
      }
    })
    if (path.indexOf('index') >= 0 || path == '') {
      $('.navbar-item[data-dir="about"]').addClass('is-active');
    }

});
