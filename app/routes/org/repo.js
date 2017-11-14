import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let orgName = Ember.get(this.modelFor('org'), 'login');
    return Ember.$.get(`https://api.github.com/repos/${orgName}/${params.repoid}?access_token=0e663507220ce767005154d452b8208680894765`).then(raw => {
      raw.githubId = raw.id;
      raw.id = raw.name;
      return raw;
    });
  },
});
