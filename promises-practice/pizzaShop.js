const orderStatus = () => {
    return Math.random() < 0.8;
};

const myPizzaOrder = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (orderStatus()){
            resolve('Order successful! Your pizza is on the way.');
        } else {
            reject('An error occurred. Please try again.');
        }
    }, 3000);
});

// const handleOrder = (confirmationMessage) => {
//     console.log(confirmationMessage);
// }

// const declineOrder = (errorMessage) => {
//     console.log(errorMessage);
// }

// myPizzaOrder.then(handleOrder, declineOrder);

myPizzaOrder
    .then((confirmationMessage) => {
        console.log(confirmationMessage);
    })
    .then(null, (errorMessage) => {
        console.log(errorMessage);
    });