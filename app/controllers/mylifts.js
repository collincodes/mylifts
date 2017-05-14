import Ember from 'ember';

export default Ember.Controller.extend({
  // Array for Fitness Goal Choices
  fitnessGoals: Ember.A([
    Ember.Object.create({goal: "Muscle Endurance"}),
    Ember.Object.create({goal: "Muscle Growth"}),
    Ember.Object.create({goal: "Strength"}),
    // Ember.Object.create({goal: "Power"}),
    // Ember.Object.create({goal: "Flexibility"})
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
        if (tempVal && tempVal.get('exercise', 'eSets', 'eReps', 'eRest')) {
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
      Ember.$('.manualChoice').slideDown(1000);
    },

    // Random Program Appears
    clickRandom() {
      Ember.$('.randomChoice').toggle(1000);
    },

    toMuscleGroup(val) {
      this.set('chosenFitnessGoal', val);
      Ember.run.later('scrollTo1', function() {
        var scroll1 = Ember.$('.muscleGroup');
        if (scroll1.length) {
        Ember.$('html, body').animate({
          scrollTop: (Ember.$('.muscleGroup').offset().top)
        }, 1000, 'linear');
        }
      });
    },

    toExerciseChoice(val) {
      this.send('changeGroups', '2', val);
      Ember.run.later('scrollTo2', function() {
        var scroll1 = Ember.$('.exerciseChoice');
        if (scroll1.length) {
        Ember.$('html, body').animate({
          scrollTop: (Ember.$('.exerciseChoice').offset().top)
        }, 1000, 'linear');
        }
      });
    },

    manualClick() {
      this.send('clickManual');
      Ember.run.later('scrollTo3', function() {
        var scroll1 = Ember.$('.manualChoice');
        if (scroll1.length) {
        Ember.$('html, body').animate({
          scrollTop: (Ember.$('.manualChoice').offset().top)
        }, 1000, 'linear');
        }
      });
    },



    // Show Program
    showProgram() {
      if (Ember.$(window).width() < 1024) {
        Ember.$('.content.left.home').toggle();
        Ember.$('.content.right.home').hide();
        Ember.$('.contact').hide();
      }
    },

},



  // Arrays for the Muscle Endurance, Growth and Strength workout plans

  // Filters and Arrays for Chest
  chosenChest: Ember.A([]),
  compChest: Ember.A([
    Ember.Object.create({exercise: "BB Bench Press", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Incline BB Bench Press", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Close-Grip BB Bench Press", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "DB Bench Press", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sReps: "5", sSets: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Incline DB Bench Press", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Pushups", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Dips", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
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
    Ember.Object.create({isoexercise: "High Cable Crossover", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Cable Crossover", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Low Cable Crossover", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Seated Chest Flyes", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: ""}),
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
    Ember.Object.create({exercise: "Pull Ups", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Chin Ups", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Lat Pulldowns", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "T-Bar Row", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Bent Over BB Row", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Bent Over DB Row", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Deadlifts", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: ""}),
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
    Ember.Object.create({isoexercise: "Cable Straight-Arm Pulldowns", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "One-Arm DB Row", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Seated Cable Row", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Smith Machine Shrugs", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "DB Shrugs", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Back Extensions", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Supermans", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: ""}),
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
    Ember.Object.create({exercise: "Military Press", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Push Press", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Seated BB Press", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Seated DB Press", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Single Arm Linear Jammer", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Alternating DB Press", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: ""}),
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
  chosenAntIsoDelt: Ember.A([]),
  chosenPostIsoDelt: Ember.A([]),
  postShoulder: Ember.A([
    Ember.Object.create({isoexercise: "Reverse Machine Flyes", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Reverse Cable Flyes", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Reverse DB Flyes", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "T-Pulls", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "TRX Face Pulls", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: ""}),
  ]),
  antShoulder: Ember.A([
    Ember.Object.create({isoexercise: "Front DB Raise", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Front Cable Raise", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Front Kettlebell Raise", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Lateral DB Raise", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Lateral Cable Raise", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Upright Row", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: ""}),
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
    Ember.Object.create({exercise: "Squats", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Leg Press", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Deadlifts", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Romanian Deadlifts", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Sumo Deadlifts", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: "Front Squats", eSets: "3", eReps: "15", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sReps: "5", sRest: "1.5 - 3 min"}),
    Ember.Object.create({exercise: ""}),
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
  isoGlutes: Ember.A([
    Ember.Object.create({isoexercise: "Cable Kickback", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Bridges", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Single-Leg Glute Bridge", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Curtsy Lunges", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: ""}),
  ]),
  isoAbAd: Ember.A([
    Ember.Object.create({isoexercise: "Thigh Abductors", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Thigh Adductors", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Banded Lateral Shuffle", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Fire Hydrants", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: ""}),
  ]),
  isoQuadsHams: Ember.A([
    Ember.Object.create({isoexercise: "Lunges", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Goblet Squats", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Seated Leg Extensions", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Seated Leg Curls", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Standing Cable Leg Curls", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: ""}),
  ]),
  isoCalves: Ember.A([
    Ember.Object.create({isoexercise: "Standing Calf Raise", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Seated Calf Raise", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Leg Press Calf Raise", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: "Donkey Calf Raise", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({isoexercise: ""}),
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
    Ember.Object.create({exercise: "Rope Extensions", eSets: "3", eReps: "15-20", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "4", sReps: "6, 8, 10, 12", sRest: "1 - 2 min"}),
    Ember.Object.create({exercise: "Straight-Bar Extensions", eSets: "3", eReps: "15-20", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "4", sReps: "6, 8, 10, 12", sRest: "1 - 2 min"}),
    Ember.Object.create({exercise: "Cable Kickbacks", eSets: "3", eReps: "15-20", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "5", sSets: "4", sReps: "6, 8, 10, 12", sRest: "1 - 2 min"}),
    Ember.Object.create({exercise: "Reverse-Grip Extensions", eSets: "3", eReps: "15-20", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "4", sReps: "6, 8, 10, 12", sRest: "1 - 2 min"}),
    Ember.Object.create({exercise: "Single-Arm Pulldowns", eSets: "3", eReps: "15-20", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "4", sReps: "6, 8, 10, 12", sRest: "1 - 2 min"}),
    Ember.Object.create({exercise: "Machine Tricep Extensions", eSets: "3", eReps: "15-20", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "4", sReps: "6, 8, 10, 12", sRest: "1 - 2 min"}),
    Ember.Object.create({exercise: "Assisted Dips", eSets: "3", eReps: "15-20", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "4", sReps: "6, 8, 10, 12", sRest: "1 - 2 min"}),
    Ember.Object.create({exercise: ""}),
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
    Ember.Object.create({exercise: "Preacher Curls", eSets: "3", eReps: "15-20", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "4", sReps: "6, 8, 10, 12", sRest: "1 - 2 min"}),
    Ember.Object.create({exercise: "Standing DB Curls", eSets: "3", eReps: "15-20", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "4", sReps: "6, 8, 10, 12", sRest: "1 - 2 min"}),
    Ember.Object.create({exercise: "Standing BB Curls", eSets: "3", eReps: "15-20", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "4", sReps: "6, 8, 10, 12", sRest: "1 - 2 min"}),
    Ember.Object.create({exercise: "DB Hammer Curls", eSets: "3", eReps: "15-20", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "4", sReps: "6, 8, 10, 12", sRest: "1 - 2 min"}),
    Ember.Object.create({exercise: "Rope Cable Hammer Curls", eSets: "3", eReps: "15-20", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "4", sReps: "6, 8, 10, 12", sRest: "1 - 2 min"}),
    Ember.Object.create({exercise: "Spider Curls", eSets: "3", eReps: "15-20", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "4", sReps: "6, 8, 10, 12", sRest: "1 - 2 min"}),
    Ember.Object.create({exercise: "Machine Bicep Curls", eSets: "3", eReps: "15-20", eRest: "30 - 45 s", gSets: "3-4", gReps: "12, 10, 8, 8", gRest: "30 - 90 s", sSets: "4", sReps: "6, 8, 10, 12", sRest: "1 - 2 min"}),
    Ember.Object.create({exercise: ""}),
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
    Ember.Object.create({exercise: "Plank", eSets: "2 - 3", eReps: "1.5 min", eRest: "30 s", gSets: "3", gReps: "1 min", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "30 s", sRest: "45 - 60 s"}),
    Ember.Object.create({exercise: "Decline Sit Ups", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({exercise: "Bicycles", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({exercise: "Knee Raises", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({exercise: "Hanging Leg Raises", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({exercise: "Reverse Crunch", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({exercise: "Supine Leg Raises", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({exercise: "Pallof Presses", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({exercise: "Oblique Crunch", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({exercise: "Alternate Heel Touches", eSets: "2 - 3", eReps: "15 - 20", eRest: "30 s", gSets: "3", gReps: "10", gRest: "30 - 45 s", sSets: "3 - 4", sReps: "6 - 10", sRest: "45 - 60 s"}),
    Ember.Object.create({exercise: ""}),
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
