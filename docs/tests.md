# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 


A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção são documentados os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

**Caso de Teste** | **CT01 - Acesso às informações sobre doação de sangue**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa o link do site no seguinte endereço: https://banco-de-sangue.netlify.app/<br>2) O usuário navega pela tela principal, sem estar logado, e acessa as informações sobre a aplicação clicando nos botões "Saiba mais", ou quando estiver logado, através do menu hamburguer, clicando na página correspondente a: "Porque doar?", "Quem pode doar?", "Processo de doação", "Tipos de sangue", "Mitos e Verdades" ou "Quem somos".
**Requisitos associados** | RF-001, RF-002, RF-003, RF-004, RF-005 e RF-006
**Resultado esperado** | O usuário consegue acessar as informações sobre o intuito da aplicação sobre doação de sangue. As informações são exibidas de forma clara e de fácil entendimento, motivando o usuário a doar sangue.<br>
**Dados de entrada** | Navegação até as telas supracitadas.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Autogerenciamento de informações pelos doadores**
 :--------------: | ------------
**Procedimento**  | 1) O usuário previamente cadastrado como doador, acessa a aplicação e faz login com email e senha.<br>2) Na tela seguinte, o usuário clica no botão de "Editar" representado por um lápis.<br>3) Inserir os dados editáveis no formulário: Telefone, Peso, Data de Nascimento, Cidade, Tipo Sanguíneo e Responder à pergunta: "Está se sentido bem?" (Sim ou Não).<br>4) Clicar em "Confirmar".
**Requisitos associados** | RF-007
**Resultado esperado** | O usuário consegue gerenciar os dados da sua conta.
**Dados de entrada** | Inserir informações no formulário de "Editar Perfil". 
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Autogerenciamento do cadastro por novos usuários representantes de banco de sangue**
 :--------------: | ------------
**Procedimento**  | 1) O usuário previamente cadastrado como representante de banco de sangue, acessa a aplicação e faz login com email e senha.<br>2) Na tela seguinte, o usuário clica no botão de "Editar" representado por um lápis.<br>3) Inserir os dados editáveis no formulário: Telefone, Peso, Data de Nascimento, Cidade, Tipo Sanguíneo e Responder à pergunta: "Está se sentido bem?" (Sim ou Não).<br>4) Clicar em "Confirmar".
**Requisitos associados** | RF-008
**Resultado esperado** | O usuário consegue acessar as informações do seu cadastro e modificá-las e salvá-las.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Acesso à aplicação por usuários cadastrados**
 :--------------: | ------------
**Procedimento**  | 1) O usuário cadastrado acessa a tela principal através do link: https://banco-de-sangue.netlify.app/.<br>2) Clica em "Fazer login".<br>3) O usuário informa e-mail e senha e clica no botão "Entrar".<br>4) Pronto! Usuário logado.
**Requisitos associados** | RF-009
**Resultado esperado** | O usuário consegue fazer login na aplicação.
**Dados de entrada** | Inserção de dados válidos no formulário de login.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 - Inserção de informações complementares para tornar-se um doador**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação com login e senha.<br>2) Na tela seguinte o usuário clica no botão "Quero ser doador".<br>3) No formulário aberto insere as informações de peso, data de nascimento, data da última doação, cidade onde reside, tipo de sanguíneo e responde à pergunta:"Está se sentindo bem?" (Sim ou Não).<br>4) Clica em "Cadastrar".
**Requisitos associados** | RF-011
**Resultado esperado** | O usuário consegue inserir informações complementares para tornar-se um doador.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro de informações complementares.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 - Acesso às informações sobre doações de sangue anteriores**
 :--------------: | ------------
**Procedimento**  |1) O usuário acessa a aplicação com login e senha.<br>2) Na tela seguinte o usuário clica no card que contém as informações sobre suas doações de sangue anteriores.
**Requisitos associados** | RF-12
**Resultado esperado** | O usuário consegue acessar as informações sobre suas doações de sangue.
**Dados de entrada** | Navegação pelas telas do doador.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT07 - Gerenciamento de informações de doadores de sangue por representantes de banco de sangue**
 :--------------: | ------------
