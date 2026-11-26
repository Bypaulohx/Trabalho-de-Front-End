(function (Portfolio) {
    const data = Portfolio.data;

    const elements = {
        menuButton: document.querySelector('.menu-toggle'),
        navLinks: document.getElementById('nav-links'),
        projectsGrid: document.getElementById('projects-grid'),
        seriesList: document.getElementById('series-list'),
        form: document.getElementById('contact-form'),
        name: document.getElementById('nome'),
        phone: document.getElementById('whatsapp'),
        email: document.getElementById('email'),
        toast: document.getElementById('toast'),
        year: document.getElementById('year')
    };

    let toastTimer = null;

    function createIcon(className) {
        const icon = document.createElement('i');
        icon.className = className;
        icon.setAttribute('aria-hidden', 'true');
        return icon;
    }

    function renderProjects() {
        const fragment = document.createDocumentFragment();

        data.projects.forEach((project) => {
            const card = document.createElement('article');
            card.className = 'project-card';

            const image = document.createElement('img');
            image.src = project.image;
            image.alt = `Ilustração do projeto ${project.title}`;
            image.loading = 'lazy';

            const body = document.createElement('div');
            body.className = 'project-body';

            const category = document.createElement('span');
            category.className = 'category';
            category.textContent = project.category;

            const title = document.createElement('h3');
            title.textContent = project.title;

            const description = document.createElement('p');
            description.textContent = project.description;

            let link;
            if (project.href) {
                link = document.createElement('a');
                link.href = project.href;
                link.className = 'project-link';
                if (project.external) {
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                }
            } else {
                link = document.createElement('button');
                link.type = 'button';
                link.className = 'project-soon';
                link.dataset.action = 'project-soon';
                link.dataset.title = project.title;
            }

            link.append(document.createTextNode(project.linkText), createIcon('bi bi-box-arrow-up-right'));
            body.append(category, title, description, link);
            card.append(image, body);
            fragment.append(card);
        });

        elements.projectsGrid.replaceChildren(fragment);
    }

    function renderSeries() {
        const fragment = document.createDocumentFragment();

        data.series.forEach((item) => {
            const entry = document.createElement('li');
            const link = document.createElement('a');
            link.href = item.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.append(document.createTextNode(item.title), createIcon('bi bi-play-circle'));
            entry.append(link);
            fragment.append(entry);
        });

        elements.seriesList.replaceChildren(fragment);
    }

    function showToast(message) {
        clearTimeout(toastTimer);
        elements.toast.textContent = message;
        elements.toast.hidden = false;

        requestAnimationFrame(() => elements.toast.classList.add('is-visible'));

        toastTimer = setTimeout(() => {
            elements.toast.classList.remove('is-visible');
            elements.toast.hidden = true;
        }, 3200);
    }

    function setMenu(open) {
        elements.navLinks.classList.toggle('is-open', open);
        elements.menuButton.setAttribute('aria-expanded', String(open));
        elements.menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    }

    document.addEventListener('click', (event) => {
        const actionElement = event.target.closest('[data-action]');
        if (actionElement && actionElement.dataset.action === 'project-soon') {
            showToast(`${actionElement.dataset.title}: projeto em andamento.`);
            return;
        }

        if (event.target.closest('.menu-toggle')) {
            setMenu(!elements.navLinks.classList.contains('is-open'));
            return;
        }

        if (event.target.closest('.nav-links')) {
            setMenu(false);
            return;
        }

        setMenu(false);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') setMenu(false);
    });

    elements.form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (elements.name.value.trim().length < 2) {
            showToast('Informe seu nome completo.');
            elements.name.focus();
            return;
        }

        if (elements.phone.value.replace(/\D/g, '').length < 10) {
            showToast('Informe um número de WhatsApp com DDD.');
            elements.phone.focus();
            return;
        }

        if (!elements.email.validity.valid) {
            showToast('Informe um e-mail válido.');
            elements.email.focus();
            return;
        }

        showToast('Mensagem registrada. Este formulário é apenas demonstrativo.');
        elements.form.reset();
    });

    renderProjects();
    renderSeries();
    elements.year.textContent = String(new Date().getFullYear());
})(window.Portfolio);
