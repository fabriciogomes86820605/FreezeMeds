
var database = require("../database/config");

function buscarUltimasMedidas(limite_linhas) {

    var instrucaoSql = `SELECT Dados.idDados, Dados.temperatura FROM Dados 
JOIN Sensor ON Sensor.idSensor = 1 order by Dados.idDados limit ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    
    buscarUltimasMedidas
}
