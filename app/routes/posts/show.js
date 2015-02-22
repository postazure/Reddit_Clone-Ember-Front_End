import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteComment: function  (comment) {
      console.log("deleteComment")
    }
  }
});
