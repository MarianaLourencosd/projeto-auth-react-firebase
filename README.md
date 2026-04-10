# 🔐 Projeto Auth React + Firebase

## 📌 Descrição do Projeto

Este projeto é uma aplicação web desenvolvida com **React + Vite** utilizando **Firebase Authentication** para gerenciamento de usuários.

A aplicação permite:

* Cadastro de usuários com email e senha
* Login de usuários
* Controle de sessão (usuário permanece logado)
* Logout
* Interface dinâmica baseada no estado de autenticação
* Feedback de erros e loading para melhor experiência do usuário

---

## 🚀 Funcionalidades

### ✅ Cadastro de Usuário

* Formulário com email e senha
* Integração com Firebase Authentication
* Tratamento de erros:

  * Email inválido
  * Senha fraca

### ✅ Login

* Autenticação com Firebase
* Exibição de mensagens de sucesso ou erro

### ✅ Gerenciamento de Sessão

* Uso de `onAuthStateChanged`
* Usuário permanece logado mesmo após recarregar a página

### ✅ Loading (UX)

* Exibição de loading durante:

  * Verificação de autenticação
  * Login/cadastro

### ✅ Interface Dinâmica

* Usuário NÃO autenticado:

  * Tela de login/cadastro
* Usuário autenticado:

  * Exibição do email
  * Botão de logout

### ✅ Logout

* Encerramento da sessão com Firebase

---

## 🛠️ Tecnologias Utilizadas

* React
* Vite
* Firebase Authentication
* JavaScript (ES6+)
* CSS

---

## 📁 Estrutura do Projeto

```
projeto-auth-react-firebase/
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Loading.jsx
│   │   └── Auth.css
│   ├── hooks/
│   │   └── useAuth.js
│   ├── services/
│   │   └── firebase.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

---

## ⚙️ Configuração do Firebase

1. Acesse o Firebase Console
2. Crie um novo projeto
3. Ative o **Authentication**
4. Habilite o método:

   * Email e senha
5. Copie as credenciais e configure no arquivo:

```
src/services/firebase.js
```

---

## ▶️ Como Executar o Projeto

1. Clone o repositório:

```
git clone https://github.com/MarianaLourencosd/projeto-auth-react-firebase
```

2. Acesse a pasta:

```
cd projeto-auth-react-firebase
```

3. Instale as dependências:

```
npm install
```

4. Execute o projeto:

```
npm run dev
```

---

## 📸 Prints da Aplicação

* Tela de Login

<img width="1217" height="619" alt="login" src="https://github.com/user-attachments/assets/43cb8e24-7835-4286-b95e-add5012b5149" />
  
* Tela de Cadastro
  
<img width="1023" height="635" alt="cadastro" src="https://github.com/user-attachments/assets/cb9d7073-e2e5-409f-a202-4e3865152ea7" />

* Dashboard (usuário logado)

<img width="940" height="619" alt="dashboard" src="https://github.com/user-attachments/assets/f139c3fa-cf74-4ed8-976b-0dd6a6d09d01" />

---

## 🔗 Link do Projeto

👉 [Adicione aqui o link do seu repositório no GitHub](https://github.com/MarianaLourencosd/projeto-auth-react-firebase)

