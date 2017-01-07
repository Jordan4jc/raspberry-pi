import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    changed(){
      Ember.run.schedule('afterRender',()=>{
        var channel = this.controller.get('channel');
        channel.publish({ message: {
          method: "set_rgb_values",
          data: {
            red: 100 - this.controller.get('red'),
            green: 100 - this.controller.get('green'),
            blue: 100 - this.controller.get('blue')
          }
        } });
      });
    }
  }
});
