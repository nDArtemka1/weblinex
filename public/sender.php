<?php
 header("Access-Control-Allow-Origin: *");
 $_POST = json_decode(file_get_contents('php://input'), true);
 
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];
	$comment = $_POST['comment'];
	$budget = $_POST['budget'];

	$to = "nDArtemka1@yandex.ru"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта WebLinex";

	
	$msg="
	Имя: $name /n
	Телефон: $phone /n
	Почта: $email /n
	Комментарий : $comment /n
	Бюджет : $budget ";

	mail($to, $subject, $msg, "From: $to ");

?>