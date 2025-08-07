<div align="center">
  <img src="./docs/fastify.PNG" alt="Logo" height="200">
</div>

<h1 align="center"><strong>NODE BOILERPLATE - F1</strong></h1>



## 🎯 Objetivo

Criar uma **API mínima** com **Node.js** e **Fastify**, com dois endpoints principais:

- Um para listar os **pilotos** (drivers)
- Outro para listar as **equipes** (teams)

Essa estrutura serve como **boilerplate** para acelerar o desenvolvimento de novos projetos com uma base simples, clara e pronta para evoluir.

---

## 🔹 Boilerplate

Este projeto é um **template base (boilerplate)** com:

- Configuração inicial do TypeScript
- Scripts de build e execução
- Estrutura básica de arquivos e pastas
- Dependências úteis já instaladas
- Ideal para projetos que precisam de um ponto de partida rápido

---

## 📡 Endpoints disponíveis

- `GET /teams` → Lista as equipes
- `GET /drivers` → Lista os pilotos
- `GET /drivers/:id` → Busca um piloto pelo ID

---

## ✨ Por que usar uma API mínima?

✔ Fácil de criar e iniciar rapidamente  
✔ Ideal para aprender ou prototipar  
✔ Serve como base para projetos futuros  
✖ Pouca modularização → difícil escalar sem refatorar

---

## 🛠 Melhorias futuras

- Criar pasta `src/controllers` → separar lógica das rotas
- Criar pasta `src/utils` → funções genéricas (status code, retorno JSON)
- Criar pasta `src/models` → interfaces e tipos
- Estruturar arquitetura com camadas
- Adicionar testes automatizados
- Tornar a API mais robusta e modular

---

## 🔧 Outras configurações importantes

### 🔒 CORS

**CORS** (Cross-Origin Resource Sharing) é essencial para definir **quem pode consumir sua API**.

No **Fastify**, usamos a lib oficial:

```
npm i @fastify/cors
 // código
server.register(cors, {
  origin: "*", // Libera acesso para qualquer origem
});

```


# 🚀 Tecnologias do boilerplate

Este boilerplate foi desenvolvido usando:

### 📦 Dependências principais

- [typescript][typescript-npm] – Superset do JavaScript com tipagem
- [tsx][tsx-npm] – Para rodar TypeScript sem precisar compilar
- [tsup][tsup-npm] – Empacotador rápido baseado no esbuild
- [@types/node][@types/node-npm] – Tipos para Node.js

---

### 📄  Arquivos importantes

- `.gitignore`  – Ignora pastas como node_modules
- `.env` - Variáveis de ambiente
- `tsconfig.json` - Configuração do TypeScript

---

### ⚡ Scripts disponíveis

- `npm run dist:` Compila o TypeScript para JavaScript (pasta dist)
- `npm run start:dev:` Roda o servidor em modo desenvolvimento
- `npm run start:watch:` Roda com reload automático ao salvar alterações
- `npm run start:dist:` Compila e executa a versão final (da pasta dist)

---

# 👨‍💻 Como usar

Para usar este projeto:

Clique em [Use this template] OU siga os passos abaixo:



```
  # Clonar o repositório
  $ git clone 

  # Acessar a pasta do projeto
  $ cd 

  # Instalar dependências
  $ npm install
```




## Autor original

| [<img src="https://avatars3.githubusercontent.com/u/37452836?s=96&v=4"><br><sub>Felipe Aguiar</sub>](https://github.com/felipeAguiarCode) |
| :---------------------------------------------------------------------------------------------------------------------------------------: |
|                                            [Linkedin](www.linkedin.com/in/felipe-aguiar-exe/)                                             |


---


## ✍ Refeito por 
| [<img src="https://avatars.githubusercontent.com/u/147287067?s=100&v=4" width="100px"><br><sub>Naty</sub>](https://github.com/NatyAnalytcs-1) |
|:---------------------------------------------------------------------------------------------------------------------------------------------:|
|                                                 [LinkedIn](https://www.linkedin.com/in/nataliaanastacio)                                      |


