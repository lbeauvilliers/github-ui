import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  actions: {
    addToFavorites() {
      this.sendAction('add-to-favorites', this.get('org'));
    }
  },
});
