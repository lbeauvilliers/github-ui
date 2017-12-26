import isInArray from 'github-ui/utils/is-in-array';
import { module, test } from 'qunit';

module('Unit | Utility | is in array');

test('it returns true if item is in array, false if not', function(assert) {
  const Factory = Ember.Object.extend({
    item: 'two',
    array: ['one','two','three'],
    isItemInList: isInArray('item','array'),
  });
  const instance = Factory.create();

  assert.equal(instance.get('isItemInList'), true, 'isInArray returns true if item in array');

  instance.set('item','four');
  assert.equal(instance.get('isItemInList'), false, 'isInArray returns false if item not in array');
});
