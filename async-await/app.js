function orderProduct(product){
    return new Promise((resolve, reject) => {
        console.log(`Ordering: ${product} from freeCodeCamp`);
        setTimeout(() => {
            if (product === 'cup'){
                resolve('Ordering a cup with the freeCodeCamp logo');
            } else {
                reject('This product is not available now');
            }
        }, 2000);
    });
}

function processOrder(response){
    return new Promise((resolve) => {
        console.log('Processing response...');
        console.log(`The response was: "${response}"`);
        setTimeout(() => {
            resolve('Thanks for your purchase. Enjoy your freeCodeCamp product');
        }, 4000);
    })
}

// orderProduct('cup')
//     .then(response => {
//         console.log('Response received');
//         console.log(response);
//         return processOrder(response);
//     })
//     .then(processedResponse => {
//         console.log(processedResponse);
//     })
//     .catch(error => {
//         console.log(error);
//     })

async function doPurchase(product){    
    try {
        const response = await orderProduct(product);
        console.log('Response received');
        console.log(response);
        const processedResponse = await processOrder(response);
        console.log(processedResponse);
    } catch (error) {
        console.log(error);
    }
}

doPurchase('cup');