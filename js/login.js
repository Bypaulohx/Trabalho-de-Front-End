(function () {
    const form = document.getElementById('login-form');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const passwordToggle = document.querySelector('.password-toggle');
    const toast = document.getElementById('toast');

    let toastTimer = null;

    function showToast(message) {
        clearTimeout(toastTimer);
        toast.textContent = message;
        toast.hidden = false;

        requestAnimationFrame(() => toast.classList.add('is-visible'));

        toastTimer = setTimeout(() => {
            toast.classList.remove('is-visible');
            toast.hidden = true;
        }, 3200);
    }

    function togglePassword() {
        const visible = password.type === 'password';
        password.type = visible ? 'text' : 'password';
        passwordToggle.setAttribute('aria-pressed', String(visible));
        passwordToggle.setAttribute('aria-label', visible ? 'Ocultar senha' : 'Mostrar senha');
        passwordToggle.firstElementChild.className = visible ? 'bi bi-eye-slash' : 'bi bi-eye';
    }

    document.addEventListener('click', (event) => {
        const actionElement = event.target.closest('[data-action]');
        if (!actionElement) return;

        switch (actionElement.dataset.action) {
            case 'toggle-password':
                togglePassword();
                break;
            case 'social':
                showToast(`Login com ${actionElement.dataset.provider} indisponível neste projeto de estudo.`);
                break;
            case 'forgot':
                showToast('A recuperação de senha ainda não está disponível neste projeto.');
                break;
            case 'create-account':
                showToast('O cadastro ainda não está disponível neste projeto de estudo.');
                break;
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!email.validity.valid) {
            showToast('Informe um e-mail válido para continuar.');
            email.focus();
            return;
        }

        if (password.value.length < 6) {
            showToast('A senha precisa ter pelo menos 6 caracteres.');
            password.focus();
            return;
        }

        showToast('Login validado. Esta tela não faz autenticação real.');
    });
})();
