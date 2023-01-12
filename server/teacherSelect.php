<?php
  include './data/config.php';
  include './services/dbservices.php';

  $dbSrv = new dbServices($hostName,$userName,$password,$dbName);

  if($dbcon = $dbSrv->dbConnect()){
  }else{
    echo "DB connection problem";
  }
?>

<?php

  // if(teacher login) { changing query}
  $sqlCommand = "SELECT `teacher_id`, `user_name`, `email`, `course_id`, `salary`, `address`, `birthday` FROM `teacher_tb`WHERE teacher_tb.status = 1";
  
  // run SQL statement
  $result = $dbcon->query($sqlCommand);

  // die if SQL statement failed
  if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
  }
  
  $id = '';
  if ($_SERVER["REQUEST_METHOD"] == 'GET') {

    $rows = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($rows);

    // if (!$id) echo '[';
    //   for ($i=0 ; $i < $result->num_rows ; $i++) {
    //   echo ($i>0?',':'').json_encode($result->fetch_assoc());
    // }
    // if (!$id) echo ']';

  }
  else {
    echo mysqli_affected_rows($con);
  }

  $dbSrv->closeDb();
?>