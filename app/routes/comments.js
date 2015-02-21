import Ember from 'ember';

export default Ember.Route.extend({
  model: function  () {
    return this.store.find("comment")
  },

  actions: {
    createComment: function  (comment) {
      var post = comment.get("post");
      var _this = this;
      comment.save().then(function(){
        _this.transitionTo('posts.show', post)
      });
    }
  }
});
