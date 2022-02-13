-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: mirrorlens
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `image_products`
--

DROP TABLE IF EXISTS `image_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `image_products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `image1` varchar(255) NOT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `image3` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_products`
--

LOCK TABLES `image_products` WRITE;
/*!40000 ALTER TABLE `image_products` DISABLE KEYS */;
INSERT INTO `image_products` VALUES (1,'/images/productsimage/OAKLEY_9102_01_800x.jpg','/images/productsimage/OAKLEY_9102_01_2_800x.jpg','/images/productsimage/Medidas-Final_44b4698e-f740-45d5-b0ec-725ce4d9c426_800x.jpg'),(2,'/images/productsimage/RAY_BAN_2447_52_901_800x.jpg','/images/productsimage/RAY_BAN_2447_52_901_2_160x.jpg','/images/productsimage/RAY_BAN_2447_52_901_3_1800x1132.jpg'),(3,'/images/productsimage/VULKYESTERMBLKREVOROSE_800x.jpg','/images/productsimage/VULKYESTERMBLKREVOROSE_2_1800x1132.jpg','/images/productsimage/VULKYESTERMBLKREVOROSE_3_1800x1132.jpg'),(4,'/images/productsimage/NYOL190403S_800x.jpg','/images/productsimage/NYOL190403S_2_1800x1132.jpg','/images/productsimage/NYOL190403S_3_1800x1132.jpg'),(5,'/images/productsimage/REEF22402_800x.jpg','/images/productsimage/REEF22402_2_1800x1132.jpg','/images/productsimage/REEF22402_3_1800x1132.jpg'),(6,'/images/productsimage/VULKGEESSDEMI-B10POL_800x.jpg','/images/productsimage/VULKGEESSDEMI-B10POL_2_1800x1132.jpg','/images/productsimage/VULKGEESSDEMI-B10POL_3_1800x1132.jpg'),(7,'/images/productsimage/0RA5160__510_13_000A_1413x889.jpg','/images/productsimage/0RA5160__510_13_030A_1560x981.jpg','/images/productsimage/0RA5160__510_13_090A_1433x902.jpg'),(8,'/images/productsimage/RUSTY_MANIC_SBLK_REVO_BLUE_1800x1132.jpg','/images/productsimage/RUSTY_MANIC_SBLK_REVO_BLUE_2_1800x1132.jpg','/images/productsimage/Medidas-Final_44b4698e-f740-45d5-b0ec-725ce4d9c426_800x.jpg');
/*!40000 ALTER TABLE `image_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `description` longtext NOT NULL,
  `type` varchar(255) NOT NULL,
  `border_color` varchar(255) DEFAULT NULL,
  `glass_color` varchar(255) DEFAULT NULL,
  `brand` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `image_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `image_fk_idx` (`image_id`),
  CONSTRAINT `image_fk` FOREIGN KEY (`image_id`) REFERENCES `image_products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'OAKLEY HOLBROOK 01',12530,'Material: Plastico, Medidas: 55-18-137, Aro Completo, Peso: 27 gramos','Sol','Negro','Gris','OAKLEY','Unisex','HOLBROOK ',1),(2,'RAY BAN ROUND 901',18860,'Material: Plastico, Medidas: 49-21-145, Aro Completo, Peso: 30 gramos','Sol','Negro','G15','RAY BAN','Unisex','ROUND 901',2),(3,'VULK YESTER MBLK REVO ROSE',7310,'Material: TR90, Medidas: 53-19-140, Tipo: Aro Completo, Peso: 28 gramos','Sol','Negro mate','Espejado Rosa','VULK','Unisex','MBLK REVO ROSE',3),(4,'NYOL 1904 03 SPOL',5500,'Material: Metal, Medidas: 50-17-145, Tipo: Aro Completo, Peso: 28 gramos','Sol','Negro mate','Gris polarizadas','NYOL','Unisex','NYOL',4),(5,'REEF 224 02',9110,'Material: TR90 y Metal, Medidas: 54-17-134, Tipo: Aro Completo, Peso: 28 gramos','Sol','Gris mate','Gris polarizadas','REEF','Unisex','224 02',5),(6,'VULK GEES SDEMI B10 POL',6990,'Material: TR90, Medidas: 58-16-125, Tipo: Aro Completo, Peso: 28 gramos','Sol','Tortoise','Marron','VULK','Unisex','GEES SDEMI B10 POL',6),(7,'RALPH 5160 510 13',12650,'Material: Plastico, Medidas: 57-17-135, Tipo: Aro Completo, Peso: 30 gramos','Sol','Tortoise','Marron','RALPH','Mujer','5160 510 13',7),(8,'RUSTY MANIC SBLK R.BLUE',6630,'Material: Plastico, Medidas: 50-14-140, Tipo: Aro Completo, Peso: 28 gramos','Sol','Negro','Espejado Azul','RUSTY','Unisex','MANIC SBLK R.BLUE',8);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transactions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `product_id` int(10) unsigned DEFAULT NULL,
  `amount` decimal(10,0) DEFAULT NULL,
  `total_price` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_id_idx` (`user_id`),
  KEY `fk_product_id_idx` (`product_id`),
  CONSTRAINT `fk_product_transaction` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_user_transaction` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_shop`
--

DROP TABLE IF EXISTS `user_shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_shop` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `product_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_id_idx` (`user_id`),
  KEY `fk_product_id_idx` (`product_id`),
  CONSTRAINT `fk_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_shop`
--

LOCK TABLES `user_shop` WRITE;
/*!40000 ALTER TABLE `user_shop` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `repassword` varchar(255) NOT NULL,
  `direction` varchar(255) NOT NULL,
  `photo_user` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Pedro Picapiedra','pedro@pedro.com','$2a$10$IqxGyohFC2NcUseuqYhmYewNwzMnvrBjuyjSbVOkPvrHKTyOG146e','$2a$10$SIMj.oFq7S4F2CwcmB05z.l1F.FSeAdftb0XLyKmPSVaSxGekS.3e','pedro 123','/images/productsimage/user-1644714974081.jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'mirrorlens'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-12 22:18:27
