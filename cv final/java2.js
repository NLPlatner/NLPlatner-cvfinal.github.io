const numero2= document.querySelector(".numero2");
    let contador2= 0;
    setInterval(()=> {
        if(contador==50){
            clearInterval();
        }else{
            contador+=1;
            numero2.textContent = contador + "%";
        }
    }, 100);