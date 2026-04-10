// ============================================================
// ARRAY DE OBJETOS — Projetos do Portfólio
// ============================================================
const projetos = [
    {
        id: 1,
        titulo: "Calculadora Lajes Pré-moldadas",
        descricao: "Calculadora desenvolvida para dimensionamento de lajes pré-moldadas, simplificando processos complexos de engenharia em uma interface intuitiva. Calcula diferentes tipos de lajes e gera relatórios técnicos completos.",
        tecnologias: ["Next.js", "React", "TypeScript", "CSS Modules", "Node.js"],
        imagem: "imgs/calculadora_iglume.png",
        link: "https://iglumelajes.com.br/calculadora-lajes/",
        categoria: "web"
    },
    {
        id: 2,
        titulo: "Site Empresarial — ED Engenharia",
        descricao: "Website institucional da ED Engenharia & Projetos, criando uma plataforma moderna e eficiente que destaca os serviços de engenharia e arquitetura com design clean e responsivo.",
        tecnologias: ["Next.js", "React", "TypeScript", "CSS Modules", "Node.js"],
        imagem: "imgs/ed_engenharia.png",
        link: "https://www.ed-engprojetos.com.br/",
        categoria: "web"
    },
    {
        id: 3,
        titulo: "Sorteio de Grupos — League of Legends",
        descricao: "Aplicação para sorteio dinâmico e personalizável de campeões do League of Legends. Permite definir regras como filtros por função, elo ou preferência para partidas equilibradas.",
        tecnologias: ["Next.js", "React", "TypeScript", "Node.js"],
        imagem: "imgs/rlol_me.png",
        link: "https://rlolme.vercel.app/",
        categoria: "web"
    },
    {
        id: 4,
        titulo: "Elipam — Controle Financeiro Pessoal",
        descricao: "Aplicação para gestão financeira pessoal, integrando-se com Google Sheets para sincronização automática de dados. Oferece importação de dados (.ofx) e dashboards gerenciais.",
        tecnologias: ["Next.js", "React", "TypeScript", "Node.js", "Google APIs"],
        imagem: "imgs/elipam_bills.png",
        link: null,
        categoria: "web"
    },
    {
        id: 5,
        titulo: "Gerenciamento de Obras",
        descricao: "Solução desktop integrada a SQLite para gestão completa de obras, automatizando orçamentos detalhados, acompanhamento de custos, medições e pagamentos com relatórios personalizados.",
        tecnologias: ["VBA", "SQLite", "MS Excel", "MS Word"],
        imagem: "imgs/dry_fattoli.png",
        link: null,
        categoria: "desktop"
    },
    {
        id: 6,
        titulo: "Gerenciamento Financeiro Empresarial",
        descricao: "Sistema desenvolvido para simplificar a gestão financeira de empresas. Permite cadastrar receitas, despesas e controlar fluxo de caixa com alertas de vencimento e gráficos de desempenho.",
        tecnologias: ["VBA", "SQLite", "MS Excel", "XML", "MS Word"],
        imagem: "imgs/fernando_stadler.png",
        link: null,
        categoria: "desktop"
    },
    {
        id: 7,
        titulo: "Gerenciamento de Revenda de Veículos",
        descricao: "Solução para automatizar processos de uma revendedora de veículos, incluindo cadastro de clientes e veículos, geração de relatórios e criação automatizada de contratos.",
        tecnologias: ["VBA", "SQLite", "MS Excel", "XML", "MS Word"],
        imagem: "imgs/px_motors.png",
        link: null,
        categoria: "desktop"
    },
    {
        id: 8,
        titulo: "Sistema de Orçamentos e Pedidos",
        descricao: "Sistema completo para dimensionamento de lajes pré-fabricadas, gestão comercial e produção. Oferece cálculo de materiais, geração de orçamentos e acompanhamento de pedidos em tempo real.",
        tecnologias: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL", "Google API"],
        imagem: "imgs/sistema_iglume.png",
        link: null,
        categoria: "web"
    },
    {
        id: 9,
        titulo: "Desbloqueio de Planilhas Excel",
        descricao: "Sistema console para bloqueio ou recuperação de projetos VBA/EXCEL protegidos por senha.",
        tecnologias: ["C#", ".NET"],
        imagem: "imgs/xl_protected.png",
        link: null,
        categoria: "desktop"
    },
    {
        id: 10,
        titulo: "Consulta de Normas Técnicas",
        descricao: "Sistema web para consulta e gerenciamento do catálogo de normas técnicas de engenharia, permitindo busca por categoria, subcategoria, código ou título das normas.",
        tecnologias: ["Next.js", "TypeScript", "CSS Modules"],
        imagem: "imgs/biblioteca_iglume.png",
        link: "https://iglumelajes.com.br/biblioteca-completa-de-normas-tecnicas/",
        categoria: "web"
    },
    {
        id: 11,
        titulo: "Gerador de PIX Customizados",
        descricao: "Aplicação web para geração de QR Codes PIX personalizados com documentação de API inclusa.",
        tecnologias: ["Next.js", "React", "TypeScript", "Node.js"],
        imagem: "imgs/pix-gen/img1.png",
        link: null,
        categoria: "web"
    },
    {
        id: 12,
        titulo: "Portfólio Pessoal",
        descricao: "Meu portfólio profissional desenvolvido em Next.js com design moderno, animações e responsividade completa. Apresenta meus projetos, habilidades e informações de contato.",
        tecnologias: ["Next.js", "React", "TypeScript", "CSS Modules"],
        imagem: "imgs/portfolio.png",
        link: "https://eliascunha.dev/",
        categoria: "web"
    }
];


