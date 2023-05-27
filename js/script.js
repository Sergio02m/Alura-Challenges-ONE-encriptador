const ingresotexto = document.getElementById("ingresotexto");

const btnencriptar = document.getElementById("btnencriptar");

const btndesencriptar = document.getElementById("btndesencriptar");

const mensajefinal = document.getElementById("mensajefinal");

const btncopiar = document.getElementById("btncopiar");

const munheco = document.getElementById("munheco");

const textinfo = document.getElementById("textinfo");

const derecho = document.getElementById("derecho");

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
]

const formato = (nuevovalor) => {

    mensajefinal.innerHTML = nuevovalor;
    ingresotexto.value = "";
    munheco.classList.add("oculto");
    textinfo.style.display = "none";
    btncopiar.style.display = "block";
    derecho.classList.add("comportamiento-final");
    mensajefinal.classList.add("comportamiento-final");
}

const eliminar = () => {

    mensajefinal.innerHTML = "";
    munheco.classList.remove("oculto");
    textinfo.style.display = "block";
    btncopiar.style.display = "none";
    derecho.classList.remove("comportamiento-final");
    mensajefinal.classList.remove("comportamiento-final");
    ingresotexto.focus();

}

const limpiar= () => {

    ingresotexto.value = "";
    ingresotexto.focus();
}

btnencriptar.addEventListener("click", ()=> {

    const texto = ingresotexto.value;

    if (texto == texto.toLowerCase ()){

        if (texto != "") {
            function encriptar(newtexto){
                for(let i = 0; i < remplazar.length; i++ ){
                    if(newtexto.includes(remplazar[i][0])){
                        newtexto = newtexto.replaceAll(remplazar[i][0],remplazar[i][1])
                    };
                };
                return newtexto
    
            };
            formato(encriptar(texto));

        }else {
            alert("ingrese el texto a encriptar");
            eliminar();
        };

    }else {
        alert("Ingrese solo letras minúsculas sin acentos" );
        limpiar();
        
    }

    
    
    
    
});

btndesencriptar.addEventListener("click", ()=> {
    const texto=ingresotexto.value;
    
    if (texto != "") {

        function desencriptar(newtexto){
            for(let i = 0; i < remplazar.length; i++ ){
                if(newtexto.includes(remplazar[i][1])){
                    newtexto = newtexto.replaceAll(remplazar[i][1],remplazar[i][0])
                };
            };
            return newtexto

        };
        formato(desencriptar(texto))
    } else {
        alert("ingrese el texto a desencriptar")
        eliminar();
    
        
    }
            
    
    
});

btncopiar.addEventListener("click", ()=> {

    let texto = mensajefinal;
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado")
    eliminar();
    

});