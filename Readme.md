# Typescript Documentation

## What is typeScript ?

-  TypeScript is a superset of javaScript developed my microsoft.
-  Typescript Designed By Anders Hejlsberg with c# or .net sepecification .
-  Typescript is javaScript with type.
-  Allows static strict typeing.
-  Gives extra features in javaScript like interfaces,tuples, enums,
   genericsetc.
-  Support Modern features of JavaScript (arrow functions, let, const).

-  Typescript is strongly typed programming language.

## Whats wrong with JavaScript ?

-  ##### Not Suitable for large application.
-  ##### Lacks of strong typeing.
-  ##### wirred inheritence , unfamilier syntax.
-  ##### only errors during runtime.
-  ##### suffers type corecion.

## Benifits of Typescript:

-  ##### TypeScript = JavaScript.
-  ##### TypeScript compiles to vanila JavaScript son it runs older browser also.
-  ##### Familiar with object oriented programming.
-  ##### New features works every where. like (es6 and ES next)

## Where does tyepscript run?

-  ##### Typescript compiles to vanilla JavaScript so It's any where (older browser, node js, deno etc.)
-  ##### TypeScript has a tsc (typescript compiler). which compile typescript to javascript.

## Installation of TypeScript

-  ##### Must have Node js installed in your machine.
-  ##### Typescript compiler global installation : `$ npm install -g typescript `
-  ##### It gives us a command : `tsc`
-  ##### By using this command we can access typescript compiler.

## Editor Setup or Project Setup :

-  ##### first we create a folder and create two more files like index.html and index.ts file
-  ##### we write our javaScript codes index.ts file

```typescript
console.log("Welcome TypeScript, Good Bye JavaScript.");
const a: string = "Mostafizur Rahaman";
console.log(a);
```

-  ##### Then Run the command to convert typescript to javaScript `tsc index.ts `
-  ##### linked index.js with index.html for watching output.

```html
<script src="index.js"></script>
```

-  ##### Now If you write anything on TypeScript File , Tsc compiler gives us an vanila JavaScript file.

## Actuall Project Setup:-

-  ##### create two folder name src and dist
-  ##### src folder contains all ts files and dist folder contains all js files.
-  ##### Create TypeScript Configs with command :-

```typescript
   tsc --init
```

-  ##### After running the command we can see an `tsconfig.json` file
-  ##### open `tsconfig.json` and edit properties values like below:

```json
{
   "target": "es2015", // specify javaScript version
   "rootDir": "/src" /* Specify the root folder within your source files. */,
   "OutDir": "/dist" /* Specify an output folder for all emitted files. */
}
```

-  ##### Create a file `index.ts` on src folder and below codes :

```typescript
const myName: string = "Mostafizur Rahaman";
console.log(myName);
```

-  ##### To Compile this code run `tsc ` command on terminal:
-  ##### After compile we can see index.js folder on dist folder.
-  ##### output:

```typescript
var myName = "Mostafizur Rahaman";
console.log(myName);
```

---

## How to Define a Type of a variable ?

-  ##### We can use colon after variable to define a type of variable in typescript

## syntax-

```typescript
const VariableName: type = value;
// example
const language: string = "TypeScript";
const prevLang: string = "JavaScript";
let age: number = 20;
let isMarried: boolean = false;
let friendsNameList: string[] = [
   "hridoy hossain",
   "Ismail Hossain",
   "Redowan Shawon",
];
```

---

---

## <font color="#FF014F"> Infer In TypeScript </font>.

-  ##### When we Declare and assign a value of variable in same line <font style="color: #f00"> **_ Typescript Infer the type of the variable_** </font>
-  ##### The variable only allows that type value to store.
-  Example:
-  for Number type:

```typescript
let age = 20; // the variable infer it's type as number
age = 30; // store the value because the type of 30 is number

age = "30"; // give errors because the type of "30" is string;
```

-  for string type:

```typescript
let country = "Bangladesh"; // infer type as string
country = "United kingdom"; // allows the value because it's type is string;
country = true; // give error because false type is boolean;
```

---

---

## Primitive Type In TypeScript :

