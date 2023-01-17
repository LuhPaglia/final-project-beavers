<?php
include '../../services/dbservices.php';

$dbSrv = new dbServices($hostName,$userName,$password,$dbName);

if ($_SERVER['REQUEST_METHOD']=='POST') {

    $grade_id = $_POST['id'];

    $classwork = $_POST['classwork'];
    $evaluation = $_POST['evaluation'];
    $student_id = $_POST['student_id'];
    $teacher_id = $_POST['teacher_id'];
    $course_id = $_POST['course_id'];
    $mark = $_POST['mark'];
    $mark_max = $_POST['mark_max'];
    $mark_date = $_POST['mark_date'];
    $feedback = $_POST['feedback'];

    $sqlCommand = "UPDATE `grade_tb` SET `classwork`='$classwork',`evaluation`='$evaluation',`student_id`='$student_id',`teacher_id`=$teacher_id,`course_id`='$course_id',`mark`='$mark', `mark_max`='$mark_max', `mark_date`='$mark_date', `feedback`='$feedback' WHERE grade_tb.grade_id=$grade_id";

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