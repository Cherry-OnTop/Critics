DROP DATABASE IF EXISTS `FEC`;

CREATE DATABASE `FEC`;

USE `FEC`;

DROP TABLE IF EXISTS `critics`;

CREATE TABLE `critics` (
  `id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
  `name` VARCHAR(64),
  `topCritic` TINYINT,
  `picture` VARCHAR(500),
  `publisher` VARCHAR(64),
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `reviews`;
		
CREATE TABLE `reviews` (
  `id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
  `criticId` INTEGER,
  `text` VARCHAR(400),
  `rating` TINYINT,
  `movieId` INTEGER(10),
  `date` VARCHAR(36),
  PRIMARY KEY (`id`)
);

ALTER TABLE `reviews` ADD FOREIGN KEY (criticId) REFERENCES `critics` (`id`);

