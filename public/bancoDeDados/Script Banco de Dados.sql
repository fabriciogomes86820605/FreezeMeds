CREATE DATABASE FreezeMeds;
USE FreezeMeds;

CREATE TABLE Farmacia (
  idFarmacia INT AUTO_INCREMENT,
  NomeFarmacia VARCHAR(45) ,
  telefone VARCHAR(45) ,
  email VARCHAR(45) ,
  cep VARCHAR(45) ,
  Numero VARCHAR(45) ,
  complmento VARCHAR(45) ,
  cnpj VARCHAR(45) ,
  FkFilial INT,
  PRIMARY KEY (idFarmacia),
  CONSTRAINT FkFilial FOREIGN KEY (FkFilial)REFERENCES Farmacia(idFarmacia));


CREATE TABLE MarcaRemedio (
  idMarcaRemedio INT,
  Nome VARCHAR(45),
  Cnpj VARCHAR(45),
  Email VARCHAR(45),
  tel1 VARCHAR(45),
  tel2 VARCHAR(45),
  PRIMARY KEY (idMarcaRemedio));

CREATE TABLE Manutancao (
  idManutancao INT  ,
  datapedido DATE ,
  descricao VARCHAR(400) ,
  dataconcerto DATE ,
  PRIMARY KEY (idManutancao));


CREATE TABLE Sensor (
  idSensor INT  ,
  NomeSensor VARCHAR(45) ,
  PRIMARY KEY (idSensor));

CREATE TABLE Camara (
  idCamara INT,
  fkMarcaRemedio INT,
  fkManutancao INT,
  fkFarmacia INT,
  fkSensor INT,
  PRIMARY KEY (idCamara),
  CONSTRAINT fkMarcaRemedio
    FOREIGN KEY (fkMarcaRemedio)
    REFERENCES MarcaRemedio(idMarcaRemedio),
  CONSTRAINT fk_Camara_Manutancao1
    FOREIGN KEY (fkManutancao)
    REFERENCES Manutancao (idManutancao),
  CONSTRAINT fk_Camara_Farmacia1
    FOREIGN KEY (fkFarmacia)
    REFERENCES Farmacia (idFarmacia),
  CONSTRAINT fk_Camara_Sensor1
    FOREIGN KEY (fkSensor)
    REFERENCES Sensor (idSensor));


CREATE TABLE Compra (
  idCompra INT,
  CamarasComprada VARCHAR(45),
  dataInstalacao DATE,
  fkMarcaRemedio INT  ,
  PRIMARY KEY (idCompra, fkMarcaRemedio),
  CONSTRAINT fk_Compra_MarcaRemedio1
    FOREIGN KEY (fkMarcaRemedio)
    REFERENCES MarcaRemedio(idMarcaRemedio));


CREATE TABLE usuario (
  idusuario INT  ,
  nome VARCHAR(45) ,
  email VARCHAR(45) ,
  senha VARCHAR(45) ,
  cpf VARCHAR(45) ,
  Admin VARCHAR(45) ,
  fkidMarcaRemedio INT  ,
  PRIMARY KEY (idusuario),
  CONSTRAINT fkMarcaRemedio1
    FOREIGN KEY (fkidMarcaRemedio)
    REFERENCES MarcaRemedio(idMarcaRemedio));





CREATE TABLE Dados (
  idDados INT,
  Temperatura VARCHAR(45) ,
  DtRegistro DATETIME ,
  Sensor_idSensor INT  ,
  PRIMARY KEY (idDados),
  CONSTRAINT fk_Dados_Sensor1
    FOREIGN KEY (Sensor_idSensor)
    REFERENCES Sensor (idSensor));





