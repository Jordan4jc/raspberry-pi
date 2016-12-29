import Ember from 'ember';

export default Ember.Controller.extend({
  pubnub: Ember.inject.service(),
  joinChannel: Ember.on('init', function() {
    var pubnub = this.get('pubnub');
    this.set('channel',pubnub.subscribe('rasp'));
  })
});
