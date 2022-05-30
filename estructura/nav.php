<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  	<div class="container-fluid">
  		<a href="index.php">
    		<img src="img/pencil.png" class="logo-nav-bar">
    	</a>

    	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse2">
     		<span class="navbar-toggler-icon"></span>
   		</button>
   		<div class="collapse navbar-collapse" id="navbarCollapse2">
     		<ul class="navbar-nav me-auto mb-2 mb-lg-0">
     			<li class="nav-item">
			    	<a class="nav-link active" aria-current="page" href="index.php">MiAgenda.com</a>
			    </li>
			    <?php
			    	ob_start();
			    ?>
        		<li class="nav-item dropdown">
          			<a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
            			Contacto
          			</a>
          			<ul class="dropdown-menu">
            			<li><a class="dropdown-item" href="info/perfil.php" target="_blank">Jesus Serrano</a></li>
          			</ul>
        		</li>

    			<li class="nav-item">
          			<a class="nav-link" href="#" id="registrarse1">Registrarse</a>
        		</li>
        		
        		<li class="nav-item">
        			<a class="nav-link" href="#social">Redes sociales</a>
        		</li>
        		<?php
        			$nav_login = ob_get_clean();
        			if (!isset($_SESSION['user_name'])) {
        				echo $nav_login;
					}
        		?>

      		</ul>
      		<?php
			   	ob_start();
			?>
      		<li class="d-flex m-1">
          		<a class="btn btn-outline-light" id="sign-out" role="button">
          			<i class="fa fa-user fa-2x" aria-hidden="true"></i>
          		</a>
        	</li>
        	<form action="consultas/sign-out.php" method="post">
	      		<li class="d-flex m-1">
	          		<button class="btn btn-outline-light" id="sign-out" type="submit">
	          			<i class="fa fa-sign-out fa-2x" aria-hidden="true"></i>
	          		</button>
	        	</li>
        	</form>
        	<?php
        		$nav_user = ob_get_clean();
        		if (isset($_SESSION['user_name'])) {
        			echo $nav_user;
				}
        	?>
    	</div>
  	</div>
</nav>