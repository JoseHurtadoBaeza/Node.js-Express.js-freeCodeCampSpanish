function greet(name){
    return `Hello, ${name}`;
}

function greetHelloWorld(){
    return 'Hello, World!';
}

// module.exports.greet = greet;
// module.exports.greetHelloWorld = greetHelloWorld;

module.exports = {
    greet: greet,
    greetHelloWorld: greetHelloWorld
};