import { test } from 'qunit';
import moduleForAcceptance from 'github-ui/tests/helpers/module-for-acceptance';

function json(obj, status=200) {
  return [status, { 'Content-Type' : 'text/json'}, JSON.stringify(obj)];
}

let server;

moduleForAcceptance('Acceptance | index', {
  beforeEach: function () {
    server = new Pretender(function () {
      this.get('https://api.github.com/orgs/:id', () => json({
        id: 99,
        login: 'emberjs',
        name: 'Ember.js'
      }));
      this.get('https://api.github.com/orgs/:id/:repoid', () => json([{
        id: 123,
        name: 'data'
      }]));
      this.get('https://api.github.com/repos/:id/:repoid', () => json({
        id: 123,
        name: 'data'
      }));
      this.get('https://api.github.com/repos/:id/:repoid/issues', () => json([
        {id: 1, title: 'Issue 1'},
        {id: 2, title: 'Issue 2'}
      ]));
      this.get('https://api.github.com/repos/:id/:repoid/contributors', () => json([
        {id: 1, login: 'contributor1'},
        {id: 2, login: 'contributor2'}
      ]));
    });
  },
  afterEach: function () {
    server.shutdown();
  }
});

const SELECTORS = {
  issue: '[data-test-issue]',
  contributor: '[data-test-contributor]',
};

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentRouteName(), 'orgs', 'redirects to /orgs');
  });

  click('a[href*="org/emberjs"]');
  andThen(function() {
    assert.equal(currentURL(),'/org/emberjs/repos','clicking on org redirects to repos');
  });

  click('a[href*="org/emberjs/data"]');
  andThen(function() {
    assert.equal(currentURL(),'/org/emberjs/data/issues', 'clicking on repo redirects to issues');
    assert.ok(Ember.$(SELECTORS.issue).length > 0);
  });

  click('a[href*="org/emberjs/data/contributors"]');
  andThen(function() {
    assert.equal(currentURL(),'/org/emberjs/data/contributors', 'clicking on contributors redirects to contributors');
    assert.ok(Ember.$(SELECTORS.contributor).length > 0);
  });
});
