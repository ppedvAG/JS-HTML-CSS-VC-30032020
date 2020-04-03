

let i=0

function counter(){
     i++;
    postMessage(i);

    


    setTimeout(counter,1000);
}

counter();