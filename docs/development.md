# Programação de Funcionalidades

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001 | O sistema deve permitir que usuários, logados ou não, visualizem a página inicial do sistema, em que se explica o intuito do projeto | ALTA | index.html |
|RF-002 | O sistema deve permitir que usuários, logados ou não, visualizem a página referente à conscientização sobre doação de sangue | ALTA | pasta src/pages/why-donate/index.html |
|RF-003 | O sistema deve permitir que usuários, logados ou não, visualizem a página referente às informações dos pré-requisitos para doação de sangue | ALTA | pastas src/pages/who-can-donate/index.html  |
|RF-004 | O sistema deve permitir que usuários, logados ou não, visualizem a página referente às informações sobre o processo de doação de sangue | ALTA |  pasta src/pages/donation-process/index.html|
|RF-005 | O sistema deve permitir que usuários, logados ou não, visualizem a página FAQ | ALTA | pasta src/pages/myths-and-truths/index.html |
|RF-006 | O sistema deve permitir que usuários, logados ou não, visualizem a página referente às informações sobre os diferentes tipos de sangue | ALTA |pasta src/pages/blood-types/index.html |
|RF-007 | O sistema deve permitir que novos usuários doadores gerenciem seu cadastro no sistema | ALTA | pasta src/pages/donation-screen/index.html |
|RF-008 | O sistema deve permitir que novos usuários representantes dos bancos de sangue gerenciem seu cadastro no sistema | ALTA | pasta src/pages/representative-screen/index.html  |
|RF-009 | O sistema deve permitir que todos os usuários cadastrados possam realizar o login no sistema | ALTA | pasta src/pages/signin/index.html |
|RF-011 | O sistema deve permitir que usuários doadores se voluntariem para a doação realizando o cadastro de pré-triagem | ALTA | pasta src/pages/additional-information/index.html  |
|RF-012 | O sistema deve permitir que os usuários visualizem suas próprias informações de doação de sangue | ALTA |pasta src/pages/donation-screen/index.html |
|RF-013 | O sistema deve permitir que representantes de banco de sangue gerenciem informações de doadores de sangue | ALTA | pasta src/pages/representative-donation-screen/index.html e src/pages/representative-screen/index.html |
|RF-015 | O sistema deve permitir que os usuários solicitem a remoção de suas informações do sistema | BAIXA | src/pages/donor-screen/index.html

## Descrição das estruturas:

<br> 

## User
### Usuários ou doadores cadastrados no banco.

<br> 

|  **Nome**      | **Tipo**          | **Descrição**    | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Numero (Inteiro)   | Identificador único do usuário | 1            
| name            | Texto             | Nome do usuário       | Maria Fonseca    |
| cellphone       | Texto             | Telefone do usuário   | 35991214565      |                      
| email           | Texto             | E-mail do usuário     | mariaFonseca@gmail.com |
| bornAt          | Texto             | Data de nascimento    | 25/12/1990       |
| isHealthNow     | Booleano          | Parâmetro para saber a saúde do usuário  | true |
| bloodType       | Texto             | Tipo de sangue do usuário                | A+ |
| city            | Texto             | Cidade onde mora o usuário     | Belo Horizonte|
| weight          | numero (Real positivo)    | Massa corporal do usuário em kg     | 60 |
| password        | Texto             | Senha do usuário     | 12345@pUc#2023 |
| donations       | lista de Objetos            | Lista com doações do usuário | Ver abaixo



<br>
<br>
<br>


## Donations
### Donations é um array de objetos de user contendo todas as doações do usuário e os locais. Segue abaixo a estrutura do objeto donation.

<br> 


|  **Nome**      | **Tipo**          | **Descrição**    | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Numero (Inteiro)   | Identificador único do usuário | 1            
| date           | Texto              | Data da doação       | 25/12/1990 |
| email           | Texto             | E-mail do usuário     | mariaFonseca@gmail.com |
| address          | objeto             | Endereço do hemocentro    | ver abaixo       |


<br>
<br>
<br>


## Donation.address
### Endereço do hemocentro

<br> 

|  **Nome**      | **Tipo**          | **Descrição**    | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| bloodDonorCenter| Texto             | Nome do hemocentro       | Hospital de santa maria
| street         | Texto              | Rua do hemocentro        | Rua Maria de Oliveira            
| number         | Numero(inteiro)    | Numero do hemocentro     | 107            
| neighborhood   | Texto              | Bairro do homocentro     | Centro            
| city           | Texto              | Cidade do homocentro     | Santa Maria            
| state          | Texto              | Estado do homocentro     | Rio Grande do Sul            


<br>
<br>
<br>

## Representatives
### Representantes do banco de sangue

<br> 

|  **Nome**      | **Tipo**          | **Descrição**    | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Numero (Inteiro)   | Identificador único do Representante | 1            
| name            | Texto             | Nome do Representante       | Joana Fortunato    |
| cellphone       | Texto             | Telefone do Representante   | 1999459145         |                      
| email           | Texto             | E-mail do Representante     | jfortunayo@bancoDeSangue.com |
| bornAt          | Texto             | Data de nascimento          | 25/12/1990       |
| password        | Texto             | Senha do representante      | Pass@bancoD&S4NGu& |
