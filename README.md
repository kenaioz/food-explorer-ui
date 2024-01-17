
# Food-Explorer UI

Projeto de conclusão do curso Explorer da Rocketseat, projeto visa simular o cardápio de um restaurante com controle de roles do usuário logado onde o usuário padrão de cliente com a role "customer" vai poder apenas vizualizar os pratos cadastrados e simular um pedido a esse restaurante, "usuário" com role de editor irá poder adicionar e editar pratos já cadastrados e por fim o usuário com role de "admin" terá o mesmo acesso da role de "editor" com acrescento de uma página para gestão de usuários já cadastrados e possibilidade de adicionar novos ingredientes.

Além do exigido tomei liberdade para adicionar algumas coisas, por exemplo a separação da role de "admin" e de "editor" já que era exigido apenas o editor, o processamento do pedido também não era exigido, além disso também restringi a seleção dos ingredientes na criação ou edição de um prato apenas com ingredientes que já existem no banco usando uma tabela pivot que armazena a relação entre as tabelas de pratos com a de ingredientes, dessa forma elimino a possibilidade do usuário editor cadastrar ingredientes repetidos.




## Screenshots

![App Screenshot](https://github.com/kenaioz/food-explorer-ui/assets/43124388/30d626ed-c98c-4bc4-99eb-06e79a0d3897)

![App Screenshot](https://github.com/kenaioz/food-explorer-ui/assets/43124388/3289eb8a-3f6b-4724-bd42-57296966ff08)

![App Screenshot](https://github.com/kenaioz/food-explorer-ui/assets/43124388/7dee99f8-70b4-4608-bea4-c6cd85f4739b)




## Dicas

Para realizar pesquisas no desktop na home você pode apenas digitar o que procura na barra de pesquisa e clicar em enter, mas no mobile é necessário clicar no icone de lupa ao lado da barra de pesquisa


## Usuários existentes para testes

 - Customer - customer@email.com - 654321
 - Editor - editor@email.com - 123456
 - Admin - admin@email.com - 123456


## Stack utilizada

[**Front-end:**](https://github.com/kenaioz/food-explorer-ui) React, Styled-Components

[**Deploy:**](https://main--cool-kitten-558d66.netlify.app/) Netlify


[**Back-end:**](https://github.com/kenaioz/food-explorer-api) Node, Express, SQLite

[**Deploy:**](https://food-explorer-api-ihgd.onrender.com) Render

