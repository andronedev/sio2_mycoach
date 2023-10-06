<?php 

include 'db.php';

header('Content-Type: application/json');
// allow cors allow http://127.0.0.1:3000/
header('Access-Control-Allow-Origin: http://127.0.0.1:3000');
//Header set Access-Control-Allow-Credentials true
header('Access-Control-Allow-Credentials: true');

// Gestion des erreurs
try {

  // Vérification de la méthode
  if($_SERVER['REQUEST_METHOD'] !== 'GET') {
    throw new Exception('Méthode non autorisée');
  }

    session_start();

    // Traitements selon l'action

    switch($_GET['action']) {
        case "info" :
            if(!isset($_SESSION['user'])) {
                throw new Exception('Vous devez être connecté');
            }
            $output['success'] = true;
            $output['user'] = $_SESSION['user'];
            break;
        case "logout" :
            session_destroy();
            $output['success'] = true;
            break;
    }
    echo json_encode($output);
} catch(Exception $e) {
  $output['error'] = $e->getMessage();
}