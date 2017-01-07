import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('led');
  this.route('rgb',function(){
    this.route('anode');
    this.route('cathode');
  });
});

export default Router;
