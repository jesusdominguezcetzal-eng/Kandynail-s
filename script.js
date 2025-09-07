document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cita-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const tipoServicio = document.getElementById('tipo-servicio').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;
        const comentarios = document.getElementById('comentarios').value;

        // --- Opción de correo electrónico directo (la más sencilla, pero menos fiable) ---
        const emailDestino = "kandy856@gmail.com"; // ¡Correo de la manicurista!
        const asunto = "Nueva cita agendada";
        const cuerpo = `Nombre: ${nombre}\nTeléfono: ${telefono}\nServicio: ${tipoServicio}\nFecha: ${fecha}\nHora: ${hora}\nComentarios: ${comentarios}`;

        const mailtoUrl = `mailto:${emailDestino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

        window.location.href = mailtoUrl;

        alert("Se abrirá tu programa de correo para enviar la cita.");

        // ---  (Otras opciones, como Google Sheets + Apps Script, irían aquí) ---

    });
});