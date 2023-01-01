<?php
include './data/config.php';
include './services/dbservices.php';
include './objects/adminObj.php';

$dbSrv = new dbServices($hostName,$userName,$password,$dbName);

if ($_SERVER['REQUEST_METHOD']=='POST') {
    $email = $_POST['email'];
    $user_name = $_POST['user_name'];
    $password = password_hash($_POST['password'],PASSWORD_DEFAULT) ;
    $address = $_POST['address'];
    $birthday = $_POST['birthday'];
    $newAdmin = new adminObj(null, $user_name,$password, $email, 'no', $birthday, $address);
    $valuesArray = $newAdmin->toInsert();
    $fieldArray = ['user_name','password','email','profile_url','birthday','address'];
    if($dbSrv->dbConnect()){
        if($dbSrv->insert('admin_tb',$valuesArray,$fieldArray)){
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