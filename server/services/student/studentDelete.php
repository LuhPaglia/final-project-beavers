<?php
include '../../services/dbservices.php';

$dbSrv = new dbServices($hostName,$userName,$password,$dbName);

if ($_SERVER['REQUEST_METHOD']=='POST') {

    $student_id = $_POST['id'];

     // if(teacher login) { changing query}
     $sqlCommand = "UPDATE `student_tb` SET `status`=0 WHERE student_tb.student_id=$student_id";

     echo "delete ID = [$student_id]";
      
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