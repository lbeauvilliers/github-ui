import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let orgName = Ember.get(this.modelFor('org'), 'login');
    let repoName = Ember.get(this.modelFor('org.repo'), 'name');
    return Ember.$.get(`https://api.github.com/repos/${orgName}/${repoName}/issues?access_token=0e663507220ce767005154d452b8208680894765`).then(rawIssues => {
      return rawIssues.map(rawIssue => {
        rawIssue.githubId = rawIssue.id;
        rawIssue.id = rawIssue.name;
        return rawIssue;
      });
    });
  },
});
