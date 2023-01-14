<?php
  include '../../services/dbservices.php';
  
  if ($_SERVER["REQUEST_METHOD"] == 'GET') {

    $dbSrv = new dbServices($hostName,$userName,$password,$dbName);

    if($dbcon = $dbSrv->dbConnect()){
      
      // if(teacher login) { changing query}
      $sqlCommand = "SELECT `teacher_id`, `user_name`, `email`, `course_id`, `salary`, `address`, `birthday` FROM `teacher_tb`WHERE teacher_tb.status = 1";
      
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