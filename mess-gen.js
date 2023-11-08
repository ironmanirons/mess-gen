//Message Generator.
const noun = ['I', 'You', 'He', 'She', 'We', 'They'];
const verb = ['is', 'are', 'am', 'were', 'will be', `won't be`];
const action = ['best coder in the world.', `a Raider's fan!`, 'happily ever after.', 'praying for survival.', 'satified.', 'the voice of reason.'];

const getMessage = (noun, verb, action) => {
    let randomNoun = noun[Math.floor(Math.random() * 6)];
    let randomVerb = verb[Math.floor(Math.random() * 6)];
    let randomAction = action[Math.floor(Math.random() * 6)];
    console.log(randomNoun + ' ' + randomVerb + ' ' + randomAction);
}

getMessage(noun, verb, action);