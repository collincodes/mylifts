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


  // Actions
  actions: {
    // Muscle Group Action Loop
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

    // Core Chest Action Loop
    changeChest(groupNum, val) {
      let key = "chestCore" + groupNum;
      this.set(key, val);
      this.get('chosenChest').clear();
      for (var i = 1; i < 5; i++) {
        let tempKey = 'chestCore' + i;
        let tempVal = this.get(tempKey);
        if (tempVal && tempVal.get('exercise')) {
          this.get('chosenChest').addObject(tempVal);
        }
      }
      this.get('compChest').arrayContentDidChange(0);
    },

    // Iso Chest Action Loop
    changeIsoChest(groupNum, val) {
      let key = 'chestIso' + groupNum;
      this.set(key, val);
      this.get('chosenIsoChest').clear();
      for (var i = 1; i < 4; i++) {
        let tempKey = 'chestIso' + i;
        let tempVal = this.get(tempKey);
        if (tempVal && tempVal.get('isoexercise')) {
          this.get('chosenIsoChest').addObject(tempVal);
        }
      }
      this.get('isoChest').arrayContentDidChange(0);
    },

    // Core Back Action Loop
    changeBack(groupNum, val) {
      let key = "backCore" + groupNum;
      this.set(key, val);
      this.get('chosenBack').clear();
      for (var i = 1; i < 5; i++) {
        let tempKey = 'backCore' + i;
        let tempVal = this.get(tempKey);
        if (tempVal && tempVal.get('exercise')) {
          this.get('chosenBack').addObject(tempVal);
        }
      }
      this.get('compBack').arrayContentDidChange(0);
    },

    // Iso Back Action Loop
    changeIsoBack(groupNum, val) {
      let key = 'backIso' + groupNum;
      this.set(key, val);
      this.get('chosenIsoBack').clear();
      for (var i = 1; i < 4; i++) {
        let tempKey = 'backIso' + i;
        let tempVal = this.get(tempKey);
        if (tempVal && tempVal.get('isoexercise')) {
          this.get('chosenIsoBack').addObject(tempVal);
        }
      }
      this.get('isoBack').arrayContentDidChange(0);
    },

    // Shoulder Action Loop
    changeDelts(groupNum, val) {
      let key = "deltCore" + groupNum;
      this.set(key, val);
      this.get('chosenDelt').clear();
      for (var i = 1; i < 5; i++) {
        let tempKey = 'deltCore' + i;
        let tempVal = this.get(tempKey);
        if (tempVal && tempVal.get('exercise')) {
          this.get('chosenDelt').addObject(tempVal);
        }
      }
      this.get('compShoulder').arrayContentDidChange(0);
    },

    // Iso Shoulder Action Loop
    changeIsoDelt(groupNum, val) {
      let key = 'antIso' + groupNum;
      this.set(key, val);
      this.get('chosenIsoDelt').clear();
      for (var i = 1; i < 3; i++) {
        let tempKey = 'antIso' + i;
        let tempVal = this.get(tempKey);
        if (tempVal && tempVal.get('isoexercise')) {
          this.get('chosenIsoDelt').addObject(tempVal);
        }
      }
      this.get('antShoulder').arrayContentDidChange(0);
    },

    // Core Legs Action Loop
    changeLegs(groupNum, val) {
      let key = "legsCore" + groupNum;
      this.set(key, val);
      this.get('chosenLegs').clear();
      for (var i = 1; i < 4; i++) {
        let tempKey = 'legsCore' + i;
        let tempVal = this.get(tempKey);
        if (tempVal && tempVal.get('exercise')) {
          this.get('chosenLegs').addObject(tempVal);
        }
      }
      this.get('compLegs').arrayContentDidChange(0);
    },

    // Iso Legs Action Loop
    changeIsoLegs(groupNum, val) {
      let key = 'legIso' + groupNum;
      this.set(key, val);
      this.get('chosenQuads').clear();
      for (var i = 1; i < 4; i++) {
        let tempKey = 'legIso' + i;
        let tempVal = this.get(tempKey);
        if (tempVal && tempVal.get('isoexercise')) {
          this.get('chosenQuads').addObject(tempVal);
        }
      }
      this.get('isoQuadsHams').arrayContentDidChange(0);
    },

    // Triceps Action Loop
    changeTriceps(groupNum, val) {
      let key = "triExerc" + groupNum;
      this.set(key, val);
      this.get('chosenTris').clear();
      for (var i = 1; i < 6; i++) {
        let tempKey = 'triExerc' + i;
        let tempVal = this.get(tempKey);
        if (tempVal && tempVal.get('exercise')) {
          this.get('chosenTris').addObject(tempVal);
        }
      }
      this.get('isTris').arrayContentDidChange(0);
    },

    // Biceps Action Loop
    changeBiceps(groupNum, val) {
      let key = "biExerc" + groupNum;
      this.set(key, val);
      this.get('chosenBis').clear();
      for (var i = 1; i < 6; i++) {
        let tempKey = 'biExerc' + i;
        let tempVal = this.get(tempKey);
        if (tempVal && tempVal.get('exercise')) {
          this.get('chosenBis').addObject(tempVal);
        }
      }
      this.get('isBis').arrayContentDidChange(0);
    },

    // Abdominals Action Loop
    changeAbs(groupNum, val) {
      let key = "abExerc" + groupNum;
      this.set(key, val);
      this.get('chosenAbs').clear();
      for (var i = 1; i < 6; i++) {
        let tempKey = 'abExerc' + i;
        let tempVal = this.get(tempKey);
        if (tempVal && tempVal.get('exercise')) {
          this.get('chosenAbs').addObject(tempVal);
        }
      }
      this.get('isAbs').arrayContentDidChange(0);
    },

    // Manual Choice Appears
    clickManual() {
      Ember.$('.manualChoice').toggle(1000);
    },

    // Random Program Appears
    clickRandom() {
      Ember.$('.randomChoice').toggle(1000);
    },

    // Save Program
    saveProgram() {
      alert('Almost there!');
    }
  },

  // Arrays for the Muscle Endurance, Growth and Strength workout plans

  // Filters and Arrays for Chest
  chosenChest: Ember.A([]),
  compChest: Ember.A([
    Ember.Object.create({exercise: "BB Bench Press"}),
    Ember.Object.create({exercise: "Incline BB Bench Press"}),
    Ember.Object.create({exercise: "DB Bench Press"}),
    Ember.Object.create({exercise: "Incline DB Bench Press"}),
    Ember.Object.create({exercise: "Pushups"}),
    Ember.Object.create({exercise: "Dips"}),
  ]),
  compChest1: Ember.computed.filter('compChest', function(item) {
    return item !== this.get('chestCore2') && item !== this.get('chestCore3') && item !== this.get('chestCore4');
  }),
  compChest2: Ember.computed.filter('compChest', function(item) {
    return item !== this.get('chestCore1') && item !== this.get('chestCore3') && item !== this.get('chestCore4');
  }),
  compChest3: Ember.computed.filter('compChest', function(item) {
    return item !== this.get('chestCore1') && item !== this.get('chestCore2') && item !== this.get('chestCore4');
  }),
  compChest4: Ember.computed.filter('compChest', function(item) {
    return item !== this.get('chestCore1') && item !== this.get('chestCore2') && item !== this.get('chestCore3');
  }),

  chosenIsoChest: Ember.A([]),
  isoChest: Ember.A([
    Ember.Object.create({isoexercise: "High Cable Crossover"}),
    Ember.Object.create({isoexercise: "Cable Crossover"}),
    Ember.Object.create({isoexercise: "Low Cable Crossover"}),
    Ember.Object.create({isoexercise: "Seated Chest Flyes"}),
  ]),
  isoChest1: Ember.computed.filter('isoChest', function(item) {
    return item !== this.get('chestIso2') && item !== this.get('chestIso3');
  }),
  isoChest2: Ember.computed.filter('isoChest', function(item) {
    return item !== this.get('chestIso1') && item !== this.get('chestIso3');
  }),
  isoChest3: Ember.computed.filter('isoChest', function(item) {
    return item !== this.get('chestIso1') && item !== this.get('chestIso2');
  }),


