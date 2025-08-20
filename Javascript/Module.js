
//We have two parts private and public , public method can only access private variables by doing encapsulation , outsidee we can't access th data outside it will be hidden.

const module=(function(){
    let count=0;  //private vaiable

    //public method
    return {
        increment:function(){
            count++;
            return count;
        },
        decrement:function(){
            count--;
            return count;
        }
    }
})();

console.log(module.increment());
console.log(module.decrement());