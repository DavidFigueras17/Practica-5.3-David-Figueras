import VideoSystem from "./videoModel.js";


class VideoView {
    constructor() {
        this.main = $('main');
        
    }

    init() {
        this.main.empty();
        this.main.append(`<div id="categories" data-type="list" data-code="14" class="container cat-list">
		<div class="row">
			<div class="col-lg-3 col-md-6"><a href="#">
					<div class="cat-list-image"><img alt="Categoría accion" src="img/catcamara.jpg" />
					</div>
					<div class="cat-list-text">
						<h3>Accion</h3>
					</div>
				</a>
			</div>
			<div class="col-lg-3 col-md-6"><a href="#">
					<div class="cat-list-image"><img alt="Categoría terror" src="img/catmovi.jpg" />
					</div>
					<div class="cat-list-text">
						<h3>Terror</h3>
						
					</div>
				</a>
			</div>
			<div class="col-lg-3 col-md-6"><a href="#">
					<div class="cat-list-image"><img alt="Categoría comedia" src="img/catpportatil.jpg" />
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
        $('#init').click((event) => {
            handler();
        });
        $('#logo').click((event) => {
            handler();
        });
    }
}
export default VideoView;