$(document).ready(function() {

  var feed = new Instafeed({
    get: 'user',
    userId: '5437592566',
    //sortBy: 'most-liked',
    accessToken: '5437592566.1677ed0.24c79f9b45ed4b1492e534a454c31635',
    resolution: 'standard_resolution',
    limit: '100',
    template: '<div class="hidden-sm hidden-md hidden-xs col-xs-3"><a href="{{link}}"><img class="image" src="{{image}}"/></a></div><div class="hidden-sm hidden-lg hidden-xs col-xs-4"><a href="{{link}}"><img class="image" src="{{image}}"/></a></div><div class="hidden-lg hidden-md hidden-xs col-xs-6"><a href="{{link}}"><img class="image" src="{{image}}"/></a></div><div class="hidden-lg hidden-md hidden-sm col-xs-12"><a href="{{link}}"><img class="image" src="{{image}}"/></a></div>',
    //filter: function(image) {
    //  return image.tags.indexOf('cali') >= 0;
    //}
    filter: function(image) {
      return image.type != 'video';
    }
  });
  feed.run();
});
