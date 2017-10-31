import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {

    let orgName = this.modelFor('org').id;
    return Ember.$.get(`https://api.github.com/orgs/${orgName}/repos?access_token=05677be8502520f12ae88c3550f63302c84fd4de`).then(raw => {
      raw.githubId = raw.id;
      raw.id = raw.name;
      return raw;
    });
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('org', this.modelFor('org'));
  }
});
