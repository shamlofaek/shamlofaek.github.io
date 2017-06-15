$(document).ready(function() {

  var feed = new Instafeed({
    get: 'user',
    userId: '467087330',
    //sortBy: 'most-liked',
    accessToken: '467087330.1677ed0.ae54062485a64d0888f58249c3e8b2bf',
    resolution: 'standard_resolution',
    limit: '100',
    template: '<div class="hidden-sm hidden-md hidden-xs col-xs-3"><a href="{{link}}"><img class="image" src="{{image}}"/></a></div><div class="hidden-sm hidden-lg hidden-xs col-xs-4"><a href="{{link}}"><img class="image" src="{{image}}"/></a></div><div class="hidden-lg hidden-md hidden-xs col-xs-6"><a href="{{link}}"><img class="image" src="{{image}}"/></a></div><div class="hidden-lg hidden-md hidden-sm col-xs-12"><a href="{{link}}"><img class="image" src="{{image}}"/></a></div>',
    filter: function(image) {
      return image.tags.indexOf('test') >= 0;
    }
  });
  feed.run();
});;
