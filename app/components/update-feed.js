import Ember from 'ember';

export default Ember.Component.extend({
  updateFeedForm: false,
  actions: {
    updateFeedForm() {
      this.set('updateFeedForm', true);
    },
    update(feed) {
      var params = {
        title: this.get('title'),
        imageUrl: this.get('imageUrl'),
        author: this.get('author'),
        subject: this.get('subject'),
        url: this.get('url'),
        poster: this.get('poster'),
        content: this.get('content')
      };
      this.set('updateFeedForm', false);
      this.sendAction('update', feed, params);
    }
  }
});
