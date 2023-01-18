<?php
  include '../../services/dbservices.php';
  
  if ($_SERVER["REQUEST_METHOD"] == 'GET') {
    $dbSrv = new dbServices($hostName,$userName,$password,$dbName);
    if($dbcon = $dbSrv->dbConnect()){
      $sqlCommand = "SELECT admin_id, user_name, email, birthday , address FROM `admin_tb` WHERE `status`=1";
      $result = $dbcon->query($sqlCommand);
      if (!$result) {
        http_response_code(404);
        die(mysqli_error($con));
      }
      $rows = $result->fetch_all(MYSQLI_ASSOC);
      echo json_encode($rows);
    }else{
      echo "DB connection problem";
    }
    $dbSrv->closeDb();
}
?>