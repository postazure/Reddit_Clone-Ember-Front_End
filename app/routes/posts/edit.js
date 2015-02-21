import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updatePost: function  (post) {
      var _this = this;
      post.save().then(function  () {
        _this.transitionTo("posts.show", post)
      })
    }
  }
});
