function iniciarRaspado(id, premio, clave) {
  // Si ya se usó este bono, mostrar mensaje
  if (localStorage.getItem(clave)) {
    document.getElementById(id).innerHTML =
      '<p style="color:white;text-align:center;">Ya usaste este bono 🎉</p>';
    return;
  }

  // Inicializar el raspado
  $('#' + id).wScratchPad({
    width: 300,
    height: 100,
    image: 'images/' + premio,              // premio oculto
    overlay: 'images/textura-metalica.png', // textura metálica
    size: 30,
    cursor: 'crosshair',                    // cursor visible al raspar
    scratchDown: function (e, percent) {
      if (percent > 50) {
        localStorage.setItem(clave, true);
        alert('¡Felicidades! Descubriste tu bono 🎉');
      }
    }
  });
}

// Inicializar los tres bonos al cargar la página
$(document).ready(function () {
  iniciarRaspado('bono1', 'bono1.png', 'raspadita_bono1');
  iniciarRaspado('bono2', 'bono2.png', 'raspadita_bono2');
  iniciarRaspado('bono3', 'bono3.png', 'raspadita_bono3');
});
