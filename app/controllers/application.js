import Ember from 'ember';

export default Ember.Controller.extend({
  // Navigation menu
  actions: {
    naviToggle() {
        Ember.$('.links').slideToggle();
    }
  },
});
