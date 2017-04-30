import DS from 'ember-data';

export default DS.Model.extend({
  responder: DS.attr(),
  responseTitle: DS.attr(),
  content: DS.attr(),
});
