Create database freezeMeds;
use freezeMeds;

create table Marca (

idMarcaRemedio int primary key auto_increment,
nomeMarca varchar (45),
cnpjMarca char(14),
emailMarca varchar(50),
senhaMarca varchar(40)
);

create table usuario (

idUsuario int primary key auto_increment,
nomeUsuario varchar (45),
emailUsuario varchar(45),
senhaUsuario varchar(45),
cpf char(11),
fkMarca int,
telUsuario1 char(11),
telUsuario2 char(11),
constraint fkMarcaUsuario foreign key (fkMarca)
references Marca (idMarcaRemedio)
);

select * from usuario ;

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

create table aviso (
id int auto_increment primary key,
titulo varchar (100),
descricao varchar (520),
fk_usuario int,
foreign key (fk_usuario) references usuario(idUsuario));



