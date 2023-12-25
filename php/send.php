<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $review = $_POST['review'];
    $name = $_POST['name'];
    $data = array();
    $title = "Заголовок письма";
    $body = "<h2>Новый отзыв</h2><br>";
    $body .= "<b>Имя:</b> $name<br><br>";
    $body .= "<b>Отзыв:</b> $review<br><br>";

    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;

    $mail->Host       = 'smtp.gmail.com';
    $mail->Username   = 'sasha.chubarov.2018@gmail.com';
    $mail->Password   = 'cgvlofddybnsmrey';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('sasha.chubarov.2018@gmail.com', 'sasha.chubarov.2018@gmail.com');

    $mail->addAddress('sasha.chubarov.2018@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    if ($mail->send()) {
        $data['result'] = "success";
        $data['info'] = "Повідомлення успішно відправлено!";
    } else {
        $data['result'] = "error";
        $data['info'] = "Повідомлення не було надіслано. Помилка при надсиланні листа";
        $data['desc'] = "Причина помилки: {$mail->ErrorInfo}";
    }
} else {
    $data['result'] = "error";
    $data['info'] = "У коді є помилка";
    $data['desc'] = error_get_last();
}

header('Content-Type: application/json');
echo json_encode($data);
?>