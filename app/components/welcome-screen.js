import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      clickStart() {
        Ember.$('.programstart').slideDown();
        Ember.run.later('scrollTo0', function() {
          var scroll1 = Ember.$('.programstart');
          if (scroll1.length) {
          Ember.$('html, body').animate({
            scrollTop: (Ember.$('.programstart').offset().top)
          }, 1000, 'linear');
          }
        });
    }
  }
});
