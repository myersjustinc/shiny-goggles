(function(window, framesConfig, $, _, Backbone) {

var app,
  App,
  appView,
  AppView,
  Frame,
  FrameView;

Frame = Backbone.Model.extend({
});
FrameView = Backbone.View.extend({
  tagName: 'section',
  className: 'frame'
});

App = Backbone.Collection.extend({
  model: Frame
});
AppView = Backbone.View.extend({
  tagName: 'article',
  className: 'app'
});

app = new App(framesConfig);
appView = new AppView({
  collection: app
});
console.log(app);
console.log(appView);

appView.$el.appendTo($('body'));
console.log(appView.$el);

}(this, this.framesConfig, this.$, this._, this.Backbone));
