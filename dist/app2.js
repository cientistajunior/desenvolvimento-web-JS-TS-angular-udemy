"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_js_1 = __importDefault(require("./Carro.js"));
const Pessoa_js_1 = __importDefault(require("./Pessoa.js"));
const Concessionaria_js_1 = __importDefault(require("./Concessionaria.js"));
/* --- Criar carros --- */
let carroA = new Carro_js_1.default('dodge journey', 4);
let carroB = new Carro_js_1.default('veloster', 3);
let carroC = new Carro_js_1.default('cerato', 4);
/* --- montar a lista de carros da concessionaria --- */
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria_js_1.default('Av Paulista', listaDeCarros);
/* --- exibir lista de carros --- */
// console.log(concessionaria.mostrarListaDeCarros())
/* --- comprar o carro -- */
let cliente = new Pessoa_js_1.default('Joao', 'veloster');
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
