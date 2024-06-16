function Crescer(){
    document.getElementById("logo_instagram").style.width = "60px";
    
}

function Diminuir(){
    document.getElementById("logo_instagram").style.width = "50px";
    
}

function Crescer2(){
    document.getElementById("logo_whatsapp").style.width = "60px";
}

function Diminuir2(){
    document.getElementById("logo_whatsapp").style.width = "50px";
}

//configuracao botao itens loja
var quantidade_clicks = 0;
var btn = document.getElementById("btn-red");

btn.onclick = function(){
    quantidade_clicks = quantidade_clicks + 1;
    if(quantidade_clicks == 1){
        document.getElementById("item-loja1").style.display = "block";
    } else if (quantidade_clicks == 2){
        document.getElementById("item-loja2").style.display = "block";
    } else if (quantidade_clicks == 3){
        document.getElementById("item-loja3").style.display = "block";
    } else if (quantidade_clicks == 4){
        document.getElementById("item-loja4").style.display = "block";
    } else if(quantidade_clicks == 5){
        document.getElementById("item-loja5").style.display = "block";
    } else if(quantidade_clicks == 6){
        document.getElementById("item-loja6").style.display = "block";
    }    
}

