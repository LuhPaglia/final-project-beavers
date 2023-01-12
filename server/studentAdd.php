<?php
include './data/config.php';
include './services/dbservices.php';
include './objects/studentObj.php';

$dbSrv = new dbServices($hostName,$userName,$password,$dbName);

if ($_SERVER['REQUEST_METHOD']=='POST') {

    $email = $_POST['email'];
    $user_name = $_POST['user_name'];
    $password = password_hash($_POST['password'],PASSWORD_DEFAULT) ;
    $course_id = $_POST['course_id'];
    $teacher_id = $_POST['teacher_id'];
    $address = $_POST['address'];
    $birthday = $_POST['birthday'];

    $newStu = new studentObj(null,$user_name,$password,$email,$course_id,$teacher_id,$address,$birthday);
    $valuesArray = $newStu->toInsert();
    $fieldArray = ['user_name','password','email','course_id','teacher_id','address','birthday'];

    if($dbSrv->dbConnect()){
        if($dbSrv->insert('student_tb',$valuesArray,$fieldArray)){
            // "added";
            header("Location: studentMng.php?msg=1");
            exit();
        }
    } else{
        echo "DB connection problem";
    }
    // "not added";
    header("Location: studentMng.php?msg=2");
    exit();

}

?>