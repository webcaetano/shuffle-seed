# Seed-shuffle

[![Build Status](https://travis-ci.org/webcaetano/seed-shuffle.svg)](https://travis-ci.org/webcaetano/seed-shuffle) [![npm version](https://badge.fury.io/js/shuffle-seed.svg)](https://badge.fury.io/js/shuffle-seed)

Nodejs module to Shuffle an Array with seed :seedling:


Array Shuffle Seed based on module [davidbau/seedrandom](https://github.com/davidbau/seedrandom)

## Installation 

```
npm install suffle-seed
```

## Usage :

```javascript
var shuffleSeed = require('shuffle-seed');
var a = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var resp = shuffleSeed.shuffle(a,"Kappa");
// result always will be [f','y','p','i','r','v','a','x','q','e','c','b','n','j','t','z','o','l','w','m','k','g','h','u','d','s']

shuffleSeed.unshuffle(resp,"Kappa");
// result ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
```

-------------------

The MIT [License](https://raw.githubusercontent.com/webcaetano/seed-shuffle/master/LICENSE)
