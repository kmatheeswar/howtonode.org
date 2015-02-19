Title: Difference between exports.module vs exports
Author: Matheeswar, Koushik
Date: Tue Aug 12 2014 04:15:00 GMT+0500 (IST)
Node: v0.1.91

Modules in Node are created either with modules.export or export, as given below:

With export
<<>>

module.exports = {
	name : "circle",
	area : function(r) {
				return 3.14 * r * r;
			},
	circumference : function (r){
					return 2 * 3.14 * r;
				}
};

With modules.export
<<>>
module.exports = {
	name : "circle",
	area : function(r) {
				return 3.14 * r * r;
			},
	circumference : function (r){
					return 2 * 3.14 * r;
				}
};

I was wondering whether i will be able to shorten my second implementation, like this, 

<<>>
exports = {
	name : "circle",
	area : function(r) {
				return 3.14 * r * r;
			},
	circumference : function (r){
					return 2 * 3.14 * r;
				}
};

When i tried using the above module, i got an exception that the functions, area and circumference does not exist.

This gave a curiosity of why things are working fine, when i store the function names one by one, like exports.area, exports.circumference? But, when i club all the functions into Object literal and store it in exports, i am getting an exeption.

console.log(module.exports), yields me,
{ name: 'circle', area: [Function], circumference: [Function] } 

