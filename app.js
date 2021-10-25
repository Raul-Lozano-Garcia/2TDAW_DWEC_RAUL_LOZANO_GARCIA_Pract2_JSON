"use strict"

let ordenar=prompt("¿Como quieres mostrar los datos ordenados por nombre. ¿De manera ascendente (por defecto) o descendente?") || "ascendente";
let categoria=prompt("¿Por qué tipo de carne lo quieres filtrar? (whopper, burger o pollo) (dejar vacío si no se quiere filtrar)");
document.write(`
<header>
    <div class="logo">
        <img src="https://1000marcas.net/wp-content/uploads/2019/12/Logo-Burger-King.png" alt="logo">
    </div>
    <h1>Lista de hamburguesas</h1>
</header>
<main>
`);

let fecha;

if(ordenar.toLocaleLowerCase()==="ascendente"){
    hamburguesas.sort(
        (a,b)=>{
            return a["nombre"].localeCompare(b["nombre"]);
        });
}else if(ordenar.toLocaleLowerCase()==="descendente"){
    hamburguesas.sort(
        (a,b)=>{
            return b["nombre"].localeCompare(a["nombre"]);
        });
}else{
    alert("No has introducido un orden válido, por lo que se mostrarán las hamburguesas sin orden");
}

let ham_filtradas=hamburguesas.filter(
    (item)=>{
        return item["tipo de carne"].includes(categoria.toLowerCase());
    }
);

if(ham_filtradas.length===0){
    alert("No has introducido un tipo de carne válido, por lo que no se mostrarán hamburguesas");
}

ham_filtradas.forEach(
    (item,cont)=>{
        fecha=item["fecha de creacion"].split("-");
        document.write(`
        <main>
            <section>
                <article>
                    <div class="burger">
                        <img src="${item["imagen"]}" alt="hamburguesa${cont}">
                    </div>
                    <h2>${item["nombre"]}</h2>
                    <p>${item["precio"]}€</p>
                    <p>${item["ingredientes"]}</p>
                    <p>${item["peso"]}g</p>
                    <p>${item["tipo de carne"]}</p>
                    `);
                    switch (item["lechuga"]) {
                        case true:
                            document.write("<p>Con lechuga</p>");
                            break;
                    
                        case false:
                            document.write("<p>Sin lechuga</p>");
                            break;
                    }
                    document.write(`
                    <p>${fecha[2]}/${fecha[1]}/${fecha[0]}</p>
                    <a href="${item["pagina del producto"]}" target="_blank">Página del producto</a>
                </article>
                <form action="#" method="post">
                    <fieldset>
                        <legend>Actualizar datos de ${item["nombre"]}</legend>
                        <div>
                            <label for="nombre${cont}">Nombre</label>
                            <input type="text" name="nombre${cont}" id="nombre${cont}" value="${item["nombre"]}">
                        </div>   
                        <div>
                            <label for="precio${cont}">Precio</label>
                            <input type="number" name="precio${cont}" id="precio${cont}" value="${item["precio"]}">
                        </div>    
                        <div>
                            <label for="peso${cont}">Peso</label>
                            <input type="number" name="peso${cont}" id="peso${cont}" value="${item["peso"]}">
                        </div>  
                        
                        <div>
                            <label for="carne${cont}">Tipo de carne</label>
                            <input type="text" name="carne${cont}" id="carne${cont}" value="${item["tipo de carne"]}">
                        </div>
                        <div>
                            <label for="lechuga${cont}">¿Lleva lechuga?</label>
                            <input type="text" name="lechuga${cont}" id="lechuga${cont}" value="${item["lechuga"]}">
                        </div>      
                        <div>
                            <label for="fecha${cont}">Fecha de creación</label>
                            <input type="date" name="fecha${cont}" id="fecha${cont}" value="${item["fecha de creacion"]}">
                        </div>       
                        <div>
                            <label for="imagen${cont}">URL imagen</label>
                            <input type="text" name="imagen${cont}" id="imagen${cont}" value="${item["imagen"]}">
                        </div>    
                        <div>
                            <label for="pagina${cont}">URL pagina del producto</label>
                            <input type="text" name="pagina${cont}" id="pagina${cont}" value="${item["pagina del producto"]}">
                        </div>  
                        <div>
                            <label for="ingredientes${cont}">Ingredientes</label>
                            <textarea name="ingredientes${cont}" rows="3" id="ingredientes${cont}">${item["ingredientes"]}</textarea>
                        </div>        
                        <input type="submit" name="enviar${cont}" value="Enviar modificaciones">         
                    </fieldset>
                </form>
            </section>
        `);
    }
)
document.write("</main>");
