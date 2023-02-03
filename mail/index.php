<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

require './vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;

$MAIL_HOST = 'smtp-pulse.com';
$MAIL_USER = 'mailer@fixeideias.com.br';
$MAIL_PASS = 'QPqJWoj8Z9k';
$EMAIL_NAME = 'Comfortflex';

$post = $_POST;
$assuntoEmail = utf8_decode($EMAIL_NAME.' - Contato');

$TO = ['vitorgbruski@gmail.com'];
$CC = [];
$BCC = [];

$redirect = $post['redirect'];

$mensagemHTML = '';

echo $mensagemHTML;

$mailer = new PHPMailer();
$mailer->IsSMTP();
$mailer->SMTPDebug = 0;
$mailer->Port = 587;
$mailer->Host = $MAIL_HOST;
$mailer->SMTPSecure = 'tls';
$mailer->SMTPAuth = true;
$mailer->CharSet = 'UTF-8';
$mailer->Username = $MAIL_USER;
$mailer->Password = $MAIL_PASS;
$mailer->SetFrom($MAIL_USER, $EMAIL_NAME.' - Contato');
$mailer->Subject = $assuntoEmail;
$mailer->MsgHTML($mensagemHTML);
$mailer->addReplyTo($post['email']);

foreach ($TO as $mail) {
    $mailer->AddAddress($mail);
}

foreach ($CC as $mail) {
    $mailer->AddCC($mail);
}

foreach ($BCC as $mail) {
    $mailer->AddBCC($mail);
}

if ($mailer->Send()) {
    $success = 'success';
} else {
    $success = 'error';
}

return $success;
