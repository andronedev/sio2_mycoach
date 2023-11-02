<?php

require 'db.php';

header('Access-Control-Allow-Origin: *'); 
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

  if ($_GET['resource'] === 'activities') {
    
    $data = query("SELECT * FROM activites INNER JOIN planifications ON planifications.id_activite = activites.id INNER JOIN lieux ON lieux.id = planifications.id_lieu");
    //  retourner les données en JSON
    echo json_encode($data->fetchAll(PDO::FETCH_ASSOC));

  } 
}

?>