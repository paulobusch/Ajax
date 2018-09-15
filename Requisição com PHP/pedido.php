<?php
    
    //recebe nome e sobrenome
    if(isset($_GET['n']) and isset($_GET['s'])){
        $nome = $_GET['n'];
        $sobrenome = $_GET['s'];
        $frase = "Seja bem vindo ao servidor, Sr(a). $nome $sobrenome.";
        echo $frase;
    }

?>