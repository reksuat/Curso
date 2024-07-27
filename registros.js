const prompt= require("prompt-sync")();
let alunos= []
const modelo = () => {
    const nomeAluno = prompt("Nome do aluno: ");
    const dataNascimento = parseInt(prompt("Ano de nascimento (AAAA): "), 10);
    const curso = prompt("Descrição do curso: ");
    const periodo = prompt("Qual o período: ");
    if (nomeAluno !== "" && curso !== "" && periodo !== "" &&
!isNaN(dataNascimento)) {
return {
nomeAluno,
dataNascimento,
curso,
periodo,
};
} else {
console.log("Dados inválidos");
return undefined;
}
};

const criar = () => {
    const aluno = modelo();
if (aluno != undefined) { 
    alunos.push(aluno);
    console.log("Aluno cadastrado com sucesso");
    }
    };


const listar = () => {
    if (alunos.length === 0) {
    console.log("Nenhum aluno encontrado ");
    return false;
    } else {
    alunos.forEach((aluno, indice) => { 
    console.log(`
    ${indice + 1}.
    Nome do Aluno: ${aluno.nomeAluno }
    Ano de Nascimento:
    ${aluno.dataNascimento }
    Curso: ${aluno.curso}
    Período: ${aluno.periodo} 
    ` );
    });
    return true;
    }
    };



const remover = () => {
    listar()
    const prompt = require("prompt-sync")();
    const indice =+prompt("Qual indice você deseja remover? ")-1;
    alunos.splice(indice, 1);
    console.log("Aluno removido com sucesso");
    };


    const atualizar = () => {
        listar();
        const prompt = require("prompt-sync")(); 
        const indice = +prompt("Qual o indice que deseja atualizar? ") - 1;
        let aluno= modelo()
        if (aluno !== undefined) {
        alunos[indice] =aluno; 
        console.log("Aluno atualizado com sucesso");

        } else {
        console.log("Falha na atualização");
        }
        };
    const idades = () => {
        const anoAtual = new Date().getFullYear();
        let menor = 0;
        let maior = 0;
    
        alunos.forEach(aluno => {
            const idade = anoAtual - aluno.dataNascimento;
            if (idade < 18) {
                menor++;
            } else {
                maior++;
            }
        });
        console.log("Alunos maiores de idade: ",maior);
        console.log("Alunos menores de idade: ", menor);
    }

    module.exports={
        criar,
        atualizar,
        remover,
        listar,
        idades
    }