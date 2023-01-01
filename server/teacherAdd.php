<?php
include './data/config.php';
include './services/dbservices.php';
include './objects/teacherObj.php';

$dbSrv = new dbServices($hostName,$userName,$password,$dbName);

if ($_SERVER['REQUEST_METHOD']=='POST') {

    $teacher_id = $_POST['teacher_id'];
    $user_name = $_POST['user_name'];
    $password = password_hash($_POST['password'],PASSWORD_DEFAULT);
    $email = $_POST['email'];
    $course_id = $_POST['course_id'];
    $salary = $_POST['salary'];
    $address = $_POST['address'];
    $birthday = $_POST['birthday'];

    $newTeacher = new teacherObj(null,$user_name,$password,$email,$course_id,$salary,$address, $birthday);
    $valuesArray = $newTeacher->toInsert();
    $fieldArray = ["user_name","password","email","course_id","salary","address", "birthday"];
    // print_r($valuesArray); // Array ( [0] => 31 [1] => fullname [2] => asdf [3] => asdf@google.com [4] => 3 [5] => 3000 [6] => 12 Qwe Asdxc [7] => 1965-9-26 )

    if($dbSrv->dbConnect()){
        if($dbSrv->insert('teacher_tb',$valuesArray,$fieldArray)){
            // print_r();
            // "added";
            header("Location: ".$baseName."teacherMngPage.php?msg=1");
            exit();
        }
    } else{
        echo "DB connection problem";
    }
    // "not added";
    header("Location: ".$baseName."teacherMngPage.php?msg=2");
    exit();

}

?>