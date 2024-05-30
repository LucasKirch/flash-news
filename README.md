
O aplicativo consiste em cumprir os seguintes requisitos:

Criar um aplicativo que exibe notícias de diferentes fontes. O aplicativo pode consumir uma API de notícias para obter os últimos artigos e atualizações.

Requisito Obrigatório: Exibição de uma lista de artigos de notícias com títulos e resumos
breves.

Implementação DevOps: Implementação de pipelines de entrega contínua para garantir que
novas funcionalidades e correções de bugs sejam entregues aos usuários de forma rápida e
segura.

Turma: Sistemas para internet P5A - noite

Grupo: Lucas Soares Kirchesch - Matheus Alcantara - Jose Gomes - Luciano Lira - Alexander Dore - Rafhael Matias 

Desenvolvimento:

Foi criado um app em react native com apoio de um simulador de android, logo após a criação, foi
 adicionado uma pasta(services) e um arquivo dentro (newsApi.ts) para fazer a comunicação com a api do IBGE, o próximo passo foi recuperar os dados da api utilizando typeScript e uma interface
 para recuperar os dados fornecidos, depois foi construído o front com logo, corpo com os dados da api e uma paginação. São pegas as 100 primeiras notícias e paginadas em 10 páginas com 10 notícias cada. 

