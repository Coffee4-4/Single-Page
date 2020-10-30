<?php
$autoload = function ($class){
    if ($class == 'Email'){
        require_once ('class/PHPMailer-5.2-stable/PHPMailerAutoload.php');
    }
  
    include ('class/'.$class.'.php');
};

spl_autoload_register($autoload);

define('INCLUDE_PATH','http://localhost/GitHub/Single-Page/')
?>