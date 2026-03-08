document.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const interactiveArea = document.getElementById('interactive-area');
    const successMessage = document.getElementById('success-message');

    let yesScale = 1;
    let yesFontSize = 1.2;

    let clickCount = 0;

    // Cuando se presiona "No"
    btnNo.addEventListener('click', (e) => {
        e.preventDefault();
        clickCount++;

        // Aumentar el tamaño del botón Sí progresivamente más rápido
        yesScale += 0.5 + (clickCount * 0.2);
        yesFontSize += 0.1;

        btnYes.style.transform = `scale(${yesScale})`;

        // Asegurar que el botón Sí cubra al No
        btnYes.style.position = 'relative';
        btnYes.style.zIndex = '100';

        // Opcional: Hacer que el botón Sí sea más persuasivo
        const textOptions = ["Sí", "diga que sí", "Por favooorrr, diga que si", "para ya no ser necio diga que si jeje", "No hay otra opción, diga que si", "Ya diga que SÍ!"];
        if (clickCount < textOptions.length) {
            btnYes.innerText = textOptions[clickCount];
        } else {
            btnYes.innerText = textOptions[textOptions.length - 1];
        }

        // El botón No se opaca ligeramente
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
