const blob = require('./azure-storage.blob');
const file = require('./azure-storage.file');
const queue = require('./azure-storage.queue');
const table = require('./azure-storage.table');

module.exports = {
    ...blob,
    ...file,
    ...queue,
    ...table,
};