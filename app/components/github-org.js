import Ember from 'ember';
import isInArray from '../utils/is-in-array';

export default Ember.Component.extend({
  tagName: 'li',
  favorites: Ember.inject.service(),
  isFavorited: isInArray('org', 'favorites.items'),
  actions: {
    favoriteWasClicked() {
      this.sendAction('favorite-was-clicked', this.get('org'));
    }
  },
});
