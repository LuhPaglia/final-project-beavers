<?php
    include '../../data/config.php';
    include '../dbservices.php';
    include '../objects/adminObj.php';
    include '../objects/teacherObj.php';
    include '../objects/studentObj.php';
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Methods:POST');
    header('Access-Control-Allow-Header:Content-Type');
    header('Content-Type:application/json');
    
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $role = $_POST['role'];
        $email = $_POST['email'];
        $pass = $_POST['pass'];
        
        $dbSrv = new dbServices($hostName,$userName,$password,$dbName);
        if($dbcon = $dbSrv->dbConnect()){
            if($role == "admin"){
                $select = "SELECT * FROM admin_tb WHERE email='$email'";
                $result = $dbcon->query($select);
                if(($user = $result->fetch_assoc()) != null) {
                    if(password_verify($pass,$user['password'])){
                        echo $user['admin_id'];
                    }else{
                        echo "User not found";
                    }
                }else{
                    echo "User not found";
                }
            }
            else if($role == "teacher"){
                $select = "SELECT * FROM teacher_tb WHERE email='$email'";
                $result = $dbcon->query($select);
                if(($user = $result->fetch_assoc()) != null) {
                    if(password_verify($pass,$user['password'])){
                        echo $user['teacher_id'];
                    }else{
                        echo "User not found";
                    }
                }else{
                    echo "User not found";
                }
            }
            else if($role == "student"){
                $select = "SELECT * FROM student_tb WHERE email='$email'";
                $result = $dbcon->query($select);
                if(($user = $result->fetch_assoc()) != null) {
                    if(password_verify($pass,$user['password'])){
                        echo $user['student_id'];
                    }else{
                        echo "User not found";
                    }
                }else{
                    echo "User not found";
                }
            }

        } else {
            echo "DB connection problem";
        }

        $dbcon->close();

    }
?>