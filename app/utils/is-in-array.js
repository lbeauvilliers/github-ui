import Ember from 'ember';
const { computed } = Ember;

export default function isInArray(itemKey, listKey) {
  return computed(itemKey, `${listKey}.[]`, function() {
    const item = this.get(itemKey);
    const listOfItems = this.get(listKey);
    return listOfItems.indexOf(item) >= 0;
  });
}
