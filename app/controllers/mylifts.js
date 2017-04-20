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
    Ember.Object.create({group: ''}),
    Ember.Object.create({group: "Chest"}),
    Ember.Object.create({group: "Back"}),
    Ember.Object.create({group: "Shoulders"}),
    Ember.Object.create({group: "Legs & Glutes"}),
    Ember.Object.create({group: "Triceps"}),
    Ember.Object.create({group: "Biceps"}),
    Ember.Object.create({group: "Abdominals"})
  ]),
  chosenGroups: Ember.A([]),
  firstGroup: Ember.computed.filter('muscleGroups', function(item) {
    return item !== this.get('chosenMuscleGroup2') && item !== this.get('chosenMuscleGroup3');
  }),
  secondGroup: Ember.computed.filter('muscleGroups', function(item) {
    return item !== this.get('chosenMuscleGroup1') && item !== this.get('chosenMuscleGroup3');
  }),
  thirdGroup: Ember.computed.filter('muscleGroups', function(item) {
    return item !== this.get('chosenMuscleGroup1') && item !== this.get('chosenMuscleGroup2');
  }),
  actions: {
    changeGroups(groupNum, val) {
      let key = "chosenMuscleGroup" + groupNum;
      this.set(key, val);
      this.get('chosenGroups').clear();
      for (var i = 1; i < 4; i++) {
        let tempKey = 'chosenMuscleGroup' + i;
        let tempVal = this.get(tempKey);
        if (tempVal && tempVal.get('group')) {
          this.get('chosenGroups').addObject(tempVal);
        }
      }
      this.get('muscleGroups').arrayContentDidChange(0); // fuck this horse shit
    }
  }
});
