<div class="access-container">
	<div class="row">
		<div class="mt-4 mb-2">
			<h2>Acceso</h2>
		</div>
		<div class="px-5">
			<form action="consultas/validar-login.php" method="post">
				<div>
					<div class="mb-2 mt-2">
						<input class="form-control" type="text" name="user_name" placeholder="Nombre de usuario" required>
					</div>
					<div class="mb-2">
						<input class="form-control" type="password" name="password" placeholder="Contraseña">
					</div>
					<div class="mb-2">
						<?php
							if(isset($_REQUEST['err'])){
								$err = $_REQUEST['err'];
								if($err == 0){
									print("
									<div class='alert alert-danger'>
										La contraseña es incorrecta
									</div>
									");
								} 

								elseif ($err == 1) {
									print("
									<div class='alert alert-danger'>
										El usuario no existe
									</div>
									");
								}
							}
						?>
					</div>
					<hr>
				</div>					
				<button type="submit" class="btn btn-primary">Entrar</button>
			</form>
			<hr>
			<p>¿Aún no estás registrado? <a href="#" id="registrarse" class="text-primary">Regístrate</a></p>
			<br>
		</div>
	</div>
</div>


