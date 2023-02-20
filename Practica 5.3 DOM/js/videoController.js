
import VideoSystem from "./videoModel.js";
import { Person, Category, Resource, Production, Coords, Movie, Serie, User } from './videoModel.js';

class VideoController {
    //Campos privados
    #videomodel;
    #videoview;

    #loadVideoSystemObjects() {
        
        let categoria = new Category("Accion", "Se pegan tiros");
        let categoria2 = new Category("Terror", "Se dan sustos");
        let categoria3 = new Category("Comedia", "Se dan sustos");
        let resource = new Resource("125", "www.netflix.es");
        let usuario = new User("Javier", "javier@gmail.com", "1122");
        let coord = new Coords(-90, 180);
        let latitud = coord.getSexagesimalLatitude();
        let longitud = coord.getSexagesimalLongitude();
        let coordenada = "latitud: " + latitud + " longitud: " + longitud;
        let peli = new Movie("Interestellar", "USA", "24-7-95", "Viaje por el espacio", "", resource, coordenada);
        let serie = new Serie("Breaking Bad", "USA", "23-05-2010", "Profesor hace metanfetamina", "", resource, coordenada, 9);
        let serie2 = new Serie("Better Caul Saul", "USA", "23-05-2010", "Abogado corrupto", "", resource, coordenada, 9);
        let peli2 = new Movie("Los 100", "USA", "24-7-95", "Viaje por el espacio", "", resource, coordenada);
        let serie3 = new Serie("Mortadelo y filemon", "USA", "23-05-2010", "Profesor hace metanfetamina", "", resource, coordenada, 9);
        let peli3 = new Movie("Bambi", "USA", "24-7-95", "Viaje por el espacio", "", resource, coordenada);
        let serie4 = new Serie("HYMYM", "USA", "23-05-2010", "Profesor hace metanfetamina", "", resource, coordenada, 9);
        let peli4 = new Movie("Fargo", "USA", "24-7-95", "Viaje por el espacio", "", resource, coordenada);



        let array = [];

        array.push(peli);
        array.push(peli2);
        array.push(peli3);
        array.push(peli4);
        array.push(serie);
        array.push(serie2);
        array.push(serie3);
        array.push(serie4);





        var n = 0;
        var random;
        var uno = 0;
        var dos = 0;
        var tres = 0;

