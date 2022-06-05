<?php
session_start();
if (!isset($_SESSION['user_name'])) {	// Si no está logueado lo manda a loguear
    header('location: sign-in.php');
}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">	
	<title>Mi agenda</title>
	<link rel="shortcut icon" href="img/pencil.png" />

	<meta name="vieport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	
	<!-- Bootstrap -->
	<link rel="stylesheet" href="bootstrap-5.2.0-beta1-dist/css/bootstrap.css">

	<!-- Fuentes e íconos-->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Playfair&#43;Display:700,900&amp;display=swap" rel="stylesheet">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

	<!-- Estilos -->
	<link rel="stylesheet" href="css/styles.css">

</head>
<body background="img/fondo.jpg" id="imagen-fondo">
	<!-- MENU -->
	<?php
		include("estructura/nav.php");
	?>

	<!-- INDEX LOGIN -->
	<?php
		include ("estructura/contenido.php");
	?>

	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>

	<!-- FOOTER -->
	<?php
		include("estructura/footer.php")
	?>
	
	<!-- Bootstrap js -->
	<script type="text/javascript" src="bootstrap-5.2.0-beta1-dist/js/bootstrap.bundle.js"></script>

	<!-- scripts -->
	<script type="text/javascript" src="js/script-index.js"></script>

</body>
</html>