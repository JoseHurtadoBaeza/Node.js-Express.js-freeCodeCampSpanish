const fullfilledPromise = false;

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (fullfilledPromise){
            resolve('Fullfilled promise!');
        } else {
            reject('Rejected promise...');
        }
    }, 3000);
});

const handleFullfilledPromise = (value) => {
    console.log(value);
};

const handleRejectedPromise = (rejectionReason) => {
    console.log(rejectionReason);
};  

myPromise.then(handleFullfilledPromise, handleRejectedPromise);