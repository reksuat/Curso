const prompt = require("prompt-sync")();
const { criar, listar, remover, atualizar } = require("./registros");
let =[]
let escolha
while (escolha!=0) {
    

    console.log(`
    //     >>>> CURSO <<<<
    //     1. Adicionar um novo Aluno
    //     2. Remover um Aluno
    //     3. Listar todos os 
    //     4. Atualizar um Aluno
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
                        case "0":
                            console.log("encerrando..");
            break;
    
        default:
            console.log("opção inválida");
            break;
    }
    }