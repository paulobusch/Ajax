function SubmeterFormulario(id_frm){
    
    let frm = $('#' + id_frm);
    
    frm.submit(function(e){
        
        //Impede a submissão do formulário
        e.preventDefault();
        
        //submissão em Ajax
        $.ajax({
            type: frm.attr('method'),
            url: frm.attr('action'),
            data: frm.serialize(),
            //sucesso
            success: function(i){
                //escreve no div
                $('#info').html('Dados submetidos com sucesso.');
                console.log(i);
            },
            //erro
            error: function(){
            $('#info').html('Aconteceu um erro!.');
        }
        });
        
    });
}