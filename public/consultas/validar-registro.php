<?php
	include("conexion.php");

	$user_name = $_REQUEST['user_name'];
	$email = $_REQUEST['email'];
	$password = $_REQUEST['password'];

	$link = Conectar();

	/*Buscar que no esté repetido el nombre de usuario*/
	$query = "SELECT user_name FROM users";
	$consulta = mysqli_query($link, $query);

	$user_repetido = 0;	
	while($fila = mysqli_fetch_row($consulta)){
		if(strcmp($user_name, $fila)==0){
			header("location: ../index.php?reg=1#registrarse");
			$user_repetido++;
			break;
		}
	}
	/*De no encontrar duplicados lo agrega*/
	if($user_repetido==0){
		$query = "INSERT INTO users(user_name, email, password) VALUES('".$user_name."', '".$email."', '".$password."');";

		$consulta = mysqli_query($link,$query);

		header("location: ../index.php?reg=0#registrarse");
	}
	

	
?>