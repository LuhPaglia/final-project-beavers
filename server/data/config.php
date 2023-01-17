<?php

    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: POST");
    // header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
<<<<<<< HEAD
    $baseName = "http://localhost/final-project-beavers/server/services/";
=======
    $baseName = "http://localhost/final-project-beavers/server/";
>>>>>>> 42be27ac10addf7b419154493e4062b6f314e3d4
    $hostName = "localhost";
    $userName = "root";
    $password = "";
    $dbName = "beavers";  
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 

?>