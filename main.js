const texto = document.getElementById("texto");
const textoFinal = document.getElementById("textoFinal");
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const btnCopiar = document.getElementById("btn-copiar");
const btnBorrar = document.getElementById("btn-borrar");

let llaves =[ 
    ["e" , "enter"],
    ["i" , "imes"],
    ["a" , "ai"],
    ["o" , "ober"],
    ["u" , "ufat"]
];

const reemplazar = (nuevoValor) => {
    texto.style.display = "none";
    textoFinal.style.display = "flex"
 
    textoFinal.innerHTML = nuevoValor

}

btnBorrar.addEventListener("click", () =>{
    var textarea = document.getElementById('texto');
    textarea.value = ''; // Borra el contenido del textarea
    
    texto.style.display = "flex";
    textoFinal.style.display = "none"
    swal("Listo", "TEXTO BORRADO!", "success");
});


btnEncriptar.addEventListener("click", () =>{
    const textoMinus = texto.value.toLowerCase()

    function encriptar(nuevoTexto){
        for(let i = 0; i < llaves.length; i++ ){
            if(nuevoTexto.includes(llaves[i][0])){
                nuevoTexto = nuevoTexto.replaceAll(llaves[i][0], llaves[i][1]);
                  
            };
        };
       
        swal("Listo", "ENCRIPTADO!", "success");
        
        return nuevoTexto
    }
    
    reemplazar(encriptar(textoMinus));

})


btnDesencriptar.addEventListener("click", () =>{
    const textoMinus = texto.value.toLowerCase()
    function desencriptar(nuevoTexto){
        for(let i = 0; i < llaves.length; i++ ){
            if(nuevoTexto.includes(llaves[i][1])){
                nuevoTexto = nuevoTexto.replaceAll(llaves[i][1], llaves[i][0])
            };
        };

        swal("Listo", "DESENCRIPTADO!", "success");

        return nuevoTexto
    }

    reemplazar( desencriptar(textoMinus))  
});

btnCopiar.addEventListener("click", () =>{
    let textoCopy = document.getElementById("textoFinal");
    // navigator.clipboard.writeText(texto.value);
    textoCopy.select();
    document.execCommand('copy');
        swal("Listo", "TEXTO COPIADO!", "success");
       

    textoFinal.innerHTML = " ";
    texto.style.display = "flex";
    textoFinal.style.display = "none";
});


