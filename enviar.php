<?php 
    if(isset($_POST['submit'])){
        $myemail = "natsumyiass@gmail.com"; 
        $email = $_POST['email']; 
        $name = $_POST['name'];
        $telephone = $_POST['telephone'];
        $subject = "Formulario site pessoal";
        $message = $name . "\n\ntelefone: " . $telephone . " escreveu a mensagem:" . "\n\n" . $_POST['message'];

        $headers = "From:" . $from;
        $headers2 = "From:" . $to;

        echo '<script language="javascript">';
        echo 'alert("Mensagem enviada!")';
        echo '</script>';
    }
?>