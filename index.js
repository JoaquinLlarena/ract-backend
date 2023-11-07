 class ProducManager {

    constructor() {

        this.products = [ ]
    }

    static id = 0


    addProducts (title, description, price, image, codigo, stock, ) {
        ProducManager.id++
        this.products.push({
            title, description, price, image, codigo, stock, id: ProducManager.id
        });

    }

    getProducts (){
        return this.products;
    }

    getProductById (id) {
        if (! this.products.find((prod) => prod.id === id))
        {
            console.log("not found")
        }
        else{console.log("existe")}


    }
    }

 const productos = new ProducManager 

 // Console log para ver el array vacio 
 console.log(productos.getProducts())

 productos.addProducts
 (     'motorola' , '5g - 8gb RAM - 128gb ROM', 100000 , "imagen1" , "abc123" , 5)

 productos.addProducts
 (     'samsung' , '5g - 8gb RAM - 128gb ROM', 150000 , "imagen2" , "abc124" , 5)

     

 //Console log para ver el array con un producto nuevo 
 console.log(productos.getProducts())

 console.log(productos.getProductById(5))