
# Instalação

## NODEJS

[NODEJS](https://nodejs.org/en/)

 Obs: Para windows, utilize a versão 32 bits.

### (Opcional) Para interessados em um uso mais profissional do NODEJS:

Para um melhor controle do NODEJS utilizar o NVM (Node Version Manager), com ele, é possível ter várias versões ao mesmo tempo, podendo trocar com apenas um comando, para instalar siga as instruções abaixo:

Primeiramente, remova qualquer versão já instalada do NODEJS, após, instale o NVM.

Windows: [NVM](https://github.com/coreybutler/nvm-windows/releases)

OSX: [NVM](https://github.com/creationix/nvm#installation)


Após instalar o NVM:

Para utilizar uma determinada versão do NODEJS, use o comando:  

`nvm use --node-version`  

Ex: nvm use 8.9.1



## ANGULAR CLI

`npm install -g @angular/cli`  

## YARN

O angular utiliza o Yarn como gerenciador de dependências, então devemos seguir o guideline do mesmo.

Instalar Yarn https://yarnpkg.com/pt-BR/

Comparação de uso do NPM para o YARN:

|       npm init | yarn init       |
|----------------|-----------------|
|npm install ... | yarn add ...    |
|npm update ...  | yarn upgrade ...|
|npm remove ...  | yarn remove ... |



# Rodar o framework

- CD até a pasta Frontend  
- Executar o comando: `yarn install`  
- Executar o comando: `ng serve --open`


# Angular CLI

Utilizamos o [Angular CLI](https://cli.angular.io/), então, para criarmos modules, components, services, etc, devemos utilizar os comandos do Angular CLI.

## Gerar modules, componentes, etc...  

Utilize o comando `ng generate component component-name` para gerar um novo componente. 

Também é possível utilizar o generate, com as opções a seguir: 
`ng generate directive|pipe|service|class|guard|interface|enum|module`.

Para facilitar, é possível abreviar os comandos, ex:  
`ng g c component-name`  
`ng g m module-name`  
`ng g s service-name`  

## Servidor de desenvolvimento

Utilize o comando `ng serve --open`, para abrir um servidor com o Angular rodando. A opção `--open` serve para abrir uma aba no navegador, quando o servidor iniciar.


## Build

Utilize o comando `ng build`, para gerar os arquivos de deploy, os mesmos serão gerados na pasta `dist`. Para gerar uma versão de produção, utilize a opção `-prod`.
