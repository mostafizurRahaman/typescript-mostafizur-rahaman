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
// ourRoll.includes('five');// error; 

// ourRoll.includes(false); // error; 
// ourRoll = ['2', 'five'] // error 
// ourRoll = [false, true] // error 



//  boolean[] : only allows boolean types data. other data are not allowed: 
let happyDayList : boolean[]; 

//  Valid Values : 
happyDayList = [false, true, false ,true]; 
happyDayList = [true, true , true, true]; 
happyDayList = [false, false , false, false]; 

happyDayList.push(false); 
happyDayList.push(true); 
happyDayList.includes(true); 
happyDayList.unshift(false); 


//  Invalid Values : 

// happyDayList = ['false', 'true']; 
// happyDayList = [null, undefined]; 
// happyDayList = [2, 23]; 

// happyDayList.push(2); 
// happyDayList.includes('true'); 
// happyDayList.unshift(null); 



//  Union Type in Array(single type data stored)  : 

let myList : string[] | number[] | boolean[]; 


myList = ['mostafizur', 'ratul']; // valid 
myList = [false, false] ; // valid 
myList = [2,3,4] // valid 

// myList = ['mostafizur', false, 1]; // inValid 



//  Union Type in Array(multiple type data stored)  : 

let myDatas : (string | number | boolean | null | undefined)[] ; 

myDatas = ['mostafizur', 'ratul', 2, false, true, null, undefined, null , ' any thing']; 

