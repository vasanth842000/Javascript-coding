const Debounce=(fn,delay)=>{
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer=setTimeout(()=>{
                fn(...args);
        },delay)
    }
}

const handleInput=()=>{
    console.log('fetching data...')
}

const log=Debounce(handleInput,5000);
document.getElementById('input')?.addEventListener('keypress',log);


