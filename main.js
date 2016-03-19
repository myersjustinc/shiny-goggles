(function(window, Reveal) {

// Shrink the video embeds as necessary to fit the viewport.
(function(document) {
  var windowAspectRatio,
    windowHeight = window.innerHeight,
    windowWidth = window.innerWidth,
    youtubeVideos;

  windowAspectRatio = windowHeight / windowWidth;

  youtubeVideos = document.querySelectorAll(
    '.reveal .slides section iframe[src*="youtube"]');
  Array.prototype.forEach.call(youtubeVideos, function(embed) {
    var embedAspectRatio,
      embedHeight = parseInt(embed.height, 10),
      embedWidth = parseInt(embed.width, 10),
      newHeight,
      newWidth;

    embedAspectRatio = embedHeight / embedWidth;
    if (embedAspectRatio <= windowAspectRatio) {
      // Embed is at least as wide as the window.
      newWidth = windowWidth;
      newHeight = newWidth * embedAspectRatio;
    } else {
      // Embed is taller than the window.
      newHeight = windowHeight;
      newWidth = newHeight / embedAspectRatio;
    }

    embed.height = newHeight;
    embed.width = newWidth;
  });
}(window.document));

// Initialize the slideshow.
Reveal.initialize({
  margin: 0
});

}(this, this.Reveal));
