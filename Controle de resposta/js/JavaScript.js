$(document).ready(function(){
   $('button').click(function(){
       $('div').load('db/dados.txt',function(responseTxt, statusTxt, xhr){
            
           if(statusTxt == "success")
                alert('Aconteceu uma comunicação com sucesso');    
            if(statusTxt == "error")
                alert('ERRO: ' + xhr.status + ": " + xhr.statusText);
           
       });
   }); 
});