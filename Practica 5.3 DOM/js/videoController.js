
import VideoSystem from "./videoModel.js";

class VideoController {
    //Campos privados
    #videomodel;
    #videoview;
  
     
    constructor(videomodel, videoview){
      this.#videomodel = videomodel;
      this.#videoview = videoview;
  
          // Eventos iniciales del Controlador
          this.onInit();
         

          // Enlazamos handlers con la vista
          this.#videoview.bindInit(this.handleInit);
          
    }
  
      onInit = () => {
          this.#videoview.init();
      }
  
      handleInit = () => {
          this.onInit();
      }
  
     
  
      
  
  
  }

  export default VideoController;