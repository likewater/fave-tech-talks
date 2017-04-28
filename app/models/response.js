import DS from 'ember-data';

export default DS.Model.extend({
  responder: DS.attr(),
  response_title: DS.attr(),
  content: DS.attr(),
});
