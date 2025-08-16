function Throttle(fn,delay){
    let lastCall=Date.now();

    return function(...args){
        let now=Date.now();
        if(now-lastCall>=delay){
            lastCall=now;
            fn(...args)
        }

    }
}

const handleScroll=()=>{
    console.log('scrolling input');
}

const logs=Throttle(handleScroll,5000);
document.addEventListener('scroll',logs)