<?php
include ('../config.php');

$data = array();

$assunto = 'Nova mensagem! >>Living Tech<<';
$corpo='';

foreach ($_POST as $key => $value){
    $corpo.= ucfirst($key).": ".$value;
    $corpo.="<hr>";
}
$info = array('assunto'=>$assunto, 'corpo'=>$corpo);

$mail = new Email('mail.livingtech.com.br', 'contato@livingtech.com.br', 'krat*thuy_PLED0kast!1', 'Contato');
$mail->addAdress('nybble94@gmail.com', 'André');
$mail->formatEmail($info);

if ($mail->enviarEmail()) {
    $data['sucesso'] = true;
} else {
    $data['erro'] = true;
}


die(json_encode($data));

?>