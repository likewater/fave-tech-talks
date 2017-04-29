import Ember from 'ember';

export default Ember.Component.extend({
  addNewFeed: false,
  actions: {
    feedFormShow() {
      this.set('addNewFeed', true);
    },

    saveFeed() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        subject: this.get('subject'),
        url: this.get('url'),
        imageUrl: this.get('imageUrl'),
        poster: this.get('poster'),
        content: this.get('content')
      };
      this.set('addNewFeed', false);
      this.sendAction('saveFeed', params);
    }
  }
});
