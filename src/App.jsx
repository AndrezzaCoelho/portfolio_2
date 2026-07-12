import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './App.css'; // Conexão com o seu arquivo de estilos separado

// Imports de Imagens
import tropicaliaImg from './assets/Captura de tela de 2026-07-04 16-23-28.png';
import animacronoImg from './assets/Captura de tela de 2026-07-04 16-43-33.png';
import blogSimpsonsImg from './assets/Captura de tela de 2026-07-04 16-50-52.png';
import serbankImg from './assets/Captura de tela de 2026-07-04 16-55-45.png';
import controleEventosImg from './assets/Captura de tela de 2026-07-04 18-41-02.png';
import zequinhaImg from './assets/Captura de tela de 2026-07-04 18-04-15.png';

// Objeto de dados para evitar repetição de HTML (Código DRY)
const PROJETOS_DATA = [
  {
    id: 'animacrono',
    tag: 'FRONT-END / STREAMING ECOSYSTEM',
    titulo: 'AnimaCrono Platform',
    descricao: 'Plataforma enciclopédica e nostálgica de animações organizada por gerações cronológicas. Traz carrosséis dinâmicos por categorias, páginas de ficha técnica detalhada e lista personalizada de favoritos persistida localmente.',
    imagem: animacronoImg,
    badges: ['React.js', 'TypeScript', 'Vite', 'LocalStorage']
  },
  {
    id: 'simpsons',
    tag: 'WEB & MOBILE / API INTEGRATION',
    titulo: 'Blog Simpsons',
    descricao: 'Blog temático focado na listagem e detalhamento de personagens. O projeto implementa renderização dinâmica de páginas com roteamento estruturado, componentização modular e consumo de dados através de uma API externa.',
    imagem: blogSimpsonsImg,
    badges: ['Angular', 'Ionic', 'TypeScript / API']
  },
  {
    id: 'eventos',
    tag: 'FRONT-END ENGINEERING / CRUD',
    titulo: 'Controle de Eventos',
    descricao: 'Aplicação web completa para gerenciamento de eventos com operações CRUD (Criar, Ler, Atualizar e Deletar). Implementa validação de formulários, manipulação assíncrona do DOM e simulação de persistência.',
    imagem: controleEventosImg,
    badges: ['JavaScript ES6+', 'DOM Manipulation', 'LocalStorage']
  },
  {
    id: 'serbank',
    tag: 'MOBILE DEVELOPMENT / FINTECH',
    titulo: 'SerBank — Financial App',
    descricao: 'Aplicativo móvel focado em controle analítico e serviços financeiros. Conta com fluxo seguro de autenticação (telas de Login e Cadastro) e navegação tipada nativa entre telas para gerenciamento de contas.',
    imagem: serbankImg,
    badges: ['React Native', 'TypeScript', 'Mobile Navigation']
  },
  {
    id: 'tropicalia',
    tag: 'FRONT-END / E-COMMERCE',
    titulo: 'Tropicália Flowers',
    descricao: 'Plataforma de e-commerce interativa voltada para a venda de arranjos tropicais. Conta com catálogo dinâmico de produtos, gerenciamento estruturado de carrinho de compras e persistência de dados local.',
    imagem: tropicaliaImg,
    badges: ['JavaScript', 'LocalStorage', 'HTML5/CSS3']
  },
  {
    id: 'zequinha',
    tag: 'GAME DEV / LOGIC & GRAPHICS',
    titulo: 'Zequinha em Olinda',
    descricao: 'Jogo de adivinhação e aventura com temática cultural do Carnaval de Pernambuco. Desenvolvido em Java, o projeto desafia o usuário a encontrar o personagem escondido usando dicas lógicas e elementos gráficos gerados via código.',
    imagem: zequinhaImg,
    badges: ['Processing 4', 'Java', 'Game Logic', 'Canvas Graphics']
  }
];

