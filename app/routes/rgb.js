import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    changed(){
      Ember.run.schedule('afterRender',()=>{
        var channel = this.controller.get('channel');
        channel.publish({ message: {
          method: "set_rgb_values",
          data: {
            red: this.controller.get('red'),
            green: this.controller.get('green'),
            blue: this.controller.get('blue')
          }
        } });
      });
    }
  }
});
