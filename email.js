// ===== EMAILJS - CONFIGURACAO DO FORMULARIO =====

document.addEventListener('DOMContentLoaded', () => {
    const emailJs = window.emailjs;
    const form = document.querySelector('form');

    if (!emailJs) {
        console.error('EmailJS nao foi carregado. Verifique o script CDN em index.html.');
        return;
    }

    if (!form) {
        console.error('Formulario nao encontrado na pagina.');
        return;
    }

    emailJs.init({
        publicKey: 'PFWeXYIlQlAsSNZXT'
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const celular = document.getElementById('celular').value.trim();
        const mensagem = document.querySelector('textarea').value.trim();

        if (!nome || !email || !mensagem) {
            alert('Preencha os campos obrigatorios: Nome, Email e Mensagem!');
            return;
        }

        const templateParams = {
            to_email: 'meirellespedro71@gmail.com',
            name: nome,
            user_name: nome,
            sender_name: nome,
            from_name: nome,
            email: email,
            user_email: email,
            from_email: email,
            reply_to: email,
            celular: celular,
            phone: celular,
            message: mensagem,
            subject: `Novo contato de ${nome}`
        };

        emailJs.send('service_4d48d88', 'template_qh3ylke', templateParams)
            .then((response) => {
                console.log('Sucesso!', response);
                alert('Mensagem enviada com sucesso! Responderei em breve.');
                form.reset();
            })
            .catch((error) => {
                console.error('Erro completo:', error);
                console.error('Codigo de erro:', error.status);
                console.error('Texto do erro:', error.text);
                alert('Houve um erro ao enviar a mensagem. Verifique o console (F12) para detalhes.');
            });
    });
});
