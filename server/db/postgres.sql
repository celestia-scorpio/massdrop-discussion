-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'product'
-- 
-- ---

DROP TABLE IF EXISTS `product`;
		
CREATE TABLE `product` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'message'
-- 
-- ---

DROP TABLE IF EXISTS `message`;
		
CREATE TABLE `message` (
  `id` INTEGER NULL  DEFAULT NULL,
  `body_message` MEDIUMTEXT NULL DEFAULT NULL,
  `like_count` INTEGER NULL DEFAULT NULL,
  `creationDate` DATE NULL DEFAULT NULL,
  `parent_child` INTEGER NULL DEFAULT NULL,
  `id_product` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'user'
-- 
-- ---

DROP TABLE IF EXISTS `user`;
		
CREATE TABLE `user` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(100) NULL DEFAULT NULL,
  `avatar_link` VARCHAR(500) NULL DEFAULT NULL,
  `id_message` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `message` ADD FOREIGN KEY (id_product) REFERENCES `product` (`id`);
ALTER TABLE `user` ADD FOREIGN KEY (id_message) REFERENCES `message` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `product` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `message` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `user` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `product` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `message` (`id`,`body_message`,`like_count`,`creationDate`,`parent_child`,`id_product`) VALUES
-- ('','','','','','');
-- INSERT INTO `user` (`id`,`username`,`avatar_link`,`id_message`) VALUES
-- ('','','','');