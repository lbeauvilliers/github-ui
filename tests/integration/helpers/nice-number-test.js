
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nice-number', 'helper:nice-number', {
  integration: true
});

test('it does not round small numbers', function(assert) {
  this.set('inputValue', '123');

  this.render(hbs`{{nice-number inputValue}}`);

  assert.equal(this.$().text().trim(), '123');
});

test('it rounds big numbers', function(assert) {
  this.set('inputValue', '1230');

  this.render(hbs`{{nice-number inputValue}}`);

  assert.equal(this.$().text().trim(), '1.23K');
});

test('it only shows 2 decimal places', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{nice-number inputValue}}`);

  assert.equal(this.$().text().trim(), '1.23K');
});
