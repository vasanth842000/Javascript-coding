//callback hell function is a situation in js where you have many nested callbacks. it is hard to maintain , hard to read , hard to debug.
//to avoid that we can use promises and awaits .

//even though callback hell solve promises we had many nested chains .then so it's again same hard to read and maintain and debug .
//so we can use async / await to make our application neat and clean .

//callback hell

function order(payment){
    console.log('order created......');
    payment();
}
function proceedToPayment(summary){
    console.log('payment is done...');
    summary();
}
function showorderSummary(updateWallet){
    console.log('order sumary');
    updateWallet();
}
function updateWallet(){
    console.log('wallet updated...')
}

//its hard to understand / debug / read / write .

order(function (){
    proceedToPayment(function (){
        showorderSummary(function (){
            updateWallet();
        })
    });
})
