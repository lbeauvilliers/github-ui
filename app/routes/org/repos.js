import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let orgName = Ember.get(this.modelFor('org'), 'login');
    return Ember.$.get(`https://api.github.com/orgs/${orgName}/repos?access_token=`).then(rawRepos => {
      return rawRepos.map(rawRepo => {
        rawRepo.githubId = rawRepo.id;
        rawRepo.id = rawRepo.name;
        return rawRepo;
      });
    });
  },
});
