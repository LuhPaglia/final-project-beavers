<?php
include '../dbservices.php';
include '../../objects/courseObj.php';

$dbSrv = new dbServices($hostName,$userName,$password,$dbName);

if ($_SERVER['REQUEST_METHOD']=='POST') {
    $course_name = $_POST['course_name'];
    $description = $_POST['description'];

    $newCourse = new courseObj(null, $course_name,$description);
    $valuesArray = $newCourse->toInsert();
    $fieldArray = ['course_name','description'];
    if($dbSrv->dbConnect()){
        if($dbSrv->insert('course_tb',$valuesArray,$fieldArray)){
            echo "1";
        }else{
            echo "0";
        }
    } else{
        echo "-1";
    }
    $dbSrv->closeDb();
}

?>