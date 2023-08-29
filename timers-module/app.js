// SetTimeout Section

function showTopic(topic){
    console.log(`I'm learning ${topic}`);
}

//showTopic('Node.js');

// setTimeout(showTopic, 1000, 'Node.js');

function plus(a, b){
    console.log(a + b);
}

// setTimeout(plus, 2000, 5, 6);

// SetImmediate Section

// console.log('Before setImmediate()');

// setImmediate(showTopic, 'Node.js');

// console.log('After setImmediate()');

// SetInterval Section

setInterval(showTopic, 1500, 'Node.js');
setInterval(plus, 2000, 3, 4);