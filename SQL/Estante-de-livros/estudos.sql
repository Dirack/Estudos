-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 02, 2019 at 11:15 PM
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
-- Table structure for table `estudos`
--

CREATE TABLE `estudos` (
  `id` tinyint(4) NOT NULL,
  `estudo` varchar(30) DEFAULT NULL,
  `descricao` tinytext,
  `tipo` varchar(20) DEFAULT NULL,
  `status` enum('D','S','Q','M','SEM','A','AP') DEFAULT 'AP',
  `review` date DEFAULT NULL,
  `marca` enum('to do','done') DEFAULT 'to do',
  `score` int(11) DEFAULT NULL,
  `feedback` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `estudos`
--

INSERT INTO `estudos` (`id`, `estudo`, `descricao`, `tipo`, `status`, `review`, `marca`, `score`, `feedback`) VALUES
(1, 'Urubu Malandro', NULL, 'Cavaco', 'Q', '2019-02-02', 'to do', 3, 'resolvido'),
(2, 'Brejeiro', NULL, 'Cavaco', 'Q', '2019-02-02', 'to do', 3, NULL),
(3, 'Delicado', NULL, 'Cavaco', 'Q', '2019-02-02', 'to do', 3, NULL),
(4, 'Carioquinha', NULL, 'Cavaco', 'Q', '2019-02-02', 'to do', 3, NULL),
(5, 'P. do céu', NULL, 'Cavaco', 'Q', '2019-02-02', 'to do', 3, NULL),
(6, 'Magoado', NULL, 'Cavaco', 'Q', '2019-02-02', 'to do', 3, NULL),
(7, 'Brasileirinho', NULL, 'Cavaco', 'Q', '2019-02-02', 'to do', 3, NULL),
(8, 'Aquarela', NULL, 'Cavaco', 'Q', '2019-02-02', 'to do', 3, NULL),
(9, 'Carinhoso', NULL, 'Cavaco', 'Q', '2019-02-02', 'to do', 3, NULL),
(10, 'Dengoso', NULL, 'Cavaco', 'Q', '2019-02-02', 'to do', 3, NULL),
(11, 'Arrasta pé', NULL, 'Cavaco', 'Q', '2019-02-02', 'to do', 3, NULL),
(12, 'Ronda', NULL, 'Cavaco', 'Q', '2019-02-02', 'to do', 3, NULL),
(13, 'C', NULL, 'Escala', 'S', '2019-01-19', 'to do', 3, NULL),
(14, 'G', NULL, 'Escala', 'S', '2019-01-19', 'to do', 3, NULL),
(15, 'D', NULL, 'Escala', 'S', '2019-01-19', 'to do', 3, NULL),
(16, 'A', NULL, 'Escala', 'S', '2019-01-19', 'to do', 3, NULL),
(17, 'E', NULL, 'Escala', 'S', '2019-01-19', 'to do', 3, NULL),
(18, 'B', NULL, 'Escala', 'S', '2019-01-19', 'to do', 3, 'problema resolvido'),
(19, 'F#', NULL, 'Escala', 'S', '2019-01-19', 'to do', 3, NULL),
(20, 'C#', NULL, 'Escala', 'S', '2019-01-19', 'to do', 3, NULL),
(21, 'F', NULL, 'Escala', 'S', '2019-01-19', 'to do', 3, NULL),
(22, 'Bb', NULL, 'Escala', 'S', '2019-01-19', 'to do', 3, NULL),
(23, 'Eb', NULL, 'Escala', 'S', '2019-01-19', 'to do', 3, NULL),
(24, 'Ab', NULL, 'Escala', 'S', '2019-01-19', 'to do', 3, NULL),
(25, 'Db', NULL, 'Escala', 'S', '2019-01-19', 'to do', 3, NULL),
(26, 'Gb', NULL, 'Escala', 'S', '2019-01-19', 'to do', 3, NULL),
(27, 'Cb', NULL, 'Escala', 'S', '2019-01-19', 'to do', 3, NULL),
(28, 'A ideologia alemã', 'Revisão', 'Livro', 'S', '2019-01-05', 'to do', 1, NULL),
(29, 'O anticristo', 'Revisão', 'Livro', 'S', '2019-01-05', 'to do', 1, 'Resolvido'),
(30, 'O manifesto comunista', 'Revisão', 'Livro', 'S', '2019-01-05', 'to do', 1, NULL),
(31, 'Pai rico pai pobre', 'Revisão', 'Livro', 'S', '2019-01-05', 'to do', 1, NULL),
(32, 'Essencial Hayek', NULL, 'Livro', 'S', '2019-01-01', 'to do', 1, NULL),
(33, 'O capital no século XXI', 'lendo', 'Livro', 'S', '2019-01-19', 'to do', 0, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `estudos`
--
ALTER TABLE `estudos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `estudos`
--
ALTER TABLE `estudos`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
