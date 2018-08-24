$(document).ready(function() {
  // ---------------------------------------
  // Turn on and off menu item indicator
  //
  function menuSet() {
    $('menu li').removeClass('highlight');

    var classList1 = $('body').attr('class').split(/\s+/);
    var classList2 = $('#content_container').attr('class').split(/\s+/);

    classList = classList1.concat(classList2);

    var grid_on = false;
    //alert(classList);
    $.each(classList, function(index, item){
      //alert(item);
      if (item==='bed') {
          $('li.size1').addClass('highlight');
      }
      else if (item==='knee') {
          $('li.size2').addClass('highlight');
      }
      else if (item==='breakfast') {
          $('li.size3').addClass('highlight');
      }
      else if (item==='bg_grid') {
          grid_on = true;
          $('li.bg_on').addClass('highlight');
      }
      else if (item==='low') {
          $('li.lowc').addClass('highlight');
      }
      else if (item==='high') {
          $('li.highc').addClass('highlight');
      }
      else if (item==='ragged') {
          $('li.rag').addClass('highlight');
      }
      else if (item==='justified') {
          $('li.just').addClass('highlight');
      }
      else if (item==='helvetica') {
          $('li.hel').addClass('highlight');
      }
      else if (item==='georgia') {
          $('li.geo').addClass('highlight');
      }
    });

    if(!grid_on)
    {
      $('li.bg_off').addClass('highlight');
    }

  }

  menuSet();


  // --------------------------------------
  // Swipe Right to reload the page
  // (great for quick debugging)
  //

  /*
  $('body').addSwipeEvents().
    bind('swiperight', function(evt, touch) {
      window.location.reload();
  });
  */

  // --------------------------------------
  // Swipe Left to toggle grid
  //
  // Great for debugging but otherwise confusing
  //
  /*
  $('body').addSwipeEvents().
    bind('swipeleft', function(evt, touch) {
    if($('body').hasClass('bg_grid'))
    {
      $('body').removeClass('bg_grid');
    }
    else
    {
      $('body').addClass('bg_grid');
    }
    menuSet();
  });
  */



  // --------------------------------------
  // Doubletap to show / hide menu
  //
  $('body').addSwipeEvents().
    bind('doubletap', function(evt, touch) {
      $('menu').slideToggle('fast', function() {
        // Animation complete.
      });
  });


  // --------------------------------------
  // Doubleclick to show menu on desktop
  //
  /*
  $(document).bind('dblclick', function(){
    $('menu').slideToggle('fast', function() {
        // Animation complete.
      });
  });*/

  // Added menu tab instead of double click:
  //  - Discoverable &
  //  - Cleaner
  $('#menu_tab').click(function() {
    $('menu').slideToggle('fast', function() {
        // Animation complete.
      });
  });



  // -------------------------------------
  // Size toggles
  //
  $('.size1').click(function() {
    $('#content_container').attr("class", "bed");
    menuSet();
  });

  $('.size2').click(function() {
    $('#content_container').attr("class", "knee");
    menuSet();
  });

  $('.size3').click(function() {
    $('#content_container').attr("class", "breakfast");
    menuSet();
  });


  // -------------------------------------
  // Contrast Toggles
  //
  $('.highc').click(function() {
    $('body').removeClass('low high').addClass('high');
    menuSet();
  });

  $('.lowc').click(function() {
    $('body').removeClass('low high').addClass('low');
    menuSet();
  });


  // -------------------------------------
  // Justification Toggles
  //
  $('.just').click(function() {
    $('body').removeClass('ragged justified').addClass('justified');
    menuSet();
  });

  $('.rag').click(function() {
    $('body').removeClass('ragged justified').addClass('ragged');
    menuSet();
  });


  // -------------------------------------
  // Serif toggle
  //
  $('.hel').click(function() {
    $('body').removeClass('georgia helvetica').addClass('helvetica');
    menuSet();
  });

  $('.geo').click(function() {
    $('body').removeClass('helvetica georgia').addClass('georgia');
    menuSet();
  });

  // -------------------------------------
  // Grid toggle
  //
  $('.bg_on').click(function() {
    $('body').removeClass('bg_grid').addClass('bg_grid');
    menuSet();
  });

  $('.bg_off').click(function() {
    $('body').removeClass('bg_grid');
    menuSet();
  });

})
