<?php
include '../../services/dbservices.php';

$dbSrv = new dbServices($hostName,$userName,$password,$dbName);

if ($_SERVER['REQUEST_METHOD']=='POST') {

    $id = $_POST['id'];
    $email = $_POST['email'];
    $user_name = $_POST['user_name'];
    $password = password_hash($_POST['password'],PASSWORD_DEFAULT) ;
    $address = $_POST['address'];
    $birthday = $_POST['birthday'];

    $sqlCommand = "UPDATE `admin_tb` SET `user_name`='$user_name',`email`='$email',`address`='$address',`birthday`='$birthday' WHERE admin_tb.admin_id=$id";

    if($dbcon = $dbSrv->dbConnect()){
        if($dbcon->query($sqlCommand) === TRUE){
            echo $sqlCommand;
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