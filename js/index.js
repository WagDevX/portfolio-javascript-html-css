// Get the buttons and postCards elements
const buttons = document.querySelectorAll(".nav-item button");
const postCards = document.querySelector(".posts-cards");
const sectionTitle = document.querySelector(".section-title");

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Get the button text
    const buttonText = event.target.textContent;

    // Scroll to the "Sobre mim" section

    // Clear the postCards content
    postCards.innerHTML = "";

    // Create a new postCard element
    const newPostCard = document.createElement("div");
    newPostCard.classList.add("post-card");

    // Set the content of the new postCard based on the button clicked
    switch (buttonText) {
      case "Sobre Mim":
        sectionTitle.innerHTML = "Sobre Mim";
        newPostCard.innerHTML = `
          <h3>Resumo</h3>
          <p>
            Como amante de tecnologia, me aperfeiçoei no aprendizado
            autodidata, criando projetos pessoais e profissionais para
            resolver problemas reais em meu ambiente de trabalho. Comecei
            com projetos em Python, como uma ferramenta de inventário e um
            aplicativo de gerenciamento de tarefas, antes de me aventurar no
            desenvolvimento web com tecnologias como NextJS, MongoDB e
            Stripe, criando uma plataforma de e-commerce totalmente
            funcional e um sistema de geração de etiquetas, impressão de
            cartazes, gerenciamento de itens próximos à data de validade,
            entre outros recursos. Além disso, participei de diversos cursos
            e bootcamps, expandindo meu conhecimento em tecnologias como
            Flutter, React e arquitetura limpa. Em resumo, demonstrei
            habilidades autodidatas, a capacidade de resolver problemas de
            forma criativa e eficaz, e uma forte determinação para progredir
            em uma carreira de desenvolvimento de software. Minha jornada
            até agora reflete meu compromisso com a aprendizagem contínua e
            minha capacidade de enfrentar desafios com resiliência e
            dedicação.
          </p>
        `;
        break;
      case "Portfolio":
        sectionTitle.innerHTML = "Portfolio";
        PortfolioMocks.forEach((project) => {
          const newPostCard = document.createElement("div");
          newPostCard.classList.add("post-card");

          newPostCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <h4>Funcionalidades</h4>
            <ul>
            ${project.functionalities
              .map((func) => `<li>${func}</li>`)
              .join("")}
            </ul>
            ${
              project.demo
                ? `<a href="${project.demo}" target="_blank">Live</a>`
                : ""
            }
            ${
              project.repo
                ? `<a href="${project.repo}" target="_blank">Repositório</a>`
                : ""
            }
            `;

          postCards.appendChild(newPostCard);
        });
        break;
      case "Formação":
        sectionTitle.innerHTML = "Formação";
        coursesMock.forEach((course) => {
          const newPostCard = document.createElement("div");
          newPostCard.classList.add("post-card");

          newPostCard.innerHTML = `
            <h3>${course.title}</h3>
            <span>Período: ${course.period}</span>
            <span>Local: ${course.school}</span>
            <p>${course.description}</p> 
          `;

          postCards.appendChild(newPostCard);
        });
        break;
      case "Contato":
        sectionTitle.innerHTML = "Contato";
        newPostCard.innerHTML = `
          <h3>Entre em contato comigo!</h3>
          <p>Para entrar em contato, envie um e-mail para <a href="mailto:waggt@hotmail.com">email</a> 
          ou me siga no <a href="https://www.linkedin.com/in/wagner-silva-0b1b3b1b1/" target="_blank">LinkedIn</a>.</p>`;
        break;

      default:
        break;
    }

    if (buttonText == "Sobre Mim" || buttonText == "Contato")
      postCards.appendChild(newPostCard);
    const sobreMimSection = document.querySelector(".section-title");
    sobreMimSection.scrollIntoView({ behavior: "smooth" });
  });
});

const PortfolioMocks = [
  {
    id: 0,
    title: "WorkTasks Web",
    description:
      "Este sistema simplifica a criação de etiquetas e cartazes para impressão, gerencia eficientemente itens próximos à data de validade e supervisiona o gerenciamento de tarefas de meus subordinados. Esta iniciativa contribuiu significativamente para aprimorar o desempenho da equipe e melhorar a entrega de resultados em geral.",
    functionalities: [
      "Sistema de login separado para cada loja e departamento",
      "Gerenciamento de tarefas estilo Kanban",
      "Quadro de avisos",
      "Chat em tempo real do departamento com RealtimeDatabase",
      "Geração de etiquetas para impressão, como: Itens próximos à data de validade, itens de transferência, itens com parcelamento sem juros/juros",
      "Geração e impressão de cartazes de promoção personalizados, compre um e leve outro, compre um e leve o segundo pela metade do preço, desconto na segunda unidade, etc. Tudo adaptado aos papéis pré-impressos da empresa",
      "Compartilhamento de cartazes de acordo com a validade da oferta entre as lojas (Anteriormente cada loja tinha que fazer o seu próprio via Excel manual e alguns compartilhavam entre si)",
      "Sistema de gerenciamento para criar, editar e compartilhar ofertas a serem impressas",
      "Gerenciamento de itens próximos à data de validade, pesquisa de código interno do produto (Obtive uma planilha contendo código e descrição, criei um script que rodava a planilha e adicionava tudo ao MongoDB para uso posterior, pois não tinha acesso ao sistema da empresa)",
      "Sistema de administração para gerenciar usuários do sistema, bem como consultar tarefas concluídas, tarefas em andamento, tarefas dentro do prazo, tarefas pendentes, etc. por usuário.",
    ],
    demo: "https://worktasks-web.vercel.app",
    repo: null,
  },
  {
    id: 1,
    title: "Work Task App",
    description:
      "Um aplicativo projetado para organizar e distribuir tarefas, bem como auxiliar no processo de precificação e validade na empresa onde trabalho, com um sistema de login, registro de usuário e integração de setor usando Firebase.",
    functionalities: [
      "Sistema de login separado para cada loja e departamento",
      "Gerenciamento de tarefas estilo Kanban",
      "Scanner de código EAN para precificação de itens",
      "Gerenciamento de itens próximos à data de validade, pesquisa de código interno do produto (Obtive uma planilha contendo código e descrição, criei um script que rodava a planilha e adicionava tudo ao MongoDB para uso posterior, pois não tinha acesso ao sistema da empresa)",
    ],
    repo: "https://github.com/WagDevX/kivy_venv",
    demo: undefined,
  },

  {
    id: 2,
    title: "Cloud Files",
    description:
      "Inspirado no Google Drive, construí um sistema de gerenciamento de arquivos e pastas full stack com login de autenticação baseado em jwt, registro, permissões.",
    functionalities: [
      "Criar, excluir, atualizar, baixar arquivos e pastas",
      "Login, Registrar, Esqueci a senha",
      "Permissões",
    ],
    repo: "https://github.com/WagDevX/NodeExpressApi",
    demo: "",
  },
  {
    id: 3,
    title: "To-Do App",
    description:
      "Inspirado no Google Keep, construí um aplicativo To-Do App fullstack com Next.js 14 e ServerActions integrado com Banco de Dados Mongo.",
    functionalities: [
      "Favoritar",
      "Mobile First",
      "Seletor de Cores",
      "Carregamento de Esqueleto",
      "Acessibilidade",
      "Pesquisa",
      "Filtrar por Favorito",
    ],
    repo: "https://github.com/WagDevX/to-do-fullstack-next14",
    demo: "https://to-do-front-end-next.vercel.app/",
  },

  {
    id: 4,
    title: "E-commerce",
    description:
      "Um e-commerce totalmente funcional com sistema de administração para adicionar itens, categorias, alterar banner, gerenciar vendas etc.",
    functionalities: [
      "Checkout Stripe",
      "Sistema Admin",
      "Design Elegante",
      "Avaliações de Produtos",
      "Carrinho",
      "Login Social",
    ],
    repo: "https://github.com/WagDevX/pet-family-ecommerce-front",
    demo: "https://pet-family-ecommerce-front.vercel.app/",
  },
  {
    id: 5,
    title: "Agenda de Contatos",
    description:
      "Um aplicativo que se conecta a API Back4App para armazenar dados de contatos. Projeto desafio para o BootCamp Santander 2023 - Desenvolvimento Mobile com Flutter.",
    functionalities: [
      "Criar, Ler e Atualizar Contatos",
      "Modo Escuro Claro",
      "Mudança de Idioma",
      "Acesso à Câmera",
      "Acesso à Galeria",
      "Recortar Imagem",
      "Animações Personalizadas",
    ],
    repo: "https://github.com/WagDevX/contacts",
    demo: "",
  },
  {
    id: 6,
    title: "Landing Page",
    description: "Uma simples landing page para uma empresa de automação.",
    functionalities: [
      "Modo Escuro e Claro",
      "Responsividade",
      "Simples",
      "Gerador de PDF de Cotação",
    ],
    repo: "https://github.com/WagDevX/gra-lading-page",
    demo: "https://gra-sepia.vercel.app/",
  },
  {
    id: 7,
    title: "Portfolio v1",
    description:
      "Um site de portfólio construído com React e Node, com o objetivo de mostrar meus projetos e atrair oportunidades e clientes.",
    functionalities: ["Internacionalização", "Responsividade", "Animações"],
    repo: undefined,
    demo: "https://wagdev.com.br",
  },
  {
    id: 8,
    title: "Portfolio v0",
    description:
      "Segunda versão do meu site de portfólio construído com React, com o objetivo de mostrar meus projetos e atrair oportunidades  e clientes.",
    functionalities: [
      "Internacionalização",
      "Responsividade",
      "Animações",
      "Efeitos Sonoros",
    ],
    repo: "https://github.com/WagDevX/meu-site-portfolio",
    demo: "https://wagner-portfolio.web.app/",
  },
];

const coursesMock = [
  {
    id: 0,
    title: "Análise e Desenvolvimento de Sistemas",
    school: "UNINTER",
    period: "2024- 2026",
    description: "Graduação em Análise e Desenvolvimento de Sistemas.",
  },
  {
    id: 1,
    title: "Santander Bootcamp 2023 - Desenvolvimento Mobile com Flutter",
    school: "DIO",
    period: "Julho - Outubro 2023",
    description: "Bootcamp de Desenvolvimento Mobile com Flutter.",
  },
  {
    id: 2,
    title: "Flutter BLoC TDD & Clean Architecture",
    school: "Udemy",
    period: "Julho - Dezembro 2023",
    description:
      "Neste curso, aprendi a criar aplicativos Flutter com Clean Architecture, TDD, e BLoC.",
  },
  {
    id: 3,
    title: "Front-end React",
    school: "Ada Tech",
    period: "Outubro 2023 - Janeiro 2024",
    description: "Curso de Front-end com React.",
  },
];
