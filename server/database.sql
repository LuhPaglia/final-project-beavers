CREATE TABLE `beavers`.`admin_tb` (
  `admin_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(100) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  `email` VARCHAR(100) NULL,
  `profile_url` VARCHAR(255) NULL,
  `birthday` DATE NULL,
  `address` VARCHAR(255),
  PRIMARY KEY (`admin_id`),
  UNIQUE INDEX `username_UNIQUE` (`user_name` ASC)  ,
  UNIQUE INDEX `admin_id_UNIQUE` (`admin_id` ASC)  ,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC)  );

CREATE TABLE `beavers`.`course_tb` (
  `course_id` INT NOT NULL AUTO_INCREMENT,
  `course_name` VARCHAR(200) NOT NULL,
  `description` VARCHAR(255) NULL,
  PRIMARY KEY (`course_id`),
  UNIQUE INDEX `course_id_UNIQUE` (`course_id` ASC)  );

CREATE TABLE `beavers`.`teacher_tb` (
  `teacher_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `course_id` int NOT NULL,
  `salary` float DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  PRIMARY KEY (`teacher_id`),
  UNIQUE KEY `teacher_id_UNIQUE` (`teacher_id`),
  UNIQUE KEY `user_name_UNIQUE` (`user_name`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `course_fk_idx` (`course_id`),
  CONSTRAINT `course_fk` FOREIGN KEY (`course_id`) REFERENCES `course_tb` (`course_id`)
);

CREATE TABLE `beavers`.`student_tb` (
  `student_id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(200) NOT NULL,
  `user_name` VARCHAR(100) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  `course_id` INT NOT NULL,
  `teacher_id` INT NOT NULL,
  `address` VARCHAR(255) NULL,
  `birthday` date DEFAULT NULL,
  PRIMARY KEY (`student_id`),
  UNIQUE INDEX `student_id_UNIQUE` (`student_id` ASC)  ,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC)  ,
  UNIQUE INDEX `user_name_UNIQUE` (`user_name` ASC)  ,
  INDEX `teacher_fk_idx` (`teacher_id` ASC)  ,
  INDEX `course_id_idx` (`course_id` ASC)  ,
  CONSTRAINT `teacher_fk`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `beavers`.`teacher_tb` (`teacher_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `course_id`
    FOREIGN KEY (`course_id`)
    REFERENCES `beavers`.`course_tb` (`course_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `beavers`.`grade_tb` (
  `grade_id` INT NOT NULL AUTO_INCREMENT,
  `classwork` VARCHAR(100) NOT NULL,
  `student_id` INT NOT NULL,
  `teacher_id` INT NOT NULL,
  `course_id` INT NOT NULL,
  `mark` INT NOT NULL,
  `mark_date` DATE NOT NULL,
  `feedback` VARCHAR(255) NULL,
  PRIMARY KEY (`grade_id`),
  UNIQUE INDEX `grade_id_UNIQUE` (`grade_id` ASC)  ,
  INDEX `student_fk_idx` (`student_id` ASC)  ,
  INDEX `teacher_fk_idx` (`teacher_id` ASC)  ,
  INDEX `course_id_idx` (`course_id` ASC)  ,
  CONSTRAINT `student_grade_fk`
    FOREIGN KEY (`student_id`)
    REFERENCES `beavers`.`student_tb` (`student_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `teacher_grade_fk`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `beavers`.`teacher_tb` (`teacher_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `course_grade_id`
    FOREIGN KEY (`course_id`)
    REFERENCES `beavers`.`course_tb` (`course_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);






