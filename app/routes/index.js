import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return Ember.RSVP.hash({
      feeds: this.store.findAll('feed'),
      responses: this.store.findAll('response')
    });
  },

  actions: {

    saveFeed(params) {
      var newFeed = this.store.createRecord('feed', params);
      newFeed.save();
      this.transitionTo('index');
    },
    saveResponse(params) {
      var newResponse = this.store.createRecord('response', params);
      newResponse.save();
      this.transitionTo('index');
    }
  }
  //
  //   update(feed, params) {
  //     Object.keys(params).forEach(function(key) {
  //       if(params[key]!==undefined) {
  //         feed.set(key,params[key]);
  //       }
  //     });
  //     feed.save();
  //     this.transitionTo('index');
  //   },
  //
  //   destroyFeed(feed) {
  //     feed.destroyRecord();
  //     this.transitionTo('index');
  //   }
  // }
});
