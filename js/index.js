// Obtenha os elementos dos botões e das postCards
const buttons = document.querySelectorAll(".nav-item button");
const postCards = document.querySelector(".posts-cards");
const sectionTitle = document.querySelector(".section-title");

// Adicione event listeners aos botões
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Obtenha o texto do botão
    const buttonText = event.target.textContent;

    // Limpe o conteúdo das postCards
    postCards.innerHTML = "";

    // Crie um novo elemento postCard
    const newPostCard = document.createElement("div");
    newPostCard.classList.add("post-card");

    // Defina o conteúdo do novo postCard com base no botão clicado
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
          <p>Para entrar em contato, envie um e-mail para <a href="mailto:waggt@hotmail.com">E-mail</a> 
          ou me siga no <a href="https://www.linkedin.com/in/wagner-silva-0b1b3b1b1/" target="_blank">LinkedIn</a>.</p>`;
        break;

      default:
        break;
    }

    // Adicione o novo postCard ao postCards

    if (buttonText == "Sobre Mim" || buttonText == "Contato")
      postCards.appendChild(newPostCard);

    // Role até a seção "Sobre mim" após adicionar o(os) postCards

    const sobreMimSection = document.querySelector(".section-title");
    sobreMimSection.scrollIntoView({ behavior: "smooth" });
  });
});

/**
 * PortfolioMocks é um array de objetos que representam diferentes projetos do portfólio.
 * Cada objeto contém informações sobre o projeto, como título, descrição, funcionalidades, link de demonstração e link do repositório.
 * O array é usado para armazenar vários projetos e pode ser acessado para exibir informações do projeto em um site de portfólio.
 *
 * @typedef {Object} Project
 * @property {number} id - O identificador único do projeto.
 * @property {string} title - O título do projeto.
 * @property {string} description - Uma descrição do projeto.
 * @property {string[]} functionalities - Um array de funcionalidades fornecidas pelo projeto.
 * @property {string} [demo] - O link para a demonstração do projeto (opcional).
 * @property {string} [repo] - O link para o repositório do projeto (opcional).
 */

/**
 * PortfolioMocks é um array de objetos Project que representam diferentes projetos do portfólio.
 *
 * @type {Project[]}
 */
const PortfolioMocks = [
  // Os dados dos projetos vão aqui...
  {
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

/**
 * coursesMock é um array de objetos que representam diferentes cursos e certificações.
 * Cada objeto contém informações sobre o curso, como título, escola, período e descrição.
 * O array é usado para armazenar várias formações e pode ser acessado para exibir informações sobre a formação em um site de portfólio.
 * @typedef {Object} Course
 * @property {number} id - O identificador único do curso.
 * @property {string} title - O título do curso.
 * @property {string} school - A instituição que ofereceu o curso.
 * @property {string} period - O período em que o curso foi realizado.
 * @property {string} description - Uma descrição do curso.
 */

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
      "Neste curso, aprendi a criar aplicativos Flutter com Clean Architecture, TDD e BLoC.",
  },
  {
    id: 3,
    title: "Front-end React",
    school: "Ada Tech",
    period: "Outubro 2023 - Janeiro 2024",
    description: "Curso de Front-end com React.",
  },
];
