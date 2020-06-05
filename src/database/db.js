// Importar depêndecia da sqlite3
const sqlite3 = require("sqlite3").verbose()

// Criar objeto que ierá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db
// Utilizar o objeto de banco de dados, para as nossa operações
// db.serialize(() => {
//     // Com comandos SQL
//     // 1 Criar tabela
//     // A crase é usada para permitir quebra de linha sem estragar o código
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT, 
//             city TEXT,
//             items TEXT
//         );
//     `)

//     // 2 Inserir dados na tabela
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name, 
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `
    // const values = [
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",       
    //     "Papersider",
    //     "Rua Emídio Ferreira de Oliveira",
    //     "N° 30",
    //     "Minas Gerais",
    //     "Ibirité",
    //     "Resíduos Eletrônicos, Lâmpadas"
    // ]

    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData)

//     // 3 Consultar dados da tabela
//     // Se quiser selecionar um valor específico eu troco o * pelo o nome do valor
//     // db.all(`SELECT name FROM places`, function (err, rows) {
//     //     if (err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Aqui estão os seus cadastros")
//     //     console.log(rows)
//     // })

//     // 4 Deletar dados da tabela
    db.run(`DELETE FROM places WHERE id = ?`, [10], function (err) {
        if (err) {
            return console.log(err)
        }

        console.log("Registro deletado com sucesso")
    })

// })