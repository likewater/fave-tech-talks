import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('feed', params.feed_id);
  },
  actions: {

    // saveFeed(params) {
    //   var newFeed = this.store.createRecord('feed', params);
    //   newFeed.save();
    //   this.transitionTo('index');
    // },

    saveResponse(params) {
      var newResponse = this.store.createRecord('response', params);
      var feed = params.feed;
      feed.get('responses').addObject(newResponse);
      newResponse.save().then(function() {
        return feed.save();
      });
      this.transitionTo('feed', feed);
    },

    update(feed, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          feed.set(key,params[key]);
        }
      });
      feed.save();
      this.transitionTo('index');
    },

    destroyFeed(feed) {
      var response_deletions = feed.get('responses').map(function(response) {
        return response.destroyRecord();
      });
      Ember.RSVP.all(response_deletions).then(function() {
        return feed.destroyRecord();
      });
      this.transitionTo('index');
    },

    // destroyFeed(feed) {
    //   feed.destroyRecord();
    //   this.transitionTo('index');
    // },

    destroyResponse(response) {
      response.destroyRecord();
      this.transitionTo('index');
    }
  }

});
