---
id: 3
title: bibliotech
description: feito para aumentar o engajamento dos estudantes na leitura com uma interface amigável de gerenciamento
tech: django bootstrap aws
logo: https://img.icons8.com/dusk/64/library.png
website: https://bt.floresdev.com.br
github: https://github.com/FernandoAurelius/library-system-django
twitter: _floresdev
---

# ✨ Sistema de Gerenciamento de Biblioteca Escolar - BiblioTech

## 🕊️ Visão Geral

O **Sistema de Gerenciamento de Biblioteca Escolar (BiblioTech)** foi idealizado para atender à necessidade de modernização e digitalização do acervo da biblioteca do **Centro de Ensino Médio Integrado do Cruzeiro**. Com uma interface intuitiva e recursos inteligentes, o BiblioTech transforma a experiência de gerenciamento de livros e históricos de empréstimos, promovendo acessibilidade e eficiência para estudantes e professores.

---

## 🔗 Objetivo do Projeto

A principal meta do BiblioTech é integrar soluções digitais ao dia a dia escolar, facilitando o acesso à leitura e melhorando o gerenciamento de bibliotecas. Entre as funcionalidades projetadas, destacam-se:

- Digitalização do acervo físico de livros.
- Histórico e controle de empréstimos e devoluções.
- Sugestões de leitura personalizadas para usuários.
- Integração em dispositivos móveis e desktop para acessibilidade total.

A solução foi planejada e executada para operar com segurança e escalabilidade no ambiente da **AWS**.

---

## 📊 Processo de Desenvolvimento

O desenvolvimento do BiblioTech seguiu boas práticas de engenharia de software, desde a fase de levantamento de requisitos até a implantação na nuvem. Aqui está um resumo das etapas principais:

### **1. Levantamento de Requisitos**
- Entrevistas com professores e estudantes para entender as necessidades do usuário final.
- Mapeamento de funcionalidades essenciais, como busca de livros, controle de empréstimos e relatórios.

### **2. Modelagem do Sistema**
- Criação de diagramas UML (classes e casos de uso) para documentar a estrutura e comportamento do sistema.
- Prototipação de interfaces usando **Figma**, validando a experiência do usuário com stakeholders.

### **3. Arquitetura e Implementação**
O projeto foi construído com uma arquitetura **Cloud-Native**, utilizando as seguintes tecnologias:

- **Backend:** Desenvolvido com **Python/Django**, priorizando a modularidade e manutenção do código.
- **Frontend:** Interfaces responsivas desenvolvidas com **HTML5**, **CSS3** e **JavaScript**, utilizando o framework **Bootstrap 5** para maior rapidez no desenvolvimento.
- **Banco de Dados:** Modelagem e armazenamento de dados em **PostgreSQL**, gerenciado no **AWS RDS**.

### **4. Integração e Testes**
- **Testes Unitários:** Cobertura das funcionalidades principais do backend com o framework **pytest**.
- **Testes Manuais:** Validação do fluxo do usuário em dispositivos móveis e desktops.
- **Integração Contínua (CI):** Configurada para automatizar a execução de testes a cada push no repositório Git.

### **5. Deploy na Nuvem**
- O deploy foi realizado utilizando **AWS EC2** para hospedar o backend, enquanto o banco de dados foi mantido no **AWS RDS**.
- **Gunicorn** e **Nginx** foram configurados para servir a aplicação em ambiente de produção, garantindo robustez e desempenho.

---

## 🔧 Principais Funcionalidades

- **Busca Avançada:** Localize livros por título, autor, gênero ou palavras-chave.
- **Gerenciamento de Livros:** Controle o cadastro, a atualização e o status de disponibilidade.
- **Histórico de Empréstimos:** Registre e acompanhe empréstimos e devoluções.
- **Recomendações Personalizadas:** Sugestões de leitura baseadas no histórico do usuário.
- **Interface Multidispositivos:** Totalmente responsiva para navegadores e dispositivos móveis.

---

## 🔖 Destaques Tecnológicos

- **Python/Django:** Um framework de alta produtividade e seguraça para backend.
- **PostgreSQL:** Banco de dados relacional robusto e escalável.
- **AWS Cloud:** Aproveitamento da infraestrutura de nuvem para disponibilidade e eficiência.
- **Bootstrap:** Framework para criar uma interface limpa e responsiva.

---

## 🔍 Explorando o Código
O sistema segue uma estrutura clara e bem documentada, facilitando a manutenção:

```
$ tree

library-system-django/
├── setup/               # Configurações principais do projeto Django
├── library/                   # Aplicação principal (models, views, templates)
│   ├── migrations/           # Migrações do banco de dados
│   ├── admin.py              # Definição da página de administração
│   ├── models.py             # Modelos de dados (Book, Loan)
│   ├── signals.py            # Ações automáticas baseadas em eventos
│   ├── views.py              # Lógica de negócios
│   ├── urls.py               # Rotas da aplicação
├── templates/                # Arquivos HTML
├── manage.py                 # Script de gerenciamento do Django
└── requirements.txt          # Dependências do projeto
```

---

## 🔀 Resultados e Impacto

- **Maior Acessibilidade:** Simplificação do acesso a livros e históricos, economizando tempo para a administração da biblioteca.
- **Otimização de Recursos:** Redução do uso de papel e agilização de processos manuais.
- **Feedback Positivo:** Usuários destacaram a usabilidade e a velocidade de resposta do sistema.

---

## 🔍 Aprendizados

- **Integração Cloud-Native:** Fortaleci minhas habilidades com serviços AWS, incluindo EC2, RDS e gerenciamento de variáveis de ambiente.
- **Escalabilidade:** Criação de soluções com alta disponibilidade e capacidade de crescimento.
- **Melhoria Contínua:** Uso de ferramentas de CI/CD para garantir a qualidade do software a cada etapa.

---

## 🔘 Próximos Passos

- **Relatórios de Uso:** Implementar dashboards com visualizações gráficas do uso da biblioteca.
- **Notificações Automatizadas:** Envio de e-mails ou SMS para lembrar de devoluções pendentes.
- **Integração com Redes Sociais:** Login e recomendações integrados ao perfil do usuário.

---

🔗 [Confira o repositório no GitHub](https://github.com/FernandoAurelius/library-system-django)
🔗 [Confira a DEMO na AWS](https://bt.floresdev.com.br)

