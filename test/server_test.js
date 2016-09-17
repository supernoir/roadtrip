'use strict'

var expect = require('chai').expect;

describe('MOCHA', function() {
    it('should run our tests using npm', function(){
        expect(true).to.be.ok;
    });
});

describe('SERVER', function() {
    it('should listen on port 8282', function() {
        var server = require('../server.js');
        expect(server.startServer()).to.equal(8282);
    });
});
