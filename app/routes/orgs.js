import Ember from 'ember';

export default Ember.Route.extend({
  favorites: Ember.inject.service(),

  model() {
    return [
      {id: "Facebook"},
      {id: "Microsoft"},
      {id: "Intercom"},
      {id: "ember-cli"},
      {id: "emberjs"},
    ];
  },

  actions: {
     addToFavorites(org) {
       this.get('favorites').favoriteItem(org);
     }
  },
});
