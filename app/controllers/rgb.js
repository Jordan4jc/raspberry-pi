import Ember from 'ember';

export default Ember.Controller.extend({
  pubnub: Ember.inject.service(),
  red: 0,
  green: 0,
  blue: 0,
  joinChannel: Ember.on('init', function() {
    var pubnub = this.get('pubnub');
    this.set('channel',pubnub.subscribe('rasprgb'));
  })
});
