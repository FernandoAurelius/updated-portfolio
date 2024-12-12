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
        subtext: 'this page lists some of my personal and work projects. every project has some story, click on the title to read'
      },
      recommendations: {
        header: 'recommendations',
        subtext: 'what do my mentors say'
      },
      achievements: {
        goals: {
          header: 'Personal Goals',
          shortTerm: 'Short Term',
          midTerm: 'Mid Term',
          longTerm: 'Long Term',
          shortTermItems: [
            { icon: '🎯', text: 'Master AWS Cloud Services' },
            { icon: '💻', text: 'Complete Vue.js Advanced Course' },
            { icon: '📱', text: 'Build Mobile-First Applications' }
          ],
          midTermItems: [
            { icon: '🚀', text: 'Launch Personal SaaS Product' },
            { icon: '📊', text: 'Expand Freelance Business' },
            { icon: '🌐', text: 'Contribute to Open Source' }
          ],
          longTermItems: [
            { icon: '⭐', text: 'Become a Senior Developer' },
            { icon: '🎓', text: 'Complete Masters Degree' },
            { icon: '🌟', text: 'Start Tech Consultancy' }
          ]
        },
        professional: {
          title: 'Professional Experience', // Changed from header to title
          items: [ // Changed to items array
            {
              company: 'Arqdigital T.I',
              position: 'IT Support Specialist',
              period: '2022 - Present',
              achievements: [
                'Managed infrastructure and cloud services',
                'Provided technical support to clients',
                'Implemented automation solutions'
              ]
            },
            {
              company: 'Upwork',
              position: 'IT Support Specialist',
              period: '2021 - Present',
              achievements: [
                'Provided technical support to clients',
                'Implemented automation solutions'
              ] 
            }
          ]
        },
        education: {
          header: 'Academic Journey',
          current: [
            {
              institution: 'Your University',
              program: 'Computer Science',
              graduation: 'Expected Graduation: 2024'
            }
          ],
          currentTitle: 'Current Education',
          achievementsTitle: 'Achievements',
          achievements: [
            {
              icon: '🏆',
              title: 'Dean\'s List',
              description: 'Maintained high academic performance'
            },
            {
              icon: '🎖️',
              title: 'Hackathon Winner',
              description: 'First place in university hackathon'
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
        subtext: 'esta página lista alguns dos meus projetos pessoais e de trabalho. todo projeto tem uma história; clique no título para ler'
      },
      recommendations: {
        header: 'recomendações',
        subtext: 'o que dizem meus mentores'
      },
      achievements: {
          goals: {
            header: 'Metas Pessoais',
            shortTerm: 'Curto Prazo',
            midTerm: 'Médio Prazo',
            longTerm: 'Longo Prazo',
            shortTermItems: [
              { icon: '🎯', text: 'Dominar Serviços em Nuvem AWS' },
              { icon: '💻', text: 'Concluir Curso Avançado de Vue.js' },
              { icon: '📱', text: 'Desenvolver Aplicações Mobile-First' }
            ],
            midTermItems: [
              { icon: '🚀', text: 'Lançar Produto SaaS Pessoal' },
              { icon: '📊', text: 'Expandir Negócio Freelancer' },
              { icon: '🌐', text: 'Contribuir para Projetos Open Source' }
            ],
            longTermItems: [
              { icon: '⭐', text: 'Tornar-se Desenvolvedor Sênior' },
              { icon: '🎓', text: 'Concluir Mestrado' },
              { icon: '🌟', text: 'Iniciar Consultoria de Tecnologia' }
            ]
          },
          professional: {
            title: 'Experiência Profissional',
            items: [
              {
                company: 'Arqdigital T.I',
                position: 'Especialista em Suporte de TI',
                period: '2022 - Presente',
                achievements: [
                  'Gerenciamento de infraestrutura e serviços em nuvem',
                  'Suporte técnico para clientes',
                  'Implementação de soluções de automação'
                ]
              },
              {
                company: 'Upwork',
                position: 'Especialista em Suporte de TI',
                period: '2021 - Presente',
                achievements: [
                  'Suporte técnico para clientes',
                  'Implementação de soluções de automação'
                ]
              }
            ]
          },
          education: {
            header: 'Trajetória Acadêmica',
            current: [
              {
                institution: 'Sua Universidade',
                program: 'Ciência da Computação',
                graduation: 'Conclusão Prevista: 2024'
              }
            ],
            currentTitle: 'Educação Atual',
            achievementsTitle: 'Conquistas',
            achievements: [
              {
                icon: '🏆',
                title: 'Lista do Diretor',
                description: 'Manteve alto desempenho acadêmico'
              },
              {
                icon: '🎖️',
                title: 'Vencedor de Hackathon',
                description: 'Primeiro lugar em hackathon universitário'
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
          subtext: 'esta página lista algunos de mis proyectos personales y laborales. cada proyecto tiene una historia; haz clic en el título para leer'
        },
        recommendations: {
          header: 'recomendaciones',
          subtext: 'qué dicen mis mentores'
        },
        achievements: {
          goals: {
            header: 'Metas Personales',
            shortTerm: 'Corto Plazo',
            midTerm: 'Medio Plazo',
            longTerm: 'Largo Plazo',
            shortTermItems: [
              { icon: '🎯', text: 'Dominar Servicios en la Nube de AWS' },
              { icon: '💻', text: 'Completar Curso Avanzado de Vue.js' },
              { icon: '📱', text: 'Desarrollar Aplicaciones Mobile-First' }
            ],
            midTermItems: [
              { icon: '🚀', text: 'Lanzar Producto SaaS Personal' },
              { icon: '📊', text: 'Expandir Negocio Freelance' },
              { icon: '🌐', text: 'Contribuir a Proyectos Open Source' }
            ],
            longTermItems: [
              { icon: '⭐', text: 'Convertirse en Desarrollador Senior' },
              { icon: '🎓', text: 'Completar Maestría' },
              { icon: '🌟', text: 'Iniciar Consultoría Tecnológica' }
            ]
          },
          professional: {
            title: 'Experiencia Profesional',
            items: [
              {
                company: 'Arqdigital T.I',
                position: 'Especialista en Soporte de TI',
                period: '2022 - Presente',
                achievements: [
                  'Gestionó infraestructura y servicios en la nube',
                  'Proporcionó soporte técnico a clientes',
                  'Implementó soluciones de automatización'
                ]
              },
              {
                company: 'Upwork',
                position: 'Especialista en Soporte de TI',
                period: '2021 - Presente',
                achievements: [
                  'Proporcionó soporte técnico a clientes',
                  'Implementó soluciones de automatización'
                ]
              }
            ]
          },
          education: {
            header: 'Trayectoria Académica',
            current: [
              {
                institution: 'Tu Universidad',
                program: 'Ciencia de la Computación',
                graduation: 'Graduación Esperada: 2024'
              }
            ],
            currentTitle: 'Educación Actual',
            achievementsTitle: 'Logros Académicos',
            achievements: [
              {
                icon: '🏆',
                title: 'Lista de Honor',
                description: 'Mantuvo un alto rendimiento académico'
              },
              {
                icon: '🎖️',
                title: 'Ganador de Hackathon',
                description: 'Primer lugar en hackathon universitario'
              }
            ]
          }
        }
      }
    }
  }
