let counter = 0;

for (let i = 0; i < 50; i++) {
    setTimeout(()=>{
        counter++;
        console.log(counter);
    }, i*1000);   
}

