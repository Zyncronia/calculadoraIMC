function calculaIMC(){

    var resp_altura = document.getElementById("resp_altura").value
    var resp_peso = document.getElementById("resp_peso").value
    var imc = 0;
    let  verificaIMC;    
    
    imc = resp_peso / (resp_altura * resp_altura)

    console.log(imc)


    if(imc <= 18.5){
        document.getElementById("msgRetorno").innerHTML = "<span>Seu IMC é: </span>"+ imc + "<br><span>IMC baixo</span>";
    }else if((imc > 18.5) && (imc <= 25)){
        document.getElementById("msgRetorno").innerHTML = "<span>Seu IMC é: </span>"+ imc + "<br><span>IMC normal</span>";
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
}

