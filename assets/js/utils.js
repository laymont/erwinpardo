// archivo block-context-menu.js

// Crea un elemento div para el mensaje
const message = document.createElement("div");
// Agrega un estilo CSS al elemento
message.style.cssText = `
    background-color: lightgray;
    padding: 10px;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    text-align: center;
`;
// Agrega el contenido del mensaje
message.innerHTML = "No se puede copiar contenido de esta pagina";

// Añade un evento al documento para bloquear el menu contextual
document.addEventListener("contextmenu", event => {
  // detiene la propagación del evento y previene la apertura del menú contextual
  event.preventDefault();
  //Agrega el mensaje al body
  document.body.appendChild(message);
  // Elimina el mensaje despues de 3 segundos
  setTimeout(() => {
    document.body.removeChild(message);
  }, 3000);
});

// Añade un evento al documento para bloquear las capturas de pantalla
document.addEventListener("keydown", function(e) {
  // Verifica si la tecla presionada es la combinación de teclas para hacer captura de pantalla (generalmente es "Imp Pant" o "Fn + Imp Pant" dependiendo del teclado)
  if(e.keyCode === 44 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) || (e.keyCode == 44 && e.key == "PrintScreen")){
    e.preventDefault();
    // Muestra el mensaje
    document.body.appendChild(message);
    setTimeout(() => {
      document.body.removeChild(message);
    }, 3000);
  }
});
