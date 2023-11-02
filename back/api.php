<?php

require 'db.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://mycoach.androne.dev');
header('Access-Control-Allow-Credentials: true');
session_start();


$est_connecte = isset($_SESSION['user']);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

  if ($_GET['resource'] === 'activities') {
    if (!$est_connecte) {
      http_response_code(401);
      echo json_encode(['error' => 'Non autorisé']);
      exit;
    }
    $data = query("SELECT * FROM activites INNER JOIN planifications ON planifications.id_activite = activites.id INNER JOIN lieux ON lieux.id = planifications.id_lieu");
    //  retourner les données en JSON
    echo json_encode($data->fetchAll(PDO::FETCH_ASSOC));

  } 
}

?>