document.addEventListener("DOMContentLoaded", () => {

    const menuBotao = document.querySelector(".menu-botao");
    const menu = document.querySelector(".menu");
    const linksMenu = document.querySelectorAll(".menu a");
    const anoAtual = document.querySelector("#ano-atual");


    /* =====================================================
       ANO AUTOMÁTICO NO RODAPÉ
    ====================================================== */

    if (anoAtual) {
        anoAtual.textContent = new Date().getFullYear();
    }


    /* =====================================================
       MENU MOBILE
    ====================================================== */

    if (menuBotao && menu) {

        menuBotao.addEventListener("click", () => {

            const menuEstaAberto = menu.classList.toggle("aberto");

            menuBotao.classList.toggle("ativo");

            menuBotao.setAttribute(
                "aria-expanded",
                menuEstaAberto.toString()
            );

            document.body.classList.toggle(
                "menu-aberto",
                menuEstaAberto
            );

        });

    }


    linksMenu.forEach((link) => {

        link.addEventListener("click", () => {

            menu.classList.remove("aberto");

            menuBotao.classList.remove("ativo");

            menuBotao.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove("menu-aberto");

        });

    });


    /* =====================================================
       FECHAR MENU AO REDIMENSIONAR A TELA
    ====================================================== */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 1000) {

            menu.classList.remove("aberto");

            menuBotao.classList.remove("ativo");

            menuBotao.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove("menu-aberto");

        }

    });


    /* =====================================================
       ANIMAÇÕES AO ROLAR
    ====================================================== */

    const elementosAnimados = document.querySelectorAll(
        ".pilar, .card-servico, .segmento-card, .processo-item"
    );


    elementosAnimados.forEach((elemento) => {
        elemento.classList.add("revelar");
    });


    const observador = new IntersectionObserver(
        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visivel");

                    observador.unobserve(entrada.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    elementosAnimados.forEach((elemento) => {
        observador.observe(elemento);
    });


    /* =====================================================
       DESTAQUE DO LINK ATIVO NO MENU
    ====================================================== */

    const secoes = document.querySelectorAll(
        "main section[id]"
    );


    const destacarLinkAtivo = () => {

        const posicaoAtual = window.scrollY + 160;

        secoes.forEach((secao) => {

            const inicioSecao = secao.offsetTop;
            const alturaSecao = secao.offsetHeight;
            const idSecao = secao.getAttribute("id");

            const linkCorrespondente = document.querySelector(
                `.menu a[href="#${idSecao}"]`
            );


            if (
                posicaoAtual >= inicioSecao &&
                posicaoAtual < inicioSecao + alturaSecao
            ) {

                linksMenu.forEach((link) => {
                    link.classList.remove("ativo");
                });


                if (linkCorrespondente) {
                    linkCorrespondente.classList.add("ativo");
                }

            }

        });

    };


    window.addEventListener("scroll", destacarLinkAtivo);

    destacarLinkAtivo();

});