function App() {
  return (
    <div className="app-container">
      
      {/* 1. BARRA DE NAVEGAÇÃO */}
      <nav className="navbar">
        <h2 className="nav-logo">
          ANDREZZA<span> COELHO</span>
        </h2>
        <div className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      {/* 2. SEÇÃO HERO */}
      <header id="sobre" className="hero">
        <p className="hero-tag">
          Estudante de Ciência da Computação & Estagiária de Automação
        </p>
        <h1 className="hero-titulo">
          Construindo automações robustas e <span>sistemas eficientes</span>.
        </h1>
        <p className="hero-descricao">
          Estudante de Ciência da Computação apaixonada por transformar linhas de código em soluções reais.
          Transito entre o desenvolvimento Front-End criando interfaces modernas e funcionais para web e mobile
          e a automação no Back-End, onde gerencio fluxos de dados em sistemas ERP com Python. Sou uma entusiasta da tecnologia,
          sempre buscando aprender novas ferramentas e evoluir a cada projeto.
        </p>
        <div className="btn-container">
          <a href="#projetos" className="btn-principal">Explorar Projetos</a>
          <a href="#contato" className="btn-secundario">Entrar em Contato</a>
        </div>
      </header>

      {/* 3. SEÇÃO DE PROJETOS */}
      <section id="projetos" className="projetos-secao">
        <div className="projetos-container">
          <h2>Projetos em Destaque</h2>
          <p className="projetos-subtitulo">
            Uma seleção de aplicações desenvolvidas para consolidar conceitos de arquitetura, interface, banco de dados e lógica de programação.
          </p>
          
          {/* GRID DINÂMICO DE CARDS */}
          <div className="projetos-grid">
            {PROJETOS_DATA.map((projeto) => (
              <div className="card" key={projeto.id}>
                <div className="card-imagem-container">
                  <img src={projeto.imagem} alt={projeto.titulo} className="card-img" />
                </div>
                <div className="card-conteudo">
                  <div className="card-tag">{projeto.tag}</div>
                  <h3 className="card-titulo">{projeto.titulo}</h3>
                  <p className="card-descricao">{projeto.descricao}</p>
                  <div className="badge-container">
                    {projeto.badges.map((badge, idx) => (
                      <span className="badge" key={idx}>{badge}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SEÇÃO DE CONTATO / FOOTER REFORMULADA */}
      <footer id="contato" className="footer">
        <div className="footer-container">
          
          <div className="footer-main">
            <h2 className="footer-title">Vamos transformar ideias em soluções?</h2>
            <p className="footer-description">
              Sempre aberta a novos desafios tecnológicos, parcerias em automação de dados e projetos de software inovadores.
            </p>
          </div>

          <hr className="footer-divider" />

          <div className="footer-content">
            {/* Bloco de Informações Extras */}
            <div className="footer-info-block">
              <p className="footer-info-text">
                Para mais informações sobre os projetos em destaque, acesse meu{' '}
                <a href="https://github.com/AndrezzaCoelho" target="_blank" rel="noopener noreferrer" className="footer-info-link">
                  GitHub
                </a>
                , onde você encontrará todos os meus repositórios completos.
              </p>
            </div>

            {/* Bloco de Redes Sociais e Contato */}
            <div className="footer-actions">
              <div className="footer-socials">
                <a href="https://www.linkedin.com/in/andrezza-coelho" target="_blank" rel="noopener noreferrer" className="social-icon-link linkedin" title="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/AndrezzaCoelho" target="_blank" rel="noopener noreferrer" className="social-icon-link github" title="GitHub">
                  <FaGithub />
                </a>
                <a href="https://wa.me/5581991983793" target="_blank" rel="noopener noreferrer" className="social-icon-link whatsapp" title="WhatsApp">
                  <FaWhatsapp />
                </a>
                <a href="mailto:andrezzacoelhoabril26@gmail.com" className="social-icon-link email" title="E-mail">
                  <FaEnvelope />
                </a>
              </div>
              
              <span className="footer-email-text">andrezzacoelhoabril26@gmail.com</span>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Andrezza Coelho. Todos os direitos reservados.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;