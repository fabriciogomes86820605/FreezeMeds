
var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `
SELECT Dados.temperatura ,  DATE_FORMAT(registroData, '%H:%i:%s') FROM Dados 
JOIN Sensor ON Sensor.idSensor = 1 order by Dados.idDados DESC LIMIT 7;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    var instrucaoSql = `
    SELECT temperatura,  DATE_FORMAT(registroData, '%H:%i:%s') as registroData,
    fkSensor FROM Dados WHERE fkSensor = 1 ORDER BY idDados DESC LIMIT 1;
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarKpi() {

    var instrucaoSql = `
    SELECT ROUND(AVG(temperatura)) AS media, temperatura FROM Dados WHERE fkSensor = 1 
    GROUP BY temperatura ORDER BY temperatura LIMIT 1;
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarMedidasEmTempoReal,
    buscarUltimasMedidas,
    listarKpi
}
