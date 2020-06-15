-- MySQL dump 10.13  Distrib 5.7.30, for Linux (x86_64)
--
-- Host: localhost    Database: cricket_db
-- ------------------------------------------------------
-- Server version	5.7.30-0ubuntu0.16.04.1

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
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add group',3,'add_group'),(6,'Can change group',3,'change_group'),(7,'Can delete group',3,'delete_group'),(8,'Can view group',3,'view_group'),(9,'Can add permission',2,'add_permission'),(10,'Can change permission',2,'change_permission'),(11,'Can delete permission',2,'delete_permission'),(12,'Can view permission',2,'view_permission'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add point table',11,'add_pointtable'),(26,'Can change point table',11,'change_pointtable'),(27,'Can delete point table',11,'delete_pointtable'),(28,'Can view point table',11,'view_pointtable'),(29,'Can add matches',10,'add_matches'),(30,'Can change matches',10,'change_matches'),(31,'Can delete matches',10,'delete_matches'),(32,'Can view matches',10,'view_matches'),(33,'Can add player',7,'add_player'),(34,'Can change player',7,'change_player'),(35,'Can delete player',7,'delete_player'),(36,'Can view player',7,'view_player'),(37,'Can add match player performance',8,'add_matchplayerperformance'),(38,'Can change match player performance',8,'change_matchplayerperformance'),(39,'Can delete match player performance',8,'delete_matchplayerperformance'),(40,'Can view match player performance',8,'view_matchplayerperformance'),(41,'Can add team',9,'add_team'),(42,'Can change team',9,'change_team'),(43,'Can delete team',9,'delete_team'),(44,'Can view team',9,'view_team');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$150000$JtFxmx8JGdI9$mucnL/XtMLKiuPcPcq1aOyDbQXXBvFY5NRSkLOV6uI4=','2020-06-15 01:20:07.278202',1,'cricket_admin','','','cricket_admin@yopmail.com',1,1,'2020-06-14 14:01:04.106862');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2020-06-14 14:10:31.474857','1','Team1',1,'[{\"added\": {}}]',9,1),(2,'2020-06-14 14:10:58.445015','1','CSK',2,'[{\"changed\": {\"fields\": [\"name\"]}}]',9,1),(3,'2020-06-14 14:11:46.155214','2','RCB',1,'[{\"added\": {}}]',9,1),(4,'2020-06-14 14:12:00.538158','3','SRH',1,'[{\"added\": {}}]',9,1),(5,'2020-06-14 14:12:49.626153','2','PointTable object (2)',3,'',11,1),(6,'2020-06-14 14:15:27.828379','1','MS Dhoni - CSK',1,'[{\"added\": {}}]',7,1),(7,'2020-06-14 14:15:32.420534','1','MS Dhoni - CSK',2,'[]',7,1),(8,'2020-06-14 14:17:51.680351','2','Suresh Raina - CSK',1,'[{\"added\": {}}]',7,1),(9,'2020-06-14 14:18:14.322724','3','Shane Watson - CSK',1,'[{\"added\": {}}]',7,1),(10,'2020-06-14 14:18:40.493131','4','Ravindra Jadeja - CSK',1,'[{\"added\": {}}]',7,1),(11,'2020-06-14 14:19:06.281219','5','Dwayne Bravo - CSK',1,'[{\"added\": {}}]',7,1),(12,'2020-06-14 14:19:29.046694','6','Deepak Chahar - CSK',1,'[{\"added\": {}}]',7,1),(13,'2020-06-14 14:19:55.870774','7','Faf du Plesis - CSK',1,'[{\"added\": {}}]',7,1),(14,'2020-06-14 14:20:16.572845','8','Harbhajan Singh - CSK',1,'[{\"added\": {}}]',7,1),(15,'2020-06-14 14:20:36.328240','9','Ambati Raydu - CSK',1,'[{\"added\": {}}]',7,1),(16,'2020-06-14 14:20:58.265665','10','Murli Vijay - CSK',1,'[{\"added\": {}}]',7,1),(17,'2020-06-14 14:21:19.161071','11','Kedhar Jadhav - CSK',1,'[{\"added\": {}}]',7,1),(18,'2020-06-14 14:21:41.586136','12','Josh Hazelwood - CSK',1,'[{\"added\": {}}]',7,1),(19,'2020-06-14 14:22:30.175056','12','Josh Hazelwood - CSK',3,'',7,1),(20,'2020-06-14 14:24:05.858302','13','Virat Kohli - RCB',1,'[{\"added\": {}}]',7,1),(21,'2020-06-14 14:24:28.388691','14','AB de Villiers - RCB',1,'[{\"added\": {}}]',7,1),(22,'2020-06-14 14:24:53.388443','15','Gurukeerat Maan - RCB',1,'[{\"added\": {}}]',7,1),(23,'2020-06-14 14:25:24.449837','16','Devdutt Padikkal - RCB',1,'[{\"added\": {}}]',7,1),(24,'2020-06-14 14:25:51.835835','17','Aaron Finch - RCB',1,'[{\"added\": {}}]',7,1),(25,'2020-06-14 14:26:15.691053','18','Yuzvendra Chahal - RCB',1,'[{\"added\": {}}]',7,1),(26,'2020-06-14 14:26:37.162840','19','Mohmmad Siraj - RCB',1,'[{\"added\": {}}]',7,1),(27,'2020-06-14 14:27:14.939033','20','Umesh Yadav - RCB',1,'[{\"added\": {}}]',7,1),(28,'2020-06-14 14:27:32.625559','21','Navdeep Saini - RCB',1,'[{\"added\": {}}]',7,1),(29,'2020-06-14 14:27:54.231346','22','Kane Richardson - RCB',1,'[{\"added\": {}}]',7,1),(30,'2020-06-14 14:28:18.790683','23','Dale Steyn - RCB',1,'[{\"added\": {}}]',7,1),(31,'2020-06-14 14:29:10.006931','24','David Warner - SRH',1,'[{\"added\": {}}]',7,1),(32,'2020-06-14 14:29:31.028997','25','Kane Williamson - SRH',1,'[{\"added\": {}}]',7,1),(33,'2020-06-14 14:29:52.955205','26','Rashid Khan - SRH',1,'[{\"added\": {}}]',7,1),(34,'2020-06-14 14:30:32.655662','27','Bhuvneshwar Kumar - SRH',1,'[{\"added\": {}}]',7,1),(35,'2020-06-14 14:30:57.329324','28','Manish Pandey - SRH',1,'[{\"added\": {}}]',7,1),(36,'2020-06-14 14:31:19.235119','29','Jonny Bairstow - SRH',1,'[{\"added\": {}}]',7,1),(37,'2020-06-14 14:31:38.020610','30','Vijay Shankar - SRH',1,'[{\"added\": {}}]',7,1),(38,'2020-06-14 14:32:02.691069','31','Mohammad Nabi - SRH',1,'[{\"added\": {}}]',7,1),(39,'2020-06-14 14:32:23.090422','32','Virat Singh - SRH',1,'[{\"added\": {}}]',7,1),(40,'2020-06-14 14:32:42.359608','33','Mitchell Marsh - SRH',1,'[{\"added\": {}}]',7,1),(41,'2020-06-14 14:33:40.720963','34','Abdul Samad - SRH',1,'[{\"added\": {}}]',7,1),(42,'2020-06-14 17:12:34.404229','3','SRH',2,'[{\"changed\": {\"fields\": [\"logo\"]}}]',9,1),(43,'2020-06-14 17:29:24.800087','2','Matches object (2)',1,'[{\"added\": {}}]',10,1),(44,'2020-06-15 01:26:06.661823','1','MatchPlayerPerformance object (1)',1,'[{\"added\": {}}]',8,1),(45,'2020-06-15 01:27:00.938241','2','MatchPlayerPerformance object (2)',1,'[{\"added\": {}}]',8,1),(46,'2020-06-15 01:28:18.090332','3','MatchPlayerPerformance object (3)',1,'[{\"added\": {}}]',8,1),(47,'2020-06-15 01:29:32.630509','4','MatchPlayerPerformance object (4)',1,'[{\"added\": {}}]',8,1),(48,'2020-06-15 01:29:51.057487','5','MatchPlayerPerformance object (5)',1,'[{\"added\": {}}]',8,1),(49,'2020-06-15 01:31:51.310528','6','MatchPlayerPerformance object (6)',1,'[{\"added\": {}}]',8,1),(50,'2020-06-15 01:32:23.311690','7','MatchPlayerPerformance object (7)',1,'[{\"added\": {}}]',8,1),(51,'2020-06-15 01:33:05.678522','8','MatchPlayerPerformance object (8)',1,'[{\"added\": {}}]',8,1),(52,'2020-06-15 01:34:16.315180','9','MatchPlayerPerformance object (9)',1,'[{\"added\": {}}]',8,1),(53,'2020-06-15 01:34:36.548786','10','MatchPlayerPerformance object (10)',1,'[{\"added\": {}}]',8,1),(54,'2020-06-15 01:35:33.873280','11','MatchPlayerPerformance object (11)',1,'[{\"added\": {}}]',8,1),(55,'2020-06-15 01:36:37.414502','12','MatchPlayerPerformance object (12)',1,'[{\"added\": {}}]',8,1),(56,'2020-06-15 01:38:16.047369','13','MatchPlayerPerformance object (13)',1,'[{\"added\": {}}]',8,1),(57,'2020-06-15 01:38:40.554658','14','MatchPlayerPerformance object (14)',1,'[{\"added\": {}}]',8,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(10,'main_app','matches'),(8,'main_app','matchplayerperformance'),(7,'main_app','player'),(11,'main_app','pointtable'),(9,'main_app','team'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2020-06-14 09:32:29.377035'),(2,'auth','0001_initial','2020-06-14 09:32:32.007261'),(3,'admin','0001_initial','2020-06-14 09:32:40.485783'),(4,'admin','0002_logentry_remove_auto_add','2020-06-14 09:32:42.411654'),(5,'admin','0003_logentry_add_action_flag_choices','2020-06-14 09:32:42.478645'),(6,'contenttypes','0002_remove_content_type_name','2020-06-14 09:32:44.106914'),(7,'auth','0002_alter_permission_name_max_length','2020-06-14 09:32:44.252841'),(8,'auth','0003_alter_user_email_max_length','2020-06-14 09:32:44.398727'),(9,'auth','0004_alter_user_username_opts','2020-06-14 09:32:44.468304'),(10,'auth','0005_alter_user_last_login_null','2020-06-14 09:32:45.208968'),(11,'auth','0006_require_contenttypes_0002','2020-06-14 09:32:45.276127'),(12,'auth','0007_alter_validators_add_error_messages','2020-06-14 09:32:45.352820'),(13,'auth','0008_alter_user_username_max_length','2020-06-14 09:32:45.520406'),(14,'auth','0009_alter_user_last_name_max_length','2020-06-14 09:32:45.665290'),(15,'auth','0010_alter_group_name_max_length','2020-06-14 09:32:45.799110'),(16,'auth','0011_update_proxy_permissions','2020-06-14 09:32:45.850633'),(17,'sessions','0001_initial','2020-06-14 09:32:46.343914'),(18,'main_app','0001_initial','2020-06-14 13:59:58.056539'),(19,'main_app','0002_auto_20200614_1711','2020-06-14 17:11:34.391164'),(20,'main_app','0003_auto_20200614_1725','2020-06-14 17:25:47.385360');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('jfbi4wu8fyt0ddckbs9krvrk4btbwcgc','NzdkNmQ1M2E1OWRiZWVlYjMxZmI1NjYwMjdkMjU1OTRjNzgzNTA1Yjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9oYXNoIjoiNmYyNjY4M2FkOGFkMzMwNGYwNGI5ODcwZDhmMDE5MDM4MTYzZWQ5ZiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIn0=','2020-06-29 01:20:07.367080'),('mtar3nmtwwbqstoh3w23rj8tn8hzjehi','NmM3ZGU4NDRkZWMwZDE3YThmOGRlMzEzZWU3NmY2OTI5ZWNjMTJiYzp7Il9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9pZCI6IjEiLCJfYXV0aF91c2VyX2hhc2giOiI2ZjI2NjgzYWQ4YWQzMzA0ZjA0Yjk4NzBkOGYwMTkwMzgxNjNlZDlmIn0=','2020-06-28 17:26:13.980255'),('xbnyd4qff5tmwf8a3nz6vo33hy6lqzel','MWZmNDA0MDFmMzQ4MDU5OWYyM2NkMWE2ODM5Y2YyZjg1NDgxYzVlOTp7Il9hdXRoX3VzZXJfaGFzaCI6IjZmMjY2ODNhZDhhZDMzMDRmMDRiOTg3MGQ4ZjAxOTAzODE2M2VkOWYiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2020-06-28 17:12:20.578579');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_app_matches`
--

DROP TABLE IF EXISTS `main_app_matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `main_app_matches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(15) NOT NULL,
  `overs` varchar(5) NOT NULL,
  `match_date` date NOT NULL,
  `won_by_runs` int(11) NOT NULL,
  `won_by_wickets` int(11) NOT NULL,
  `team_1_id` int(11) NOT NULL,
  `team_2_id` int(11) NOT NULL,
  `winning_team_id` int(11) DEFAULT NULL,
  `team_1_played_overs` int(11) NOT NULL,
  `team_1_score` int(11) NOT NULL,
  `team_1_wicket_down` int(11) NOT NULL,
  `team_2_played_overs` int(11) NOT NULL,
  `team_2_score` int(11) NOT NULL,
  `team_2_wicket_down` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `main_app_matches_team_1_id_e039c861_fk_table_id` (`team_1_id`),
  KEY `main_app_matches_team_2_id_4bb98078_fk_table_id` (`team_2_id`),
  KEY `main_app_matches_winning_team_id_3a1ac523_fk_table_id` (`winning_team_id`),
  CONSTRAINT `main_app_matches_team_1_id_e039c861_fk_table_id` FOREIGN KEY (`team_1_id`) REFERENCES `table` (`id`),
  CONSTRAINT `main_app_matches_team_2_id_4bb98078_fk_table_id` FOREIGN KEY (`team_2_id`) REFERENCES `table` (`id`),
  CONSTRAINT `main_app_matches_winning_team_id_3a1ac523_fk_table_id` FOREIGN KEY (`winning_team_id`) REFERENCES `table` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_app_matches`
--

LOCK TABLES `main_app_matches` WRITE;
/*!40000 ALTER TABLE `main_app_matches` DISABLE KEYS */;
INSERT INTO `main_app_matches` VALUES (2,'Get Result','20','2020-06-14',12,0,1,2,1,20,195,3,20,183,7);
/*!40000 ALTER TABLE `main_app_matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_app_matchplayerperformance`
--

DROP TABLE IF EXISTS `main_app_matchplayerperformance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `main_app_matchplayerperformance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `runs` int(11) NOT NULL,
  `balls_played` int(11) NOT NULL,
  `wicket_taken` int(11) NOT NULL,
  `overs_thrown` int(11) NOT NULL,
  `match_id` int(11) NOT NULL,
  `player_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `main_app_matchplayer_match_id_ad0731d4_fk_main_app_` (`match_id`),
  KEY `main_app_matchplayer_player_id_4311c62c_fk_player_de` (`player_id`),
  CONSTRAINT `main_app_matchplayer_match_id_ad0731d4_fk_main_app_` FOREIGN KEY (`match_id`) REFERENCES `main_app_matches` (`id`),
  CONSTRAINT `main_app_matchplayer_player_id_4311c62c_fk_player_de` FOREIGN KEY (`player_id`) REFERENCES `player_detail` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_app_matchplayerperformance`
--

LOCK TABLES `main_app_matchplayerperformance` WRITE;
/*!40000 ALTER TABLE `main_app_matchplayerperformance` DISABLE KEYS */;
INSERT INTO `main_app_matchplayerperformance` VALUES (1,5,10,0,0,2,11),(2,10,20,0,0,2,10),(3,55,30,0,0,2,9),(4,20,12,0,0,2,8),(5,105,48,0,0,2,7),(6,15,6,0,0,2,13),(7,10,6,0,0,2,14),(8,10,6,0,0,2,15),(9,0,3,0,0,2,16),(10,0,3,0,0,2,17),(11,35,30,0,0,2,18),(12,25,30,0,0,2,19),(13,32,12,0,0,2,20),(14,56,24,0,0,2,21);
/*!40000 ALTER TABLE `main_app_matchplayerperformance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_app_pointtable`
--

DROP TABLE IF EXISTS `main_app_pointtable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `main_app_pointtable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `match_played` int(11) NOT NULL,
  `won` int(11) NOT NULL,
  `lose` int(11) NOT NULL,
  `draw` int(11) NOT NULL,
  `points` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `main_app_pointtable_team_id_5c0fe896_fk_table_id` (`team_id`),
  CONSTRAINT `main_app_pointtable_team_id_5c0fe896_fk_table_id` FOREIGN KEY (`team_id`) REFERENCES `table` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_app_pointtable`
--

LOCK TABLES `main_app_pointtable` WRITE;
/*!40000 ALTER TABLE `main_app_pointtable` DISABLE KEYS */;
INSERT INTO `main_app_pointtable` VALUES (1,1,1,0,0,2,1),(3,1,0,1,0,0,2),(4,0,0,0,0,0,3);
/*!40000 ALTER TABLE `main_app_pointtable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_detail`
--

DROP TABLE IF EXISTS `player_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `player_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `jersey_number` varchar(5) NOT NULL,
  `total_played_matches` int(11) NOT NULL,
  `total_runs` int(11) NOT NULL,
  `total_centuries` int(11) NOT NULL,
  `total_fifties` int(11) NOT NULL,
  `total_wickets` int(11) NOT NULL,
  `best_score` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `player_detail_team_id_686ff5e6_fk_table_id` (`team_id`),
  CONSTRAINT `player_detail_team_id_686ff5e6_fk_table_id` FOREIGN KEY (`team_id`) REFERENCES `table` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_detail`
--

LOCK TABLES `player_detail` WRITE;
/*!40000 ALTER TABLE `player_detail` DISABLE KEYS */;
INSERT INTO `player_detail` VALUES (1,'2020-06-14 14:15:27.827269','2020-06-14 14:15:32.418124','MS','Dhoni','Players/player.jpeg','01',0,0,0,0,0,0,1),(2,'2020-06-14 14:17:51.679200','2020-06-14 14:17:51.679238','Suresh','Raina','Players/player_yts59gA.jpeg','02',0,0,0,0,0,0,1),(3,'2020-06-14 14:18:14.321322','2020-06-14 14:18:14.321360','Shane','Watson','Players/player_p0ow8Os.jpeg','03',0,0,0,0,0,0,1),(4,'2020-06-14 14:18:40.491733','2020-06-14 14:18:40.491772','Ravindra','Jadeja','Players/player_ur2JM6P.jpeg','04',0,0,0,0,0,0,1),(5,'2020-06-14 14:19:06.280144','2020-06-14 14:19:06.280182','Dwayne','Bravo','Players/player_VwQM5zw.jpeg','05',0,0,0,0,0,0,1),(6,'2020-06-14 14:19:29.045151','2020-06-14 14:19:29.045193','Deepak','Chahar','Players/player_hHSbSE7.jpeg','06',0,0,0,0,0,0,1),(7,'2020-06-14 14:19:55.869415','2020-06-14 14:19:55.869453','Faf du','Plesis','Players/player_jaU8XyJ.jpeg','07',0,0,0,0,0,0,1),(8,'2020-06-14 14:20:16.571691','2020-06-14 14:20:16.571728','Harbhajan','Singh','Players/player_qgxM4eM.jpeg','08',0,0,0,0,0,0,1),(9,'2020-06-14 14:20:36.326967','2020-06-14 14:20:36.327004','Ambati','Raydu','Players/player_g3OmWtt.jpeg','09',0,0,0,0,0,0,1),(10,'2020-06-14 14:20:58.264625','2020-06-14 14:20:58.264699','Murli','Vijay','Players/player_BxoweNU.jpeg','09',0,0,0,0,0,0,1),(11,'2020-06-14 14:21:19.159824','2020-06-14 14:21:19.159861','Kedhar','Jadhav','Players/player_aywjTfV.jpeg','10',0,0,0,0,0,0,1),(13,'2020-06-14 14:24:05.857229','2020-06-14 14:24:05.857269','Virat','Kohli','Players/player_DXW3mLo.jpeg','01',0,0,0,0,0,0,2),(14,'2020-06-14 14:24:28.387700','2020-06-14 14:24:28.387739','AB de','Villiers','Players/player_zdcJsNC.jpeg','02',0,0,0,0,0,0,2),(15,'2020-06-14 14:24:53.387426','2020-06-14 14:24:53.387465','Gurukeerat','Maan','Players/player_F43Nkqr.jpeg','03',0,0,0,0,0,0,2),(16,'2020-06-14 14:25:24.447666','2020-06-14 14:25:24.447704','Devdutt','Padikkal','Players/player_RvcQ2VB.jpeg','04',0,0,0,0,0,0,2),(17,'2020-06-14 14:25:51.834844','2020-06-14 14:25:51.834881','Aaron','Finch','Players/player_3LfiEV4.jpeg','05',0,0,0,0,0,0,2),(18,'2020-06-14 14:26:15.689737','2020-06-14 14:26:15.689777','Yuzvendra','Chahal','Players/player_Thp1PXe.jpeg','06',0,0,0,0,0,0,2),(19,'2020-06-14 14:26:37.161719','2020-06-14 14:26:37.161757','Mohmmad','Siraj','Players/player_OXy2ffZ.jpeg','07',0,0,0,0,0,0,2),(20,'2020-06-14 14:27:14.938072','2020-06-14 14:27:14.938109','Umesh','Yadav','Players/player_BQ8pqxR.jpeg','08',0,0,0,0,0,0,2),(21,'2020-06-14 14:27:32.624583','2020-06-14 14:27:32.624621','Navdeep','Saini','Players/player_J4yuEC3.jpeg','09',0,0,0,0,0,0,2),(22,'2020-06-14 14:27:54.230341','2020-06-14 14:27:54.230378','Kane','Richardson','Players/player_aiS9Hia.jpeg','10',0,0,0,0,0,0,2),(23,'2020-06-14 14:28:18.789156','2020-06-14 14:28:18.789201','Dale','Steyn','Players/player_aPgDINw.jpeg','11',0,0,0,0,0,0,2),(24,'2020-06-14 14:29:10.005967','2020-06-14 14:29:10.006005','David','Warner','Players/player_YJxfo90.jpeg','01',0,0,0,0,0,0,3),(25,'2020-06-14 14:29:31.027747','2020-06-14 14:29:31.027785','Kane','Williamson','Players/player_n6ZQXJV.jpeg','02',0,0,0,0,0,0,3),(26,'2020-06-14 14:29:52.954256','2020-06-14 14:29:52.954296','Rashid','Khan','Players/player_W6fuHAU.jpeg','03',0,0,0,0,0,0,3),(27,'2020-06-14 14:30:32.654503','2020-06-14 14:30:32.654543','Bhuvneshwar','Kumar','Players/player_bPBjSfG.jpeg','04',0,0,0,0,0,0,3),(28,'2020-06-14 14:30:57.328301','2020-06-14 14:30:57.328340','Manish','Pandey','Players/player_phxm1bM.jpeg','05',0,0,0,0,0,0,3),(29,'2020-06-14 14:31:19.234004','2020-06-14 14:31:19.234055','Jonny','Bairstow','Players/player_EEXHL1d.jpeg','06',0,0,0,0,0,0,3),(30,'2020-06-14 14:31:38.019297','2020-06-14 14:31:38.019337','Vijay','Shankar','Players/player_luvaG8b.jpeg','07',0,0,0,0,0,0,3),(31,'2020-06-14 14:32:02.689992','2020-06-14 14:32:02.690036','Mohammad','Nabi','Players/player_QpBAAkF.jpeg','08',0,0,0,0,0,0,3),(32,'2020-06-14 14:32:23.089304','2020-06-14 14:32:23.089342','Virat','Singh','Players/player_RxktxVx.jpeg','09',0,0,0,0,0,0,3),(33,'2020-06-14 14:32:42.358647','2020-06-14 14:32:42.358685','Mitchell','Marsh','Players/player_a7o7h4G.jpeg','10',0,0,0,0,0,0,3),(34,'2020-06-14 14:33:40.719943','2020-06-14 14:33:40.719982','Abdul','Samad','Players/player_8GpJKaV.jpeg','11',0,0,0,0,0,0,3);
/*!40000 ALTER TABLE `player_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `table`
--

DROP TABLE IF EXISTS `table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `name` varchar(100) NOT NULL,
  `logo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table`
--

LOCK TABLES `table` WRITE;
/*!40000 ALTER TABLE `table` DISABLE KEYS */;
INSERT INTO `table` VALUES (1,'2020-06-14 14:10:31.472217','2020-06-14 14:10:58.348549','CSK','Teams/csk.jpeg'),(2,'2020-06-14 14:11:46.153829','2020-06-14 14:11:46.153866','RCB','Teams/rcb.jpeg'),(3,'2020-06-14 14:12:00.449933','2020-06-14 17:12:34.401493','SRH','Teams/sh_TabaIW5.jpeg');
/*!40000 ALTER TABLE `table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-15  7:20:10
