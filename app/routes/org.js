import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    error(jqxhr) {
      if (jqxhr.status === 404){
        this.intermediateTransitionTo('org.notfound')
      } else {
        return true;
      }
    }
  },

  model(params) {
    return Ember.$.get(`https://api.github.com/orgs/${params.id}?access_token=`).then(raw => {
      raw.githubId = raw.id;
      raw.id = raw.name;
      return raw;
    });
  }
});
