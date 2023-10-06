<?php

include 'db.php';
header('Content-Type: application/json');
// allow cors all
header('Access-Control-Allow-Origin: *');
// Gestion des erreurs    
try {

  // Vérification de la méthode
  if($_SERVER['REQUEST_METHOD'] !== 'POST') {
    throw new Exception('Méthode non autorisée');
  }
  session_start();

  // Traitements selon l'action
  switch($_POST['action']) {

    case 'register':
      // Validation et hash du mot de passe
      if(strlen($_POST['password']) < 8) {
        throw new Exception('Mot de passe trop court');  
      }

      // verification de l'email
        if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            throw new Exception('Email invalide');
        }

        // verification du pseudo
        if(strlen($_POST['nom']) < 3) {
            throw new Exception('Pseudo trop court');
        }

        // on verifie si l'email existe deja
        $query = $db->prepare('SELECT * FROM utilisateurs WHERE email = ?');
        $query->execute([$_POST['email']]);
        $user = $query->fetch();
        if($user) {
            throw new Exception('Email déjà utilisé');
        }


      $passwordHash = password_hash($_POST['password'], PASSWORD_DEFAULT);
      
      // Requête préparée  
      $query = $db->prepare('INSERT INTO utilisateurs SET nom = ?, email = ?, mot_de_passe = ?'); 
      $query->execute([$_POST["nom"], $_POST['email'], $passwordHash]);
      
      // Vérification et réponse    
      if($query->rowCount() > 0) {
        $output['success'] = true;
        
        $_SESSION['user'] = [
          'id' => $db->lastInsertId(),
          'nom' => $_POST['nom'],
          'email' => $_POST['email']
        ];

        $output['token'] = session_id();

      } else {
        throw new Exception('Échec de l\'inscription');
      }
      break;
      
    case 'login':
      // Requête préparée
      $query = $db->prepare('SELECT * FROM utilisateurs WHERE email = ?');
      $query->execute([$_POST['email']]);
      $user = $query->fetch();
      
      // Vérification du mot de passe
      if($user && password_verify($_POST['password'], $user['mot_de_passe'])) {
        $output['success'] = true;
        $_SESSION['user'] = [
          'id' => $user['id'],
          'nom' => $user['nom'],
          'email' => $user['email']
        ];
        $output['token'] = session_id();
        $output['user'] = $_SESSION['user'];
      } else {  
        throw new Exception('Identifiants incorrects');
      }
      break;
  }

  // Retour JSON  
  echo json_encode($output);  

} catch (Exception $e) {
  // Gestion des erreurs
  http_response_code(200);
  echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}