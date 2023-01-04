<?php
include './data/config.php';
include './services/dbservices.php';
include './objects/teacherObj.php';

$dbSrv = new dbServices($hostName,$userName,$password,$dbName);

if ($_SERVER['REQUEST_METHOD']=='POST') {

    $json = file_get_contents('php://input');
    $form = json_decode($json,true);

    $user_name = $form['username'];
    $password = password_hash($form['password'],PASSWORD_DEFAULT);
    $email = $form['email'];
    $course_id = $form['courseID'];
    $salary = $form['salary'];
    $address = $form['address'];
    $birthday = $form['birthday'];

    $newTeacher = new teacherObj(null,$user_name,$password,$email,$course_id,$salary,$address,$birthday);
    $valuesArray = $newTeacher->toInsert();
    $fieldArray = ["user_name","password","email","course_id","salary","address", "birthday"];
    print_r($valuesArray); // Array ( [0] => 31 [1] => fullname [2] => asdf [3] => asdf@google.com [4] => 3 [5] => 3000 [6] => 12 Qwe Asdxc [7] => 1965-9-26 )

    if($dbSrv->dbConnect()){
        if($dbSrv->insert('teacher_tb',$valuesArray,$fieldArray)){
            // print_r();
            // "added";
            // header("Location: http://localhost:3000/teacher");
            // exit();
        }
    } else{
        echo "DB connection problem";
    }
    // "not added";

}

?>