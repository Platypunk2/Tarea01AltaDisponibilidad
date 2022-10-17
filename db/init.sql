-- MySQL dump 10.13  Distrib 8.0.30, for Linux (x86_64)
--
-- Host: localhost    Database: AD
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `idProd` mediumint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `precio` int DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  PRIMARY KEY (`idProd`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'ASUS GTX1650S',300000,'La GeForce GTX 1650 SUPER es hasta un 50% más rápida que la GTX 1650 original y hasta 2 veces más rápida que la GTX 1050 de la generación anterior. Alimentada por la galardonada arquitectura NVIDIA Turing ™ y la memoria GDDR6 ultrarrápida, es un supercargador para Los juegos más populares de hoy.'),(2,'MSI RTX3060',600000,'GeForce RTX™ 3060 te permite encarar los últimos títulos utilizando todo el poder de Ampere, la 2da generación de arquitectura RTX de NVIDIA. Obtén un desempeño increíble con los Ray Tracing Cores y Tensor Cores mejorados, nuevos multiprocesadores de streaming y la memoria G6 de alta velocidad.'),(3,'Intel i7 9700',350000,'La arquitectura Intel® 64 ofrece procesamiento informático de 64 bits en plataformas para servidores, estaciones de trabajo, PC y portátiles cuando se la combina con software compatible. ¹ La arquitectura Intel 64 mejora el desempeño permitiendo que los sistemas direccionen más de 4 GB de memoria física y virtual.');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reseneas`
--

DROP TABLE IF EXISTS `reseneas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reseneas` (
  `idProd` mediumint NOT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `user` varchar(255) DEFAULT NULL,
  `calificacion` int DEFAULT NULL,
  `texto` text DEFAULT NULL,
  KEY `idProd` (`idProd`),
  CONSTRAINT `reseneas_ibfk_1` FOREIGN KEY (`idProd`) REFERENCES `productos` (`idProd`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reseneas`
--

LOCK TABLES `reseneas` WRITE;
/*!40000 ALTER TABLE `reseneas` DISABLE KEYS */;
INSERT INTO `reseneas` VALUES (1,'123@456.cl','JakeElPerro',3,'no me gusto, pero si me gusto'),(1,'Felipe@PPNX.net','Felipp',5,'si me gusto, pero no me gusto'),(3,'123@456.cl','JakeElPerro',3,'no me gusto, pero si me gusto'),(2,'Felipe@PPNX.net','Felipp',5,'si me gusto, pero no me gusto');
/*!40000 ALTER TABLE `reseneas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-13 20:55:20
