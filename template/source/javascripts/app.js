$(document)
  .ready(function() {

    $('.ui:not(.container, .grid)').each(function() {
      $(this)
        .popup({
          on        : 'hover',
          variation : 'small inverted',
          exclusive : true,
          content   : $(this).attr('class')
        })
      ;
    });

    $('.ui.menu .ui.dropdown').dropdown({
      on: 'hover'
    });
    $('.ui.menu a.item')
      .on('click', function() {
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active')
        ;
      })
    ;

    $('.ui.dropdown').dropdown();

    $('.ui.dropdown')
        .dropdown({
          on: 'click'
        })
      ;

    $('.ui.buttons .dropdown.button').dropdown({
      action: 'combo'
    });

    $('.special.card .image').dimmer({
      on: 'hover'
    });

    $('.star.rating')
      .rating()
    ;
    $('.card .dimmer')
      .dimmer({
        on: 'hover'
      })
    ;

  })
;