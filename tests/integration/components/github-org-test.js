import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-org', 'Integration | Component | github org', {
  integration: true
});

const SELECTORS = {
  favoriteButton: '[data-test-favorite-button]',
  githubOrg: '[data-test-github-org]',
};

test('it renders', function(assert) {
  assert.expect(1);
  this.render(hbs`{{github-org}}`);
  assert.equal(this.$().text().trim(), '[Favorite]');
});

test('changing the org property changes the DOM', function(assert) {
  assert.expect(2);
  const org = Ember.Object.create({
    id: 'test-org',
    name: 'Test Org',
  });
  this.set('org',org);
  this.render(hbs`{{github-org org=org}}`);
  assert.equal(this.$().text().trim(), `[Favorite] 


test-org`, 'it renders with an org');

  Ember.run(() => { org.set('id', 'new-org') });
  this.render(hbs`{{github-org org=org}}`);
  assert.equal(this.$().text().trim(), `[Favorite] 


new-org`, 'it renders with a new org');
});

test('clicking favorite results in an action fire', function(assert) {
  assert.expect(1);
  const org = Ember.Object.create({
    id: 'test-org',
    name: 'Test Org',
    favorites: {
      items:[]
    },
  });
  let actionCount = 0;
  this.set('favorite-was-clicked', function() {
    actionCount++;
  });
  this.render(hbs`{{github-org org=org favorite-was-clicked=favorite-was-clicked}}`);
  Ember.$(SELECTORS.favoriteButton).click();
  assert.equal(actionCount, 1);
});
