PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;

DROP TABLE IF EXISTS 'product';
CREATE TABLE `product`
(
  -- `id` INTEGER AUTO_INCREMENT DEFAULT 'NULL',
  -- `id` INTEGER PRIMARY KEY,
  `id` INTEGER DEFAULT NULL,
  `product_name` VARCHAR (200) NOT NULL DEFAULT 'NULL'
  -- PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS 'user';

CREATE TABLE `user`
(
  `id` INTEGER DEFAULT NULL,
--  `id` INTEGER PRIMARY KEY,
  `username` VARCHAR(200) NULL DEFAULT NULL,
  `avatar` BLOB NULL DEFAULT NULL
  -- PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `product_threads`;

CREATE TABLE `product_threads`
(
  -- `id` INTEGER AUTO_INCREMENT DEFAULT NULL,
  
  -- `id` INTEGER PRIMARY KEY,
    `id` INTEGER DEFAULT NULL,

  `product_id` INTEGER NULL DEFAULT NULL,
  `thread_id` INTEGER NULL DEFAULT NULL
  -- PRIMARY KEY (`id`)
  --   FOREIGN KEY (product_id) REFERENCES `product` (`id`),
  -- FOREIGN KEY (thread_id) REFERENCES `thread` (`id`)
);

DROP TABLE IF EXISTS `thread`;

-- not referenced
CREATE TABLE `thread`
(
  -- `id` INTEGER AUTO_INCREMENT DEFAULT NULL,
  -- `id` INTEGER PRIMARY KEY,
    `id` INTEGER DEFAULT NULL,

  `thread_name` INTEGER NULL DEFAULT NULL
  -- PRIMARY KEY (`id`)

);


DROP TABLE IF EXISTS `thread_discussion_participants`;

-- not referenced
CREATE TABLE `thread_discussion_participants`
(
-- `id` INTEGER PRIMARY KEY,
  `id` INTEGER DEFAULT NULL,

  `thread_id` INTEGER NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL
  -- PRIMARY KEY (`id`)
  -- FOREIGN KEY (thread_id) REFERENCES `thread` (`id`),
  -- FOREIGN KEY (user_id) REFERENCES `user` (`id`)
);


DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages`
(
  `id` INTEGER DEFAULT NULL,
  'product_id' INTEGER NULL DEFAULT NULL,
  `thread_id` INTEGER NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  `body` VARCHAR(1000) NULL DEFAULT NULL,
  `sending_user_id` INTEGER NULL DEFAULT NULL,
  `like_count` INTEGER NULL DEFAULT NULL
  -- PRIMARY KEY (`id`)
  -- FOREIGN KEY (thread_id) REFERENCES `thread` (`id`),
  -- FOREIGN KEY (sending_user_id) REFERENCES `user` (`id`)
);
COMMIT;
