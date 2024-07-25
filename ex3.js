 // não tinha prompt

const alunos = [
    {
    nomeAluno : "Edson",
    dataNascimento : 1988,
    curso: "dev",
    periodo : "noite",
    },
    {
    nomeAluno : "Aluno 1",
    dataNascimento : 2010,
    curso: "dev",
    periodo : "noite",
    },
    {
    nomeAluno : "Aluno 2",
    dataNascimento : 1999,
    curso: "dev",
    periodo : "tarde",
    },
    ];

    const remover = () => {
        const prompt = require("prompt-sync")();//faltou o prompt-sync
        const indice =+prompt("Qual indice você deseja remover? ")-1;
        alunos.splice(indice, 1);//para tirar
        console.log("Jogo removido com sucesso");
        console.log(alunos);
        };
        console.log(remover());