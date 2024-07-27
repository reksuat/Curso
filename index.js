const prompt = require("prompt-sync")();
const { criar, listar, remover, atualizar, idades } = require("./registros");
let escolha
while (escolha!=0) {
    

    console.log(`
    //     >>>> CURSO <<<<
    //     1. Adicionar um novo Aluno
    //     2. Remover um Aluno
    //     3. Listar todos os 
    //     4. Atualizar um Aluno
    //     5. Mostrar menores e maiores de idade
    //     0. Sair
    //     `);
    escolha=prompt("Escolha uma opção: ");
    switch (escolha) {
        case "1":
            console.log(criar());
            break
            case "2":
                console.log(remover());
                break
                case "3":
                    console.log(listar());
                    break
                    case "4":
                        console.log(atualizar());
                        break
                        case "5":
                            console.log(idades());
                            break
                        case "0":
                            console.log("encerrando..");
            break;
    
        default:
            console.log("opção inválida");
            break;
    }
    }