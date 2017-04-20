import Ember from 'ember';

export default Ember.Controller.extend({
  fitnessGoals: Ember.A([
    Ember.Object.create({goal: "Muscle Endurance"}),
    Ember.Object.create({goal: "Muscle Growth"}),
    Ember.Object.create({goal: "Strength"}),
    Ember.Object.create({goal: "Power"}),
    Ember.Object.create({goal: "Flexibility"})
  ]),
  muscleGroups: Ember.A([
    Ember.Object.create({group: "Chest"}),
    Ember.Object.create({group: "Back"}),
    Ember.Object.create({group: "Shoulders"}),
    Ember.Object.create({group: "Legs & Glutes"}),
    Ember.Object.create({group: "Triceps"}),
    Ember.Object.create({group: "Biceps"}),
    Ember.Object.create({group: "Abdominals"})
  ])
});
