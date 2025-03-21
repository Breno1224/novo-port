document.addEventListener("DOMContentLoaded", function () {
    const menuHamburguer = document.querySelector(".menu-hamburguer");
    const navResponsiva = document.querySelector(".nav-responsiva");

    menuHamburguer.addEventListener("click", function () {
        // Alterna a classe "ativo" no menu hambúrguer e na navegação responsiva
        menuHamburguer.classList.toggle("ativo");
        navResponsiva.classList.toggle("ativo");
    });

    // Fecha o menu ao clicar em um link
    navResponsiva.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            menuHamburguer.classList.remove("ativo");
            navResponsiva.classList.remove("ativo");
        });
    });
});
        document.addEventListener("DOMContentLoaded", function () {
    const botoesLeiaMais = document.querySelectorAll(".leia-mais");

    botoesLeiaMais.forEach(botao => {
        botao.addEventListener("click", function (e) {
            e.preventDefault(); // Evita o comportamento padrão do link
            const servicoBox = botao.closest(".servico-box");
            const textoResumido = servicoBox.querySelector(".texto-resumido");
            const textoCompleto = servicoBox.querySelector(".texto-completo");

            if (textoCompleto.style.display === "none") {
                textoResumido.style.display = "none";
                textoCompleto.style.display = "block";
                botao.textContent = "Mostrar menos";
            } else {
                textoResumido.style.display = "-webkit-box";
                textoCompleto.style.display = "none";
                botao.textContent = "Leia mais";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os botões "Leia mais"
    const botoesLeiaMais = document.querySelectorAll(".leia-mais");

    botoesLeiaMais.forEach(botao => {
        botao.addEventListener("click", function (e) {
            e.preventDefault(); // Evita o comportamento padrão do link

            // Encontra o contêiner mais próximo (sobre-content)
            const sobreContent = botao.closest(".sobre-content");

            // Seleciona o texto resumido e o texto completo
            const textoResumido = sobreContent.querySelector(".texto-resumido");
            const textoCompleto = sobreContent.querySelector(".texto-completo");

            // Alterna entre mostrar e ocultar o texto completo
            if (textoCompleto.style.display === "none" || textoCompleto.style.display === "") {
                textoResumido.style.display = "none"; // Oculta o texto resumido
                textoCompleto.style.display = "block"; // Mostra o texto completo
                botao.textContent = "Mostrar menos"; // Altera o texto do botão
            } else {
                textoResumido.style.display = "-webkit-box"; // Mostra o texto resumido
                textoCompleto.style.display = "none"; // Oculta o texto completo
                botao.textContent = "Leia mais"; // Altera o texto do botão
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const fundoEstrelado = document.querySelector(".fundo-estrelado");

    // Adiciona estrelas fixas
    for (let i = 0; i < 100; i++) {
        const estrela = document.createElement("div");
        estrela.classList.add("estrela");
        estrela.style.top = `${Math.random() * 100}%`;
        estrela.style.left = `${Math.random() * 100}%`;
        estrela.style.animationDelay = `${Math.random() * 2}s`;
        fundoEstrelado.appendChild(estrela);
    }

    // Adiciona estrelas cadentes
    setInterval(() => {
        const estrelaCadente = document.createElement("div");
        estrelaCadente.classList.add("estrela-cadente");
        estrelaCadente.style.top = `${Math.random() * 100}%`;
        estrelaCadente.style.left = `${Math.random() * 100}%`;
        fundoEstrelado.appendChild(estrelaCadente);

        // Remove a estrela cadente após a animação
        setTimeout(() => {
            estrelaCadente.remove();
        }, 3000);
    }, 1000); // Adiciona uma estrela cadente a cada 1 segundo
});
document.addEventListener("DOMContentLoaded", function () {
    const barras = document.querySelectorAll(".progresso");

    barras.forEach(barra => {
        const progresso = barra.getAttribute("data-progresso");
        barra.style.width = progresso + "%"; // Define a largura da barra
    });
});
document.addEventListener('keydown', function(event) {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
    }
});
document.addEventListener('contextmenu', event => event.preventDefault());

