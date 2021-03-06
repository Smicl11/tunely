/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
// var sampleAlbums = [];
// sampleAlbums.push({
//              artistName: 'Ladyhawke',
//              name: 'Ladyhawke',
//              releaseDate: '2008, November 18',
//              genres: [ 'new wave', 'indie rock', 'synth pop' ]
//            });
// sampleAlbums.push({
//              artistName: 'The Knife',
//              name: 'Silent Shout',
//              releaseDate: '2006, February 17',
//              genres: [ 'synth pop', 'electronica', 'experimental' ]
//            });
// sampleAlbums.push({
//              artistName: 'Juno Reactor',
//              name: 'Shango',
//              releaseDate: '2000, October 9',
//              genres: [ 'electronic', 'goa trance', 'tribal house' ]
//            });
// sampleAlbums.push({
//              artistName: 'Philip Wesley',
//              name: 'Dark Night of the Soul',
//              releaseDate: '2008, September 12',
//              genres: [ 'piano' ]
//            });
/* end of hard-coded data */




$(document).ready(function() {
  console.log('app.js loaded!');

  $('#album-form form').on("submit", function (event) {
    event.preventDefault();
    // console.log( $(this).serialize() );
    $.ajax({
      method: 'POST',
      url: '/api/albums/',
      data: $(this).serialize(),
      success: renderAlbum,
      error: handleError
    });
    $(this).trigger("reset");
  });

  $.ajax({
    method: 'GET',
    url: '/api/albums/',
    success: handleSuccess,
    error: handleError
  });

  function handleSuccess(json) {
    // console.log(json);
    json.forEach(renderAlbum);

  }

  function handleError(e) {
    console.log("It's broken", e);
  }

  $('#albums').on('click', '.add-song', function(e) {
      console.log('add-song clicked!');
      var id= $(this).closest('.album').data('album-id'); // "5665ff1678209c64e51b4e7b"
      console.log('id',id);
      $('#songModal').data('album-id', id);
      $('#songModal').modal('show');
  });


});

// this function takes a single album and renders it to the page
function renderAlbum(album) {
  // console.log('rendering album:', album);
  var source = $('#album-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template(album);
  $('#albums').append(newHTML);
}
