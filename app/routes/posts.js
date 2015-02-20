import Ember from 'ember';

export default Ember.Route.extend({
  model: function  () {
    return this.store.find("post")
  },

  actions: {
    deletePost: function  (post) {
      post.deleteRecord();
      post.save();
      // console.log("delete post")
    }
  }

});
