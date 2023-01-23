<?php
include '../../services/dbservices.php';

$dbSrv = new dbServices($hostName,$userName,$password,$dbName);

if ($_SERVER['REQUEST_METHOD']=='POST') {

    $id = $_POST['id'];
    $course_name = $_POST['course_name'];
    $description = $_POST['description'];

    $sqlCommand = "UPDATE `course_tb` SET `course_name`='$course_name',`description`='$description' WHERE course_tb.course_id=$id";

    if($dbcon = $dbSrv->dbConnect()){
        if($dbcon->query($sqlCommand) === TRUE){
            echo $sqlCommand;
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