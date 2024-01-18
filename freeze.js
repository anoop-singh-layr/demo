const obj = { 
  name: "js"
  address:{
	  street : 'ts'
	}
};														

const frozenObject = Object.freeze(obj);

frozenObject.name = 'js'; 

frozenObject.address.street = 'ts';

delete frozenObject.name 

Object.isFrozen(obj) //true
