<dialog id="popup-registro">
<div class="modal-background">
	<div class="modal-g">
		<p class="close" id="close">X</p>
		<div class="modal-container">
			<div class="row">
				<div class="mt-4 mb-2">
					<h2>¿Eres nuevo? ¡Regístrate!</h2>
				</div>
				<div class="px-5">
					<form action="consultas/validar-registro.php" method="post">
						<h5>Es fácil y rápido</h5>
						<div class="mb-3 mt-3">
							<input class="form-control" type="text" name="user_name" placeholder="Nombre de usuario" required>
						</div>					
						<div class="mb-3 mt-3">
							<input class="form-control" type="email" name="email" placeholder="Correo electónico">
						</div>
						<div class="mb-3">
							<input class="form-control" type="password" name="password" placeholder="Contraseña" required>
						</div>
						<div class="mb-3">
							<?php
								if(isset($_REQUEST['reg'])){
									$reg = $_REQUEST['reg'];
									if($reg == 0){
										print("
										<div class='alert alert-success'>
											Registro Exitoso. <br>
											Ahora puede acceder.
										</div>
										<hr>
										");
									}
									elseif ($reg == 1) {
										print("
										<div class='alert alert-danger'>
											Ese usuario ya ha sido registrado. <br>
											Intente cambiar nombre de usuario.
										</div>
										<hr>
										");
									}
									elseif ($reg == 2) {
										print("
										<div class='alert alert-danger'>
											Ese teléfono ya ha sido registrado. <br>
										</div>
										<hr>
										");
									}
								}
							?>
						</div>
						<button type="submit" class="btn btn-primary">Regístrate</button>
					</form>
				<br>
				</div>
			</div>
		
		</div>
	</div>
</div>
</dialog>