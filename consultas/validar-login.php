<?php
	include("conexion.php");

	$user_name = $_REQUEST["user_name"];
	$password = $_REQUEST["password"];

	$link = Conectar();

	$query = "SELECT user_name, password  FROM users WHERE user_name = '".  $user_name ."'";

	$consulta = mysqli_query($link, $query);
	$datos = mysqli_num_rows($consulta);

	if($datos == 1)
	{
		while($fila = mysqli_fetch_row($consulta))
		{
			if($fila[1] == $password)
			{
				session_start();//habilitar las sesiones en php
				$_SESSION['user_name'] = $fila[0];
				header("location: ../index.php");
			}
			else
			{
				header("location: ../index.php?err=0");//pass es incorrecto
			}
		}
	}
	elseif($datos > 1){
		print("Error al consultar la base de datos, contactar al admin");

	}
	elseif ($datos == 0) {
		# code...
		//print("El usuario no existe: ");
		header("location: ../index.php?err=1");//pass es incorrecto
	}
?>