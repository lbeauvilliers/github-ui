import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let orgName = Ember.get(this.modelFor('org'), 'login');
    let repoName = Ember.get(this.modelFor('org.repo'), 'name');
    return Ember.$.get(`https://api.github.com/repos/${orgName}/${repoName}/issues?access_token=`).then(rawIssues => {
      return rawIssues.map(rawIssue => {
        rawIssue.githubId = rawIssue.id;
        rawIssue.id = rawIssue.name;
        return rawIssue;
      });
    });
  },
});
