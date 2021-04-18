function runFiveMiles() {
    console.log('Go for a five-mile run');
}

function liftWeights() {
    console.log('Pump iron');
}

function swimFortyLaps(){
    console.log('Swim 40 laps');
}

// function Monday() {
//     runFiveMiles();
//     liftWeights();
// }

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

function Monday() {
    exerciseRoutine(liftWeights);
}

// exerciseRoutine(function() {
//     console.log('Stretch! Work that core!');
// });

// exerciseRoutine(() => {
//     console.log('Stretch! Work that core!');
// });

exerciseRoutine(() => console.log('Stretch! Work that core!'));

function morningRoutine(exercise) {
    let breakfast;
  
    if (exercise === liftWeights) {
      breakfast = 'protein bar';
    } else if (exercise === swimFortyLaps) {
      breakfast = 'kale smoothie';
    } else {
      breakfast = 'granola';
    }
  
exerciseRoutine(exercise);

const afterExercise = morningRoutine(liftWeights);

afterExercise;

afterExercise();
