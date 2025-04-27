# GitHub Profile Finder

🔎 Uma aplicação React simples para buscar perfis públicos do GitHub usando o nome de usuário.  
Você pode visualizar as informações de dois jeitos: utilizando **TailwindCSS** ou **Styled-Components**.

---

## 📋 Funcionalidades

- Buscar perfis de usuários do GitHub pelo `username`
- Visualizar foto de perfil, biografia, número de repositórios e link para o GitHub
- Escolher entre duas visualizações de layout:
  - TailwindCSS
  - Styled-Components
- Botão de voltar para facilitar a navegação

---

## 🚀 Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Styled-Components](https://styled-components.com/)

---

## 🛠️ Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Acesse a pasta do projeto

```bash
cd seu-repositorio
```

### 3. Instale as dependências

```bash
npm install
```
ou
```bash
yarn install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```
ou
```bash
yarn dev
```

### 5. Acesse no navegador

Abra seu navegador e vá para:

```
http://localhost:5173
```

---

## 🎨 Estrutura de Telas

- **Home**: digite o nome de usuário e escolha o estilo de visualização.
- **Perfil Tailwind**: layout usando TailwindCSS.
- **Perfil Styled**: layout usando Styled-Components.
- **Botão Voltar**: disponível em todas as telas de perfil para retornar facilmente.

---

## ⚙️ Requisitos

- Node.js instalado (versão 18 ou superior recomendada)
- Gerenciador de pacotes: npm ou yarn

---

## 📌 Observações

- A API pública do GitHub é utilizada.
- Existe um limite de requisições anônimas por hora (sem autenticação).

---

## ✨ Melhorias Futuras

- Adicionar tema dark/light.
- Melhorar feedback de erro para casos de usuários inexistentes.
- Adicionar paginação para repositórios públicos.
- Fazer uma tela de carregamento animada (skeleton).

---

Feito por @KiuryMariano