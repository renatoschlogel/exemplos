# Projeto com exemplo da utilização do sequelize para coneção com o banco de dados com nodeJs;


## Roteiro:

#### OBS : Estou utilizando o yarn para gerancia as dependencia, porem tambem pode ser utilizado o npm;

### Dependencias:
     1. Criar pasta para o projeto e iniciar o projeto com                         : yarn init -y;
     2. Adcionar dependencia do sequelize                                          : yarn add sequelize;
     3. Adcionar dependencia do express (trabalhar com rotas da API)               : yarn add express;
     4. Adcionar dependencia do sequelize-cli como desenvolvimento                 : yarn add -D sequelize-cli;
     8. Adicionar dependencia do banco (no exemplo do mysql/mariaDB)               : yarn add mysql2

### Configurando o Sequelize:
     1. Iniciar configuração do sequelize                                          : ./node_modules/.bin/sequelize init;
     2. renomear o arquivo config/config.json para config/database.js;             :
        * favor ver o novo conteudo no arqui no projeto;
     3. Criar pastas app e database;
     4. Mova as pastas migrations e seeders para dentro de database e a pasta models para dentro de app;
     5. Criar fonte .sequelizerc na raiz do projeto (ver conteundo no projeto);
     6. Criar migration para criação da da tabelas User    : node_modules/.bin/sequelize migration:create --name=create-users
     7. Executar a migration                               : node_modules/.bin/sequelize db:migrate;

### Docker Compose, para falicitar a utilização do banco:

     1. Acessar a pasta ./DockerComposeMariaDB;
     2. Para subir o container, executar o sequinte comando    : docker-compose up;
          * Serao startados dois containers, um com o banco de dados MariaDB na porta 3306 
            e o outro com o PHPMyAdmin para a consulta do banco, na porta 3307;