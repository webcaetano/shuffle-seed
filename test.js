var expect = require('chai').expect;
// var async = require('async');
var fs = require('fs');
var shuffleSeed = require('./');


describe('shuffle-seed', function() {
	var a = ['a','b','c','d','f','g','h','i','j','k'];
	it('shuffle array without seed (default)', function(done) {
		var resp = shuffleSeed(a);

		console.log(resp)
		expect(resp).to.deep.not.equal(a);
		expect(resp).to.have.length(a.length);
		done();
	});

	it('shuffle array with seed', function(done) {
		var resp = shuffleSeed(a,'Kappa');

		console.log(resp)
		expect(resp).to.deep.not.equal(a);
		expect(resp).to.have.length(a.length);
		done();
	});

})
