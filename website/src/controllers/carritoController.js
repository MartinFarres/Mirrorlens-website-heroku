const models = require("../../src/database/models")
const productServices = require("../services/products")

const controller = {
    agregarItem: async (req, res) =>{
        let carrito = req.session.carrito
        let productId = req.params.id
        let product = await productServices.findById(productId)
        if (product){
            let position = controller.verificar(carrito, productId)
            if (position == -1){
                let datos = {
                    id: product.id,
                    product_name: product.product_name,
                    description: product.description,
                    image_1: product.ImageProducts.image_1,
                    cantidad: 1,
                    price: product.price,
                    totalPrice: product.price
                }
                carrito.push(datos)
            }else{
                //aumentar la cantidad
                let dato = carrito[position]
                dato.cantidad += 1
                dato.totalPrice = dato.cantidad * dato.price
                carrito[position] = dato
            }
            req.session.carrito = carrito
            console.log(req.session.carrito)
            
        }
    },

    quitarItem: (req, res)=>{
        let carrito = req.session.carrito
        let productId = req.params.id
        let position = controller.verificar(carrito, productId)
        let dato = carrito[position]
        if (dato > 1){
            dato.cantidad -= 1
            dato.totalPrice = dato.cantidad * dato.price
            carrito[position] = dato
            req.session.carrito = carrito
            
        }else{
            let newCarrito = carrito.filter((product)=>{
                return product.id != productId 
            })
            req.session.carrito = newCarrito
            
        }
    },

    mostrarCarrito: (req, res)=>{
        res(200).json(req.session.carrito)
    },

    verificar: (carrito, productId)=>{
        var position = -1
        for (let i = 0; i < carrito.length; i++){
            if(carrito[i].productId == productId){
                position = i;
                break;
            }
        }
    }


}

module.exports = controller