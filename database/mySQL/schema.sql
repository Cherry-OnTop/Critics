DROP DATABASE IF EXISTS `SDC`;

CREATE DATABASE `SDC`;

USE `SDC`;

DROP TABLE IF EXISTS `critics`;

CREATE TABLE `critics` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(64) DEFAULT NULL,
  `topCritic` TINYINT DEFAULT NULL,
  `picture` VARCHAR(500) DEFAULT NULL,
  `publisher` VARCHAR(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `reviews`;
		
CREATE TABLE `reviews` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `criticId` INTEGER DEFAULT NULL,
  `text` VARCHAR(400) DEFAULT NULL,
  `rating` TINYINT DEFAULT NULL,
  `movieId` INTEGER(10) DEFAULT NULL,
  `date` VARCHAR(36) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `reviews` ADD FOREIGN KEY (criticId) REFERENCES `critics` (`id`);
ALTER TABLE `reviews` ADD INDEX `movieId` (`movieId`); 
-- should do this after theyre already inserted!

