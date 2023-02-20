
import VideoSystem from "./videoModel.js";


class VideoView {
	constructor() {
		this.main = $('main');
		this.link = $('#init');
		this.accion = $('#accion');
		this.terror = $('#terror');
		this.comedia = $('#comedia');
		this.directores = $('#directores');
		this.actores = $('#actores');

	}

	init() {
		this.main.empty();
		this.main.append(`<div id="categories" data-type="list" data-code="14" class="container cat-list">
		<div class="row">
			<div class="col-lg-4 col-md-6"><a class="nav-link" id="accion"  href="#">
					<div class="cat-list-image"><img alt="Categoría accion" src="img/accion.jpeg" />
					</div>
					<div class="cat-list-text">
						<h3>Accion</h3>
					</div>
				</a>
			</div>
			<div class="col-lg-4 col-md-6"><a class="nav-link2" id="terror" href="#">
					<div class="cat-list-image"><img alt="Categoría terror" src="img/terror.jpg" />
					</div>
					<div class="cat-list-text">
						<h3>Terror</h3>
						
					</div>
				</a>
			</div>
			<div class="col-lg-4 col-md-6"><a class="nav-link3" id="comedia" href="#">
					<div class="cat-list-image"><img alt="Categoría comedia" src="img/comedia.jpg" />
					</div>
					<div class="cat-list-text">
						<h3>Comedia</h3>
						
					</div>
				</a>
			</div>
			
		</div>
	</div>`);






	}

	bindInit(handler) {


		$('#showvideosistem').click((event) => {
			handler();
		});


	}

	showvideosistem(data) {

		let container;



		container = $(`<div id="producciones" data-type="list" data-code="14" class="container cat-list">
			<div class="row">
	
				
				
			</div>
		</div>`);



		let num = 0;


		for (let prods of data) {

			num++;
			console.log(prods.title);


			let row = $(`<div class="col-lg-4 col-md-6"><a class="${num}" id="accion" href="#">
						<div class="cat-list-image"><img class="imgprod" alt="Categoría accion" src="img/prods.jpg" />
						<div class="textoimg">
						${prods.title}
						</div>
						</div>
						
						</a>
						</div>`);



			container.children().first().append(row);


		}


		this.main.append(container);


	}

	recarga(handler) {

		this.link.click((event) => {

			handler();
		});
	}



	accionh(handler) {
		this.accion.click((event) => {
			handler();
		});
	}


	catAccion(data) {


		let container;

		let num = 0;

		container = $(`<div id="producciones" data-type="list" data-code="14" class="container cat-list">
				<div class="row">
		
					
					
				</div>
			</div>`);





		for (let prods of data) {
			num++;

			console.log(prods.title);


			let row = $(`<div class="col-lg-4 col-md-6"><a  class="${num}" href="#">
							<div class="cat-list-image"><img class="imgprod" alt="Categoría accion" src="img/prods.jpg" />
							<div class="textoimg">
							${prods.title}
							</div>
							</div>
							
							</a>
							</div>`);



			container.children().first().append(row);


		}


		this.main.append(container);


	}




	terrorh(handler) {
		this.terror.click((event) => {
			handler();
		});
	}

	catTerror(data) {

		let num = 0;
		let container;



		container = $(`<div id="producciones" data-type="list" data-code="14" class="container cat-list">
				<div class="row">
		
					
					
				</div>
			</div>`);





		for (let prods of data) {

			num++;
			console.log(prods.title);


			let row = $(`<div class="col-lg-4 col-md-6"><a  class="${num}" href="#">
							<div class="cat-list-image"><img class="imgprod" alt="Categoría accion" src="img/prods.jpg" />
							<div class="textoimg">
							${prods.title}
							</div>
							</div>
							
							</a>
							</div>`);



			container.children().first().append(row);


		}


		this.main.append(container);


	}

	comediah(handler) {
		this.comedia.click((event) => {
			handler();
		});
	}

