(function(window, framesConfig, $, _, Backbone) {

var app,
  App,
  appView,
  AppView,
  Frame,
  FrameView;

Frame = Backbone.Model.extend({});
FrameView = Backbone.View.extend({
  tagName: 'section',
  className: 'frame',
  render: function renderFrameView() {
    this.$el.html(this.model.content);
    return this;
  }
});

App = Backbone.Collection.extend({
  model: Frame
});
AppView = Backbone.View.extend({
  tagName: 'article',
  className: 'app',
  initialize: function initializeAppView(options) {
    this.frameViews = this.collection.reduce(function(memo, frame) {
      var frameView;

      frameView = new FrameView(frame);
      memo[frame.get('name')] = frameView;

      return memo;
    }, {});
    console.log(this.frameViews);
  },
  render: function renderAppView() {
    this.$el.html('');  // FIXME: Add this.
    return this;
  }
});

app = new App(framesConfig);
appView = new AppView({
  collection: app
});

appView.render().$el.appendTo($('body'));

}(this, this.framesConfig, this.$, this._, this.Backbone));
