function fnAjax(url, funcao){
    let pedido = new XMLHttpRequest();
    
    //resposta
    pedido.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            funcao(pedido);
        }
    }
    
    //enviar pedido
    pedido.open('GET','db/' + url,true);
    pedido.send();
}

function btn1(p){
    document.getElementsByTagName('div')[0].innerHTML = p.responseText;
}

function btn2(p){
    document.getElementsByTagName('div')[1].innerHTML = p.responseText;
}