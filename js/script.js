function calculaIMC(){

    var resp_altura = document.getElementById("resp_altura").value
    var resp_peso = document.getElementById("resp_peso").value
    var imc = 0;
    let  verificaIMC;    
    
    imc = resp_peso / (resp_altura * resp_altura)

    console.log(imc)


    if(imc <= 18.5){
        document.getElementById("msgRetorno").innerHTML = "<span>Seu IMC é: </span>"+ imc + "<span> e seu peso está na categoria: Baixo</span>";
    }else if ((imc > 18.5) && (imc <= 24.9)){
        document.getElementById("msgRetorno").innerHTML = "<span>Seu IMC é: </span>"+ imc + "<span> e seu peso está na categoria: Normal</span>";
    }else if((imc > 25.0)&& (imc <= 29.9)){
        document.getElementById("msgRetorno").innerHTML = "<span>Seu IMC é: </span>"+ imc + "<span> e seu peso está na categoria: Acima do peso</span>";
    }else if((imc > 30)&&(imc<=39.9)){
        document.getElementById("msgRetorno").innerHTML = "<span>Seu IMC é: </span>"+ imc + "<span> e seu peso está na categoria: Obesidade I</span>";
    }else{
        document.getElementById("msgRetorno").innerHTML = "<span>Seu IMC é: </span>"+ imc + "<span> e seu peso está na categoria: Obesidade II</span>";
    }   
    }



    // switch (imc) {
    //     case imc < 18.5:
    //         document.getElementById("msgRetorno").innerHTML = "<span>Seu IMC é: </span>"+ number + "<br><span>IMC baixo</span>";
    //     break;
    //     case imc < 25:
    //         document.getElementById("msgRetorno").innerHTML = "<span>Seu IMC é: </span>";
    //         document.getElementById("msgRetorno").value = imc;
    //         document.getElementById("msgRetorno").innerHTML = "<span>IMC normal</span>";
    //     break;
    //     default:
    //         document.getElementById("msgRetorno").innerHTML = "<span>Se deu mal</span>";
    //     break;
    // }


