var expect = require('chai').expect;
var fs = require('fs');
var shuffleSeed = require('./');


describe('shuffle-seed', function() {
	var a = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	it('should shuffle array without seed (default)', function(done) {
		var resp = shuffleSeed.shuffle(a);

		// console.log(resp)
		expect(resp).to.deep.not.equal(a);
		expect(resp).to.have.length(a.length);
		done();
	});

	it('should shuffle array with seed', function(done) {
		var resp = shuffleSeed.shuffle(a,'Kappa');

		// console.log(resp)
		expect(resp).to.deep.not.equal(a);
		expect(resp).to.have.length(a.length);
		done();
	});

	it('should unshuffle array with seed', function(done) {
		var shuffled = shuffleSeed.shuffle(a,'Kappa');
		var resp = shuffleSeed.unshuffle(shuffled,'Kappa');

		// console.log(resp)
		expect(resp).to.deep.equal(a);
		expect(resp).to.have.length(a.length);
		done();
	});

})
