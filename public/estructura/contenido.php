<div class="container">
	<div class="principal">
		<h1>¡Te damos la bienvenida!</h1>
		<hr>
		<div class="row">
			<div class="col-6 col-6 d-none d-sm-block d-sm-none d-md-block">
				<h2>Notas</h2>
				<div class="agregar_nota mx-3 mt-2" id="agregar_nota">
					+ Agregar nota
				</div>
				<div id="nueva_nota">
					
				</div>
			</div>

			<div class="col-6 col-sm col-12 ">
				<h2>Agenda</h2>
				<div class="mx-3 mt-2 left">
					<div class="show_calendar p-1">
						<button onclick="show_hide_calendar();">
							<i class="fa fa-eye" id="icon_eye" style="font-size:24px"><span class="px-2" >Calendario</span></i>
						</button>
					</div>
					
					<div class="calendario" id="calendario">
						<div class="mes_titulo">
							<div>
								<button onclick="cargarMesAnterior();">Ant</button>
							</div>
							<div>
								<h3 id="mes">Mes</h3>
							</div>
							<div>
								<button onclick="cargarMesSiguiente();">Sig</button>
							</div>
						</div>
						<hr>
						<ol>
							<li>D</li>
							<li>L</li>
							<li>M</li>
							<li>M</li>
							<li>J</li>
							<li>V</li>
							<li>S</li>
						</ol>
						<ol id="ol_cal">
						</ol>
					</div>
				</div>
				<hr>
				<div></div>
			</div>
		</div>
		
		<br>
		<br>
		<br>
		<hr>


	</div>		
</div>