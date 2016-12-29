import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    toggleLed(){
      console.log('toggle led');
    }
  }
});
