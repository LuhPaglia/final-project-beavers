<?php
include '../../services/dbservices.php';
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
            header("Location: adminPage.php?msg=1");
            exit();
        }
    } else{
        echo "DB connection problem";
    }
    header("Location: adminPage.php?msg=2");
    exit();

}

?>