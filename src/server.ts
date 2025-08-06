import fastify from "fastify";
import cors from "@fastify/cors";

// criando o servidor Fastify com log ativado
const server = fastify({ logger: true });

// liberando acesso com CORS (qualquer um pode consumir a API)
server.register(cors, {
    origin: "*",
});

// times de F1
const teams = [
    { id: 1, name: "McLaren", base: "Woking, Reino Unido" },
    { id: 2, name: "Mercedes", base: "Brackley, Reino Unido" },
    { id: 3, name: "Racing Bulls", base: "Faenza, Itália" },
    { id: 4, name: "Williams", base: "Grove, Reino Unido" },
    { id: 5, name: "Ferrari", base: "Maranello, Itália" }, // adicionei mais um
];

// pilotos de F1
const drivers = [
    { id: 1, name: "Lando Norris", team: "McLaren" },
    { id: 2, name: "George Russell", team: "Mercedes" },
    { id: 3, name: "Liam Lawson", team: "Racing Bulls" },
    { id: 4, name: "Alexander Albon", team: "Williams" },
    { id: 5, name: "Charles Leclerc", team: "Ferrari" }, // adicionei mais um
];

// rota GET que retorna todos os times
server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return teams; // não precisa colocar em array de novo, já é um array
});

// rota GET que retorna todos os pilotos
server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    return drivers;
});

// interface pra tipar o parâmetro de rota
interface DriverParams {
    id: string;
}

// rota GET que retorna um piloto específico pelo ID
server.get<{ Params: DriverParams }>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if (!driver) {
        response.type("application/json").code(404);
        return { message: "Piloto não encontrado" };
    } else {
        response.type("application/json").code(200);
        return driver;
    }
});

// servidor ouvindo na porta 3333
server.listen({ port: 3333 }, () => {
    console.log("Servidor iniciado na porta 3333");
});

// pra rodar: npm run start:watch