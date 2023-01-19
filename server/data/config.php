<?php

    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
    $baseName = "http://localhost/PHP/final-project-beavers/server/services/";
    $hostName = "localhost:3306";
    $userName = "root";
    $password = "root1234";
    $dbName = "beavers";  
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 

?>