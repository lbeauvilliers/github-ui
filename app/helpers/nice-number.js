import Ember from 'ember';

export function niceNumber(params/*, hash*/) {
  const [quantity] = params;
  if (quantity < 1000){
    return quantity;
  } else {
    return (quantity/1000).toFixed(2) + 'K';
  }
}

export default Ember.Helper.helper(niceNumber);
