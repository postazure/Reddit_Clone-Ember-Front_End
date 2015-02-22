import Ember from 'ember';

export default Ember.Route.extend({
  model: function  () {
    return this.store.find("post")
  },

  actions: {
    deletePost: function  (post) {
      post.deleteRecord();
      var _this = this;
      post.save().then(function  () {
        _this.transitionTo("posts")
      });
    },
    savePost: function  (post) {
      var _this = this;
      post.save().then(function  () {
        _this.transitionTo("posts.show", post)
      })
    },
  }

});
