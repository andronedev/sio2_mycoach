<?php

require 'db.php';

header('Access-Control-Allow-Origin: *'); 
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

  if ($_GET['resource'] === 'activities') {
    
    $data = query("SELECT * FROM Activites INNER JOIN planifications ON planifications.id_activite = Activites.id");
    // send data as JSON
    echo json_encode($data->fetchAll(PDO::FETCH_ASSOC));

  } else if ($_GET['resource'] === 'coaches') {

    // Récupérer les coachs 
    // Envoyer au format JSON

  } 

}

?>