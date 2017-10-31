import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.$.get(`https://api.github.com/orgs/${params.id}?access_token=05677be8502520f12ae88c3550f63302c84fd4de`).then(raw => {
      raw.githubId = raw.id;
      raw.id = raw.name;
      return raw;
    });
  }
});
