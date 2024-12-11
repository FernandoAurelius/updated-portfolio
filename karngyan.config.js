// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'floresdev',
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
      }
    }
  }
}
