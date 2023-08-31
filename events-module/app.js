const EventEmitter = require('events');

const productSender = new EventEmitter();

productSender.on('purchase', (total, numProducts) => {
    console.log(`Total purchase: ${total}$`);
    console.log(`Products number: ${numProducts}`);
});

productSender.emit('purchase', 500, 5);