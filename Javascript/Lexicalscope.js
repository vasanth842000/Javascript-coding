//lexical scope -  whenever we run js global execution context will be created , and also whenever we create a function new brand execution context will be created, and 
//pusshed in to call stack.

//lexical env means - where actually code is present , here inner fucntion is present inside the outer function , which means inner is lexical env of parent is outer fn.
//now outer is lexical env of parent is global execution context . 

//first js engine tries to finds out the variable name in their local scope , if its not present in local scope then it will check their lexical env of parent . even if it's
//not present in lexical env then it will check in global execution context . so here global execution context not there that variable name throws an error not defined.

//this is what we called as a lexical scope chaining.


//lexical scope chaining example
//-----------------------------------

function outer(){
    var a=20;
    function inner(){
        console.log('lexical scope chaininng example',a+b);
    }
    inner();
}
var b=23;
outer();
