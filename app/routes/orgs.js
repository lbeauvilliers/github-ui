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
     favoriteWasClicked(org) {
       if(this.get('favorites.items').indexOf(org) < 0) {
         this.get('favorites').favoriteItem(org);
       } else {
         this.get('favorites').unfavoriteItem(org);
       }
     },
  },
});
