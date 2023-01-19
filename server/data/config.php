<?php

    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
    $baseName = "http://localhost/final-project-beavers/server/services/";
    $hostName = "localhost";
    $userName = "root";
    $password = "";
    $dbName = "beavers";  
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 

?>