---
id: 1
title: photo gallery
description: galeria de fotos interativa e dinâmica com tecnologias full-stack com fins de webdesign (freelance)
tech: django bootstrap aws
logo: https://img.icons8.com/ios-filled/100/apple-camera.png
website: https://gallery.floresdev.com.br
github: https://github.com/FernandoAurelius/photo-gallery
twitter: _floresdev
---

# Photo Gallery Project

## Sobre o Projeto

🎨 **Photo Gallery** é um sistema web de galeria de imagens desenvolvido como trabalho final da matéria de **WebDesign** do curso técnico em Informática para Internet. Este projeto explora a criação de uma aplicação responsiva, funcional e segura, utilizando o framework **Django 5** no back-end e **Bootstrap 5** no front-end.

🚀 O sistema foi projetado para exibir e gerenciar fotografias em uma interface intuitiva, com funcionalidades de upload, atualização e exclusão, integradas a uma infraestrutura robusta hospedada na nuvem com serviços da **AWS**.

## Funcionalidades Principais

- **Sistema de Galeria** 📸:
  - Exibição de imagens organizadas dinamicamente em um layout responsivo.
  - Modal interativo com título, legenda e descrição detalhada das fotografias.
  - Ações de atualizar ou excluir diretamente do modal.

- **Upload de Imagens** 🚀:
  - Ferramenta integrada ao painel administrativo do Django para gerenciar as fotografias de forma eficiente.

- **Design Responsivo** 📱:
  - Layout criado com **Bootstrap 5** para uma experiência consistente em diferentes dispositivos.

- **Infraestrutura Segura** 🌐:
  - Hospedagem na **AWS EC2** com banco de dados **PostgreSQL** via **AWS RDS**.
  - Configuração de servidor com **Nginx + Gunicorn**.
  - Certificado **SSL** emitido pelo **Let's Encrypt** para garantir conexões seguras.

## Processo de Desenvolvimento

### Planejamento e Arquitetura
O desenvolvimento iniciou com a modelagem de dados e o planejamento das principais funcionalidades. Decidi utilizar o **Django** por sua eficiência em criar aplicações web escaláveis e o **Bootstrap 5** para garantir uma interface responsiva e moderna.

- **Modelagem de Dados**:
  - A estrutura principal consistiu em uma tabela para armazenar as fotografias com campos como nome, legenda, descrição e o arquivo da imagem.

### Implementação das Funcionalidades

1. **Sistema de Galeria**:
   - Desenvolvi uma view para listar todas as fotografias armazenadas no banco de dados e renderizá-las em um layout de grade responsivo.
   - A funcionalidade de modal interativo foi implementada utilizando **JavaScript** com **AJAX** para carregar os detalhes das fotografias dinamicamente.

2. **Upload e Gerenciamento de Imagens**:
   - Utilizei o painel administrativo do Django para oferecer uma interface intuitiva de gerenciamento.
   - Adicionei validações para garantir que os uploads fossem consistentes e seguros.

3. **Frontend Responsivo**:
   - O layout foi criado com **Bootstrap 5**, garantindo compatibilidade com dispositivos móveis e desktop.
   - Adicionei animações sutis para melhorar a experiência do usuário.

### Hospedagem e Configuração

1. **Infraestrutura na AWS**:
   - Configurei uma instância **AWS EC2** para hospedar o projeto e utilizei **AWS RDS** como banco de dados relacional.

2. **Otimizações de Servidor**:
   - Configurei **Nginx** como proxy reverso e **Gunicorn** como servidor de aplicação.
   - Implementei um certificado **SSL** para habilitar conexões HTTPS seguras.

## Destaques Visuais

### Galeria de Imagens
![Galeria](https://ff-photo-gallery.s3.us-east-1.amazonaws.com/Captura+de+tela+2024-12-09+211635.png)

### Modal de Detalhes
![Modal](https://ff-photo-gallery.s3.us-east-1.amazonaws.com/Captura+de+tela+2024-12-09+212228.png)

## Aprendizados e Desafios

- **Aprendizados**:
  - Configuração de infraestrutura segura na AWS.
  - Integração de front-end responsivo com back-end dinâmico.
  - Uso de AJAX para melhorar a interatividade da aplicação.

- **Desafios**:
  - Configurar o ambiente de produção para alta performance.
  - Garantir a responsividade do layout em todos os dispositivos.

🔗 [Confira a DEMO na AWS](https://gallery.floresdev.com.br)

