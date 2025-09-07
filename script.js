document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cita-form');
    const fechaInput = document.getElementById('fecha');
    const horaInput = document.getElementById('hora');
    const mensajeError = document.createElement('p'); // Crea el elemento p para el mensaje de error
    mensajeError.style.color = 'red'; // Estilo para que el mensaje sea rojo
    form.parentNode.insertBefore(mensajeError, form); // Inserta el mensaje antes del formulario
    // Array para almacenar las citas agendadas (fecha y hora)
    const citasAgendadas = [];

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const tipoServicio = document.getElementById('tipo-servicio').value;
        const fecha = fechaInput.value;
        const hora = horaInput.value;
        const comentarios = document.getElementById('comentarios').value;

        // Verifica si el horario ya está agendado
        if (citasAgendadas.some(cita => cita.fecha === fecha && cita.hora === hora)) {
            mensajeError.textContent = 'Horario no disponible'; // Muestra el mensaje de error
        } else {
            // Agenda la cita
            citasAgendadas.push({
                fecha: fecha,
                hora: hora
            });
            mensajeError.textContent = ''; // Limpia el mensaje de error

            // --- Opción de correo electrónico directo (la más sencilla, pero menos fiable) ---
            const emailDestino = "kandy856@gmail.com"; // ¡Correo de la manicurista!
            const asunto = "Nueva cita agendada";
            const cuerpo = `Nombre: ${nombre}\nTeléfono: ${telefono}\nServicio: ${tipoServicio}\nFecha: ${fecha}\nHora: ${hora}\nComentarios: ${comentarios}`;

            const mailtoUrl = `mailto:${emailDestino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

            window.location.href = mailtoUrl;

            alert("Se abrirá tu programa de correo para enviar la cita.");

            // ---  (Otras opciones, como Google Sheets + Apps Script, irían aquí) ---
        }
    });
});
