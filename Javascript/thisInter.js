"use strict"

//global space  -1 

console.log(this); //its reference to globalObject ;

//global object is different in browser - window object
//global object in nodejs is different


// this inside function scope-2; 

function a(){
    //the this keword value will be depends on the strict / non strict mode.
    console.log(this); // non -strict mode - window object 
    //console.log(this) //strict mode - undefined; 

    //but original this keyword value of function is undefined
}

//this-substitution

//whenever the this keyword value will be undefined or null replaced with global object.

//how you are calling the function based on that reference this value will be print
a(); //undefined
window.a() // window



//inside the object this keyword -4

//method vs function - method is used inside the object , function is used outside.

const obj={
    a:'vasanth',
    fn:function(){
        console.log(this);
    }
}
obj.fn(); //{a:'vasanth',fn:f}

//arrow function inside this keyword - 5

const abc=()=>{
    //arrow fn does't have their own this context.
    console.log(this); //global object because of it's retain the value of enclosing lexical context. which means here enclosing lexical is global scope so that here we can see global object.
}
abc();

//nested arrow function inside this keyword -6

const  ab={
    a:'vijay',
    b:function(){
        const c=()=>{
            console.log(this); //here this reference ab object.
        }
        c();
    }
}

ab.b();

//inside dom this keyword - 7 ->reference to html element

//lets say when you have button when you clicked that that reference only point out while you alert like(this).