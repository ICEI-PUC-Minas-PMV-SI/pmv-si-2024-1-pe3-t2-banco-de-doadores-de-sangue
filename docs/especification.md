# Especificações do Projeto

O problema que irá ser atacado para esse projeto é a falta de doadores de sangue no Brasil. Esse sistema deve ter como objetivo incentivar mais pessoas a se tornarem doadores de sangue, facilitar o processo de doação e garantir que os bancos de sangue tenham um suprimento adequado de sangue para atender às necessidades da população.

Para isso será abordado a construção das personas e das histórias de usuários para, posteriormente, serem definidas os requisitos do sistema.
As técnicas utilizadas são:
- Definição de personas, contextualizando seus momentos de vida e suas necessidades.
- Criação das histórias de usuários, separando em "Persona" | "Funcionalidade" | "Motivo".
- Criação dos requisitos do sistema, baseado nos resultados dos passos anteriores.

## Personas

1) Maria, 35 anos, Enfermeira:
Maria trabalha em um banco de sangue em uma grande cidade do Brasil. Ela é uma pessoa ocupada que geralmente precisa lidar com muitas tarefas simultaneamente. Como representante do banco de sangue, ela precisa entrar em contato com doadores regularmente para agendar doações e atualizar informações importantes. Os últimos anos tem sido muito difíceis para Maria, uma vez que a COVID 19, o isolamento social, e uma crescente quantidade de fake news anti-ciência afastaram as pessoas dos centros de doação e as tornaram mais desinformadas;

2) João, 25 anos, Estudante universitário:
João é um jovem estudante universitário que está preocupado com a questão da doação de sangue. Ele não sabe muito sobre o processo e não tem certeza se pode doar sangue ou não. João quer aprender mais sobre como se tornar um doador e como se preparar para a doação. Ele gostaria de ter acesso a informações precisas e confiáveis sobre doação de sangue, como requisitos, tipos de doação, riscos e benefícios. João também gostaria de um método eficaz de se volutariar à doação, caso descobrisse ser possível, após ler os requisitos. 

3) Ana, 50 anos, Dona de casa:
Ana é uma dona de casa que se preocupa com a saúde da família e da comunidade. Ela acredita que a doação de sangue é uma forma importante de ajudar outras pessoas em momentos de necessidade. Ana adquiriu o hábito quando quase perdeu uma amiga muito próxima devido à falta de sangue no hospital da cidade. Desde então, ela doa sempre que possível, e incentiva as pessoas a sua volta a fazerem o mesmo. No entanto, Ana percebe que muitos ao seu redor não entendem muito bem como o processo de doação funciona e acabam não indo ao hemocentro por conta disso.

4) Gabriel, 35 anos, médico:
 Gabriel é um médico especialista no tratamento de câncer. Durante toda sua carreira, ele e seus colegas sofrem com a falta de doadores de sangue. A situação piorou quando ele se especializou no tratamento de câncer, uma vez que nessa área da medicina a demanda de sangue é muito grande devido à quimioterapia. Um único paciente às vezes usa muitas bolsas de sangue, que demora para ser reposto devido ao baixo volume de doações. Gabriel doa sempre que possível, e incentiva os familiares a fazerem o mesmo deste que entrou na faculdade, mas ele sempre notou a falta de engajamento da sociedade com o problema.

## Histórias de Usuários

|`PERSONA`| `FUNCIONALIDADE` |`MOTIVO/VALOR` |
|--------------------|------------------------------------|----------------------------------------|
|Maria, representante do banco de sangue | Ter acesso imediato à um acervo de voluntários à doação de sangue | Entrar em contato com o doador para agendar doação e/ou atualizar informações importantes |
|João, doador de sangue | Ter acesso a informações sobre doação de sangue | Ter certeza se pode doar ou não, saber como se preparar e quais os riscos |
|João, doador de sangue | Ter acesso a um método de se voluntariar | Para que possa ser encontrado posteriormente para doação |
|Ana, doador de sangue | Ter acesso a informações detalhadas sobre doação de sangue | Mostrar às pessoas conhecidas como é o processo e incentivá-las a se cadastrar para doação |
|Gabriel, doador de sangue | Ter acesso a informações completas sobre doação de sangue | Mostrar às pessoas conhecidas como é o processo e incentivá-las a se cadastrar para doação |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001 | O sistema deve permitir que usuários, logados ou não, visualizem a página inicial do sistema, em que se explica o intuito do projeto | ALTA |  |
|RF-002 | O sistema deve permitir que usuários, logados ou não, visualizem a página referente à conscientização sobre doação de sangue | ALTA |  |
|RF-003 | O sistema deve permitir que usuários, logados ou não, visualizem a página referente às informações dos pré-requisitos para doação de sangue | ALTA |  |
|RF-004 | O sistema deve permitir que usuários, logados ou não, visualizem a página referente às informações sobre o processo de doação de sangue | ALTA |  |
|RF-005 | O sistema deve permitir que usuários, logados ou não, visualizem a página FAQ | ALTA |  |
|RF-006 | O sistema deve permitir que usuários, logados ou não, visualizem a página referente às informações sobre os diferentes tipos de sangue | ALTA |  |
|RF-007 | O sistema deve permitir que novos usuários doadores gerenciem seu cadastro no sistema | ALTA |  |
|RF-008 | O sistema deve permitir que novos usuários representantes dos bancos de sangue gerenciem seu cadastro no sistema | ALTA |  |
|RF-009 | O sistema deve permitir que todos os usuários cadastrados possam realizar o login no sistema | ALTA |  |
|RF-010 | O sistema deve permitir que todos os usuários cadastrados possam recuperar suas senhas | MEDIA |  |
|RF-011 | O sistema deve permitir que usuários doadores se voluntariem para a doação realizando o cadastro de pré-triagem | ALTA |  |
|RF-012 | O sistema deve permitir que os usuários visualizem suas próprias informações de doação de sangue | ALTA |
|RF-013 | O sistema deve permitir que representantes de banco de sangue gerenciem informações de doadores de sangue | ALTA |
|RF-014 | O sistema deve permitir que os usuários recebam notificações por e-mail ou mensagem de texto sobre campanhas de doação de sangue | BAIXA |
|RF-015 | O sistema deve permitir que os usuários solicitem a remoção de suas informações do sistema | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002 | O sistema deve ser seguro e confiável, com medidas de segurança adequadas para proteger as informações dos usuários | ALTA |
|RNF-003 | O sistema deve ser compatível com diferentes navegadores web, incluindo Chrome, Firefox e Safari | MÉDIA |
|RNF-004 | O sistema deve ter um tempo de resposta rápido (2s) para fornecer uma boa experiência do usuário | ALTA |
|RNF-005 | O sistema deverá ser construído baseado nas tecnologias HTML, CSS, Javascript | ALTA |
|RNF-006 | Para determinadas funcionalidades, o sistema fará o consumo de API's externas | ALTA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O sistema será construído por um time de 6 pessoas    |
|04| O projeto iniciará com um orçamento de R$00,00        |

