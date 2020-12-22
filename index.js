function wakeDog(dogname, dogbreed) {
    // console.log(`Wake ${dogname} the ${dogbreed}`);
    return `Wake ${dogname} the ${dogbreed}`;
}

function leashDog(dogname, dogbreed) {
    // console.log(`Leash ${dogname} the ${dogbreed}`);
    return `Leash ${dogname} the ${dogbreed}`;
}

function walkToPark(dogname, dogbreed) {
    // console.log(`Walk to the park with ${dogname} the ${dogbreed}`);
    return `Walk to the park with ${dogname} the ${dogbreed}`;
}

function throwFrisbee(dogname, dogbreed) {
    // console.log(`Throw the frisbee for ${dogname} the ${dogbreed}`);
    return `Throw the frisbee for ${dogname} the ${dogbreed}`;
}

function walkHome(dogname, dogbreed) {
    // console.log(`Walk home with ${dogname} the ${dogbreed}`);
    return `Walk home with ${dogname} the ${dogbreed}`;
}


function unleashDog(dogname, dogbreed) {
    // console.log(`Unleash ${dogname} the ${dogbreed}`);
    return `Unleash ${dogname} the ${dogbreed}`;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
let routineLength = routine.length;

function exerciseDog(dogname, dogbreed) {
    const newray = []
    for (let i = 0; i < routineLength; i++) {
        let el = routine[i];
        newray.push(el(dogname, dogbreed));
    }
    return newray;
}