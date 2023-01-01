<?php
include './data/config.php';
include './services/dbservices.php';
include './objects/teacherObj.php';

$dbSrv = new dbServices($hostName,$userName,$password,$dbName);

if ($_SERVER['REQUEST_METHOD']=='POST') {

    json_decode($_POST['form']);

    $teacher_id = $_POST['form']['teacherID'];
    $user_name = $_POST['form']['username'];
    $password = password_hash($_POST['form']['password'],PASSWORD_DEFAULT);
    $email = $_POST['form']['email'];
    $course_id = $_POST['form']['courseID'];
    $salary = $_POST['form']['salary'];
    $address = $_POST['form']['address'];
    $birthday = $_POST['form']['birthday'];

    $newTeacher = new teacherObj(null,$user_name,$password,$email,$course_id,$salary,$address, $birthday);
    $valuesArray = $newTeacher->toInsert();
    $fieldArray = ["user_name","password","email","course_id","salary","address", "birthday"];
    // print_r($valuesArray); // Array ( [0] => 31 [1] => fullname [2] => asdf [3] => asdf@google.com [4] => 3 [5] => 3000 [6] => 12 Qwe Asdxc [7] => 1965-9-26 )

    if($dbSrv->dbConnect()){
        if($dbSrv->insert('teacher_tb',$valuesArray,$fieldArray)){
            // print_r();
            // "added";
            header("Location: http://localhost:3000/teacher");
            exit();
        }
    } else{
        echo "DB connection problem";
    }
    // "not added";

}

?>