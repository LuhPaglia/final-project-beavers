<?php
include '../../services/dbservices.php';
include '../../objects/gradeObj.php';

$dbSrv = new dbServices($hostName,$userName,$password,$dbName);

if ($_SERVER['REQUEST_METHOD']=='POST') {

    $grade_id = $_POST['id'];

     // if(teacher login) { changing query}
     $sqlCommand = "UPDATE `grade_tb` SET `status`=0 WHERE grade_tb.grade_id=$grade_id";

     echo "delete ID = [$grade_id]";
      
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