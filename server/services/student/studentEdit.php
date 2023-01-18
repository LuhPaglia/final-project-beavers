<?php
include '../../services/dbservices.php';

$dbSrv = new dbServices($hostName,$userName,$password,$dbName);

if ($_SERVER['REQUEST_METHOD']=='POST') {

    $student_id = $_POST['id'];

    $email = $_POST['email'];
    $user_name = $_POST['user_name'];
    $course_id = $_POST['course_id'];
    $teacher_id = $_POST['teacher_id'];
    $address = $_POST['address'];
    $birthday = $_POST['birthday'];

     // if(teacher login) { changing query}
     $sqlCommand = "UPDATE `student_tb` SET `user_name`='$user_name',`email`='$email',`course_id`=$course_id,`teacher_id`=$teacher_id,`address`='$address',`birthday`='$birthday' WHERE student_tb.student_id=$student_id";

     echo $sqlCommand;
      
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