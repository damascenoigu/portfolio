import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, ArrowRight } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import TimelineItem from './components/TimelineItem';
import ContactForm from './components/ContactForm';
import ParticlesBackground from './components/ParticlesBackground';
import WhatsAppImage from "./assets/WhatsApp Image 2025-03-07 at 19.06.08.jpeg";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F8F8F8]">
      <ParticlesBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9380DB]/10 border border-[#9380DB]/20 text-[#9380DB]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9380DB] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9380DB]"></span>
              </span>
              
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#9380DB] to-[#00FFFF] bg-clip-text text-transparent">
                Olá, eu sou Igor Damasceno
              </h1>
              <p className="text-3xl md:text-4xl font-semibold text-gray-200">
                Desenvolvedor Full Stack
              </p>
            </div>

            <p className="text-lg text-gray-300 max-w-xl">
              Construo aplicações web escaláveis, intuitivas e eficientes. Atualmente, estou aprofundando meus conhecimentos em desenvolvimento de software enquanto curso Sistemas de Informação e participo da Residência em Software.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#9380DB] hover:bg-[#8270CB] rounded-lg transition-colors group"
              >
                Ver Meus Projetos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-[#00FFFF] hover:bg-[#00FFFF]/10 rounded-lg transition-colors"
              >
                Entre em Contato
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com/IgorDamasceno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00FFFF] transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/IgorDamasceno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00FFFF] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:seuemail@email.com"
                className="text-gray-400 hover:text-[#00FFFF] transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9380DB]/20 to-[#00FFFF]/20 rounded-2xl -rotate-6 scale-95 opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#9380DB]/20 to-[#00FFFF]/20 rounded-2xl rotate-3 scale-95 opacity-50"></div>
            <div className="relative bg-gradient-to-br from-[#9380DB]/10 to-[#00FFFF]/10 rounded-2xl overflow-hidden border border-[#9380DB]/20">
            <img
  src={WhatsAppImage}
  alt="Igor Damasceno"
  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
/>
            </div>
          </div>
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#00FFFF]" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#9380DB]">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-6">
                Desde meu primeiro contato com tecnologia, sou fascinado por criar soluções inovadoras e eficientes. Minha jornada começou com WordPress e rapidamente evoluiu para o desenvolvimento full stack, onde trabalho com JavaScript, PHP, Angular, TypeScript e APIs RESTful.
              </p>
              <p className="text-gray-300 mb-8">
                Meu foco é desenvolver aplicações performáticas, escaláveis e com ótimo design UX/UI. Atualmente, sou estagiário no IFBA, trabalhando no SUAP, e participo da Residência em Software, aprimorando ainda mais minhas habilidades.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-[#9380DB]">O que me define como desenvolvedor?</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#00FFFF]">✓</span>
                  Código limpo e bem estruturado
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00FFFF]">✓</span>
                  Foco em performance e escalabilidade
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00FFFF]">✓</span>
                  Comprometimento com a qualidade e inovação
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9380DB]/20 to-[#00FFFF]/20 rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Coding illustration"
                className="rounded-lg w-full h-full object-cover mix-blend-overlay"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[#9380DB]">Projetos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Gerenciador de Tarefas"
              description="Aplicação web para organização de tarefas diárias."
              tech={['Angular', 'TypeScript', 'JSON-server']}
              features={['CRUD de tarefas', 'Filtros dinâmicos', 'Interface responsiva']}
              githubUrl="#"
              demoUrl="#"
            />
            <ProjectCard
              title="Dashboard Financeiro"
              description="Aplicação para controle de gastos e análise de orçamento."
              tech={['HTML', 'CSS', 'TypeScript', 'Chart.js']}
              features={['Gráficos dinâmicos', 'Armazenamento local']}
              githubUrl="#"
              demoUrl="#"
            />
            <ProjectCard
              title="BurgueMania"
              description="Interface de um aplicativo de pedidos inspirado em um design no Figma."
              tech={['Angular', 'SCSS']}
              features={['Navegação dinâmica', 'Layout responsivo']}
              githubUrl="#"
              demoUrl="#"
            />

           <ProjectCard
              title="Sistema de agendamento para barbearia"
              description="Sistema simples de agendamento de horário para barbearias masculinas."
              tech={['HTML', 'CSS', 'TypeScript', 'JavaScript']}
              features={['versatilidade', 'Armazenamento local']}
              githubUrl="#https://github.com/damascenoigu/sistema-de-agendamento"
              demoUrl="#"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[#9380DB]">Experiência Profissional</h2>
          <div className="space-y-12">
            <TimelineItem
              title="Residência em Software Restic 36 – Cepedi"
              description="Atuação no desenvolvimento full stack, com foco em arquitetura de software e boas práticas em Angular e .Net"
            />
            <TimelineItem
              title="Estágio em Desenvolvimento – CGTI | IFBA"
              description="Manutenção e desenvolvimento de aplicações web no SUAP, utilizando HTML, CSS, JavaScript e PHP. Melhorias e otimizações em processos administrativos internos. Trabalho em equipe para soluções escaláveis."
            />
            <TimelineItem
              title="Projetos Pessoais e Contribuições Open Source"
              description="Desenvolvimento de aplicações open-source para aprimoramento de habilidades."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-[#9380DB]">Contato</h2>
          <p className="text-xl mb-8">
            Está buscando um desenvolvedor comprometido e pronto para novos desafios? Vamos conversar!
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            <div className="space-y-6">
              <a
                href="mailto:damascenoigu@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-[#00FFFF] transition-colors"
              >
                <Mail className="w-6 h-6" />
                damascenoigu@gmail.com
              </a>
              <a
                href="https://github.com/damascenoigu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#00FFFF] transition-colors"
              >
                <Github className="w-6 h-6" />
                github.com/IgorDamasceno
              </a>
              <a
                href="https://www.linkedin.com/in/igor-damasceno-44a492313/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#00FFFF] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                linkedin.com/in/IgorDamasceno
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;