
var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `
SELECT Dados.temperatura , Dados.registroData FROM Dados 
JOIN Sensor ON Sensor.idSensor = 1 order by Dados.idDados;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {

    buscarUltimasMedidas
}
