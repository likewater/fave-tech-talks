import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  imageUrl: DS.attr(),
  author: DS.attr(),
  subject: DS.attr(),
  url: DS.attr(),
  poster: DS.attr(),
  content: DS.attr()
});
