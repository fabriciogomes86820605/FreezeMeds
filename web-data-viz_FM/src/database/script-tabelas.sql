-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database Sprint3;
use Sprint3;


create table Marca (

idMarcaRemedio int primary key auto_increment,
nomeMarca varchar (45),
cnpjMarca char(14),
emailMarca varchar(50),
senhaMarca varchar(40),
telMarca1 char(11),
telMarca2 char(11)

);

create table Compra (

idCompra int primary key auto_increment,
qtdCamara char(4),
dataEntrega date,
fkMarca int,
constraint fkMarcaCompra foreign key (fkMarca)
references Marca (idMarcaRemedio)

);

create table usuario (

idUsuario int primary key auto_increment,
nomeUsuario varchar (45),
emailUsuario varchar(45),
senhaUsuario varchar(45),
cpf char(11),
administrador char(3),
fkMarca int,
constraint fkMarcaUsuario foreign key (fkMarca)
references Marca (idMarcaRemedio),
constraint ChkAdmin check (administrador in ('sim','não'))

);

create table Manutencao (

idManutencao int primary key auto_increment,
dataPedido date,
dataConcerto date,
descricao varchar (400)

);


create table Sensor (

idSensor int primary key auto_increment,
nomeSensor varchar (45)

);

create table Dados (

idDados int auto_increment,
fkSensor int,
temperatura float,
registroData datetime default current_timestamp,
constraint ChaveCompostaDados primary key (idDados, fkSensor),
constraint fkDadosSensor foreign key (fkSensor)
references Sensor (idSensor)

);