// Filters and Arrays for Back
  chosenBack: Ember.A([]),
  compBack: Ember.A([
    Ember.Object.create({exercise: "Pull Ups"}),
    Ember.Object.create({exercise: "Chin Ups"}),
    Ember.Object.create({exercise: "Lat Pulldowns"}),
    Ember.Object.create({exercise: "T-Bar Row"}),
    Ember.Object.create({exercise: "Bent Over BB Row"}),
    Ember.Object.create({exercise: "Bent Over DB Row"}),
    Ember.Object.create({exercise: "Deadlifts"}),
  ]),
  compBack1: Ember.computed.filter('compBack', function(item) {
    return item !== this.get('backCore2') && item !== this.get('backCore3') && item !== this.get('backCore4');
  }),
  compBack2: Ember.computed.filter('compBack', function(item) {
    return item !== this.get('backCore1') && item !== this.get('backCore3') && item !== this.get('backCore4');
  }),
  compBack3: Ember.computed.filter('compBack', function(item) {
    return item !== this.get('backCore1') && item !== this.get('backCore2') && item !== this.get('backCore4');
  }),
  compBack4: Ember.computed.filter('compBack', function(item) {
    return item !== this.get('backCore1') && item !== this.get('backCore2') && item !== this.get('backCore3');
  }),

  chosenIsoBack: Ember.A([]),
  isoBack: Ember.A([
    Ember.Object.create({isoexercise: "Cable Straight-Arm Pulldowns"}),
    Ember.Object.create({isoexercise: "One-Arm DB Row"}),
    Ember.Object.create({isoexercise: "Seated Cable Row"}),
    Ember.Object.create({isoexercise: "Smith Machine Shrugs"}),
    Ember.Object.create({isoexercise: "DB Shrugs"}),
    Ember.Object.create({isoexercise: "Back Extensions"}),
    Ember.Object.create({isoexercise: "Supermans"}),
  ]),
  isoBack1: Ember.computed.filter('isoBack', function(item) {
    return item !== this.get('backIso2') && item !== this.get('backIso3');
  }),
  isoBack2: Ember.computed.filter('isoBack', function(item) {
    return item !== this.get('backIso1') && item !== this.get('backIso3');
  }),
  isoBack3: Ember.computed.filter('isoBack', function(item) {
    return item !== this.get('backIso1') && item !== this.get('backIso2');
  }),


