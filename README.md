# Projeto de Automacao de Testes E2E com Cypress  
### Squad 5 - Bootcamp QA Atlântico Avanti

---

## 👋 Sobre o Projeto

Este projeto foi desenvolvido como parte do Bootcamp QA Atlântico Avanti, com o objetivo de praticar a automação de testes end-to-end (E2E) utilizando a ferramenta **Cypress**.
O sistema testado é o e-commerce **[Sauce Demo](https://www.saucedemo.com/)**, e os testes abrangem desde o login de usuários até a finalização de compras.

---

## 🚀 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) — Framework de automação de testes
- JavaScript
- Mocha (estrutura de testes BDD, nativo no Cypress)

---

## 📚 Estrutura dos Testes

Os testes foram divididos em três grandes áreas:

| Área        | Descrição |
| ----------- | --------- |
| **Login** | Validação de autenticação de usuários, logout, erros de login e performance. |
| **Produtos** | Visualização de detalhes, ordenação de preços e adição ao carrinho. |
| **Checkout** | Fluxo completo de compra, validação de campos obrigatórios e retorno às compras. |

---

## 🔥 Funcionalidades Testadas

- Login com credenciais válidas e inválidas
- Logout do usuário
- Bloqueio de usuários específicos
- Visualização de produtos
- Ordenação de produtos por preço (alto → baixo / baixo → alto)
- Adição e remoção de produtos do carrinho
- Processo completo de checkout
- Validação de mensagens de erro em campos obrigatórios

---

## ⚙️ Como Executar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/teresaccampos/Squad5AT.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute os testes no Cypress:

   - Para abrir o Cypress:

     ```bash
     npx cypress open
     ```

   - Ou para rodar em modo headless:

     ```bash
     npx cypress run
     ```

---

## 🛠️ Organização do Código

- `Mock.js`: contém dados simulados de usuários e URL da aplicação.
- `Utils.js`: funções utilitárias para login e captura de preços.
- `specs/`: scripts de teste organizados por fluxo (login, produtos, checkout).

---

## 👩‍💻 Desenvolvido por

 **Squad 5** — **Bootcamp QA Atlântico Avanti**  
Lidiane Oliveira
Juliane Azevedo
Orquídea Barbosa
Pedro Martins
Teresa Campos
Tiago Mascarenhas

Com orgulho e dedicação para promover qualidade de software! 

---

## 📌 Observações

- Os testes simulam diferentes tipos de usuários (usuário padrão, usuário bloqueado, usuário de performance).
- São testados fluxos positivos (ações corretas) e fluxos negativos (tratamento de erros).



