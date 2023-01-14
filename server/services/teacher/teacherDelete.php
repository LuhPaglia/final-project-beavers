<?php
include '../../services/dbservices.php';

$dbSrv = new dbServices($hostName,$userName,$password,$dbName);

if ($_SERVER['REQUEST_METHOD']=='POST') {

    $teacher_id = $_POST['id'];

     // if(teacher login) { changing query}
     $sqlCommand = "UPDATE `teacher_tb` SET `status`=0 WHERE teacher_tb.teacher_id=$teacher_id";

     echo "delete ID = [$teacher_id]";
      
    if($dbcon = $dbSrv->dbConnect()){
        if($dbcon->query($sqlCommand) === TRUE){
            echo "1";
        }
        else {
            echo "0";
        }
    } else{
        echo "-1";
    }
    $dbSrv->closeDb();
}

?>