// Filters and Arrays for Shoulders
  chosenDelt: Ember.A([]),
  compShoulder: Ember.A([
    Ember.Object.create({exercise: "Military Press"}),
    Ember.Object.create({exercise: "Seated DB Press"}),
    Ember.Object.create({exercise: "Single Arm Linear Jammer"}),
    Ember.Object.create({exercise: "Alternating DB Press"}),
  ]),
  compShoulder1: Ember.computed.filter('compShoulder', function(item) {
    return item !== this.get('deltCore2') && item !== this.get('deltCore3') && item !== this.get('deltCore4');
  }),
  compShoulder2: Ember.computed.filter('compShoulder', function(item) {
    return item !== this.get('deltCore1') && item !== this.get('deltCore3') && item !== this.get('deltCore4');
  }),
  compShoulder3: Ember.computed.filter('compShoulder', function(item) {
    return item !== this.get('deltCore1') && item !== this.get('deltCore2') && item !== this.get('deltCore4');
  }),
  compShoulder4: Ember.computed.filter('compShoulder', function(item) {
    return item !== this.get('deltCore1') && item !== this.get('deltCore2') && item !== this.get('deltCore3');
  }),

  chosenIsoDelt: Ember.A([]),
  postShoulder: Ember.A(["Reverse Machine Flyes", "Reverse Cable Flyes", "T-Pulls"]),
  antShoulder: Ember.A([
    Ember.Object.create({isoexercise: "Front DB Raise"}),
    Ember.Object.create({isoexercise: "Front Cable Raise"}),
    Ember.Object.create({isoexercise: "Front Kettlebell Raise"}),
    Ember.Object.create({isoexercise: "Lateral DB Raise"}),
    Ember.Object.create({isoexercise: "Upright Row"}),
  ]),
  antShoulder1: Ember.computed.filter('antShoulder', function(item) {
    return item !== this.get('antIso2');
  }),
  antShoulder2: Ember.computed.filter('antShoulder', function(item) {
    return item !== this.get('antIso1');
  }),


