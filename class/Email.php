<?php


class Email
{
    private $mailerphp;

    public function __construct($host, $username, $senha, $nome)
    {
        $this->mailerphp = new PHPMailer;

        $this->mailerphp->isSMTP();                                            // Send using SMTP
        $this->mailerphp->Host = $host;                    // Set the SMTP server to send through
        $this->mailerphp->SMTPAuth = true;                                   // Enable SMTP authentication
        $this->mailerphp->Username = $username;                     // SMTP username
        $this->mailerphp->Password = $senha;                               // SMTP password
        $this->mailerphp->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $this->mailerphp->Port = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

        $this->mailerphp->setFrom($username, $nome);
        $this->mailerphp->isHTML(true);                                  // Set email format to HTML
        $this->mailerphp->CharSet = 'UTF-8';

    }

    public function addAdress($email, $nome)
    {

        $this->mailerphp->addAddress($email, $nome);     // Add a recipient

    }

    public function formatEmail($info)
    {

        $this->mailerphp->Subject = $info['assunto'];
        $this->mailerphp->Body = $info['corpo'];
        $this->mailerphp->AltBody = strip_tags($info['corpo']);

    }

    public function enviarEmail()
    {
        if ($this->mailerphp->send()) {
            return true;
        } else {
            return false;
        }
    }

}

?>