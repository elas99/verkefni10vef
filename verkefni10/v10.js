$( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Vel gert!" );
      }
    });
  } );


$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );