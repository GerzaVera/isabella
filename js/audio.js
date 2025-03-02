document.addEventListener('DOMContentLoaded', () => {
    const musicButton = document.getElementById('musicButton');
    const audioPlayer = document.getElementById('audioPlayer');

    musicButton.style.display = "none";

    let isPlaying = false; // Inicialmente no se reproduce música.
  
    musicButton.addEventListener('click', () => {
      if (isPlaying) {
        audioPlayer.pause();
        musicButton.textContent = '🎵'; // Cambia el ícono.
      } else {
        audioPlayer.play();
        musicButton.textContent = '🔇'; // Cambia el ícono.
      }
      isPlaying = !isPlaying; // Cambia el estado de reproducción.
    });
  
    // Intentar iniciar la reproducción automáticamente.
    audioPlayer.play().then(() => {
      isPlaying = true;
      musicButton.textContent = '🔇'; // Actualiza el botón si comienza la música.
    }).catch(() => {
      console.warn('El navegador bloqueó la reproducción automática. Se requiere interacción del usuario.');
    });
  });


function openInvitation() {
    document.body.classList.add('open');
    musicButton.style.display = "block";
}

