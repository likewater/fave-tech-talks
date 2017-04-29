import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('feed');
  },

  actions: {
    destroyFeed(feed) {
      feed.destroyRecord();
      this.transitionTo('index');
    }
  }
});
