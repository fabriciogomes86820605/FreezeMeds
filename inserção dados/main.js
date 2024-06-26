const serialport = require('serialport');
const express = require('express');
const mysql = require('mysql2');

const SERIAL_BAUD_RATE = 9600;
const SERVIDOR_PORTA = 3300;

const HABILITAR_OPERACAO_INSERIR = true;

const serial = async (
    valoresLm35Temperatura
) => {
    let poolBancoDados = ''

    poolBancoDados = mysql.createPool(
        {
            host: '192.168.0.253',
            user: 'aluno',
            password: 'Sptech#2024',
            database: 'freezeMeds',
            port: 3307
        }
    ).promise();

    const portas = await serialport.SerialPort.list();
    const portaArduino = portas.find((porta) => porta.vendorId == 2341 && porta.productId == 43);
    if (!portaArduino) {
        throw new Error('O arduino não foi encontrado em nenhuma porta serial');
    }

    const arduino = new serialport.SerialPort(
        {
            path: portaArduino.path,
            baudRate: SERIAL_BAUD_RATE
        }
    );

    arduino.on('open', () => {
        console.log(`A leitura do arduino foi iniciada na porta ${portaArduino.path} utilizando Baud Rate de ${SERIAL_BAUD_RATE}`);
    });

    arduino.pipe(new serialport.ReadlineParser({ delimiter: '\r\n' })).on('data', async (data) => {
        console.log(data);
        const valores = data.split(';');
        const lm35Temperatura = parseFloat(valores[0]);
    
        valoresLm35Temperatura.push(lm35Temperatura);
        

        if (HABILITAR_OPERACAO_INSERIR) {

            await poolBancoDados.execute(
                'INSERT INTO Dados (fkSensor, Temperatura) VALUES (1, ?)',
                [lm35Temperatura]
            );
            console.log("valores inseridos no banco: ", lm35Temperatura)
        
        }
        
    });

    arduino.on('error', (mensagem) => {
        console.error(`Erro no arduino (Mensagem: ${mensagem}`)
    });
}


const servidor = (
   
    valoresLm35Temperatura
    
) => {
    const app = express();

    app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });

    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
    });

    app.get('/sensores/lm35/temperatura', (_, response) => {
        return response.json(valoresLm35Temperatura);
    });
    
}

(async () => {
    const valoresLm35Temperatura = [];
    await serial(
        valoresLm35Temperatura
    );

    servidor(
        valoresLm35Temperatura
    );
})();
