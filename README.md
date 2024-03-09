# Firebase Ract

Este é um projeto React com integração ao Firebase, oferecendo recursos como autenticação de email, armazenamento de arquivos e banco de dados em tempo real.

## Firebase React+Vite+SASS+ESLINT+PRETTIER

Projeto básico com funcionamento do Firebase com Vite JS, SASS, ESLINT e Prettier;

## Como Usar

1. Clone este repositório:
2. Instale as dependências:
    - `yarn ou  npx yarn`
3. Configure as credenciais do Firebase:
    - Crie um projeto no Firebase (<https://console.firebase.google.com/>).
    - Copie as credenciais do projeto (API Key, Auth Domain, etc.).
    - Cole as credenciais no arquivo `src/constants/defaulValues.jsx`.
4. Execute o projeto:
    - `yarn dev ou  npx yarn dev`

## Funcionalidades

- **Autenticação de Email**: Permita que os usuários se autentiquem usando seu endereço de e-mail.
- **Armazenamento de Arquivos**: Faça upload e armazene arquivos no Firebase Storage.
- **Banco de Dados em Tempo Real**: Armazene e sincronize dados em tempo real com o Firebase Realtime Database.

### Necessário criar uma conta no firebase e configurar um projeto Web das seguintes tecnologias:

- Auth (Email e senha)
- Storage: as configurações de regras estão no arquivo _storage.rules_
- Realtime: Database as configurações de regras estão no arquivo database.rules.json_

> Autenticação
- Página de Login com email e senha (criar a conta de email pelo firebase)

> Main
- Página principal após o login, Possui Imagem de perfil e um texto ro realtime

## Autor

- Thiago Braga
- Email: thiagomatrix@gmail.com
