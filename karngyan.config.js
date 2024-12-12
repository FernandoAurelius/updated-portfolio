// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'floresdev',
  GITHUB_TOKEN: process.env.GITHUB_TOKEN || '',
  domain: 'floresdev.com.br', // add without https:// , used in meta tags and share urls
  image: '/images/IMG_2726.png',
  email: 'miguelfernandoaurelius@gmail.com',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  plausibleAnalytics: {
    enabled: true,
    domain: 'floresdev.com.br',
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: 'https://analytics.lookatx.dev' // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: false
  },
  social: {
    github: 'fernandoaurelius',
    linkedin: 'devflores',
    facebook: '',
    twitter: '',
    instagram: 'floresz._',
    codestats: 'floresdev' // https://codestats.net make a profile if you dont already have one.
  },
  buyMeACoffee: {
    enabled: false,
    url: ''
  },
  projects: {
    enabled: true,
  },
  blog: {
    enabled: false,
  },
  resume: {
    enabled: true,
    pdfUrl: '/CV.pdf' // add files in static folder
  },
  uses: {
    enabled: false,
    meta: [
      { title: 'OS', value: '' },
      { title: 'Memory', value: '' },
      { title: 'Keyboard', value: '' },
      { title: 'Mouse', value: '' },
      { title: 'Monitor', value: '' },
      { title: 'Laptop • Processor • Graphics', value: '' }
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      { name: 'Upwork', src: '/images/upwork.png', url: 'https://upwork.com' },
      { name: 'Arqdigital T.I', src: '/images/Asset2.png', url: 'https://arqdigital.com.br' },
    ]
  },
  recommendations: {
    enabled: false,
    meta: [
      { name: '', designation: '', image: '', linkedin: '', content: '' },
      { name: '', designation: '', image: '', linkedin: '', content: '' },
    ]
  },
  loadingIndicator: {
    name: 'pulse'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  laguageSwitcher: {
    enabled: true,
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'home',
        blog: 'blog',
        projects: 'projects',
        uses: 'uses',
        resume: 'résumé',
        buyMeACoffee: 'buy me a beer',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        friendlyNeighborhood: 'your dedicated developer',
        description: 'i am a software developer, IT support specialist and infrastructure attendant (also a cloud/AI entusiast)',
        words: ['developer', 'IT support specialist', 'programmer', 'encoder'],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'blog',
        subtext: ''
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: ''
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code and some codestats.net flex'
      },
      projects: {
        header: 'projects',
        subtext: 'this page lists some of my personal and work projects. every project has some story, click on the title to read',
        languageNote: 'note: most content on this page is only available in portuguese. you can use browser-based tools like Google Translate to assist with translation. 🙏😄'
      },
      recommendations: {
        header: 'recommendations',
        subtext: 'what do my mentors say'
      },
      achievements: {
        goals: {
          header: "My Professional Goals",
          shortTerm: "Short Term",
          midTerm: "Mid Term",
          longTerm: "Long Term",
          shortTermItems: [
            { icon: "📜", text: "Obtain AWS Certified Developer – Associate certification" },
            { icon: "♨️", text: "Obtain Oracle Certified Associate - Java SE 8 I and II certifications to certify my knowledge and expertise in Java" },
            { icon: "🔧", text: "Deepen knowledge of Java and Spring Boot for professional backend development" },
          ],
          midTermItems: [
            { icon: "🚀", text: "Participate in tech events such as hackathons, conferences, expositions, meetups and workshops to adquire knowledge and create network" },
            { icon: "🌍", text: "Contribute regularly to open-source projects in cloud and AI" },
            { icon: "💼", text: "Grow skills in DevOps practices with AWS and container orchestration with Docker + Kubernetes" }
          ],
          longTermItems: [
            { icon: "⭐", text: "Become a Full-stack developer specializing in cloud solutions" },
            { icon: "🎓", text: "Pursue a degree in AI or Data Science alongside professional certifications" },
            { icon: "🌟", text: "Start a tech consultancy or SaaS company focused on innovation" }
          ]
        },
        professional: {
          title: 'Professional Experience',
          items: [
            {
              company: 'Arqdigital T.I',
              position: 'IT Support Specialist',
              period: '2024 - Present',
              achievements: [
                'Managed infrastructure and IT environment administration with AnyDesk, Microsoft Admin Center, Intune, and Azure Entra ID',
                'Provided diverse technical support to collaborators in network, IT hardware support, and troubleshooting',
                'Implemented automation solutions for infrastructure and IT support demands'
              ]
            },
            {
              company: 'Upwork',
              position: 'Freelance Full-stack Developer',
              period: '2023 - Present',
              achievements: [
                'Creating user interfaces using HTML, CSS, and JavaScript',
                'Building server-side logic and APIs using Django and Java',
                'Creating and managing SQL databases such as PostgreSQL and MySQL to store and retrieve data',
                'Integrating with third-party APIs to extend functionality (e.g., payment gateways, social media, mapping services)'
              ]
            }
          ]
        },
        education: {
          header: 'Academic Journey',
          current: [
            {
              institution: "CEMI Cruzeiro",
              program: "Technical Course in Internet Informatics",
              graduation: "Expected Graduation: 2025"
            }
          ],
          currentTitle: 'Current Education',
          achievementsTitle: 'Achievements',
          achievements: [
            {
              icon: "🏆",
              title: "AWS Builders League Finalist",
              description: "3rd place in the 2024 AWS Builders League: Generative AI Edition."
            },
            {
              icon: '⛅',
              title: 'First IT organization-issued certification in Cloud',
              description: 'Recently earned the AWS Certified Cloud Practitioner certification'
            }
          ]
        }
      }
    },
    pt_BR: {
      download: 'baixar',
      nav: {
        home: 'início',
        blog: 'blog',
        projects: 'projetos',
        uses: 'ferramentas',
        resume: 'currículo',
        buyMeACoffee: 'me pague uma cerveja',
        signIn: 'entrar',
        signOut: 'sair'
      },
      hero: {
        friendlyNeighborhood: 'seu desenvolvedor dedicado',
        description: 'sou desenvolvedor de software, especialista em suporte de TI e assistente de infraestrutura (também entusiasta de nuvem/IA)',
        words: ['desenvolvedor', 'especialista em suporte de TI', 'programador', 'codificador'],
      },
      githubCalendar: {
        header: 'contribuições',
        subtext: 'calendário de contribuições do github'
      },
      blog: {
        header: 'blog',
        subtext: ''
      },
      recentBlog: {
        header: 'blogs recentes',
        subtext: ''
      },
      uses: {
        header: 'ferramentas',
        subtext: 'um resumo rápido do que uso diariamente para programar e algumas estatísticas do codestats.net'
      },
      projects: {
        header: 'projetos',
        subtext: 'esta página lista alguns dos meus projetos pessoais e de trabalho. todo projeto tem uma história; clique no título para ler',
        languageNote: 'nota: a maior parte do conteúdo desta página só está disponível em português. você pode usar ferramentas baseadas em navegador, como o Google Tradutor, para ajudar na tradução. 🙏😄'
      },
      recommendations: {
        header: 'recomendações',
        subtext: 'o que dizem meus mentores'
      },
      achievements: {
        goals: {
          header: "Meus Objetivos Profissionais",
          shortTerm: "Curto Prazo",
          midTerm: "Médio Prazo",
          longTerm: "Longo Prazo",
          shortTermItems: [
            { icon: "📜", text: "Obter a certificação AWS Certified Developer – Associate" },
            { icon: "♨️", text: "Obter as certificações Oracle Certified Associate - Java SE 8 I e II para certificar meu conhecimento e experiência em Java" },
            { icon: "🔧", text: "Aprofundar conhecimento em Java e Spring Boot para desenvolvimento backend profissional" }
          ],
          midTermItems: [
            { icon: "🚀", text: "Participar de eventos de tecnologia como hackathons, conferências, exposições, meetups e workshops para adquirir conhecimento e criar rede" },
            { icon: "🌍", text: "Contribuir regularmente para projetos open-source em cloud e IA" },
            { icon: "💼", text: "Desenvolver habilidades em práticas DevOps com AWS e orquestração de containers com Docker + Kubernetes" }
          ],
          longTermItems: [
            { icon: "⭐", text: "Tornar-me um desenvolvedor Full-stack especializado em soluções cloud" },
            { icon: "🎓", text: "Buscar um diploma em IA ou Ciência de Dados juntamente com certificações profissionais" },
            { icon: "🌟", text: "Iniciar uma consultoria de tecnologia ou empresa SaaS focada em inovação" }
          ]
        },
        professional: {
          title: 'Experiência Profissional',
          items: [
            {
              company: 'Arqdigital T.I',
              position: 'Especialista em Suporte de TI',
              period: '2024 - Presente',
              achievements: [
                'Gerenciamento de infraestrutura e administração de ambientes de TI com AnyDesk, Microsoft Admin Center, Intune e Azure Entra ID',
                'Fornecimento de suporte técnico variado a colaboradores em assuntos de rede, suporte de hardware de TI e resolução de problemas',
                'Implementação de soluções de automação para infraestrutura e demandas de suporte de TI'
              ]
            },
            {
              company: 'Upwork',
              position: 'Desenvolvedor Full-stack Freelancer',
              period: '2023 - Presente',
              achievements: [
                'Criação interfaces de usuário usando HTML, CSS e JavaScript',
                'Construção de lógica de servidor e APIs usando Django e Java',
                'Criação e gerenciamento de bancos de dados SQL como PostgreSQL e MySQL para armazenar e recuperar dados',
                'Integração com APIs de terceiros para expandir a funcionalidade (por exemplo, gateways de pagamento, mídia social, serviços de mapeamento)'
              ]
            }
          ]
        },
        education: {
          header: 'Trajetória Acadêmica',
          current: [
            {
              institution: "CEMI Cruzeiro",
              program: "Curso Técnico em Informática para Internet",
              graduation: "Conclusão Esperada: 2025"
            }
          ],
          currentTitle: 'Educação Atual',
          achievementsTitle: 'Conquistas',
          achievements: [
            {
              icon: "🏆",
              title: "Finalista da AWS Builders League",
              description: "3º lugar na AWS Builders League 2024: Edição Generative AI."
            },
            {
              icon: '⛅',
              title: "Primeira certificação em Cloud emitida por organização de TI",
              description: 'Recentemente obtida a certificação AWS Certified Cloud Practitioner, como prova de proficiência em tecnologias da Nuvem AWS'
            }
          ]
        }
      }
    },
    es_ES: {
      download: 'descargar',
      nav: {
        home: 'inicio',
        blog: 'blog',
        projects: 'proyectos',
        uses: 'herramientas',
        resume: 'currículum',
        buyMeACoffee: 'invítame una cerveza',
        signIn: 'iniciar sesión',
        signOut: 'cerrar sesión'
      },
      hero: {
        friendlyNeighborhood: 'tu desarrollador dedicado',
        description: 'soy desarrollador de software, especialista en soporte de TI y asistente de infraestructura (también entusiasta de la nube/IA)',
        words: ['desarrollador', 'especialista en soporte de TI', 'programador', 'codificador'],
      },
      githubCalendar: {
        header: 'contribuciones',
        subtext: 'calendario de contribuciones de github'
      },
      blog: {
        header: 'blog',
        subtext: ''
      },
      recentBlog: {
        header: 'blogs recientes',
        subtext: ''
      },
      uses: {
        header: 'herramientas',
        subtext: 'un resumen rápido de lo que uso a diario para programar y algunas estadísticas de codestats.net'
      },
      projects: {
        header: 'proyectos',
        subtext: 'esta página lista algunos de mis proyectos personales y laborales. cada proyecto tiene una historia; haz clic en el título para leer',
        languageNote: 'nota: la mayoría de la contenido de esta página solo está disponible en portugués. puedes usar herramientas basadas en navegador, como el Google Traductor, para ayudar en la traducción. 🙏😄'
      },
      recommendations: {
        header: 'recomendaciones',
        subtext: 'qué dicen mis mentores'
      },
      achievements: {
        goals: {
          header: "Mis Objetivos Profesionales",
          shortTerm: "Corto Plazo",
          midTerm: "Medio Plazo",
          longTerm: "Largo Plazo",
          shortTermItems: [
            { icon: "📜", text: "Obtener la certificación AWS Certified Developer – Associate" },
            { icon: "♨️", text: "Obtener las certificaciones Oracle Certified Associate - Java SE 8 I y II para certificar mi conocimiento y experiencia en Java" },
            { icon: "🔧", text: "Profundizar conocimientos en Java y Spring Boot para desarrollo backend profesional" }
          ],
          midTermItems: [
            { icon: "🚀", text: "Participar en eventos tecnológicos como hackathons, conferencias, exposiciones, meetups y talleres para adquirir conocimiento y crear red" },
            { icon: "🌍", text: "Contribuir regularmente a proyectos de código abierto en cloud e IA" },
            { icon: "💼", text: "Desarrollar habilidades en prácticas DevOps con AWS y orquestación de contenedores con Docker + Kubernetes" }
          ],
          longTermItems: [
            { icon: "⭐", text: "Convertirme en un desarrollador Full-stack especializado en soluciones cloud" },
            { icon: "🎓", text: "Cursar una carrera en IA o Ciencia de Datos junto con certificaciones profesionales" },
            { icon: "🌟", text: "Iniciar una consultoría tecnológica o empresa SaaS enfocada en innovación" }
          ]
        },
        professional: {
          title: 'Experiencia Profesional',
          items: [
            {
              company: 'Arqdigital T.I',
              position: 'Especialista en Soporte de TI',
              period: '2024 - Presente',
              achievements: [
                'Gestión de infraestructura y administración de entornos de TI con AnyDesk, Microsoft Admin Center, Intune y Azure Entra ID',
                'Provisión de soporte técnico diverso a colaboradores en temas de red, soporte de hardware de TI y resolución de problemas',
                'Implementación de soluciones de automatización para infraestructura y demandas de soporte de TI'
              ]
            },
            {
              company: 'Upwork',
              position: 'Desarrollador Full-stack Freelance',
              period: '2023 - Presente',
              achievements: [
                'Creación de interfaces de usuario usando HTML, CSS y JavaScript',
                'Construcción de lógica de servidor y APIs usando Django y Java',
                'Creación y gestión de bases de datos SQL como PostgreSQL y MySQL para almacenar y recuperar datos',
                'Integración con APIs de terceros para expandir la funcionalidad (por ejemplo, pasarelas de pago, redes sociales, servicios de mapas)'
              ]
            }
          ]
        },
        education: {
          header: 'Trayectoria Académica',
          current: [
            {
              institution: "CEMI Cruzeiro",
              program: "Curso Técnico en Informática para Internet",
              graduation: "Graduación Esperada: 2025"
            }
          ],
          currentTitle: 'Educación Actual',
          achievementsTitle: 'Logros',
          achievements: [
            {
              icon: "🏆",
              title: "Finalista de la AWS Builders League",
              description: "3er lugar en la AWS Builders League 2024: Edición Generative AI."
            },
            {
              icon: '⛅',
              title: "Primera certificación en Cloud emitida por organización de TI",
              description: 'Recientemente obtuvo la certificación AWS Certified Cloud Practitioner'
            }
          ]
        }
      }
    }
  }
}
