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
console.log('Welcome TypeScript, Good Bye JavaScript.');
const a:string = "Mostafizur Rahaman"; 
console.log(a); 

```
- ##### Then Run  the command to convert typescript to javaScript `tsc index.ts `
- ##### linked index.js with index.html for watching output. 
```html 
   <script src="index.js"></script> 
```
- ##### Now If you write anything on TypeScript File , Tsc compiler gives us an vanila JavaScript file. 


## Actuall Project Setup:-
- ##### create two folder name src and dist
- ##### src folder contains all ts files and dist folder contains all js files. 
- ##### Create TypeScript Configs with command :- 

```typescript 
   tsc --init 
```
- ##### After running the command we can see an `tsconfig.json` file
- ##### open `tsconfig.json` and edit properties values like below: 
```json 
{
   "rootDir": "/src",   /* Specify the root folder within your source files. */
   "OutDir" : "/dist",        /* Specify an output folder for all emitted files. */
}

```
- ##### Create a file ` index.ts ` on src folder and below codes : 
```typescript
   const myName:string = "Mostafizur Rahaman" 
   console.log(myName); 
```
- ##### To Compile this code run `tsc ` command on terminal: 
- ##### After compile we can see index.js folder on dist folder. 
- ##### output: 
```typescript
   var myName = "Mostafizur Rahaman"; 
   console.log(myName); 
```