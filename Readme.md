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
- ##### Then Run  the command to convert typescript to javaScript
```typescript
 tsc index.ts
 ```
- ##### linked index.js with index.html for watching output. 
```html 
   <script src="index.js"></script> 
   ```
- ##### Now If you write anything on TypeScript File , Tsc compiler gives us an vanila JavaScript file. 