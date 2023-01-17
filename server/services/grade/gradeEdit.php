<?php
include '../../services/dbservices.php';

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

     // if(teacher login) { changing query}
     $sqlCommand = "UPDATE `grade_tb` SET `grade_id`='$grade_id',`classwork`='$classwork',`$teacher_id`=$teacher_id,`course_id`='$course_id',`mark`='$mark',`mark_date`='$mark_date',`feedback`='$feedback' WHERE grade_tb.student_id=$student_id";

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
// }

?>