	catComedia(data) {


		let container;
		let num = 0;


		container = $(`<div id="producciones" data-type="list" data-code="14" class="container cat-list">
				<div class="row">
		
					
					
				</div>
			</div>`);





		for (let prods of data) {

			num++;
			console.log(prods.title);


			let row = $(`<div class="col-lg-4 col-md-6"><a  class="${num}" href="#">
							<div class="cat-list-image"><img class="imgprod" alt="Categoría accion" src="img/prods.jpg" />
							<div class="textoimg">
							${prods.title}
							</div>
							</div>
							
							</a>
							</div>`);



			container.children().first().append(row);


		}


		this.main.append(container);


	}


	directoresh(handler) {
		this.directores.click((event) => {
			handler();
		});
	}

	director(data) {

		let num = 0;
		let container;



		container = $(`<div id="director" data-type="list" data-code="14" class="container cat-list">
				<div class="row">
		
					
					
				</div>
			</div>`);





		for (let director of data) {

			num++;
			console.log(director.name);


			let row = $(`<div class="col-lg-4 col-md-6"><a  class="${num}" href="#">
							<div class="cat-list-image"><img class="imgprod" alt="Categoría accion" src="img/prods.jpg" />
							<div class="textoimg">
							${director.name}
							</div>
							</div>
							
							</a>
							</div>`);



			container.children().first().append(row);


		}


		this.main.append(container);


	}

	actoresh(handler) {
		this.actores.click((event) => {
			handler();
		});
	}

	actors(data) {

		let num = 0;
		let container;



		container = $(`<div id="actor" data-type="list" data-code="14" class="container cat-list">
				<div class="row">
		
					
					
				</div>
			</div>`);





		for (let actor of data) {

			num++;
			console.log(actor.name);


			let row = $(`<div class="col-lg-4 col-md-6"><a class="${num}" href="#">
							<div class="cat-list-image"><img class="imgprod" alt="Categoría accion" src="img/prods.jpg" />
							<div class="textoimg">
							${actor.name}
							</div>
							</div>
							
							</a>
							</div>`);



			container.children().first().append(row);


		}


		this.main.append(container);


	}





	catProd(data) {


		let container;



		container = $(`<div id="categorias" data-type="list" data-code="14" class="container cat-list">
				<div class="row">
		
					
					
				</div>
			</div>`);

		let row;

		for (let prod of data) {
			console.log(prod.title);








			row = $(`<div class="col-lg-4 col-md-6"><a href="#">
							<div class="cat-list-image">
							<div class="prod">
							<img class="imgprods" alt="Categoría accion" src="${prod.image}" />
							${prod.title}
							${prod.nationality}
							${prod.publication}
							${prod.synopsis}
							</div>
							</div>
							
							</a>
							</div>`);







		}
		container.append(row);

		this.main.append(container);


	}


	directf(data) {

		console.log(data);

			
			let container;
	
	
	
			container = $(`<div id="director" data-type="list" data-code="14" class="container cat-list">
					<div class="row">
			
						
						
					</div>
				</div>`);
	
	
	
				let row;
	
			for (let directores of data) {
	
				
				console.log(directores.name);
	
	
				 row = $(`<div class="col-lg-4 col-md-6"><a  class="" href="#">
								<div class="cat-list-image"><img class="imgprod" alt="Categoría accion" src="img/prods.jpg" />
								<div class="textoimg">
								${directores.name}
								</div>
								</div>
								
								</a>
								</div>`);
	
	
	
				
	
	
			}
	
			container.append(row);
			this.main.append(container);
	
	
		}


	
		actorf(data) {

			console.log(data);
	
				
				let container;
		
		
		
				container = $(`<div id="actores" data-type="list" data-code="14" class="container cat-list">
						<div class="row">
				
							
							
						</div>
					</div>`);
		
		
		
					let row;
		
				for (let actores of data) {
		
					
					console.log(actores.name);
		
		
					 row = $(`<div class="col-lg-4 col-md-6"><a  class="" href="#">
									<div class="cat-list-image"><img class="imgprod" alt="Categoría accion" src="img/prods.jpg" />
									<div class="textoimg">
									${actores.name}
									</div>
									</div>
									
									</a>
									</div>`);
		
		
		
					
		
		
				}
		
				container.append(row);
				this.main.append(container);
		
		
			}










}
export default VideoView;