document.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const interactiveArea = document.getElementById('interactive-area');
    const successMessage = document.getElementById('success-message');

    let yesScale = 1;
    let yesFontSize = 1.2;

    // Cuando se presiona "No"
    btnNo.addEventListener('click', (e) => {
        e.preventDefault();
        // Aumentar el tamaño del botón Sí
        yesScale += 0.3;
        yesFontSize += 0.1;

        btnYes.style.transform = `scale(${yesScale})`;

        // El botón No se mantiene en su sitio de acuerdo a tus requerimientos:
        // "cada vez que haga click en el no, este no se mueva"

        // Podemos añadir un pequeño feedback visual de que se hizo click en no
        btnNo.style.opacity = parseFloat(window.getComputedStyle(btnNo).opacity) - 0.1;
        if (parseFloat(window.getComputedStyle(btnNo).opacity) < 0.3) {
            btnNo.style.opacity = 0.3; // no dejar que desaparezca del todo
        }
    });

    // Cuando se presiona "Sí"
    btnYes.addEventListener('click', () => {
        // Ocultar área interactiva con transición
        interactiveArea.style.transition = 'opacity 0.4s ease';
        interactiveArea.style.opacity = '0';

        setTimeout(() => {
            interactiveArea.style.display = 'none';
            // Mostrar mensaje de éxito
            successMessage.style.display = 'block';
        }, 400);
    });

    // Permitir saltarse la animación de entrada si el usuario hace clic en cualquier parte de la pantalla
    const messageContainer = document.querySelector('.message-container');
    const paras = document.querySelectorAll('.fade-in');

    document.body.addEventListener('click', (e) => {
        // Ignorar si se hace clic en los botones
        if (e.target.closest('.buttons-container')) return;

        paras.forEach(p => {
            p.style.animationDelay = '0s';
            p.style.animationDuration = '0.3s';
            p.style.opacity = '1';
            p.style.transform = 'translateY(0)';
        });
    }, { once: true });
});