        do {
            random = Math.floor((Math.random() * 8));
            if ((random != uno) && (random != dos) && (random != tres)) {

                n++;

                this.#videomodel.addProds(array[random]);
                if (n == 1) {
                    uno = random;
                }
                if (n == 2) {
                    dos = random;
                }
                if (n == 3) {
                    tres = random;
                }
            }






        } while (n < 3);





    }

    constructor(videomodel, videoview) {
        this.#videomodel = videomodel;
        this.#videoview = videoview;


        // Eventos iniciales del Controlador
        
        this.onInit();

        
       
        // Enlazamos handlers con la vista
        // Enlazamos handlers con la vista

        this.#videoview.recarga(this.handleRecarga);
        this.#videoview.accionh(this.handleAccion);
        this.#videoview.terrorh(this.handleTerror);
        this.#videoview.comediah(this.handleComedia);
        this.#videoview.directoresh(this.handleDirectores);
        this.#videoview.actoresh(this.handleActores);

        let x=this.handleAccion;
        let y=this.handleComedia;
        let z=this.handleTerror;

        let p1=this.handleProd;

        $("#categories .row  .col-lg-4 .nav-link").bind("click", function(){
            $(this).after(x);
        });
        $("#categories .row  .col-lg-4 .nav-link2").bind("click", function(){
            $(this).after(y);
        });
        $("#categories .row  .col-lg-4 .nav-link3").bind("click", function(){
            $(this).after(z);
        });
       

        $("#producciones .row .col-lg-4 .1").bind("click", function(){
            $(this).after(p1);
        });
        $("#producciones .row .col-lg-4 .2").bind("click", function(){
            $(this).after(p1);
        });
        $("#producciones .row .col-lg-4 .3").bind("click", function(){
            $(this).after(p1);
        });

       
    }

    onInit = () => {
        this.#videoview.init();
       

        this.#loadVideoSystemObjects();
        this.#videoview.showvideosistem(this.#videomodel.production);
       

    }

    handleProd = () => {
        this.#videoview.init();
       
       
        
        this.#videoview.catProd(this.#videomodel.production);
       

    }

    handleDirec = () => {
        this.#videoview.init();
       
        let director = new Person("David", "nolan", "Pasamontes", "24-7-95", "www.google.es");
        let director2 = new Person("Paco", "del", "Toro", "24-7-95", "www.google.es");
        this.#videomodel.addDirectors(director);
        this.#videomodel.addDirectors(director2);
       
      
      
        this.#videoview.directf(this.#videomodel.director);
        this.#videomodel.removeDirectors(director);
        this.#videomodel.removeDirectors(director2);
       
       

    }

    handleActor = () => {
        this.#videoview.init();
       
        let actor = new Person("Raul", "Figueras", "Pasamontes", "24-7-95", "www.google.es");
        let actor2 = new Person("Juan", "Roddriguez", "Bermejo", "24-7-95", "www.google.es");
        
        this.#videomodel.addActors(actor);
        this.#videomodel.addActors(actor2);
      
      
        this.#videoview.actorf(this.#videomodel.actors);
        this.#videomodel.removeActors(actor);
        this.#videomodel.removeActors(actor2);
       
       

    }

    handleRecarga = () => {

        this.#videoview.init();
       
        this.#videoview.showvideosistem(this.#videomodel.production);

        let x=this.handleAccion;
        let y=this.handleComedia;
        let z=this.handleTerror;
        $("#categories .row  .col-lg-4 .nav-link").bind("click", function(){
            $(this).after(x);
        });
        $("#categories .row  .col-lg-4 .nav-link3").bind("click", function(){
            $(this).after(y);
        });
        $("#categories .row  .col-lg-4 .nav-link2").bind("click", function(){
            $(this).after(z);
        });
       
        let p1=this.handleProd;

        $("#producciones .row .col-lg-4 .1").bind("click", function(){
            $(this).after(p1);
        });
        $("#producciones .row .col-lg-4 .2").bind("click", function(){
            $(this).after(p1);
        });
        $("#producciones .row .col-lg-4 .3").bind("click", function(){
            $(this).after(p1);
        });
      
    }

    handleAccion = () => {
        this.#videoview.init();
        
        let categoria = new Category("Accion", "Se pegan tiros");
        let peli = new Movie("Mision imposible", "USA", "24-7-95", "Viaje por el espacio", "www.google.es");
        let serie = new Serie("Avengers", "USA", "23-05-2010", "Profesor hace metanfetamina", "www.google.es");
        let serie2 = new Serie("Wanted", "USA", "23-05-2010", "Abogado corrupto", "www.google.es");
        this.#videomodel.addCategory(categoria);
        this.#videomodel.assingCategory(serie, categoria);
        this.#videomodel.assingCategory(peli, categoria);
        this.#videomodel.assingCategory(serie2, categoria);
        this.#videoview.catAccion(this.#videomodel.getProdsByCategory(categoria));
        this.#videomodel.DeassingCategory(peli, categoria);
        this.#videomodel.DeassingCategory(serie, categoria);
        this.#videomodel.DeassingCategory(serie2, categoria);
        this.#videomodel.removeCategory(categoria);
        this.#videomodel.removeProd(peli);
        this.#videomodel.removeProd(serie);
        this.#videomodel.removeProd(serie2);

        
        let y=this.handleComedia;
        let z=this.handleTerror;
       
        $("#categories .row  .col-lg-4 .nav-link3").bind("click", function(){
            $(this).after(y);
        });
        $("#categories .row  .col-lg-4 .nav-link2").bind("click", function(){
            $(this).after(z);
        });

        let p1=this.handleProd;

        $("#producciones .row .col-lg-4 .1").bind("click", function(){
            $(this).after(p1);
        });
        $("#producciones .row .col-lg-4 .2").bind("click", function(){
            $(this).after(p1);
        });
        $("#producciones .row .col-lg-4 .3").bind("click", function(){
            $(this).after(p1);
        });

    }

    handleTerror = () => {
        this.#videoview.init();
        let categoria2 = new Category("Terror", "Se pegan tiros");
        let peli2 = new Movie("Expediente warren", "USA", "24-7-95", "Viaje por el espacio", "www.google.es");
        let serie3 = new Serie("It", "USA", "23-05-2010", "Profesor hace metanfetamina", "www.google.es");
        let serie4 = new Serie("La mujer de negro", "USA", "23-05-2010", "Profesor hace metanfetamina", "www.google.es");
        this.#videomodel.addCategory(categoria2);
        this.#videomodel.assingCategory(peli2, categoria2);
        this.#videomodel.assingCategory(serie3, categoria2);
        this.#videomodel.assingCategory(serie4, categoria2);
        this.#videoview.catTerror(this.#videomodel.getProdsByCategory(categoria2));
        
        this.#videomodel.DeassingCategory(peli2, categoria2);
        this.#videomodel.DeassingCategory(serie3, categoria2);
        this.#videomodel.DeassingCategory(serie4, categoria2);
        this.#videomodel.removeCategory(categoria2);
        this.#videomodel.removeProd(peli2);
        this.#videomodel.removeProd(serie3);
        this.#videomodel.removeProd(serie4);

        let x=this.handleAccion;
        let y=this.handleComedia;
        
        $("#categories .row  .col-lg-4 .nav-link").bind("click", function(){
            $(this).after(x);
        });
        $("#categories .row  .col-lg-4 .nav-link3").bind("click", function(){
            $(this).after(y);
        });

        let p1=this.handleProd;

        $("#producciones .row .col-lg-4 .1").bind("click", function(){
            $(this).after(p1);
        });
        $("#producciones .row .col-lg-4 .2").bind("click", function(){
            $(this).after(p1);
        });
        $("#producciones .row .col-lg-4 .3").bind("click", function(){
            $(this).after(p1);
        });
        

    }

    handleComedia= () => {
        this.#videoview.init();
        let categoria3 = new Category("Comedia", "Se pegan tiros");
        let peli = new Movie("JackAss", "USA", "24-7-95", "Viaje por el espacio", "www.google.es");
        let serie = new Serie("Aterriza como puedas", "USA", "23-05-2010", "Profesor hace metanfetamina", "www.google.es");
        let serie2 = new Serie("Los serrano", "USA", "23-05-2010", "Profesor hace metanfetamina", "www.google.es");
        this.#videomodel.addCategory(categoria3);
        this.#videomodel.assingCategory(peli, categoria3);
        this.#videomodel.assingCategory(serie, categoria3);
        this.#videomodel.assingCategory(serie2, categoria3);
        this.#videoview.catComedia(this.#videomodel.getProdsByCategory(categoria3));
        
        this.#videomodel.DeassingCategory(peli, categoria3);
        this.#videomodel.DeassingCategory(serie, categoria3);
        this.#videomodel.DeassingCategory(serie2, categoria3);
        this.#videomodel.removeCategory(categoria3);
        this.#videomodel.removeProd(peli);
        this.#videomodel.removeProd(serie);
        this.#videomodel.removeProd(serie2);


        let x=this.handleAccion;
        
        let z=this.handleTerror;
        $("#categories .row  .col-lg-4 .nav-link").bind("click", function(){
            $(this).after(x);
        });
        
        $("#categories .row  .col-lg-4 .nav-link2").bind("click", function(){
            $(this).after(z);
        });


        let p1=this.handleProd;

        $("#producciones .row .col-lg-4 .1").bind("click", function(){
            $(this).after(p1);
        });
        $("#producciones .row .col-lg-4 .2").bind("click", function(){
            $(this).after(p1);
        });
        $("#producciones .row .col-lg-4 .3").bind("click", function(){
            $(this).after(p1);
        });
    }

    handleDirectores= () => {
        this.#videoview.init();
        
        let director = new Person("David", "nolan", "Pasamontes", "24-7-95", "www.google.es");
        let director2 = new Person("Paco", "del", "Toro", "24-7-95", "www.google.es");
        this.#videomodel.addDirectors(director);
        this.#videomodel.addDirectors(director2);
       
        this.#videoview.director(this.#videomodel.director);

        
        
        let x=this.handleAccion;
        let y=this.handleComedia;
        let z=this.handleTerror;

        $("#categories .row  .col-lg-4 .nav-link").bind("click", function(){
            $(this).after(x);
        });
        $("#categories .row  .col-lg-4 .nav-link2").bind("click", function(){
            $(this).after(y);
        });
        $("#categories .row  .col-lg-4 .nav-link3").bind("click", function(){
            $(this).after(z);
        });


       
        let d1=this.handleDirec;

        $("#director .row .col-lg-4 .1").bind("click", function(){
            $(this).after(d1);
        });
        $("#director .row .col-lg-4 .2").bind("click", function(){
            $(this).after(d1);
        });

        this.#videomodel.removeDirectors(director);
        this.#videomodel.removeDirectors(director2);
        


        
    }

    handleActores= () => {
        this.#videoview.init();
        
        let actor = new Person("Raul", "Figueras", "Pasamontes", "24-7-95", "www.google.es");
        let actor2 = new Person("Juan", "Roddriguez", "Bermejo", "24-7-95", "www.google.es");
        
        this.#videomodel.addActors(actor);
        this.#videomodel.addActors(actor2);
       
        this.#videoview.actors(this.#videomodel.actors);
        
       


        
        let x=this.handleAccion;
        let y=this.handleComedia;
        let z=this.handleTerror;
        $("#categories .row  .col-lg-4 .nav-link").bind("click", function(){
            $(this).after(x);
        });
        $("#categories .row  .col-lg-4 .nav-link2").bind("click", function(){
            $(this).after(y);
        });
        $("#categories .row  .col-lg-4 .nav-link3").bind("click", function(){
            $(this).after(z);
        });

        let d1=this.handleActor;

        $("#actor .row .col-lg-4 .1").bind("click", function(){
            $(this).after(d1);
        });
        $("#actor .row .col-lg-4 .2").bind("click", function(){
            $(this).after(d1);
        });


        this.#videomodel.removeActors(actor);
        this.#videomodel.removeActors(actor2);
    }



    
       
    








}






export default VideoController;