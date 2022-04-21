import os from 'os';

setInterval(() => {
    let { freemem, totalmem } = os;

    let totalMemory = parseInt(totalmem() / 1024 / 1024);

    let freeMemory = parseInt(freemem() / 1024 / 1024);

    let percentualMemoryUsage = parseInt((freeMemory / totalMemory) * 100);
}, 1000);
