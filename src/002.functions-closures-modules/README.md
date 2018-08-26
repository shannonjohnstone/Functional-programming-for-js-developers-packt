# Functions, closures and modules

## Function literals

Function literals are composed for four parts 

* function keywork
* optional name
* optional parameters
* functional body

### Function declaration

```js
function add(a, b) {
  return a + b
}
```

The declaration begins with the function keyword followed by a name, this name is optional. If the function is not given a 
name than it is said to be an anonymous function

* No name = anonymous function
* parameters are given to a function inside its parameters
* when a function declaration is compile an object with the same name is created

### Function expression

```js
const add = function(a, b) {
  return a + b
}
```

This is near the same as a the function declaration before this example, the disadvantae being that you can use this for 
as recursive call as the function does not have a name. You can get around this by using a `named function expression`

```js
const add = function add(a) {
  if (a < 100) {
    const newValue = a + a
    return add(newValue)
  }
  return a
}
```

### Self invoking function

A function that invokes itself

```js
(function() {
  console.log('I invokded myself!)
})()
```

### Pass a function as a parameter

```js
function changeCase(val) {
  return val.toUpperCase()
}

function demoFunc(a, passFunction) {
  console.log(passFunction(a))
}

demoFunc('smallcase', changeCase)
```