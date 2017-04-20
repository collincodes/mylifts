import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      clickStart() {
        Ember.$('.programstart').show();
    }
  }
});
