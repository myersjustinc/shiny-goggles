(function(window, Reveal) {

// Shrink the video embeds as necessary to fit the viewport.
function onYouTubeIframeAPIReady() {
  var windowAspectRatio,
    windowHeight = window.innerHeight,
    windowWidth = window.innerWidth,
    youtubeVideos,
    YT = window.YT;

  windowAspectRatio = windowHeight / windowWidth;

  youtubeVideos = window.document.querySelectorAll(
    '.reveal .slides section iframe[src*="youtube"]');
  console.log(youtubeVideos);
  Array.prototype.forEach.call(youtubeVideos, function(embed) {
    var embedAspectRatio,
      embedHeight = parseInt(embed.height, 10),
      embedWidth = parseInt(embed.width, 10),
      newHeight,
      newWidth,
      player;

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

    // Resize the frame to match.
    embed.height = newHeight;
    embed.width = newWidth;

    // Construct a new YouTube player we can control.
    player = new YT.Player(embed, {});
    embed.videoPlayer = player;
  });
}

// Initialize the slideshow.
Reveal.initialize({
  height: 1920,
  margin: 0,
  width: 1080
});

// Reset all videos on slide change, and if the new current slide has any
// videos on it, play them.
Reveal.addEventListener('slidechanged', function checkVideo(event) {
  var allVideos,
    videosOnSlide;

  allVideos = window.document.querySelectorAll(
    '.reveal .slides section iframe[src*="youtube"]');
  Array.prototype.forEach.call(allVideos, function(embed) {
    var videoPlayer = embed.videoPlayer;
    videoPlayer && videoPlayer.pauseVideo() && videoPlayer.seekTo(0);
  });

  videosOnSlide = event.currentSlide.querySelectorAll(
    '.reveal .slides section iframe[src*="youtube"]');
  Array.prototype.forEach.call(videosOnSlide, function(embed) {
    var videoPlayer = embed.videoPlayer;
    videoPlayer && videoPlayer.playVideo();
  });
});

}(this, this.Reveal));
