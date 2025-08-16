"use strict"
// global space in this keyword- function outside ;

console.log(this); // windoww

//this keyword value will be in function ;

function a(){
    //the this value depends on strict / non strict mode , function inside original value of this keyword - undefined
    console.log(this);
}

//the function how you are calling based on that value will be log
a();
// window.a();

//this inside obj method;

const obj={
    a:'vasanth',
    b:function(){
        console.log(this);
    }
}
obj.b();

//this is arrow function

const ab = () => {
    console.log(this);
}
ab();

//this inside nested arrow function

const obj2={
    a:'vijay',
    fn:function(){
        const fn1=()=>{
            console.log(this); //it's reetains the value of enclosing lexical context (which is fn function - object rejerence)
        }
    }
}
obj2.fn();

//this inside dom - reference to element - like we have one paragraph text when we clicked that alert(this) reference to paragraph element.
