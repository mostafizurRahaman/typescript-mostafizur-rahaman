//  String[]:  only allows string types data on array : 


let myFriends : string[]; 
//  Valid Values 
myFriends = ['ratul hossain', 'nymear jr', 'messi']; 

myFriends.push('ronaldo'); 

//  Invalid Values : 

// myFriends = [1,3,5,4]; //error 
// myFriends.push(2)  error  
// myFriends.unshift(false); error 


//  number[] : Number array only allows number type data. 

let ourRoll : number[] ; 

// Valid Values : 

ourRoll = [1,2,3,4,5]; 

ourRoll.push(2); 
ourRoll.includes(8); 

ourRoll.map((num: number, idx:number)=> num + 1 )


// // inValid Values : 
// ourRoll.push('2'); // error
// ourRoll.includes('five');

// ourRoll.includes(false); // error; 
// ourRoll = ['2', 'five'] // error 
// ourRoll = [false, true] // error 