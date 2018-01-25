var geocoder = require ('geocoder');

var nodeArgs = process.argv;
// console.log(nodeArgs);
var address = "";
for (var i=2; i<nodeArgs.length; i++){
    address = address + " " + nodeArgs[i];
} 
console.log(address);

// go back to code that was shown in npm package and utilize to pass in the address and return the data
// Geocoding, *replaced Altanta,Ga with address
geocoder.geocode(address, function ( err, data ) {
    // do something with data 
    // NOTE: JSON.stringify, null, 2, added for data and formatting 
    console.log(JSON.stringify(data, null, 2));
  });