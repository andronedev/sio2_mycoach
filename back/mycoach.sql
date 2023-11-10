-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  jeu. 02 nov. 2023 à 17:26
-- Version du serveur :  5.7.17
-- Version de PHP :  7.1.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `mycoach`
--

-- --------------------------------------------------------

--
-- Structure de la table `activites`
--

CREATE TABLE `activites` (
  `id` int(11) NOT NULL,
  `nom` text,
  `description` text
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `activites`
--

INSERT INTO `activites` (`id`, `nom`, `description`) VALUES
(1, 'Musculation', 'Renforcement musculaire avec haltères et machines'),
(2, 'Natation', 'Nage en bassin'),
(3, 'Football', 'Match de football à 11'),
(4, 'Yoga', 'Cours de yoga, méditation et relaxation');

-- --------------------------------------------------------

--
-- Structure de la table `coachs`
--

CREATE TABLE `coachs` (
  `id` int(11) NOT NULL,
  `nom` text,
  `prenom` text
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `coachs`
--

INSERT INTO `coachs` (`id`, `nom`, `prenom`) VALUES
(1, 'Dupont', 'Jean'),

-- --------------------------------------------------------

--
-- Structure de la table `lieux`
--

CREATE TABLE `lieux` (
  `id` int(11) NOT NULL,
  `nom` text,
  `adresse` text,
  `cp` text,
  `ville` text
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `lieux`
--

INSERT INTO `lieux` (`id`, `nom`, `adresse`, `cp`, `ville`) VALUES
(1, 'Gymnase Municipal', '5 rue du Stade', '75001', 'Paris'),
(2, 'Piscine Olympique', '10 boulevard des Sports', '75015', 'Paris'),
(3, 'Stade de Foot', '1 allee du Terrain', '93200', 'Saint-Denis'),
(4, 'Salle de Yoga', '3 impasse Zen', '44000', 'Nantes');

-- --------------------------------------------------------

--
-- Structure de la table `planifications`
--

CREATE TABLE `planifications` (
  `id` int(11) NOT NULL,
  `jour` text,
  `horaire` text,
  `id_activite` int(11) DEFAULT NULL,
  `id_coach` int(11) DEFAULT NULL,
  `id_lieu` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `planifications`
--

INSERT INTO `planifications` (`id`, `jour`, `horaire`, `id_activite`, `id_coach`, `id_lieu`) VALUES
(1, 'lundi', '18h-20h', 1, 1, 1),
(2, 'mardi', '12h-13h', 2, 2, 2),
(3, 'mercredi', '14h-16h', 3, 3, 3),
(4, 'jeudi', '19h-20h', 4, 4, 4),
(5, 'vendredi', '18h-20h', 1, 1, 1),
(6, 'samedi', '10h-11h', 2, 2, 2),
(7, 'dimanche', '9h-12h', 3, 1, 3);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mot_de_passe` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `utilisateurs`
--


--
-- Index pour les tables déchargées
--

--
-- Index pour la table `activites`
--
ALTER TABLE `activites`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `coachs`
--
ALTER TABLE `coachs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `lieux`
--
ALTER TABLE `lieux`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `planifications`
--
ALTER TABLE `planifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_activite` (`id_activite`),
  ADD KEY `id_coach` (`id_coach`),
  ADD KEY `id_lieu` (`id_lieu`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `activites`
--
ALTER TABLE `activites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `coachs`
--
ALTER TABLE `coachs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `lieux`
--
ALTER TABLE `lieux`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `planifications`
--
ALTER TABLE `planifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
