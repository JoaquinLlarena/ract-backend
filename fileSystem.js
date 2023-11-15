
import {promises as fs} from "fs"

class ProductManager {
    constructor(){
        this.patch = "./productos.txt"
        this.products = []
    }

    static id = 0

    addProduct = async (title, price, description, image, code, stock) => {
        ProductManager.id++    
        let newProduct = {
            title,
            price,
            description,
            image,
            code,
            stock,
            id: ProductManager.id
        };

        this.products.push(newProduct)

           getProducts = async () => {
           let res = await fs.readFile(this.patch, "utf-8")
           console.log(res)
        }

        await fs.writeFile(this.patch, JSON.stringify(this.products));

     
    }

    readProducts = async ()=> {
        let res = await fs.readFile(this.patch, "utf-8")
        return JSON.parse(res)
    }

    getProducts = async () => {
        let respuesta = await this.readProducts()
        return console.log(respuesta)
        
     
     }

     getProductsById = async (id)=> {

        let respuesta2 = await this.readProducts()
        if(!respuesta2.find(product => product.id === id)
        ){console.log("producto no encontrado")}
        else {
         console.log(respuesta2.find((product) => product.id === id))
        }
    
     }

     deleteProductById = async (id)=> {
        let respuesta3 = await this.readProducts();
        let productFilter = respuesta3.filter(products => products.id != id)
        console.log()

        await fs.writeFile(this.patch, JSON.stringify(productFilter));
        console.log("producto delete")
     }

     updateProducts = async ({id, ...producto}) => {
       await this.deleteProductById(id);

       let productOld = await this.readProducts()

       let productsModif = [
        {id, ...producto},
        ...productOld
       ];
       await fs.writeFile(this.patch, JSON.stringify(productsModif));

     }
}

const productos = new ProductManager

 
//   productos.addProduct("titulo1", "1000", "god", "img1", "abc123", "10");
//  productos.addProduct("titulo2", "4000", "godines", "img2", "abc124", "10");
//  productos.addProduct("titulo3", "7000", "godinez", "img3", "abc125", "15");

 // productos.getProducts()
 
// productos.getProductsById(2)

// productos.deleteProductById(3)

productos.updateProducts({
    title: 'titulo2',
    price: '4500',
    description: 'godines',
    image: 'img2',
    code: 'abc124',
    stock: '10',
    id: 2

})