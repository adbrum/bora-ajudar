bora-ajudar
Projeto filantrópico que visa prover uma plataforma que divulgue uma instituição de ajuda e possibilite a volutários realizar doações solicitadas por esta instituição.

Instalação
Clone nosso repositório:
	git clone https://github.com/adbrum/bora-ajudar
	cd bora-ajudar
Instale as dependências:
Utilizando npm:

	npm install
Utilizando yarn:

	yarn
Sincronize ao seu banco de dados
O database do firebase foi o banco escolhido para desenvolver o projeto, agregando desempenho e tempo real às consultas e respostas realizadas ao banco de dados. Tendo isso em vista, é necessário alterar as informações do arquivo src/base.js para que a aplicação sincronize com o seu banco de dados.

JSON de uma campanha
Campos comuns a todos os projetos:

	{
		"name": "Nome da campanha",
		"slogan": "Frase de efeito para a campanha",
		"description": "Descrição dos objetivos e motivações da campanha",
		"type": "Tipo da capampanha"
	}
type === "items" && inclua ao JSON:

	{
		"how": "De que forma o doador pode entrar em contato para doar os itens solicitados pela instituição"
	}
type === "money" && inclua ao JSON:

	{
		"goal": x, // x é o valor final visado pela campanha
		"current": y // y é o valor arrecadado até o momento
	}

Inicializando com npm:

	npm start
Inicializando com yarn:

	yarn start
Créditos
Projeto desenvolvido, inicialmente, durante o curso devReact promovido pelo DevPleno (https://www.devpleno.com) e ministrado por Túlio Faria (@tuliofaria).# bora-ajudar
