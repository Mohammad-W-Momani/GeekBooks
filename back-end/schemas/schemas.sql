-- please read the following before you edit anything on the code.
-- INDEX: (can be used to efficiently find all rows matching some column in your query and then walk
-- through only that subset of the table to find exact matches.)
-- ASC: (command is used to sort the data returned in ascending order)
-- CONSTRAINT:( is used to limit the type of data that can go into a table. 
-- This ensures the accuracy and reliability of the data in the table. 
-- If there is any violation between the constraint and the data action, the action is aborted.)
-- The UNIQUE" constraint ensures that all values in a column are different
-- ON DELETE NO ACTION :NO ACTION means that nothing will happen when you delete from your Subject table to the Topic table.
-- ON UPDATE NO ACTION: the same of ON DELETE NO ACTION
USE GeekBooks;
-- -----------------------------------------------------
-- Table Role
-- -----------------------------------------------------
CREATE TABLE Role (
    idRole INT NOT NULL,
    type VARCHAR(255) NOT NULL,
    PRIMARY KEY (idRole)
);
-- -----------------------------------------------------
-- Table User
-- -----------------------------------------------------
CREATE TABLE User (
    id INT UNIQUE UNSIGNED NOT NULL AUTO_INCREMENT,
    username NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL,
    phone VARCHAR(255) UNIQUE NOT NULL,
    Role_idRole INT NOT NULL,
    PRIMARY KEY (id),
    UNIQUE INDEX email_UNIQUE (email ASC) VISIBLE,
    UNIQUE INDEX phone_UNIQUE (phone ASC) VISIBLE,
    INDEX fk_User_Role_idx (Role_idRole ASC) VISIBLE,
    CONSTRAINT fk_User_Role FOREIGN KEY (Role_idRole) REFERENCES Role (idRole) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table Author
-- -----------------------------------------------------
CREATE TABLE Author (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    specialties VARCHAR(255) NOT NULL,
    UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE,
    PRIMARY KEY (id)
);
-- -----------------------------------------------------
-- Table Book
-- -----------------------------------------------------
CREATE TABLE Book (
    Author_id INT UNSIGNED NOT NULL,
    Book_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    Title VARCHAR(255) NOT NULL,
    Reviews VARCHAR(255) NULL,
    Description VARCHAR(255) NULL,
    Topic VARCHAR(255) NOT NULL,
    Rating INT NULL,
    INDEX fk_Book_Author1_idx (Author_id ASC) VISIBLE,
    PRIMARY KEY (Book_id),
    CONSTRAINT fk_Book_Author1 FOREIGN KEY (Author_id) REFERENCES Author (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table Quote
-- -----------------------------------------------------
CREATE TABLE Quote (
    idQuote INT UNSIGNED NOT NULL AUTO_INCREMENT,
    Quote VARCHAR(255) NOT NULL,
    Author_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (idQuote),
    UNIQUE INDEX idQuote_UNIQUE (idQuote ASC) VISIBLE,
    INDEX fk_Quote_Author1_idx (Author_id ASC) VISIBLE,
    CONSTRAINT fk_Quote_Author1 FOREIGN KEY (Author_id) REFERENCES Author (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table Post
-- -----------------------------------------------------
CREATE TABLE Post (
    User_id INT UNIQUE UNSIGNED NOT NULL,
    Post_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    Post VARCHAR(45) NULL,
    Like INT NULL,
    INDEX fk_Post_User1_idx (User_id ASC) VISIBLE,
    PRIMARY KEY (Post_id),
    UNIQUE INDEX Post_id_UNIQUE (Post_id ASC) VISIBLE,
    CONSTRAINT fk_Post_User1 FOREIGN KEY (User_id) REFERENCES User (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table Comments
-- -----------------------------------------------------
CREATE TABLE Comments (
    User_id INT UNIQUE UNSIGNED NOT NULL,
    Post_Post_id INT NOT NULL,
    Comment VARCHAR(255) NOT NULL,
    Like INT NULL,
    INDEX fk_Comments_User1_idx (User_id ASC) VISIBLE,
    INDEX fk_Comments_Post1_idx (Post_Post_id ASC) VISIBLE,
    CONSTRAINT fk_Comments_User1 FOREIGN KEY (User_id) REFERENCES User (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_Comments_Post1 FOREIGN KEY (Post_Post_id) REFERENCES Post (Post_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table User List
-- -----------------------------------------------------
CREATE TABLE User List (
    idUser List INT UNSIGNED NOT NULL AUTO_INCREMENT,
    read VARCHAR(255) NULL,
    reading VARCHAR(255) NULL,
    to - read VARCHAR(255) NULL,
    User_id INT UNIQUE UNSIGNED NOT NULL,
    PRIMARY KEY (idUser List),
    UNIQUE INDEX idUser List_UNIQUE (idUser List ASC) VISIBLE,
    INDEX fk_User List_User1_idx (User_id ASC) VISIBLE,
    CONSTRAINT fk_User List_User1 FOREIGN KEY (User_id) REFERENCES User (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table Followers
-- -----------------------------------------------------
CREATE TABLE Followers (
    User_id INT UNIQUE UNSIGNED NOT NULL,
    Followers - id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    INDEX fk_Followers_User1_idx (User_id ASC) VISIBLE,
    PRIMARY KEY (Followers - id),
    UNIQUE INDEX Followers - id_UNIQUE (Followers - id ASC) VISIBLE,
    CONSTRAINT fk_Followers_User1 FOREIGN KEY (User_id) REFERENCES User (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Table Following
-- -----------------------------------------------------
CREATE TABLE Following (
    User_id INT UNIQUE UNSIGNED NOT NULL,
    Following_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    INDEX fk_Following_User1_idx (User_id ASC) VISIBLE,
    PRIMARY KEY (Following_id),
    UNIQUE INDEX Following_id_UNIQUE (Following_id ASC) VISIBLE,
    CONSTRAINT fk_Following_User1 FOREIGN KEY (User_id) REFERENCES User (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);