// Filters and Arrays for Legs & Glutes
  chosenLegs: Ember.A([]),
  compLegs: Ember.A([
    Ember.Object.create({exercise: "Squats"}),
    Ember.Object.create({exercise: "Leg Press"}),
    Ember.Object.create({exercise: "Deadlifts"}),
    Ember.Object.create({exercise: "Romanian Deadlifts"}),
    Ember.Object.create({exercise: "Sumo Deadlifts"}),
    Ember.Object.create({exercise: "Front Squats"}),
  ]),
  compLegs1: Ember.computed.filter('compLegs', function(item) {
    return item !== this.get('legsCore2') && item !== this.get('legsCore3');
  }),
  compLegs2: Ember.computed.filter('compLegs', function(item) {
    return item !== this.get('legsCore1') && item !== this.get('legsCore3');
  }),
  compLegs3: Ember.computed.filter('compLegs', function(item) {
    return item !== this.get('legsCore1') && item !== this.get('legsCore2');
  }),

  chosenQuads: Ember.A([]),
  isoGlutes: Ember.A(["Cable Kickback", "Bridges", "Single-Leg Glute Bridge", "Curtsy Lunges"]),
  isoAbAd: Ember.A(["Thigh Abductors", "Thigh Adductors", "Banded Lateral Shuffle", "Fire Hydrants"]),
  isoQuadsHams: Ember.A([
    Ember.Object.create({isoexercise: "Lunges"}),
    Ember.Object.create({isoexercise: "Goblet Squats"}),
    Ember.Object.create({isoexercise: "Seated Leg Extensions"}),
    Ember.Object.create({isoexercise: "Seated Leg Curls"}),
    Ember.Object.create({isoexercise: "Standing Cable Leg Curls"}),
  ]),
  isoQuadsHams1: Ember.computed.filter('isoQuadsHams', function(item) {
    return item !== this.get('legIso2') && item !== this.get('legIso3');
  }),
  isoQuadsHams2: Ember.computed.filter('isoQuadsHams', function(item) {
    return item !== this.get('legIso1') && item !== this.get('legIso3');
  }),
  isoQuadsHams3: Ember.computed.filter('isoQuadsHams', function(item) {
    return item !== this.get('legIso1') && item !== this.get('legIso2');
  }),


// Filters and Arrays for Triceps
  chosenTris: Ember.A([]),
  isTris: Ember.A([
    Ember.Object.create({exercise: "Rope Extensions"}),
    Ember.Object.create({exercise: "Straight-Bar Extensions"}),
    Ember.Object.create({exercise: "Cable Kickbacks"}),
    Ember.Object.create({exercise: "Reverse-Grip Extensions"}),
    Ember.Object.create({exercise: "Single-Arm Pulldowns"}),
    Ember.Object.create({exercise: "Machine Tricep Extensions"}),
    Ember.Object.create({exercise: "Assisted Dips"}),
  ]),
  isTris1: Ember.computed.filter('isTris', function(item) {
    return item !== this.get('triExerc2') && item !== this.get('triExerc3') && item !== this.get('triExerc4') && item !== this.get('triExerc5');
  }),
  isTris2: Ember.computed.filter('isTris', function(item) {
    return item !== this.get('triExerc1') && item !== this.get('triExerc3') && item !== this.get('triExerc4') && item !== this.get('triExerc5');
  }),
  isTris3: Ember.computed.filter('isTris', function(item) {
    return item !== this.get('triExerc1') && item !== this.get('triExerc2') && item !== this.get('triExerc4') && item !== this.get('triExerc5');
  }),
  isTris4: Ember.computed.filter('isTris', function(item) {
    return item !== this.get('triExerc1') && item !== this.get('triExerc2') && item !== this.get('triExerc3') && item !== this.get('triExerc5');
  }),
  isTris5: Ember.computed.filter('isTris', function(item) {
    return item !== this.get('triExerc1') && item !== this.get('triExerc2') && item !== this.get('triExerc3') && item !== this.get('triExerc4');
  }),


