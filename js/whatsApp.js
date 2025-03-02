function enviarMensaje(lada, numero) {
    var mensaje = document.getElementById('mensajeInput').value;
    var url = "https://api.whatsapp.com/send?phone=" + lada + numero + "&text=" + encodeURIComponent(mensaje);
    window.open(url, '_blank');
}

function validateForm(event) {
    var asistirSelect = document.getElementById("asistire");
    var familiaInput = document.getElementById("fullName").value;
    var guestNo = document.getElementById("guestNo").value;

    var confirmationMessage = asistirSelect.checked 
        ? "¿Estás seguro de mandar esta confirmación de asistencia?" 
        : "¿Estás seguro de no asistir al evento?";
        
    var confirmation = confirm(confirmationMessage);
    if (!confirmation) {
        event.preventDefault(); // Evita el envío del formulario
        return false;
    }

    var mensajeCA;
    if (asistirSelect.checked) {
        mensajeCA = `Hola, la familia ${familiaInput} confirmo su asistencia con ${guestNo} invitado(s).`;
    } else {
        mensajeCA = `Hola, la familia ${familiaInput} lamentablemente no podrá asistir.`;
    }

    // CAMBIAR NUMEROOOOOOOOOOOOOOOO WHATSAPP
    enviarMensajeCA('+52', '9812095118', mensajeCA);

    event.preventDefault(); // Evitar que el formulario haga un submit real
    return false;
}

  function enviarMensajeCA(lada, numero, mensajeCA) {
      var urlCA = "https://api.whatsapp.com/send?phone=" + lada + numero + "&text=" + encodeURIComponent(mensajeCA);
      window.open(urlCA, '_blank');
  }

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('whatsappForm').addEventListener("submit", validateForm);
  });