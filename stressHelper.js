'use strict';

module.exports = {
    generateRandomData
    }

function generateRandomData(context, events, done) {
    var random = Math.random();
    let listing = null;
    if (random >= .5) {
        listing = parseInt(Math.floor(Math.random() * (10000000 - 9000000 + 1)) + 9000000);
    } else {
        listing = parseInt(Math.floor(Math.random() * 10000000) + 1);
    }
    
    context.vars.listing = listing;
    return done();
}