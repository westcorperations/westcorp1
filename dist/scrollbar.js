 $( function() {
    var progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "70%" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + 2 );
 
      if ( val < 70 ) {
        setTimeout( progress, 80 );
      }
    }
 
    setTimeout( progress, 2000 );
  } );


 $( function() {
    var progressbar = $( "#progressbar3" ),
      progressLabel = $( ".progress-label3" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "60%" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + 2 );
 
      if ( val < 65 ) {
        setTimeout( progress, 80 );
      }
    }
 
    setTimeout( progress, 2000 );
  } );


 $( function() {
    var progressbar = $( "#progressbar2" ),
      progressLabel = $( ".progress-label2" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "78%" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + 2 );
 
      if ( val < 80 ) {
        setTimeout( progress, 80 );
      }
    }
 
    setTimeout( progress, 2000 );
  } );