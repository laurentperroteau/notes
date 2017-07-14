BDD :
=====

Create user et sa bdd :
======================

* `mysql -u root -p`
* (mysql cmd) `CREATE USER 'coral'@'localhost' IDENTIFIED BY 1234';`
* (mysql cmd)`GRANT ALL PRIVILEGES ON * . * TO 'coral'@'localhost';`
* (mysql cmd)`FLUSH PRIVILEGES;`
* (mysql cmd)`create database coral;`
