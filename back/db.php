<?php

$user = 'root';
$pass = '';
$dbname = 'mycoach';

try {
  $db = new PDO('mysql:host=localhost;dbname=' . $dbname . ';charset=utf8', $user, $pass);
} catch (Exception $e) {
  die('Erreur : ' . $e->getMessage());
}


function query($sql) {
  global $db;
  $query = $db->prepare($sql);
  $query->execute();
  return $query;
}

?>