<?php
$autoload = function ($class){
    if ($class == 'Email'){
        require_once ('class/PHPMailer/src/PHPMailer.php');
    }
  
    include ('class/'.$class.'.php');
};

spl_autoload_unregister($autoload);

define('INCLUDE_PATH','http://localhost/GitHub/Single-Page/')
?>