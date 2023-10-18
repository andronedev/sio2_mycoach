<?php

include 'db.php';

/**
 * Définit les en-têtes de réponse HTTP pour autoriser les requêtes CORS depuis http://127.0.0.1:3000/.
 * Le type de contenu de la réponse est défini comme JSON.
 * Les requêtes avec des informations d'authentification sont autorisées.
 */
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://127.0.0.1:3000');
header('Access-Control-Allow-Credentials: true');

// Gestion des erreurs
try {

  // Vérification de la méthode
  if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    throw new Exception('Méthode non autorisée');
  }

  session_start();

  // Traitements selon l'action
  /**
   * Gère les requêtes liées à l'utilisateur connecté.
   * 
   * Les actions disponibles sont :
   * - "info" : renvoie les informations de l'utilisateur connecté
   * - "logout" : déconnecte l'utilisateur
   * 
   * @throws Exception si l'utilisateur n'est pas connecté lors de l'appel de l'action "info"
   * 
   * @return array un tableau contenant les résultats de l'action demandée
   */
  switch ($_GET['action']) {
    case "info":
      if (!isset($_SESSION['user'])) {
        throw new Exception('Vous devez être connecté');
      }
      $output['success'] = true;
      $output['user'] = $_SESSION['user'];
      break;
    case "logout":
      session_destroy();
      $output['success'] = true;
      break;
  }
  echo json_encode($output);
} catch (Exception $e) {
  $output['error'] = $e->getMessage();
}
