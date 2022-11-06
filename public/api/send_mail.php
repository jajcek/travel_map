<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$msg = $_POST['msg'];
	
	mail('jajcek.30@gmail.com', $name, $email . ': ' . $msg);
?>