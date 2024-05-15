create database Sprint2;
use Sprint2;


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

drop table Dados;

insert into Sensor values (default, 'FreezeMeds');

select * from Dados;