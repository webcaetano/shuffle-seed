var seedrandom = require('seedrandom');
var util = require('util');

var extend = function(obj) {
	for (var i = 1; i < arguments.length; i++) for (var key in arguments[i]) obj[key] = arguments[i][key];
	return obj;
}

// var getType = function(){
// 	return Object.prototype.toString.call(obj).match(/^\[object (.*)\]$/)[1];
// }


var getMap = function(size,seed){
	seed = seed || 'none';
	var rng = seedrandom(seed);
	var resp = [];
	var keys = [];
	var rand = function(min,max){
		return Math.floor(rng() * (max - min + 1)) + min;
	}

	for(var i=0;i<size;i++) keys.push(i);
	for(var i=0;i<size;i++){
		var r = rand(0,keys.length-1);
		var g = keys[r];
		keys.splice(r,1);
		resp.push(g);
	}
	return resp;
}

// var defaults = {
// 	seed:undefined
// }

module.exports = function(arr,seed){
	if (!util.isArray(arr)) return null;
	seed = seed || 'none';

	var size = arr.length;
	var rng = seedrandom(seed);
	var resp = [];
	var keys = [];
	var rand = function(min,max){
		return Math.floor(rng() * (max - min + 1)) + min;
	}

	for(var i=0;i<size;i++) keys.push(i);
	for(var i=0;i<size;i++){
		var r = rand(0,keys.length-1);
		var g = keys[r];
		keys.splice(r,1);
		resp.push(arr[g]);
	}
	return resp;
}
