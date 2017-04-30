import Ember from 'ember';

export default Ember.Component.extend({

  delete(feed) {
    if (confirm('Are you sure you want to delete this feed?')) {
      this.sendAction('destroyFeed', feed);
    }
  }

});
