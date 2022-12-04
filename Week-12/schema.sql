create database WareHouse;

use WareHouse;

create table City(
	City char(20) Not null primary key,
    State char(20) Not null
);

create table Warehouses(
	Wid int(4) primary key,
    Wname char(20) not null, 
    Location char(20) not null, 
    ExtraContext json 
);
    
create table Stores(
	SID int primary key,
    store_name char(20) not null,
    Location char(20) not null,
    wid int(4) not null
);



 create table Customer( 
	CNO int primary key, 
    cname char(50) not null, 
    Addr varchar(50) not null,
    Cu_city char(20) not null
);


create table orders( 
	ono int primary key, 
    cno int,
    odate date not null,
    ordered_quantity int(4) not null
);

Create table items(
	itemno int primary key,
    ono int,
    descriptions text, -- description of items. 
    weight decimal(5,2),
    cost decimal (5,2),
    quantity int not null
);


-- insert into city Values
-- 	('Delhi', 'Delhi'),
--     ('Mumbai' , 'Maharashtra'),
--     ('Kolkata','Bangalore'),
--     ('Patna',  'Bihar'),
--     ('Pune' , 'Maharashtra'),
--     ('Amritsar','Punjab'),
--     ('Dhanbad', 'Jharkhand'),
--     ('Ranchi','Jharkhand'),
--     ('Lucknow','Uttar Pradesh'),
--     ('Kanpur', 'Uttar Pradesh');
    

-- select * from warehouses;
-- insert into warehouses (Wid,Wname,Location) 
-- values
-- 	(1,'Amritsar Warehouse', 'Amritsar'),
--     (2,'Delhi Warehouse', 'Delhi'),
--     (3,'Dhanbad Warehouse', 'Dhanbad'),
--     (4,'Kanpur Warehouse', 'Kanpur'),
--     (5,'Kolkata Warehouse' , 'Kolkata'),
--     (6, 'Lucknow Warehouse' , 'Lucknow'),
--     (7,'Mumbai Warehouse', 'Mumbai'),
--     (8,'Patna Warehouse','Patna'),
--     (9,'Pune Warehouse', 'Pune'),
--     (10,'Ranchi Warehouse','Ranhi');
--     
 
-- insert into stores values
-- 	(11, 'Ambani"s Banquet', 'Mumbai',7),
--     (12, 'Nigadi Stores', 'Pune',9),
--     (13, 'Tollygunge stores', 'Kolkata',5),
--     (14, 'Indranagar store' , 'Pune',9),
--     (15, 'Bhootnath bazar','Lucknow',6),
--     (16, 'NATA Market store' , 'Pune',9),
--     (17, 'Vikas Nagar Market' , 'Kanpur',4),
--     (18, 'Talawade shop' , 'Pune',9);

-- insert into customer values
-- 		(91,'Chandra Mohan', 'Green Park', 'Delhi'),
--         (92,'Mr.Patil', 'Rajiv Chowk', 'Delhi'),
--         (94,'Himanshu Srivastava', 'Chembur', 'Mumbai'),
--         (95,'Kavya Srivastava', 'Vikas Nagar', 'Kanpur'),
--         (96,'Harshit Gupta', 'Purana bazar dhanbad', 'Ranchi'),
--         (97,'Priya Gupta', 'nico park street New Town', 'New Town');


-- insert into orders values
-- 	( 1001,'91','2022-11-09',4),
--     ( 1002,'92','2022-11-04',2),
--     ( 1003,'95','2022-11-14',1),
--     (1004,'97','2022-12-03',3),
--     (1005,'94','2022-10-20',2);

select * from items;

alter table items drop column quantity;

insert into items values
	(2001, 1001 , 'Nike shoes', 3.5, 800.0),
    (2022, 1002 , 'Leather wallets',0.4, 200.0),
    (2023, 1003,  'Lipstick', 0.1,500),
    (2024, 1004 , 'Laptop essentials' , 0.1, 100.0),
    (2025, 1005,  'Speaker', 0.2,350.0);
    
update  items 
	set weight = 0.05
    where itemno = 2023;

select * from warehouses;

insert into warehouses(wid,wname,Location) values
	( 11, 'Pune WareHouse2', 'Pune');
	

	

	