<?php
  include '../../services/dbservices.php';
  
  if ($_SERVER["REQUEST_METHOD"] == 'GET') {

    $dbSrv = new dbServices($hostName,$userName,$password,$dbName);

    if($dbcon = $dbSrv->dbConnect()){
      
      // if(teacher login) { changing query}
      $sqlCommand =  "SELECT `student_id`, `email`, `user_name`, student_tb.course_id, course_tb.course_name, `teacher_id`, `address`, `birthday` FROM student_tb INNER JOIN course_tb ON student_tb.course_id=course_tb.course_id WHERE student_tb.status = 1 ORDER BY `student_id`";
      
      // run SQL statement
      $result = $dbcon->query($sqlCommand);
  
      // die if SQL statement failed...??
      if (!$result) {
        http_response_code(404);
        die(mysqli_error($con));
      }

      $rows = $result->fetch_all(MYSQLI_ASSOC);

      // return query result
      echo json_encode($rows);
  
    }else{
      echo "DB connection problem";
    }

    $dbSrv->closeDb();
  }

?>