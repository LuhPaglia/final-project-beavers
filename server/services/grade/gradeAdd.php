<?php
include '../../services/dbservices.php';
include '../../objects/gradeObj.php';

$dbSrv = new dbServices($hostName,$userName,$password,$dbName);

// if ($_SERVER['REQUEST_METHOD']=='POST') {

    $grade_id = $_POST['grade_id'];
    $classwork = $_POST['classwork'];
    $student_id = $_POST['student_id'];
    $teacher_id = $_POST['teacher_id'];
    $course_id = $_POST['course_id'];
    $mark = $_POST['mark'];
    $mark_date = $_POST['mark_date'];
    $feedback = $_POST['feedback'];

    $newGrade = new gradeObj(null,$grade_id,$classwork,$student_id,$teacher_id,$course_id,$mark,$mark_date,$feedback );
    $valuesArray = $newGrade->toInsert();
    $fieldArray = ["grade_id","classwork","student_id","teacher_id","course_id","mark","mark_date","feedback"];
    print_r($valuesArray); // LOG

    if($dbSrv->dbConnect()){
        if($dbSrv->insert('grade_tb',$valuesArray,$fieldArray)){
            echo "1";
        }
        else {
            echo "0";
        }
    } else{
        echo "-1";
    }
    $dbSrv->closeDb();
// }

?>