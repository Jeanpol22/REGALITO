// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "FELIZ 3 MESES TIRSA, TE AMOOO", time: 14 },
  { text: "BESO", time: 19 },
  { text: "Tan simple como eso", time: 21.5 },
  { text: "Tan simple como un BESO", time: 26 },
  { text: "Todo puede cambiar", time: 30},
  { text: "BESO", time: 35 },
  { text: "Tan simple como eso", time: 37.3 },
  { text: "Tan simple como un BESO", time: 41.5 },
  { text: "TODO PUEDE ARREGLAR", time: 45 },
  { text: "BÉSAME", time: 51 },
  { text: "Junta tus labios con los mios", time: 54 },
  { text: "OTRA VEZ", time: 57 },
  { text: "Que quiero AMARTE Y DECIRTE", time: 60 },
  { text: "LO QUE SE", time: 61.5 },
  { text: "Pero no encuentro las palabras", time: 65.5
   },
  { text: "BÉSAME", time: 70 },
    { text: "BÉSAME", time: 74.5 },
  { text: "Junta tus labios con los mios", time: 77 },
  { text: "OTRA VEZ", time: 80 },
  { text: "Que para enamorarte", time: 83 },
  { text: "Como lo hice ayer", time: 86 },
  { text: "Hay que empezar por acercarse", time: 89 },
  { text: "BÉSAME", time: 92 },
   { text: "BESO", time: 109 },
  { text: "Fragmento de universo", time: 112 },
  { text: "Ritual frente a lo adverso", time: 116.5 },
  { text: "Capricho natural", time: 120.5},
  { text: "BESO", time: 125 },
  { text: "Lenguaje tan diverso", time: 127.8 },
  { text: "Camino sin regreso", time: 132 },
  { text: "ELIXIR INMORTAL", time: 136 },
    { text: "BÉSAME", time: 141 },
  { text: "Junta tus labios con los mios", time: 144 },
  { text: "OTRA VEZ", time: 147 },
  { text: "Que quiero AMARTE Y DECIRTE", time: 150 },
  { text: "LO QUE SE", time: 153 },
  { text: "Pero no encuentro las palabras", time: 156
   },
  { text: "BÉSAME", time: 160 },
    { text: "BÉSAME", time: 164 },
  { text: "Junta tus labios con los mios", time: 167.5 },
  { text: "OTRA VEZ", time: 170},
  { text: "Que para enamorarte", time: 173 },
  { text: "Como lo hice ayer", time: 176 },
  { text: "Hay que empezar por acercarse", time: 179 },
  { text: "BÉSAME", time: 182.5 },
  { text: "BÉSAME", time: 194.5 },
 //aaç

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);