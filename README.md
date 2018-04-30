# bora-ajudar

Projeto filantrópico que visa prover uma plataforma que divulgue uma instituição de ajuda e possibilite a volutários realizar doações solicitadas por esta instituição. 

## Instalação

### Clone nosso repositório:

<pre>
	git clone https://github.com/adbrum/bora-ajudar
	cd bora-ajudar
</pre>

### Instale as dependências:

Utilizando npm:
<pre>
	npm install
</pre>

Utilizando yarn:
<pre>
	yarn
</pre>

## Sincronize ao seu banco de dados

O database do firebase foi o banco escolhido para desenvolver o projeto, agregando desempenho e tempo real às consultas e respostas realizadas ao banco de dados. Tendo isso em vista, é necessário alterar as informações do arquivo <strong>src/base.js</strong> para que a aplicação sincronize com o seu banco de dados. 

### JSON de uma campanha

<strong>Campos comuns a todos os projetos:</strong>
<pre>
	{
		"name": "Nome da campanha",
		"slogan": "Frase de efeito para a campanha",
		"description": "Descrição dos objetivos e motivações da campanha",
		"type": "Tipo da capampanha"
	}
</pre>

<strong>type === "items" && inclua ao JSON:</strong>
<pre>
	{
		"how": "De que forma o doador pode entrar em contato para doar os itens solicitados pela instituição"
	}
</pre>

<strong>type === "money" && inclua ao JSON:</strong>
<pre>
	{
		"goal": x, // x é o valor final visado pela campanha
		"current": y // y é o valor arrecadado até o momento
	}
</pre>

## Vamos mudar o mundo com código

Inicializando com npm:
<pre>
	npm start
</pre>

Inicializando com yarn:
<pre>
	yarn start
</pre>

## Créditos

Projeto desenvolvido, inicialmente, durante o curso devReactJS promovido pelo DevPleno (https://www.devpleno.com) e ministrado por Túlio Faria (@tuliofaria).
