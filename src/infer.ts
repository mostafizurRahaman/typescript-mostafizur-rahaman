// Infer : when we can declare variab le  and assign the of the variable in same line , typescriply implicitly hold the type. 

// the variable cannot allows other types values or data; 
const language = "TypeScript"; // the variable infer it's type as string implicitly. 


let age = 20; // infer type implicitly as number 
age = "r"; // give error because it's type  is number; 
let isMarried = false ; // infer type implicitly as boolean; 


age = NaN; 