// ============================================================
// RENDERIZAÇÃO DINÂMICA DOS PROJETOS
// ============================================================
function criarCardProjeto(projeto) {
    const card = document.createElement("article");
    card.classList.add("projeto-card");
    card.setAttribute("data-categoria", projeto.categoria);

    // Montar as tags de tecnologia
    const techTags = projeto.tecnologias
        .map(tech => `<span class="projeto-tech">${tech}</span>`)
        .join("");

    // Botão de link (só aparece se tiver link)
    const linkBtn = projeto.link
        ? `<a href="${projeto.link}" target="_blank" rel="noopener noreferrer" class="btn btn-sm">Visitar &#8599;</a>`
        : `<span class="btn btn-sm btn-disabled">Projeto privado</span>`;

    card.innerHTML = `
        <div class="projeto-img-wrapper">
            <img src="${projeto.imagem}" alt="${projeto.titulo}" loading="lazy">
        </div>
        <div class="projeto-info">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <div class="projeto-techs">${techTags}</div>
            <div class="projeto-actions">${linkBtn}</div>
        </div>
    `;

    return card;
}

function renderizarProjetos(filtro) {
    const container = document.getElementById("projetos-container");
    container.innerHTML = "";

    const projetosFiltrados = filtro === "todos"
        ? projetos
        : projetos.filter(p => p.categoria === filtro);

    projetosFiltrados.forEach(function (projeto) {
        const card = criarCardProjeto(projeto);
        container.appendChild(card);
    });
}


// ============================================================
// FILTROS
// ============================================================
function configurarFiltros() {
    const botoesFilter = document.querySelectorAll(".filtro-btn");

    botoesFilter.forEach(function (botao) {
        botao.addEventListener("click", function () {
            // Remover active de todos
            botoesFilter.forEach(function (b) { b.classList.remove("active"); });
            // Adicionar no clicado
            botao.classList.add("active");

            var filtro = botao.getAttribute("data-filtro");
            renderizarProjetos(filtro);
        });
    });
}


// ============================================================
// MENU MOBILE (TOGGLE)
// ============================================================
function configurarMenuMobile() {
    const toggleBtn = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    toggleBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        // Trocar ícone
        toggleBtn.textContent = navLinks.classList.contains("active") ? "\u2715" : "\u2630";
    });

    // Fechar menu ao clicar num link
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            toggleBtn.textContent = "\u2630";
        });
    });
}


// ============================================================
// SCROLL SUAVE PARA LINKS INTERNOS
// ============================================================
function configurarScrollSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
}


// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
    renderizarProjetos("todos");
    configurarFiltros();
    configurarMenuMobile();
    configurarScrollSuave();
});
