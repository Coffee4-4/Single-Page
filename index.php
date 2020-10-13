<?php
    include ('config.php');
?>

<!doctype html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Trata se de um sigle page, destacando os principais serviços do autor">
    <meta name="keywords" content="Desenvolvimento Web, PHP, JS, HTML, CSS">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="<?php echo INCLUDE_PATH;?>css/all.css">
    <link rel="stylesheet" href="<?php echo INCLUDE_PATH;?>css/boot.css">
    <link rel="stylesheet" href="<?php echo INCLUDE_PATH;?>css/style.css">
    <link rel="shortcut icon" href="<?php echo INCLUDE_PATH;?>svgs/solid/terminal.svg" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <title>Living Tech</title>
</head>
<body>
<header>
    <div class="center">
        <div class="logo left"><a href="/"><i class="fas fa-terminal"></i>Living Tech</a></div>

        <nav class="desktop right">
            <ul>
                <li><a href="<?php echo INCLUDE_PATH;?>">Home</a></li>
                <li><a href="<?php echo INCLUDE_PATH;?>sobre">Sobre</a></li>
                <li><a href="<?php echo INCLUDE_PATH;?>servicos">Serviços</a></li>
                <li><a href="<?php echo INCLUDE_PATH;?>contato">Contato</a></li>
            </ul>
        </nav>

        <nav class="mobile right">
            <div class="botao-menu-mobile">
                <i class="fas fa-bars" aria-hidden="true"></i>
            </div>
            <ul>
                <li><a href="<?php echo INCLUDE_PATH;?>">Home</a></li>
                <li><a href="<?php echo INCLUDE_PATH;?>sobre">Sobre</a></li>
                <li><a href="<?php echo INCLUDE_PATH;?>servicos">Serviços</a></li>
                <li><a href="<?php echo INCLUDE_PATH;?>contato">Contato</a></li>
            </ul>
        </nav>
        <div class="clear"></div>

    </div>
</header>

<?php
$url = isset($_GET['url'])?$_GET['url']:'home';

if (file_exists('pages/'.$url.'.php')){
    include ('pages/'.$url.'.php');
}else{
    $page404 = true;
    include('pages/404.php');
}

?>


<footer
<?php
if(isset($page404) && $page404== true) echo 'class="fixed"'
?>
>
    <div class="center">
        <div class="w33 left footer-contato">
            <p>André L. Melicio</p>
            <p>(14) 99143 - 9320</p>
            <p>nybble94@gmail.com</p>
        </div>
        
        <div class="w33 left footer-cp">
        <p>Feito com <i class="fas fa-heart"></i> && <i class="fas fa-coffee"></i></p>
        <p><i class="fas fa-code"></i> Living Tech</p>    
        </div>
        
        <div class="w33 left footer-md">
            <a href="#"><i class="fab fa-facebook-square"></i></a>
            <a href="#"><i class="fas fa-blog"></i></a>
            <a href="#"><i class="fab fa-github-alt"></i></a>

        </div>
        <div class="clear"></div>
    </div>
</footer>

<script src="<?php echo INCLUDE_PATH; ?>js/jquery.js"></script>
<script src="<?php echo INCLUDE_PATH; ?>js/scripts.js"></script>

</body>
</html>
