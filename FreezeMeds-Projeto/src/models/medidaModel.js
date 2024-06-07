
var database = require("../database/config");

function buscarUltimasMedidas(idDados, limite_linhas) {

    var instrucaoSql = `SELECT 
    temperatura, 
        
    registroData,
                  DATE_FORMAT(momento,'%H:%i:%s') as MomentoAtual
                    FROM medida
                    WHERE fkSensor = ${idDados}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idDados) {

    var instrucaoSql = `SELECT 
    temperatura, 
    registroData,
                        DATE_FORMAT(momento,'%H:%i:%s') as MomentoAtual, 
                        fkSensor 
                        FROM medida WHERE fkSensor = ${idDados} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
