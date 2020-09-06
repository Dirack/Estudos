-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 02, 2019 at 11:14 PM
-- Server version: 5.7.22-0ubuntu0.17.10.1
-- PHP Version: 7.1.17-0ubuntu0.17.10.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tarefas`
--

-- --------------------------------------------------------

--
-- Table structure for table `repertorio`
--

CREATE TABLE `repertorio` (
  `id` tinyint(4) NOT NULL,
  `musica` varchar(30) DEFAULT NULL COMMENT 'teste',
  `compositor` varchar(20) DEFAULT NULL,
  `repertorio` varchar(20) DEFAULT NULL,
  `pagina` varchar(20) DEFAULT NULL,
  `score` tinyint(4) DEFAULT '0',
  `prazo` date DEFAULT NULL,
  `feedback` tinytext,
  `status` enum('ok','rever','lembrar','aprender') DEFAULT 'aprender'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `repertorio`
--

INSERT INTO `repertorio` (`id`, `musica`, `compositor`, `repertorio`, `pagina`, `score`, `prazo`, `feedback`, `status`) VALUES
(1, 'Jorge do Fusa', 'Garoto', '3', 'Avulsas', 0, NULL, NULL, 'aprender'),
(2, 'Divagando', 'Dilermando Reis', '3', 'Avulsas', 0, NULL, NULL, 'aprender'),
(3, 'Flor de Aguapé', 'Dilermando Reis', '3', 'Avulsas', 0, NULL, NULL, 'aprender'),
(4, 'Dr. Sabe Tudo', 'Dilermando Reis', '3', 'Avulsas', 0, NULL, NULL, 'aprender'),
(5, 'Capricho Árabe', 'Tárrega', '3', 'Avulsas', 0, NULL, NULL, 'aprender'),
(6, 'Uma valsa e dois amores', 'Dilermando Reis', '3', 'Avulsas', 0, NULL, NULL, 'aprender'),
(7, 'Magoado', 'Dilermando Reis', '3', 'Avulsas', 0, NULL, NULL, 'aprender'),
(8, 'Se ela perguntar', 'Dilermando Reis', '3', 'Avulsas', 0, NULL, NULL, 'aprender'),
(9, 'Conversa de baiana', 'Dilermando Reis', '3', 'Avulsas', 0, NULL, NULL, 'aprender'),
(10, 'Tempo de criança', 'Dilermando Reis', '3', 'Avulsas', 0, NULL, NULL, 'aprender'),
(11, 'Adelita', 'Tárrega', '3', 'Avulsas', 0, NULL, NULL, 'aprender'),
(12, 'Boticão', 'Carlos Lafelice', '3', 'Avulsas', 0, NULL, NULL, 'aprender'),
(13, 'Sons de carrilhões', 'Dilermando Reis', '3', 'Avulsas', 0, NULL, NULL, 'aprender'),
(14, 'Jesus alegria dos homens', 'Bach', '3', 'Avulsas', 0, NULL, NULL, 'aprender'),
(15, 'Spanish Study', 'Anônimo', '3', 'Avulsas', 0, NULL, NULL, 'aprender'),
(16, 'A casinha pequenina', 'Anônimo', '2', '36', 0, NULL, NULL, 'aprender'),
(17, 'Olhos negros', 'Anônimo', '2', '37', 0, NULL, NULL, 'aprender'),
(18, 'Malaguena', 'Tárrega', '2', '45', 0, NULL, NULL, 'aprender'),
(19, 'Andante', 'Carrulli', '1', '42-43', 4, NULL, NULL, 'aprender'),
(20, 'Andantino', 'Carcassi', '1', '59-60', 4, NULL, NULL, 'aprender'),
(21, 'Valsa', 'Aguado', '1', '61', 4, NULL, NULL, 'aprender'),
(22, 'Lágrima', 'Tárrega', '1', '62', 4, NULL, NULL, 'aprender'),
(23, 'Bourreé', 'Bach', '1', '63', 4, NULL, NULL, 'aprender'),
(24, 'Minueto G', 'Bach', 'CP', '48', 0, NULL, NULL, 'aprender'),
(25, 'Alla Polacca', 'Carulli', 'CP', '56', 0, NULL, NULL, 'aprender'),
(26, 'Allemande', 'Bach', 'CP', '89', 0, NULL, NULL, 'aprender'),
(27, 'Mazurca', 'Rocamora', '2', '25', 0, NULL, NULL, 'aprender'),
(28, 'Andante', 'Anônimo', '1', '34', 2, NULL, NULL, 'aprender'),
(29, 'Andantino', 'A. Cano', '1', '35', 2, NULL, NULL, 'aprender'),
(30, 'Andantino', 'Carcassi', '1', '36', 2, NULL, NULL, 'aprender'),
(31, 'Valsa', 'Valsa', '1', '37', 2, NULL, NULL, 'aprender'),
(32, 'Alegretto', 'Henrique Pinto', '1', '38', 2, NULL, NULL, 'aprender'),
(33, 'Quase Andante', 'Henrique Pinto', '1', '38', 2, NULL, NULL, 'aprender'),
(34, 'Prelúdio', 'Henrique Pinto', '1', '39', 2, NULL, NULL, 'aprender'),
(35, 'Alegretto', 'Carcassi', '1', '40', 2, NULL, NULL, 'aprender'),
(36, 'Andante Religioso', 'Carcassi', '1', '41', 2, NULL, NULL, 'aprender'),
(37, 'Grazioso', 'Giuliani', '2', '17', 2, NULL, NULL, 'aprender'),
(38, 'Andante', 'Carcassi', '1', '44', 2, NULL, NULL, 'aprender'),
(39, 'Espagnoleta', 'G. Sanz', '1', '52', 2, NULL, NULL, 'aprender'),
(40, 'Green-Sleeves', 'Anônimo', '1', '53', 2, NULL, NULL, 'aprender'),
(41, 'Alegretto', 'Carcassi', '1', '54', 2, NULL, NULL, 'aprender'),
(42, 'Papillon', 'Carcassi', '1', '55', 2, NULL, NULL, 'aprender'),
(43, 'Allegro', 'Henrique Pinto', '1', '56', 2, NULL, NULL, 'aprender'),
(44, 'Estudo C', 'Tárrega', '1', '57', 2, NULL, NULL, 'aprender'),
(45, 'Estudo Em', 'Tárrega', '1', '58', 2, NULL, NULL, 'aprender'),
(46, 'Estudo G', 'Carulli', '2', '13', 2, NULL, NULL, 'aprender'),
(47, 'Valsa', 'Carulli', '2', '14', 2, NULL, NULL, 'aprender'),
(48, 'Minueto', 'Johann Krieger', '2', '15', 2, NULL, NULL, 'aprender'),
(49, 'Andantino Am', 'Carulli', '2', '16', 2, NULL, NULL, 'aprender'),
(50, 'Valsa', 'Carcassi', '2', '18', 0, NULL, NULL, 'aprender'),
(51, 'Andantino', 'Giuliani', '2', '19', 0, NULL, NULL, 'aprender'),
(52, 'Escocesa', 'Giuliani', '2', '20', 0, NULL, NULL, 'aprender'),
(53, 'Andantino', 'Fernando Sor', '2', '21', 0, NULL, NULL, 'aprender'),
(54, 'Estudo', 'Fernando Sor', '2', '22', 0, NULL, NULL, 'aprender'),
(55, 'Andante', 'Fernando Sor', '2', '24', 0, NULL, NULL, 'aprender'),
(56, 'Rondó', 'Carulli', '2', '26', 0, NULL, NULL, 'aprender'),
(57, 'Alegretto Scherzando', 'Paganini', '2', '28', 0, NULL, NULL, 'aprender'),
(58, 'Escocesa', 'Giuliani', '2', '29', 0, NULL, NULL, 'aprender'),
(59, 'Canção', 'Johann Kaspar Mertz', '2', '30', 0, NULL, NULL, 'aprender'),
(60, 'Adágio', 'Johann Kaspar Mertz', '2', '32', 0, NULL, NULL, 'aprender'),
(61, 'Noite Feliz', 'Franz Gruber', '2', '33', 0, NULL, NULL, 'aprender'),
(62, 'Prelúdio', 'Anton Diabelli', '2', '34', 0, NULL, NULL, 'aprender'),
(63, 'Estudo Dm', 'Giuliani', '2', '38', 0, NULL, NULL, 'aprender'),
(64, 'Capricho', 'Giuliani', '2', '40', 0, NULL, NULL, 'aprender'),
(65, 'Andante Cantábile', 'Anton Diabelli', '2', '42', 0, NULL, NULL, 'aprender'),
(66, 'Bourée', 'Graf Bergen', '2', '43', 0, NULL, NULL, 'aprender'),
(67, 'Courante', 'Ernest Baron', '2', '44', 0, NULL, NULL, 'aprender'),
(68, 'Barcarola', 'Napoleon Coste', '2', '48', 0, NULL, NULL, 'aprender'),
(69, 'Monferrini', 'Giuliani', '2', '49', 0, NULL, NULL, 'aprender'),
(70, 'Bagatella', 'Heinrich Marscner', '2', '50', 0, NULL, NULL, 'aprender'),
(71, 'Bourée', 'Georg Handel', '2', '51', 0, NULL, NULL, 'aprender'),
(72, 'Nocturne', 'Johann Kaspar Mertz', '2', '52-53', 0, NULL, NULL, 'aprender'),
(73, 'Minueto Rondeau', NULL, 'CP', '30', 0, NULL, NULL, 'aprender'),
(74, 'Allegro', NULL, 'CP', '31', 0, NULL, NULL, 'aprender'),
(75, 'Minueto', NULL, 'CP', '32', 0, NULL, NULL, 'aprender'),
(76, 'Pequena Valsa', NULL, 'CP', '32', 0, NULL, NULL, 'aprender'),
(77, 'Song Tune', NULL, 'CP', '33', 0, NULL, NULL, 'aprender'),
(78, 'Air', NULL, 'CP', '33', 0, NULL, NULL, 'aprender'),
(79, 'Galopp', NULL, 'CP', '34', 0, NULL, NULL, 'aprender'),
(80, 'Mrs. Winters Jump', NULL, 'CP', '35', 0, NULL, NULL, 'aprender'),
(81, 'Pequena Peça', NULL, 'CP', '35-36', 0, NULL, NULL, 'aprender'),
(82, 'The Sick Tune', NULL, 'CP', '36', 0, NULL, NULL, 'aprender'),
(83, 'Pavana I', NULL, 'CP', '37', 0, NULL, NULL, 'aprender'),
(84, 'Maestoso', NULL, 'CP', '39', 0, NULL, NULL, 'aprender'),
(85, 'A primeira dor', NULL, 'CP', '40', 0, NULL, NULL, 'aprender'),
(86, 'Alegretto', NULL, 'CP', '41', 0, NULL, NULL, 'aprender'),
(87, 'Fortune', NULL, 'CP', '43', 0, NULL, NULL, 'aprender'),
(88, 'Pavana II', NULL, 'CP', '45', 0, NULL, NULL, 'aprender'),
(89, 'Italian Dance', NULL, 'CP', '46', 0, NULL, NULL, 'aprender'),
(90, 'Minueto', NULL, 'CP', '48', 0, NULL, NULL, 'aprender'),
(91, 'Entrée', NULL, 'CP', '49', 0, NULL, NULL, 'aprender'),
(92, 'Gavota', NULL, 'CP', '50', 0, NULL, NULL, 'aprender'),
(93, 'Minueto', NULL, 'CP', '51', 0, NULL, NULL, 'aprender'),
(94, 'Giga', NULL, 'CP', '52', 0, NULL, NULL, 'aprender'),
(95, 'Andantino', NULL, 'CP', '53', 0, NULL, NULL, 'aprender'),
(96, 'Alegretto', NULL, 'CP', '55', 0, NULL, NULL, 'aprender'),
(97, 'Alla Polacca', NULL, 'CP', '56', 0, NULL, NULL, 'aprender'),
(98, 'Vilano', NULL, 'CP', '58', 0, NULL, NULL, 'aprender'),
(99, 'A new Irish tune', NULL, 'CP', '59', 0, NULL, NULL, 'aprender'),
(100, 'Lady Laitons Almain', NULL, 'CP', '61', 0, NULL, NULL, 'aprender'),
(101, 'Kemps Jig', NULL, 'CP', '62', 0, NULL, NULL, 'aprender'),
(102, 'Canários', NULL, 'CP', '63', 0, NULL, NULL, 'aprender'),
(103, 'Almain', NULL, 'CP', '65', 0, NULL, NULL, 'aprender'),
(104, 'Sarabanda Variada', NULL, 'CP', '67', 0, NULL, NULL, 'aprender'),
(105, 'Marcha', NULL, 'CP', '69', 0, NULL, NULL, 'aprender'),
(106, 'Minueto', NULL, 'CP', '70', 0, NULL, NULL, 'aprender'),
(107, 'Prelúdio', NULL, 'CP', '71', 0, NULL, NULL, 'aprender'),
(108, 'Ballet', 'M. Praetorius', 'CP', '72-73', 0, NULL, NULL, 'aprender'),
(109, 'Hornpipe', 'Henry Purcell', 'CP', '74', 0, NULL, NULL, 'aprender'),
(110, 'Melancholy Galliard', 'John Dowland', 'CP', '75', 0, NULL, NULL, 'aprender'),
(111, 'Minueto', NULL, 'CP', '77', 0, NULL, NULL, 'aprender'),
(112, 'Marcha', NULL, 'CP', '78', 0, NULL, NULL, 'aprender'),
(113, 'Prelúdio', NULL, 'CP', '79', 0, NULL, NULL, 'aprender'),
(114, 'Rigaudon', NULL, 'CP', '81', 0, NULL, NULL, 'aprender'),
(115, 'Giga', NULL, 'CP', '82', 0, NULL, NULL, 'aprender'),
(116, 'Sonata: Grazioso', NULL, 'CP', '83', 0, NULL, NULL, 'aprender'),
(117, 'Sonata: Alegretto', NULL, 'CP', '85', 0, NULL, NULL, 'aprender'),
(118, 'Prelúdio', NULL, 'CP', '88', 0, NULL, NULL, 'aprender'),
(119, 'Allemande', NULL, 'CP', '89', 0, NULL, NULL, 'aprender'),
(120, 'Gavota', NULL, 'CP', '91', 0, NULL, NULL, 'aprender');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `repertorio`
--
ALTER TABLE `repertorio`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `repertorio`
--
ALTER TABLE `repertorio`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
