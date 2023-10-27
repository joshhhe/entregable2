//trabajo de segunda pre entrega 

class Productos{
    constructor(nombre,precio,color,TipoPro,stock){
        this.nombre  = nombre;
        this.precio  = precio;
        this.color   = color;
        this.TipoPro = TipoPro;
        this.stock   = stock;
    }
}



const productos =[];

productos.push(new Productos("jordan retro1",200,"rojo","zapatilla",30));
productos.push(new Productos("air max",100,"azul","zapatilla",40));
productos.push(new Productos("nike tn plus",150,"morado","zapatilla",19));
productos.push(new Productos("jordan retro 3",200,"negro","zapatilla",21));
productos.push(new Productos("nike vapormax",200,"naranjo","zapatilla",25));
productos.push(new Productos("nike slide",60,"negro","sandalias",39));
productos.push(new Productos("air force one",120,"blancas","zapatilla",20));
productos.push(new Productos("nike dunk ",100,"verdes","zapatilla",30));
console.log(productos);


alert("Que producto desea buscar")
let encontrar = prompt("ingrese el nombre del producto que desea encontrar")

while(encontrar!="no deseo mas productos"){
    let  search = productos.find((item) => item.nombre === encontrar); // esto devuelve un true y un objeto que se guarda en la variable search
if(search){
    alert(`Nombre: ${search.nombre}
    Precio: ${search.precio}
    Color:${search.color}`);

}else{
    alert("Producto no  en contrado ");
}

    encontrar=prompt("Ingrese el nombre del producto que desea encontrar");
}

let cantidad = Number(prompt("ingrese cantidad que desea comprar del producto seleccionado"));
let filtro = productos.filter((item)=>item.stock >= cantidad );

if(filtro.length == 0){
    alert("NO hay  stock para vender " )
}else{
    filtro.forEach((filtro)=>{
        alert(` Estos son todos los productos que hay para vender en base a su peticion de compra 
        Nombre: ${filtro.nombre}
        stock: ${filtro.stock}`)
    })
}





