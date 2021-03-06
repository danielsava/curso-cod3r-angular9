# Curso Cod3r Angular

Link do Curso:

- [Angular 9 - Backend  Visão Geral do Angular 2020](https://www.youtube.com/watch?v=NCrWXZtlc7Q&list=PLdPPE0hUkt0rPyAkdhHIIquKbwrGUkvw3)


 <br/>

## BackEnd 

Apenas para fins de testes, foi criada uma api com `json-server` dentro do diretório `backend`.

O  npm foi inicializado dentro do diretório `backend` :

     $ npm init -y

Depois do npm inicializado, o `json-server` foi instalado:

     $ npm i json-server

Como parte da configuração do 'json-server', foi criado o arquivo `db.json` na raiz do diretório `backend`.

     db.json

<br/>

## FrontEnd : Angular

<br/>

<center>"Angular é um framework desenvolvido por um dos times da Google para criação de aplicações Web SPA, baseados em componentes"</center>

<br/>

### Instalação: Angular CLI

Para instalar o `Angular CLI`:

     $ npm i -g @angular/cli

<br/>

Verificando a instalação:

      $ ng --version


Inicializando um `novo projeto` Angular:

     $ ng new <nome_projeto>


Nas opções, foram selecionadas `routing` e `css`.

<br/>

## Componentes: Angular Material Design

O [Angular Material](https://material.angular.io/) pode ser instalado e configurado no projeto através do `Angular cli`:


     $ ng add @angular/material


O comando `ng add` mostrado acima irá instalar no projeto o `Component Dev Kit (CDK)`, `Angular Animations` e executar as seguintes configurações:

 - Adiciona as dependências `do Angular Material` no 'package.json'
 - Adiciona a fonte `Roboto` e o ícone do Material Design no `index.html`
 - Adiciona algumas configurações no `CSS Global`:
     * Remove margins do `<body>`
     * Seta `height: 100%` no `<html>` e no `<body>`
     * Seta o `Roboto` como fonte padrão da aplicação.

Além das configurações acima, o `ng add` adicionou no `angular.json` os arquivos css do `tema escolhido` na seção 
`"styles"` do projeto e dos testes : 

     <...>
     "styles": [
          "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
          ...
     ],
     <...>








 