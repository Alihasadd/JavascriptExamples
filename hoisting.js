//Hoisting in JavaScript

//var
function var1(){
    console.log(num)  <-- undefined
    var num = 50
  }
  
  //const
  function cons(){
    console.log(num) <-- error
    const num = 50
  }
  
  //let
  function let3(){
    console.log(num) <-- error
    let num = 50
  }
  
  //hoisted with default 'undefined'
  var1()
  
  //hoisted without default value
  cons()
  let3()