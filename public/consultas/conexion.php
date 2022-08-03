<?php

function Conectar(){

	$servername = "localhost";
	$database = "agenda";
	$username = "root";
	$password = '';

	//crear conexion

	if (!($conn = mysqli_connect($servername, $username, $password)))
	{
		print("Error al conectarse a la base de datos. <br>");
		exit();
	}
	//conexion a la base de datos

	if (!mysqli_select_db($conn, $database))
	{
		print("Error al seleccionar la base de datos. <br>");
		exit();
	}
	return $conn;
}


	

?>