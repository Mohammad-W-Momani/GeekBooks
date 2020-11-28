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
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL,
    phone VARCHAR(255) UNIQUE NOT NULL,
    role_id INT NOT NULL,
    PRIMARY KEY (user_id),
    UNIQUE INDEX email_UNIQUE (email ASC),
    UNIQUE INDEX phone_UNIQUE (phone ASC),
    INDEX fk_User_Role1_idx (role_id ASC),
    UNIQUE INDEX user_id_UNIQUE (user_id ASC),
    CONSTRAINT fk_User_Role1 FOREIGN KEY (role_id) REFERENCES Role (role_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table Author
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Author (
    author_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    specialties VARCHAR(255) NOT NULL,
    UNIQUE INDEX id_UNIQUE (author_id ASC),
    PRIMARY KEY (author_id)
);
-- -----------------------------------------------------
-- Table User_List
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS User_List (
    user_list_id INT NOT NULL AUTO_INCREMENT,
    have_read VARCHAR(255) NULL,
    reading VARCHAR(255) NULL,
    to_read VARCHAR(255) NULL,
    favorite_quotes VARCHAR(255) NULL,
    user_id INT UNIQUE NOT NULL,
    PRIMARY KEY (user_list_id, user_id),
    UNIQUE INDEX userList_id_UNIQUE (user_list_id ASC),
    INDEX fk_User_List_User1_idx (user_id ASC),
    CONSTRAINT fk_User_List_User1 FOREIGN KEY (user_id) REFERENCES User (user_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table Book
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Book (
    book_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    reviews VARCHAR(255) NULL,
    description VARCHAR(255) NULL,
    topic VARCHAR(255) NOT NULL,
    rating INT NULL,
    author_id INT NOT NULL,
    user_list_id INT NOT NULL,
    PRIMARY KEY (book_id),
    INDEX fk_Book_Author1_idx (author_id ASC),
    INDEX fk_Book_User_List1_idx (user_list_id ASC),
    CONSTRAINT fk_Book_Author1 FOREIGN KEY (author_id) REFERENCES Author (author_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_Book_User_List1 FOREIGN KEY (user_list_id) REFERENCES User_List (user_list_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) DEFAULT CHARACTER SET = ascii;
-- -----------------------------------------------------
-- Table Quote
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Quote (
    quote_id INT NOT NULL AUTO_INCREMENT,
    quote VARCHAR(255) NOT NULL,
    author_id INT NOT NULL,
    user_list_id INT NOT NULL,
    PRIMARY KEY (quote_id),
    UNIQUE INDEX quote_id_UNIQUE (quote_id ASC),
    INDEX fk_Quote_Author1_idx (author_id ASC),
    INDEX fk_Quote_User_List1_idx (user_list_id ASC),
    CONSTRAINT fk_Quote_Author1 FOREIGN KEY (author_id) REFERENCES Author (author_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_Quote_User_List1 FOREIGN KEY (user_list_id) REFERENCES User_List (user_list_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table Post
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Post (
    post_id INT NOT NULL AUTO_INCREMENT,
    post VARCHAR(255) NULL,
    thumbs_up INT NULL,
    user_id INT UNIQUE NOT NULL,
    PRIMARY KEY (post_id),
    UNIQUE INDEX Post_id_UNIQUE (post_id ASC),
    INDEX fk_Post_User1_idx (user_id ASC),
    CONSTRAINT fk_Post_User1 FOREIGN KEY (user_id) REFERENCES User (user_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table Comment
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Comment (
    comment VARCHAR(255) NOT NULL,
    thumbs_up INT NULL,
    comment_id INT NOT NULL AUTO_INCREMENT,
    user_id INT UNIQUE NOT NULL,
    post_id INT NOT NULL,
    PRIMARY KEY (comment_id),
    UNIQUE INDEX Comment_id_UNIQUE (comment_id ASC),
    INDEX fk_Comment_User1_idx (user_id ASC),
    INDEX fk_Comment_Post1_idx (post_id ASC),
    CONSTRAINT fk_Comment_User1 FOREIGN KEY (user_id) REFERENCES User (user_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_Comment_Post1 FOREIGN KEY (post_id) REFERENCES Post (post_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table Follower
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Follower (
    follower_id INT NOT NULL AUTO_INCREMENT,
    follower_counter INT NULL,
    user_id INT UNIQUE NOT NULL,
    PRIMARY KEY (follower_id),
    UNIQUE INDEX follower_id_UNIQUE (follower_id ASC),
    INDEX fk_Follower_User1_idx (user_id ASC),
    CONSTRAINT fk_Follower_User1 FOREIGN KEY (user_id) REFERENCES User (user_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table Following
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Following (
    following_id INT NOT NULL AUTO_INCREMENT,
    user_id INT UNIQUE NOT NULL,
    following_counter INT NULL,
    PRIMARY KEY (following_id),
    UNIQUE INDEX Following_id_UNIQUE (following_id ASC),
    INDEX fk_Following_User1_idx (user_id ASC),
    CONSTRAINT fk_Following_User1 FOREIGN KEY (user_id) REFERENCES User (user_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO Role (role_id, type)
VALUES ('1', 'Admin');
INSERT INTO Role (role_id, type)
VALUES ('2', 'User');
INSERT INTO Role (role_id, type)
VALUES ('3', 'Author');