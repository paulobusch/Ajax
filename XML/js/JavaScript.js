function executar(){
    
    //ajax
    let pedido = new XMLHttpRequest();
    
    //resposta
    pedido.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            
            //tratamento dos dados
            let dados = this.responseXML;
            let clientes = dados.getElementsByTagName('cliente');            
            let conteudo = '<h2>Clientes</h2>';
            
            let tam = clientes.length;
            for(let i = 0;i < tam; i++){
                conteudo += '<p>Nome:' + clientes[i].getElementsByTagName('nome')[0].innerHTML + '</p>'; 
                conteudo += '<p>Contato:' + clientes[i].getElementsByTagName('contato')[0].innerHTML + '</p>'; 
                conteudo += '<hr/>';
            }
            
            //definir a apresentação dos dados
            document.getElementsByTagName('div')[0].innerHTML = conteudo;
            
        }
    }
    
    //pedido
    pedido.open('GET','db/dados.xml',true);
    pedido.send();
}