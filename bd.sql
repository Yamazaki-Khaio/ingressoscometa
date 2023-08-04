-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema cometadb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema cometadb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cometadb` DEFAULT CHARACTER SET utf8mb3 ;
USE `cometadb` ;

-- -----------------------------------------------------
-- Table `cometadb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cometadb`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cpf` VARCHAR(11) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  `cnpj` VARCHAR(14) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  `nome` VARCHAR(30) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  `senha` VARCHAR(100) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `tipo_user` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `cpf_cnpj` (`cpf` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cometadb`.`banimento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cometadb`.`banimento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `motivo` VARCHAR(100) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  `data` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `banimento_usuario` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `banimento_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `cometadb`.`usuario` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cometadb`.`cardc`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cometadb`.`cardc` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `nCard` CHAR(16) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `data_validade` DATE NULL DEFAULT NULL,
  `cvv` INT NULL DEFAULT NULL,
  `titular` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `cpf` VARCHAR(11) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  `cnpj` VARCHAR(14) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `cardc_usuario` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `cardc_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `cometadb`.`usuario` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cometadb`.`evento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cometadb`.`evento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `nome_evento` VARCHAR(100) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `data_evento` DATE NULL DEFAULT NULL,
  `descricao_evento` VARCHAR(500) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `ativado` TINYINT(1) NOT NULL,
  `imagem` BLOB NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `evento_usuario` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `evento_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `cometadb`.`usuario` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cometadb`.`ingresso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cometadb`.`ingresso` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  `evento_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ingresso_evento1_idx` (`evento_id` ASC) VISIBLE,
  CONSTRAINT `fk_ingresso_evento1`
    FOREIGN KEY (`evento_id`)
    REFERENCES `cometadb`.`evento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cometadb`.`carrinho`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cometadb`.`carrinho` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_ingresso` INT NOT NULL,
  `quant_ingresso` INT NOT NULL,
  `usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`, `usuario_id`),
  INDEX `carrinho_evento_setor` (`id_ingresso` ASC) VISIBLE,
  INDEX `fk_carrinho_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `carrinho_evento_setor`
    FOREIGN KEY (`id_ingresso`)
    REFERENCES `cometadb`.`ingresso` (`id`),
  CONSTRAINT `fk_carrinho_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `cometadb`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cometadb`.`compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cometadb`.`compra` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_cardc` INT NOT NULL,
  `data` DATE NULL DEFAULT NULL,
  `valor` VARCHAR(45) NULL,
  `carrinho_usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`, `carrinho_usuario_id`),
  INDEX `compra_cardc` (`id_cardc` ASC) VISIBLE,
  INDEX `fk_compra_carrinho1_idx` (`carrinho_usuario_id` ASC) VISIBLE,
  CONSTRAINT `compra_cardc`
    FOREIGN KEY (`id_cardc`)
    REFERENCES `cometadb`.`cardc` (`id`),
  CONSTRAINT `fk_compra_carrinho1`
    FOREIGN KEY (`carrinho_usuario_id`)
    REFERENCES `cometadb`.`carrinho` (`usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cometadb`.`email`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cometadb`.`email` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `email` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `email_usuario` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `email_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `cometadb`.`usuario` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cometadb`.`endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cometadb`.`endereco` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_usuario_evento` INT NOT NULL,
  `cep` VARCHAR(8) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `rua` VARCHAR(50) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `numero` VARCHAR(10) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `complemento` VARCHAR(50) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `endereco_usuario` (`id_usuario_evento` ASC) VISIBLE,
  CONSTRAINT `endereco_evento`
    FOREIGN KEY (`id_usuario_evento`)
    REFERENCES `cometadb`.`evento` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `endereco_usuario`
    FOREIGN KEY (`id_usuario_evento`)
    REFERENCES `cometadb`.`usuario` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cometadb`.`estorno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cometadb`.`estorno` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `compra_id` INT NOT NULL,
  `data` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `estorno_compra` (`compra_id` ASC) VISIBLE,
  CONSTRAINT `estorno_compra`
    FOREIGN KEY (`compra_id`)
    REFERENCES `cometadb`.`compra` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cometadb`.`setor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cometadb`.`setor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `valor` REAL NULL,
  `evento_id` INT NOT NULL,
  PRIMARY KEY (`id`, `evento_id`),
  INDEX `fk_setor_evento1_idx` (`evento_id` ASC) VISIBLE,
  CONSTRAINT `fk_setor_evento1`
    FOREIGN KEY (`evento_id`)
    REFERENCES `cometadb`.`evento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cometadb`.`telefone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cometadb`.`telefone` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `telefone` VARCHAR(11) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `telefone_usuario` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `telefone_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `cometadb`.`usuario` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
