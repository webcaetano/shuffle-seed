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

	it('should shuffle and unsuffle array with float seed', function(done) {
		var seed = 12.3;
		var resp = shuffleSeed.shuffle(a,seed);
		var unshuffle = shuffleSeed.unshuffle(resp,seed);

		console.log(resp)
		console.log(unshuffle);
		expect(unshuffle).to.deep.equal(a);
		expect(unshuffle).to.have.length(a.length);
		expect(resp).to.deep.not.equal(a);
		expect(resp).to.have.length(a.length);
		done();
	});


	it('should shuffle and unsuffle array with number seed', function(done) {
		var seed = 11;
		var resp = shuffleSeed.shuffle(a,seed);
		var unshuffle = shuffleSeed.unshuffle(resp,seed);

		console.log(resp)
		console.log(unshuffle);
		expect(unshuffle).to.deep.equal(a);
		expect(unshuffle).to.have.length(a.length);
		expect(resp).to.deep.not.equal(a);
		expect(resp).to.have.length(a.length);
		done();
	});


	it('should shuffle and unsuffle array with boolean seed', function(done) {
		var seed = true;
		var resp = shuffleSeed.shuffle(a,seed);
		var unshuffle = shuffleSeed.unshuffle(resp,seed);

		console.log(resp)
		console.log(unshuffle);
		expect(unshuffle).to.deep.equal(a);
		expect(unshuffle).to.have.length(a.length);
		expect(resp).to.deep.not.equal(a);
		expect(resp).to.have.length(a.length);
		done();
	});

	it('should shuffle and unsuffle array with object seed', function(done) {
		var seed = {Kappa:true};
		var resp = shuffleSeed.shuffle(a,seed);
		var unshuffle = shuffleSeed.unshuffle(resp,seed);

		console.log(seed)
		console.log(resp)
		console.log(unshuffle);
		expect(unshuffle).to.deep.equal(a);
		expect(unshuffle).to.have.length(a.length);
		expect(resp).to.deep.not.equal(a);
		expect(resp).to.have.length(a.length);
		done();
	});

	it('should shuffle and unsuffle array with array seed', function(done) {
		var seed = ['K','a','p','p','a'];
		var resp = shuffleSeed.shuffle(a,seed);
		var unshuffle = shuffleSeed.unshuffle(resp,seed);

		console.log(resp)
		console.log(unshuffle);
		expect(unshuffle).to.deep.equal(a);
		expect(unshuffle).to.have.length(a.length);
		expect(resp).to.deep.not.equal(a);
		expect(resp).to.have.length(a.length);
		done();
	});

})
