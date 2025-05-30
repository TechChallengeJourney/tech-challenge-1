# Bytebank - Tech Challenge #1

Bem-vindo ao projeto de estudo **Bytebank**, uma aplicação moderna desenvolvida em **Next.js**. Para a estrutura do projeto, foi criado utilizando o **Nx** (https://nx.dev/getting-started/intro) para a melhor organização e compartilhamento de componentes entre futuras features com diferentes frameworks.

---

## 🚀 Começando

Estas instruções vão te ajudar a rodar o projeto localmente e explorar as funcionalidades que implementamos neste projeto, que são elas:
- Possibilidade de criar um novo usuário e logar na aplicação com **autenticação**;
- Criar, editar e excluir uma transação registrada;
- Visualizar o saldo total 

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

---

## 🛠️ Instalação

Clone este repositório:

```bash
git clone https://github.com/TechChallengeJourney/tech-challenge-1.git
cd tech-challenge-1
```

Instale todas as dependências:

```bash
npm install
```

## 🚀 Como Executar

### Rodar o projeto Next.js

Execute o comando abaixo para iniciar o servidor de desenvolvimento:

```bash
npm run start
```
Acesse http://localhost:3000 no seu navegador para visualizar o projeto.

## Rodar a API Mockada (Json Server)

Para iniciar a API simulada, utilize:

```bash
npm run json-server
```

## 🎨 Estilização

Para visualizar o Design System do projeto, utilizamos o Storybook para exibir e demonstrar as definições de layout e componentes, foi baseado neste Figma (https://www.figma.com/design/ns5TC3X5Xr8V7I3LYKg9KA/Projeto-Financeiro?node-id=503-4264&p=f). Para conferir, utilize o comando:

```bash
npm run build-storybook
npm run storybook
```




