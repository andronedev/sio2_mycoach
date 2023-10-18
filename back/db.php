<?php

/**
 * Établit une connexion à la base de données et fournit une fonction pour exécuter des requêtes.
 *
 * @param string $user Le nom d'utilisateur pour la connexion à la base de données.
 * @param string $pass Le mot de passe pour la connexion à la base de données.
 * @param string $dbname Le nom de la base de données à laquelle se connecter.
 * @return object Retourne un objet PDO représentant la connexion à la base de données.
 */
$user = 'root';
$pass = '';
$dbname = 'mycoach';

try {
  $db = new PDO('mysql:host=localhost;dbname=' . $dbname . ';charset=utf8', $user, $pass);
} catch (Exception $e) {
  die('Erreur : ' . $e->getMessage());
}

/**
 * Exécute une requête SQL sur la base de données connectée.
 *
 * @param string $sql La requête SQL à exécuter.
 * @return object Retourne un objet PDOStatement représentant le résultat de la requête.
 */
function query($sql) {
  global $db;
  $query = $db->prepare($sql);
  $query->execute();
  return $query;
}

?>