<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" href="../img/favicon-1.png" />
    <link rel="stylesheet" href="../css/style.css" />
    <title>NERD - Landing Page Digital Minds</title>
  </head>
  <body>
  <?php 
$myemails = 'development@nerdmedia.pe, alonso@nerdmedia.pe';
$name = $_POST['name'];
$tel = $_POST['telephone'];
$email= $_POST['email'];
$message = $_POST['message'];

$to = $myemails;
$email_subject = "Contacto Nerd Digital (nerd.pe)";
$email_body = "Haz recibido un nuevo mensaje. \n Nombre: $name \n 
Telefono: $tel \n Email: $email \n Mensaje: \n $message";
$headers = "From: $name";

mail($to, $email_subject, $email_body, $headers);
?>
    <section class="thankspage">
      <div class="container-thanks">
        <div class="content">
          <div class="top">
            <a class="closeinterna" href="https://nerd.pe/">
              <img src="../img/closemenu.svg" alt="close"
            /></a>
          </div>
          <div class="text">
            <h2>¡GRACIAS!</h2>
            <p>En breve nos contactaremos</p>
            <img src="../img/img-thanks.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  </body>
</html>
