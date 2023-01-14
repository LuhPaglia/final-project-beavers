<?php
include './data/config.php';
include './services/dbservices.php';
include './objects/teacherObj.php';

$dbSrv = new dbServices($hostName,$userName,$password,$dbName);

if ($_SERVER['REQUEST_METHOD']=='POST') {

    $teacher_id = $_POST['teacher_id'];

    $user_name = $_POST['user_name'];
    $email = $_POST['email'];
    $course_id = $_POST['course_id'];
    $salary = $_POST['salary'];
    $address = $_POST['address'];
    $birthday = $_POST['birthday'];

     // if(teacher login) { changing query}
     $sqlCommand = "UPDATE `teacher_tb` SET `user_name`='$user_name',`email`='$email',`course_id`=$course_id,`salary`=$salary,`address`='$address',`birthday`='$birthday' WHERE teacher_tb.teacher_id=$teacher_id";

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