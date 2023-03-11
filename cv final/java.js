const numero2= document.querySelector(".numero2");
    let contador2= 0;
    setInterval(()=> {
        if(contador2==40){
            clearInterval();
        }else{
            contador2+=1;
            numero2.textContent = contador2 + "%";
        }
    }, 200);



const numero= document.querySelector(".numero");
    let contador= 0;
    setInterval(()=> {
        if(contador==25){
            clearInterval();
        }else{
            contador+=1;
            numero.textContent = contador + "%";
        }
    }, 200);


