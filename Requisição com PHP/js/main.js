window.onload = function(){
    
    document.getElementById("btn").addEventListener('click', btn_click);
    
}

function btn_click(){
    //document.getElementsByTagName('div')[0].innerHTML = 'Texto alterado';
    
    //ajax
    
    //abjeto pedido
    let pedido = new XMLHttpRequest();
    
    //função que inicia mediante resposta
    pedido.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementsByTagName('div')[0].innerHTML = this.responseText;
            //document.getElementsByTagName('div')[0].innerHTML = pedido.responseText;
        }else{
            document.getElementsByTagName('div')[0].innerHTML = 'Tente mais tarde';
        }
    }
    
    //faz o pedid
    //( METODO - LOCAL - ASSINCRONA)
    pedido.open("GET","pedido.php?n=Paulo+Ricardo+Busch+&s=Busch", true);
    pedido.send();
}