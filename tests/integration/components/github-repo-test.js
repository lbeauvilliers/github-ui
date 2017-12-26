import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-repo', 'Integration | Component | github repo', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);
  const repo = Ember.Object.create({
    forks_count: 42,
    watchers_count: 100,
    name: 'Test Repo',
  });
  this.set('repo', repo);
  this.render(hbs`{{github-repo repo=repo}}`);
  assert.equal(this.$().text().trim(), `Test Repo

  | Forks: 42  |  Watchers: 100`);
});
