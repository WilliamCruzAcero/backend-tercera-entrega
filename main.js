const { error } = require('console');
const fs = require('fs');

class Contenedor {
    constructor(archivoNombre) {
        this.archivoNombre = archivoNombre;
    }

        save (title, price, thumbnail ) {
            this.title = title;
            this.price = price;
            this.thumbnail = thumbnail;
        

        let data = `{ title: ${this.title} \n price: ${this.price} \n thumbnail: ${this.humbnail} \n id: }`

        fs.appendFile(this.archivoNombre, data + '\n',error => {
            if(error){ 
                return console.log(error);
            }
            console.log(data);
        });
    }

    getById () {

    }
    
    getAll () {
        fs.appendFile(this.archivoNombre, 'utf-8', (error, contenido) => {
            if(error) {
                console.log(error);
            }else{
                console.log(contenido);
            }

        });
    }

    deleteById () {

    }
    deleteAll () {
        fs.unlink(this.archivoNombre, error => {
            if (error) {
                console.log(error);
            }else{
                console.log(`El archivo ${this.archivoNombre} ha sido borrado con exito.`);
            }
        })
    }
}

const objContenedor = new Contenedor('productos.txt');
objContenedor.save(
    "arveja", 3.25, 'https://media.istockphoto.com/photos/harvest-of-freshly-picked-green-peas-in-a-bowl-on-a-wooden-rustic-picture-id1276945193?s=612x612'
  )