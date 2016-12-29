import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    toggleLed(){
      var channel = this.controller.get('channel');
      channel.publish({ message: {
        method: "toggle_led"
      } });
    }
  }
});
