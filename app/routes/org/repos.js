import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: "ember.js"},
      {id: "core-notes"},
      {id: "guides"},
      {id: "rfcs"},
    ];
  }
});
