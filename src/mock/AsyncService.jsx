const products =[
{id:'01',
name:"Combo Stickers x10",
category:"libreria",
price:5000,
stock:10,
img:"https://http2.mlstatic.com/D_NQ_NP_765044-MLA82461534455_022025-O.webp"
},



{id:'02',
name:"Cartuchera de tela",
category:"libreria",
price:11000,
stock:10,
img:"https://dcdn-us.mitiendanube.com/stores/001/720/244/products/20230709_1104131-039e4be09bd4d183b016889135112873-1024-1024.jpg"
},
{id:'03',
name:"Taza mágica",
category:"bazar",
price:9000,
stock:10,
img:"https://hilocreations.es/wp-content/uploads/2023/02/img_3008_jpg-scaled.jpg"
},
{id:'04',
name:"Post-it gatuno",
category:"libreria",
price:2950,
stock:10,
img:"https://img.joomcdn.net/e5812ad7f96b1db501476d1074d8b5582f8f97b3_original.jpeg"
}
]

let error= false;

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!error) {
               resolve(products) // Simula una respuesta exitosa
            }else {
                reject("Error al obtener los productos"); // Simula un error
            }
            
        }, 2000); // simula una demora de red
    });
}