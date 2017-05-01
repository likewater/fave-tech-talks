import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(response) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyResponse', response);
      }
    }
  }
});
