import Ember from 'ember';

export default Ember.Controller.extend({
  // Array for Fitness Goal Choices
  fitnessGoals: Ember.A([
    Ember.Object.create({goal: "Muscle Endurance"}),
    Ember.Object.create({goal: "Muscle Growth"}),
    Ember.Object.create({goal: "Strength"}),
    Ember.Object.create({goal: "Power"}),
    Ember.Object.create({goal: "Flexibility"})
  ]),
  // Array for Muscle groupings
  muscleGroups: Ember.A([
    Ember.Object.create({group: "Chest"}),
    Ember.Object.create({group: "Back"}),
    Ember.Object.create({group: "Shoulders"}),
    Ember.Object.create({group: "Legs & Glutes"}),
    Ember.Object.create({group: "Triceps"}),
    Ember.Object.create({group: "Biceps"}),
    Ember.Object.create({group: "Abdominals"}),
    Ember.Object.create({group: ""})
  ]),
  // Array and Function for successful use
  randMessage: Ember.A(["Great!", "Perfect!", "Nice!", "Awesome!"]),
  retRandMessage: Ember.computed('randMessage', function() {
    let randMessage = this.get('randMessage');
    return randMessage[Math.floor(Math.random() * randMessage.length)];
  }),
  retRandMessage2: Ember.computed('randMessage', function() {
    let randMessage = this.get('randMessage');
    return randMessage[Math.floor(Math.random() * randMessage.length)];
  }),
  // Bullshit to filter through muscle group choices and remove them as they've been chosen
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
    },
    clickManual() {
      Ember.$('.manualChoice').toggle(1000);
    },
    clickRandom() {
      Ember.$('.randomChoice').toggle(1000);
    }
  },
  // Arrays for the Muscle Endurance, Growth and Strength workout plans
  compChest: Ember.A(["BB Bench Press", "Incline BB Bench Press", "DB Bench Press", "Incline DB Bench Press", "Pushups", "Dips"]),
  isoChest: Ember.A(["High Cable Crossover", "Cable Crossover", "Low Cable Crossover", "Seated Chest Flyes"]),
  compBack: Ember.A(["Pull Ups", "Chin Ups", "Lat Pulldowns", "T-Bar Row", "Bent Over BB Row", "Bent Over DB Row", "Deadlifts"]),
  isoBack: Ember.A(["Cable Straight-Arm Pulldowns", "One-Arm DB Row", "Seated Cable Row", "Smith Machine Shrugs", "DB Shrugs", "Back Extensions", "Supermans"]),
  compShoulder: Ember.A(["Military Press", "Seated DB Press", "Single Arm Linear Jammer", "Alternating DB Press"]),
  antShoulder: Ember.A(["Front DB Raise", "Front Cable Raise", "Front Kettlebell Raise", "Lateral DB Raise", "Upright Row"]),
  postShoulder: Ember.A(["Reverse Machine Flyes", "Reverse Cable Flyes", "T-Pulls"]),
  compLegs: Ember.A(["Squats", "Leg Press", "Deadlifts", "Romanian Deadlifts", "Sumo Deadlifts", "Front Squats"]),
  isoQuadsHams: Ember.A(["Lunges", "Seated Leg Extensions", "Seated Leg Curls", "Standing Cable Leg Curls"]),
  isoGlutes: Ember.A(["Cable Kickback", "Bridges", "Single-Leg Glute Bridge", "Curtsy Lunges"]),
  isoAbAd: Ember.A(["Thigh Abductors", "Thigh Adductors", "Banded Lateral Shuffle", "Fire Hydrants"]),
  isTris: Ember.A(["Rope Extensions", "Straight-Bar Extensions", "Cable Kickbacks", "Reverse-Grip Extensions", "Single-Arm Pulldowns", "Machine Tricep Extensions", "Assisted Dips"]),
  isBis: Ember.A(["Preacher Curls", "Standing DB Curls", "Standing BB Curls", "DB Hammer Curls", "BB Hammer Curls", "Spider Curls", "Concentration Curls", "Machine Bicep Curls"]),
  isAbs: Ember.A(["Plank", "Decline Sit Ups", "Bicycles", "Knee Raises", "Hanging Leg Raises", "Reverse Crunch", "Supine Leg Raises", "Pallof Presses", "Oblique Crunch", "Alternate Heel Touches"]),

});