-  Primitive Types are string, number, boolean , undefined, null etc.
-  In TypeScript we can define our variable type after variable name with colon
   ( : ) :) like below:

#### String Type : The variable only allows string type value. If we want to pass other types values gives type error.

```typescript
let myName: string;
myName = "Mostafizur Rahaman"; // allows the value
myName = "Fahim"; // allows the value

//  Shows Error :
myName = 20; // because the type is number ;
myName = false; // because the type is boolean;
myName = undefined; // because the type is undefined
myName = null; // because the type is null ;
```

#### Number Type : only allows the number type values, other values give error.

```typescript
  let age: number;
  age = 20;
  age = 50;
  age = NaN;

  //shows Errors for :
  age = "20" // because the type is string;
  age = 'tweenty" // because the type is string;
  age = true; // because the type is boolean;
```

#### Boolean Type : only allows the boolean type vlaues like `(true or false)` :) , other values give error. :(

```typescript
let isHappy: boolean;
isHappy = true;
isHappy = false;

//Shows Errors For:
isHappy = "Yes"; // because yes is string;
isHappy = "false"; // because false is string;
isHappy = 1; // because 1 is number;
```

#### Undefined Type: only allows the undefined , other values gives error.

```typescript
let a: undefined;
a = undefined;

//  shows Errors:
a = "undefined"; // because "undefined" is string ;
a = { name: "mostafizur rahaman", roll: 4 };
a = 48;
a = ["ratul", "hasan", "hridoy", "redowan"];
a = null;
a = false;
```

#### Null Type : Only allows null value.

```typescript
let user: null;
user = null; // correct value;

// Shows error for:
user = "Ratul Hossain"; // because type is string
user = { name: "Ratul Hossain" }; // because type is object
user = 20; // because  type is number
user = undefined; // because type is number;
```

## <font style="color:#FF014F;text-transform:uppercase; " >Union Type</font> :

-  #### we can use union type when a variable contains double or multiple type data.
-  #### we can seperate types by using ( | ) or (union) or operator

-  ##### Example 1: A variable contains age. That contain number and string type data. To define this variable type use can use union type. Type Script gives error when we try to store boolean, null , undefined and array or object to the variable.

```ts
let age = number | string;

//  Correct Values :
age = 20;
age = 21;
age = "tweenty";
age = "ten";

//   Shows errors for values:-
age = [];
age = false;
age = { age: 20 };
age = undefined;
age = null;
```

-  ##### Example 2: A variable thats contains string or age or number type.

```ts
let isHave: string | boolean | number;

//  correct Values:
isHave = "true";
isHave = 0;
isHave = 1;
isHave = 2;
isHave = false;
isHave = true;

// other types like array, object, undefined and null gives errors:
isHave = [];
isHave = {};
```

-  ##### Example 3: If we want to store only two values on our variable. we can use values as types.

```ts
let name: "saiful" | "sakib";
// the variable only allows saiful and sakib . Typescript gives errors for other values.
name = "saiful"; // correct
name = "sakib"; //corrct

// shows errors:-
name = "mostafizur Rahaman";
name = "rahaman";
```

## <font style="color:#FF014F; text-transform: uppercase ">Array Type:</font>

-  #### Typescript has a specific syntax for typing array
-  #### There many types of array like: string[], number[], boolean[], (string | number | boolean)[], string[] | number[] | boolean[], [string, number, boolean, string] or tuples

-  ### <font style="color:#f06; text-transform: capitalize "> String [ ] or string's array: </font>The array only allows and contains string type datas.

   -  ##### Type Declaration:

   ```ts
   let myFriends: string[];
   ```

   -  ##### allow only strings;

   ```ts
   let myFriends: string[];

   // we can store only string into string[];

   myFriends = ["messi", "ronaldo"];

   myFriends.push("nymear");

   myFrineds.unshift("rahat");
   ```

   -  #### can't allow others type data like boolean, null , undefined,number or object.

   ```ts
   let myFriends: string[];

   //  Invalid Values :
   myFriends = [1, 3, 5, 4]; //error
   myFriends.push(2); //error
   myFriends.pop(2); //error
   myFriends.shift(null); //error
   myFriends.unshift(false); //error
   myFriends.push(undefined);
   ```
