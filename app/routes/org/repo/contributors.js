import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let orgName = Ember.get(this.modelFor('org'), 'login');
    let repoName = Ember.get(this.modelFor('org.repo'), 'name');
    return Ember.$.get(`https://api.github.com/repos/${orgName}/${repoName}/contributors?access_token=`).then(rawContributors => {
      return rawContributors.map(rawContributor => {
        rawContributor.githubId = rawContributor.id;
        rawContributor.id = rawContributor.name;
        return rawContributor;
      });
    });
  },
});
