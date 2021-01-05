-- please read the following before you edit anything in the code.
-- INDEX: (can be used to efficiently find all rows matching some column in your query and then walk
-- through only that subset of the table to find exact matches.)
-- ASC: (command is used to sort the data returned in ascending order)
-- CONSTRAINT:( is used to limit the type of data that can go into a table. 
-- This ensures the accuracy and reliability of the data in the table. 
-- If there is any violation between the constraint and the data action, the action is aborted.)
-- The UNIQUE" constraint ensures that all values in a column are different
-- ON DELETE NO ACTION :NO ACTION means that nothing will happen when you delete from your Subject table to the Topic table.
-- ON UPDATE NO ACTION: the same of ON DELETE NO ACTION
-- -----------------------------------------------------
-- create database
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS GeekBooks;
-- -----------------------------------------------------
-- use database
-- -----------------------------------------------------
USE GeekBooks;
-- -----------------------------------------------------
-- Table Role
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Role (
    role_id INT NOT NULL,
    type VARCHAR(255) NOT NULL,
    PRIMARY KEY (role_id)
);
-- -----------------------------------------------------
-- Table User
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS User (
    user_id INT UNIQUE NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL,
    phone VARCHAR(255) UNIQUE NOT NULL,
    role_id INT NOT NULL,
    created_at TIMESTAMP  DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP  DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, username),
    UNIQUE INDEX email_UNIQUE (email ASC),
    UNIQUE INDEX username_UNIQUE (username ASC),
    UNIQUE INDEX phone_UNIQUE (phone ASC),
    INDEX fk_User_Role1_idx (role_id ASC),
    UNIQUE INDEX user_id_UNIQUE (user_id ASC),
    CONSTRAINT fk_User_Role1 FOREIGN KEY (role_id) REFERENCES Role (role_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table User_List
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS User_List (
    user_list_id INT NOT NULL AUTO_INCREMENT,
    have_read VARCHAR(255) NULL,
    reading VARCHAR(255) NULL,
    to_read VARCHAR(255) NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP  DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP  DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_list_id, user_id),
    UNIQUE INDEX userList_id_UNIQUE (user_list_id ASC),
    INDEX fk_User_List_User1_idx (user_id ASC),
    CONSTRAINT fk_User_List_User1 FOREIGN KEY (user_id) REFERENCES User (user_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table Class(Group)
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Class (
    class_id INT NOT NULL AUTO_INCREMENT,
    class_name VARCHAR(255) UNIQUE NOT NULL,
    description VARCHAR(255) NULL,
    user_id INT NOT NULL,
    created_time TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_time TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (class_id, user_id, class_name),
    UNIQUE INDEX class_id_UNIQUE (class_id ASC),
    UNIQUE INDEX class_name_UNIQUE (class_name ASC),
    INDEX fk_class_User1_idx (user_id ASC),
    CONSTRAINT fk_class_User1 FOREIGN KEY (user_id) REFERENCES User (user_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table Members
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Members (
    username VARCHAR(255) NOT NULL,
    class_name VARCHAR(255) NOT NULL,
    adder_name VARCHAR(255) NOT NULL,
    created_time TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_time TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (username, class_name, adder_name),
    INDEX fk_Members_class_namex (class_name ASC),
    INDEX fk_Members_User1_namex (adder_name ASC),
    INDEX fk_Members_User2_namex (username ASC),
    CONSTRAINT fk_Members_User1 FOREIGN KEY (adder_name) REFERENCES User (username) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_Members_User2 FOREIGN KEY (username) REFERENCES User (username) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_Members_class1 FOREIGN KEY (class_name) REFERENCES Class (class_name) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table Post
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Post (
    post_id INT NOT NULL AUTO_INCREMENT,
    post VARCHAR(255) NULL,
    username VARCHAR(255) NOT NULL,
    class_name VARCHAR(255) NULL,
    created_time TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_time TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (post_id),
    INDEX fk_Post_User1_idx (class_name ASC),
    CONSTRAINT fk_Post_User_username FOREIGN KEY (username) REFERENCES User (username) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_Post_Class_class_name FOREIGN KEY (class_name) REFERENCES Class (class_name) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table Comment
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Comment (
    comment VARCHAR(255) NOT NULL,
    comment_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    post_id INT NOT NULL,
    created_at TIMESTAMP  DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP  DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (comment_id),
    UNIQUE INDEX Comment_id_UNIQUE (comment_id ASC),
    INDEX fk_Comment_User1_idx (username ASC),
    INDEX fk_Comment_Post1_idx (post_id ASC),
    CONSTRAINT fk_Comment_User1 FOREIGN KEY (username) REFERENCES User (username) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_Comment_Post1 FOREIGN KEY (post_id) REFERENCES Post (post_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table Like
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Thumbsup (
    comment_id INT NULL,
    username VARCHAR(255) NOT NULL,
    post_id INT NULL,
    created_time TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_time TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX fk_Thumbsup_Comment_idx (comment_id ASC),
    INDEX fk_Thumbsup_Post1_idx (post_id ASC),
    INDEX fk_Thumbsup_User_usernamex (username ASC),
    CONSTRAINT fk_Thumbsup_Comment1 FOREIGN KEY (comment_id) REFERENCES Comment (comment_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_Thumbsup_User FOREIGN KEY (username) REFERENCES User (username) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_Thumbsup_User1 FOREIGN KEY (post_id) REFERENCES Post (post_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table Follower_system
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Follower_system (
    follower_username VARCHAR(255) NOT NULL,
    following_username VARCHAR(255) NOT NULL,
    follows_id INT UNIQUE NOT NULL AUTO_INCREMENT,
    created_time TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_time TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (
        follower_username,
        following_username,
        follows_id
    ),
    INDEX fk_Follower_system_User_idx (follows_id ASC),
    UNIQUE INDEX Follows_id_UNIQUE (follows_id ASC),
    CONSTRAINT fk_Follower_system_User FOREIGN KEY (follower_username) REFERENCES User (username) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_Follower_system_User1 FOREIGN KEY (following_username) REFERENCES User (username) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Live Chat
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Live_Chat (
    sender VARCHAR(255) NOT NULL,
    receiver VARCHAR(255) NOT NULL,
    message VARCHAR(255) NOT NULL,
    chat_id VARCHAR(255) NOT NULL,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_Live_Chat_User FOREIGN KEY (sender) REFERENCES User (username) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_Live_Chat_User1 FOREIGN KEY (receiver) REFERENCES User (username) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- INSERT DATA Role
-- -----------------------------------------------------
INSERT INTO Role (role_id, type)
VALUES ('1', 'Admin');
INSERT INTO Role (role_id, type)
VALUES ('2', 'User');
INSERT INTO Role (role_id, type)
VALUES ('3', 'Author');