# Curso Cod3r Angular

Link do Curso:

- [Angular 9 - Backend  Visão Geral do Angular 2020](https://www.youtube.com/watch?v=NCrWXZtlc7Q&list=PLdPPE0hUkt0rPyAkdhHIIquKbwrGUkvw3)


Link dos Ícones do Material Design:

 - [material.io](https://material.io/resources/icons)


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

## Angular Material Design

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

<br/>

## Angular CLI

### Componentes

Para gerar `componentes`:

     # 
     $ ng generate component <nome_component>

     # Forma abreviada
     $ ng g c <path_nome_componente>

     # Ex1: criando um componente chamado 'header'
     $ ng g c components/template/header

<br/>

### Services

Para gerar `services`:

     # 
     $ ng genrate service <path_nome_servico>


     # Abreviada
     $ ng g s services/product

<br/>

### Injeção de Dependência no Angular

Documentação Oficial do Angular sobre Injeção de Dependência:

 - https://angular.io/guide/hierarchical-dependency-injection#moduleinjector


### Escopo dos Serviços

Observação sobre onde declarar os serviços.

      Segundo recomendações da documentação oficial, declarar o escopo do serviço
      dentro do @Injectable em vez de colocar no 'provider' do @NgModule:
      "result in smaller bundle size" 


## Diretivas

Angular possui dois tipos de diretivas:

 - `Diretivas de Atributos`: altera atributos e comportamento dos componentes.
     - Ex.: routerLink; mat-list-item

 - `Diretivas Estruturais`: adiciona ou remove componentes na DOM.
     - Ex.: *ngIf; *ngFor

<br/>

Para criar uma `diretiva` pelo Angular CLI:

     # Sintaxe
     $ ng g d <path_nome_diretiva>


     # Ex.
     $ ng g d directives/red


- OBS: 
     - A `forma de criar` uma diretiva `de atributo` e uma diretiva `estrutural` é a mesma mostrada acima: `ng g d <nome_diretiva>`.
     - O que vai mudar é o uso `'*'` antes do nome da diretiva dentro do componente que ela será utilizada. Este asterisco serve para informar ao angular que é uma `diretiva estrutural`. Ex.: *myFor


asdfa