# Curso Cod3r Angular

Link do Curso:

- [Angular 9 - Backend  Visão Geral do Angular 2020](https://www.youtube.com/watch?v=NCrWXZtlc7Q&list=PLdPPE0hUkt0rPyAkdhHIIquKbwrGUkvw3)


Link dos Ícones do Material Design:

 - [material.io](https://material.io/resources/icons)


 <br/>
 
## Atualização de versões do Angular

Para atualizar um projeto angular para uma versão mais recente, execute o comando abaixo e siga as instruções:


     $ ng update 


Após executado o comando acima, segue um exemplo de atualização:

     // 
     $ ng update @angular/cli @angular/core @angular/cdk @angular/material rxjs


     // '--force': Caso tenha alguma dependência que seja incompatível e quebre a atualização, 
     $ ng update @angular/cli @angular/core @angular/cdk @angular/material rxjs --force



Finalizada a atualização do angular, fazer:

 - Atualizar os pacotes restante, conferindo e editando o `package.json` (basta deletar a versão da lib e exeuctar `ctrl + spaco`)
 - Deletar o `node_modules` e o `package-lock.json` e executar o `npm install` (ou `npm i`)



Referências

 - [Site Oficial do Angular](https://update.angular.io)
 - [Video: Atualizando projetos para Angular v10 e novidades](https://www.youtube.com/watch?v=QgdBM2VUW10)

 
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

### API Mock

Abaixo segue uma lista de API mock prontas:

 - JsonPlaceHolder : https://jsonplaceholder.typicode.com/
 - Mockend : https://mockend.com/


<br/>

## FrontEnd : Angular

<br/>

<center>"Angular é um framework desenvolvido por um dos times da Google para criação de aplicações Web SPA, baseados em componentes"</center>

<br/>

### Angular CLI: Instalação (ou atualização)

Instalar sempre a versão mais recente do [NodeJS LTS](https://nodejs.org/en/). Com o NodeJS(e npm) instalado, instalar o `Angular CLI`:

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

Abaixo segue alguns componentes criados na aplicação:


     # ProductCreate
     $ ng g c components/product/product-create


     # ProductRead
     $ ng g c components/product/product-read


     # ProductUpdate
     $ ng g c components/product/product-update


     # ProductDelete
     $ ng g c components/product/product-delete 


     # Angular Schematics Exemplos
     $ ng generate @angular/material:table components/schematics/tabela
     $ ng generate @angular/material:dashboard components/schematics/dash
     $ ng generate @angular/material:address-form components/schematics/form


<br/>

### Services

Para gerar `services`:

     # 
     $ ng genrate service <path_nome_servico>


     # Abreviada
     $ ng g s services/product

<br/>

Abaixo segue alguns servicços criados na aplicação:


     # Rotas
     $ ng g s services/rotas

     # Product
     $ ng g s services/product

     # Mensagens
     $ ng g s services/mensagens


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


     # Ex. Diretivas
     $ ng g d directives/red


- OBS: 
     - A `forma de criar` uma diretiva `de atributo` e uma diretiva `estrutural` é a mesma mostrada acima: `ng g d <nome_diretiva>`.
     - O que vai mudar é o uso `'*'` antes do nome da diretiva dentro do componente que ela será utilizada. Este asterisco serve para informar ao angular que é uma `diretiva estrutural`. Ex.: *myFor

<br/>

## Angular Material Schematics

Integração que o Angular Material possui com o Angular CLI Schematics, com o objetivo de facilitar o desenvolvimento de aplicações que utilizam os componentes Angular Material. Já vem `instalado` junto com o `@angular/cdk` e o `@angular/material`.

 - https://material.angular.io/guide/schematics


 O Angular Material Schematics `possui vários schematics prontos` que podem ser usados para inserir os componentes do Angular Material na aplicação:

  - address-form
  - navigation
  - dashboard
  - table
  - tree
  - drag-drop (@angular/cdk/drag-drop)


<br/>

Por exemplo, para utilizar o `table schematics` do Angular Material:

     # Sintaxe
     $ ng generate @angular/material:table <nome_componente>

     # Ex.:
     $ ng generate @angular/material:table components/schematics/tabela


<br/>

<br/>

## Locale: pt-BR

Para configurar o locale `pt-BR` no projeto, foram feitas as seguintes configurações em `app.modules.ts`: 


1. Importe o `LOCALE_ID` do `@angular/core`:

          import { NgModule, LOCALE_ID } from '@angular/core';

<br/>

2. Executar o método que irá registrar o Locale: `registerLocaleData()` 

          <...>
          
          import localePt from '@angular/common/locales/pt';
          import { registerLocaleData } from '@angular/common';

          registreLocaleData(localePt);


          <...>


<br/>

O componente `product-read` faz uso do pipe `currency` do Angular na `coluna preço` da tabela. Com o `Locale pt-BR` configurado corretamente, os preços são formatados de acordo com o nosso padrão de ponto e vírgula e espaço depois do `R$`.



