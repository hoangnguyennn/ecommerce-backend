create table if not exists employees (
  id varchar(10) primary key,
  fullName varchar(50),
  address varchar(200),
  phone varchar(20),
  username varchar(50),
  password varchar(100),
  unique(username)
);

create table if not exists customers (
  id varchar(10) primary key,
  fullName varchar(50),
  address varchar(200),
  phone varchar(20),
  username varchar(50),
  password varchar(100),
  unique(username)
);

create table if not exists brands (
  id varchar(10) primary key,
  name varchar(50)
);

create table if not exists products (
  id varchar(10) primary key,
  name varchar(100),
  price decimal,
  originalPrice decimal,
  quantity int,
  image varchar(200),
  screenSize varchar(200),
  screenType varchar(200),
  resolution varchar(200),
  os varchar(100),
  frontCamera varchar(100),
  backCamera varchar(100),
  cpu varchar(100),
  rom varchar(100),
  ram varchar(100),
  sim varchar(100),
  pin varchar(100),
  highlightFeature varchar(500),
  status varchar(100),
  brandId varchar(10)
);

create table if not exists orders (
  id varchar(10) primary key,
  employeeId varchar(10),
  customerId varchar(10),
  orderDate date,
  orderTime time,
  deliveryFullname varchar(50),
  deliveryAddress varchar(200),
  deliveryPhone varchar(20),
  total decimal,
  status varchar(50)
);

create table if not exists order_details (
  id varchar(10) primary key,
  orderId varchar(10),
  productId varchar(10),
  price decimal,
  amount int
);

alter table
  products
add
  foreign key (brandId) references brands(id);

alter table
  orders
add
  foreign key (customerId) references customers(id);

alter table
  orders
add
  foreign key (employeeId) references employees(id);

alter table
  order_details
add
  foreign key (orderId) references orders(id) on delete cascade;

alter table
  order_details
add
  foreign key (productId) references products(id);