**Procedimento**  |  1) O usuário representante do banco de sangue faz login com email e senha.<br>2) Na tela seguinte o usuário terá os card´s com as informações dos doadores.<br>3)  Basta clicar no card específico. Será aberta uma tela com informações do doador.<br>4) Para editar as informações clicar no botão de "Editar perfil" para as informações disponíveis que são: Nome completo, e-mail, telefone, peso, tipo sanguíneo, cidade, data de nascimento, "Está se sentindo bem?" (sim ou não).<br>
**Requisitos associados** | RF-013
**Resultado esperado** | O representante do banco de sangue consegue acessar as informações dos doadores de sangue.
**Dados de entrada** | Navegação pelas telas de doadores de sangue.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT8 - Encerramento da própria conta do sistema pelo usuário**
 :--------------: | ------------
**Procedimento**  | 1) O usuário depois de cadastrado, dentro da página do doador, consegue remover sua conta através do botão "Encerrar".<br>2) Após  clicar em encerrar aparecerá uma outra tela pedindo para ele confirmar a remoção de sua conta.
**Requisitos associados** | RF-015
**Resultado esperado** | O usuário consegue remover sua conta.
**Dados de entrada** | Faz o Login e ao entrar na página do doador clica no botão "Encerrar".
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software

|*Caso de Teste*                                 |*TC-01 - Acesso às informações sobre doação de sangue*                                         |
|---|---|
|Requisito Associado | RF-001, RF-002, RF-003, RF-004, RF-005 e RF-006 - Usuários, logados ou não, tem acesso às informações sobre doação de sangue: "INtuito do projeto", "Conscientização sobre a doação de sangue", "Pré-requisitos para doação de sangue", "Mitos e Verdades", "Tipos de sangue".|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-banco_de_sangue/blob/main/docs/videos/RF-001%20-%20RF-002%20RF-003%20-%20RF-004%20-%20RF-005%20-%20RF-006.mkv| 

|*Caso de Teste*                                 |*TC-02 - Autogerenciamento de informações pelos doadores*                                         |
|---|---|
|Requisito Associado | RF-007 - Usuários logados conseguem gerenciar dados da sua conta.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-banco_de_sangue/blob/main/docs/videos/RF-007.mkv| 


|*Caso de Teste*                                 |*TC-03 - Autogerenciamento do cadastro por novos usuários representantes de banco de sangue*                                         |
|---|---|
|Requisito Associado | RF-008 - Usuários, representantes do banco de sangue, logados, conseguem gerenciar dados da sua conta.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-banco_de_sangue/blob/main/docs/videos/RF-008.mkv| 


|*Caso de Teste*                                 |*TC-04 - Acesso à aplicação por usuários cadastrados*                                         |
|---|---|
|Requisito Associado | RF-009 - Usuários, doadores, cadastrados, conseguem logar na aplicação.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-banco_de_sangue/blob/main/docs/videos/RF-009.mkv| 


|*Caso de Teste*                                 |*TC-05 - Inserção de informações complementares para tornar-se um doador*                                         |
|---|---|
|Requisito Associado | RF-011 - Usuários, doadores,  logados conseguem inserir informações complementares ao seu cadastro.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-banco_de_sangue/blob/main/docs/videos/RF-011.mkv | 


|*Caso de Teste*                                 |*TC-06 - Acesso àsinformações sobre doações anteriores*                                         |
|---|---|
|Requisito Associado | RF-012 - Usuários, doadores, logados conseguem visualizar informações sobre suas doações.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-banco_de_sangue/blob/main/docs/videos/RF-012.mkv | 


|*Caso de Teste*                                 |*TC-07 - Gerenciamento de informações de doadores de sangue por rerpresentantes de banco de sangue*                                         |
|---|---|
|Requisito Associado | RF-013 - Usuários, representantes de banco de sangue, logados, conseguem gerenciar dados da conta de doadores.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-banco_de_sangue/blob/main/docs/videos/RF-013.mkv | 


|*Caso de Teste*                                 |*TC-08 - Encerramento da própria conta do sistema pelo usuário*                                         |
|---|---|
|Requisito Associado | RF-015 - Usuários, doador ou representante do banco de sangue, logados conseguem remover sua conta da aplicação.|
|Link do vídeo do teste realizado: | https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-banco_de_sangue/blob/main/docs/videos/RF-015.mkv | 








## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.



## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.




## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