// Filters and Arrays for Biceps
  chosenBis: Ember.A([]),
  isBis: Ember.A([
    Ember.Object.create({exercise: "Preacher Curls"}),
    Ember.Object.create({exercise: "Standing DB Curls"}),
    Ember.Object.create({exercise: "Standing BB Curls"}),
    Ember.Object.create({exercise: "DB Hammer Curls"}),
    Ember.Object.create({exercise: "Rope Cable Hammer Curls"}),
    Ember.Object.create({exercise: "Spider Curls"}),
    Ember.Object.create({exercise: "Machine Bicep Curls"}),
  ]),
  isBis1: Ember.computed.filter('isBis', function(item) {
    return item !== this.get('biExerc2') && item !== this.get('biExerc3') && item !== this.get('biExerc4') && item !== this.get('biExerc5');
  }),
  isBis2: Ember.computed.filter('isBis', function(item) {
    return item !== this.get('biExerc1') && item !== this.get('biExerc3') && item !== this.get('biExerc4') && item !== this.get('biExerc5');
  }),
  isBis3: Ember.computed.filter('isBis', function(item) {
    return item !== this.get('biExerc1') && item !== this.get('biExerc2') && item !== this.get('biExerc4') && item !== this.get('biExerc5');
  }),
  isBis4: Ember.computed.filter('isBis', function(item) {
    return item !== this.get('biExerc1') && item !== this.get('biExerc2') && item !== this.get('biExerc3') && item !== this.get('biExerc5');
  }),
  isBis5: Ember.computed.filter('isBis', function(item) {
    return item !== this.get('biExerc1') && item !== this.get('biExerc2') && item !== this.get('biExerc3') && item !== this.get('biExerc4');
  }),


// Filter and Array for Abdominals
  chosenAbs: Ember.A([]),
  isAbs: Ember.A([
    Ember.Object.create({exercise: "Plank"}),
    Ember.Object.create({exercise: "Decline Sit Ups"}),
    Ember.Object.create({exercise: "Bicycles"}),
    Ember.Object.create({exercise: "Knee Raises"}),
    Ember.Object.create({exercise: "Hanging Leg Raises"}),
    Ember.Object.create({exercise: "Reverse Crunch"}),
    Ember.Object.create({exercise: "Supine Leg Raises"}),
    Ember.Object.create({exercise: "Pallof Presses"}),
    Ember.Object.create({exercise: "Oblique Crunch"}),
    Ember.Object.create({exercise: "Alternate Heel Touches"}),
  ]),
  isAbs1: Ember.computed.filter('isAbs', function(item) {
    return item !== this.get('abExerc2') && item !== this.get('abExerc3') && item !== this.get('abExerc4') && item !== this.get('abExerc5');
  }),
  isAbs2: Ember.computed.filter('isAbs', function(item) {
    return item !== this.get('abExerc1') && item !== this.get('abExerc3') && item !== this.get('abExerc4') && item !== this.get('abExerc5');
  }),
  isAbs3: Ember.computed.filter('isAbs', function(item) {
    return item !== this.get('abExerc1') && item !== this.get('abExerc2') && item !== this.get('abExerc4') && item !== this.get('abExerc5');
  }),
  isAbs4: Ember.computed.filter('isAbs', function(item) {
    return item !== this.get('abExerc1') && item !== this.get('abExerc2') && item !== this.get('abExerc3') && item !== this.get('abExerc5');
  }),
  isAbs5: Ember.computed.filter('isAbs', function(item) {
    return item !== this.get('abExerc1') && item !== this.get('abExerc2') && item !== this.get('abExerc3') && item !== this.get('abExerc4');
  }),


});
