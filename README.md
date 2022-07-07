# Teste Prático 2RP
O teste prático 2RP é um projeto que consiste em um sistema de controle de funcionários.

# Clonar Repositório do Github
Para clonar o repostirório do GitHub você precisara verificar se a instalação do git foi feita, e se tudo estiver certo você exacutará o seguinte comando no terminal do Git:
`git clone *link do repositório’

# Criar o Banco de Dados
Para Criar o banco de dados após a clonagem do repositório para a sua máquina, você deverá abrir o SQL Server Management Studio (caso já o tenha instalado, caso contrário, o instale).

No SQL:

Adicione os arquivos:

_DiretorioOndeORepositorioFoiClonado\banco de dados\scripts_bd\DDL

_DiretorioOndeORepositorioFoiClonado\banco de dados\scripts_bd\DML

Agora, com os arquivos adicionados você deve ir no arquivo denominado DDL e clicar em Executar, assim serão criados o banco e tabelas.

Em seguida, abra o arquivo denominado DML e clique em executar, assim você irá adicionar os valores as tabelas.


# Executar a API
Primeiramente acesse o arquivo Context, em seguida, mude o lugar onde está escrito "options builder" para como está em seu computador, seu banco com a sua senha de acesso.

Ex: `optionsBuilder.UseSqlServer("Data Source=*****\\SQLEXPRESS; initial catalog=****; user Id=****; pwd=****;"); }`
Após isso, para executar a API temos 2 opções:
_Primeira: Você pode abrir o local do arquivo (DiretorioOndeORepositorioFoiClonado\Backend\2rp_processoSeletivo_webApi) e na parte superior onde fica a rota dele digitar cmd e depois colocar um dotnet run e dar enter.

_Segunda: Abra o arquivo (DiretorioOndeORepositorioFoiClonado\Backend\2rp_processoSeletivo_webApi.sln) no Visual Studio e clique em executar 2rp_processoSeletivo_webAPI.

Após realizar a execução da API você já pode testar os métodos no swagger.

#Executar o front-end
Para iniciar abra o local do arquivo onde está nossa aplicação (DiretorioOndeORepositorioFoiClonado\frontend\2rp-ui) e no cmd da pasta adicione o comando (npm intall) para baixar todas as dependencias do nosso projeto.

#Rodar a aplicação 

-Execute os arquivos da pasta (banco de dados) no SQL Server Management Studio 
-Siga os passos dados na parte do readme (executar a API) e começe a rodar 
-Siga os passos dados na parte do readme (Executar O Front-end) e execute no terminala da aplicação (npm start)

#extenções baixadas no projeto 

backend: 
-Microsoft.AspNetCore.Authentication.JwtBearer
-Microsoft.AspNetCore.NewtownsoftJson
-Microsoft.EntityFrameworkCore.SqlServer
-Microsoft.EntityFrameworkCore.SqlServer.Design
-Microsoft.EntityFrameworkCore.Tools
-Swashbuckle.AspNetCore
-System.IdentityModel.Tokens.Jwt

frontend:
-react
-react-router-dom
-axios
