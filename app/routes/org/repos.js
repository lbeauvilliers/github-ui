import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let orgName = Ember.get(this.modelFor('org'), 'login');
    return Ember.$.get(`https://api.github.com/orgs/${orgName}/repos?access_token=0e663507220ce767005154d452b8208680894765`).then(rawRepos => {
      return rawRepos.map(rawRepo => {
        rawRepo.githubId = rawRepo.id;
        rawRepo.id = rawRepo.name;
        return rawRepo;
      });
    });
  },
});
