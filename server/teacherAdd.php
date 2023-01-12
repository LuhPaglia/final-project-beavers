<?php
include './data/config.php';
include './services/dbservices.php';
include './objects/teacherObj.php';

$dbSrv = new dbServices($hostName,$userName,$password,$dbName);

if ($_SERVER['REQUEST_METHOD']=='POST') {

    $user_name = $_POST['username'];
    $password = password_hash($_POST['password'],PASSWORD_DEFAULT);
    $email = $_POST['email'];
    $course_id = $_POST['courseID'];
    $salary = $_POST['salary'];
    $address = $_POST['address'];
    $birthday = $_POST['birthday'];

    $newTeacher = new teacherObj(null,$user_name,$password,$email,$course_id,$salary,$address,$birthday);
    $valuesArray = $newTeacher->toInsert();
    $fieldArray = ["user_name","password","email","course_id","salary","address", "birthday"];
    print_r($valuesArray);

    if($dbSrv->dbConnect()){
        if($dbSrv->insert('teacher_tb',$valuesArray,$fieldArray)){
        }
    } else{
        echo "DB connection problem";
    }
    $dbSrv->closeDb();
}

?>