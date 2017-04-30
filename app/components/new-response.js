import Ember from 'ember';

export default Ember.Component.extend({
  addNewResponse: false,
  actions: {
    responseFormShow() {
      this.set('addNewResponse', true);
    },
    saveResponse() {
     var params = {
       responder: this.get('responder'),
       responseTitle: this.get('responseTitle'),
       content: this.get('content')
     };
     this.set('addNewResponse', false);
     this.sendAction('saveResponse', params);
   }
  }
});
