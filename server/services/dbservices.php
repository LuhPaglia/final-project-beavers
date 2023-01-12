<?php include './data/config.php';
class dbServices{
    private $hostName;
    private $userName;
    private $password;
    private $dbName; 
    public $dbcon; // $dbcon should be public

    function __construct($hostName,$userName,$password,$dbName)
    {
        $this->hostName = $hostName;
        $this->userName = $userName;
        $this->password = $password;
        $this->dbName = $dbName;
    }
    function dbConnect(){
        $dbcon = new mysqli($this->hostName,$this->userName,$this->password,$this->dbName);
        if($dbcon->connect_error){
            return false;
        }
        $this->dbcon = $dbcon;
        return $dbcon;
    }
    function closeDb(){
        $this->dbcon->close();
    }
    function insert($tbName,$valuesArray,$fieldArray=null){
        if($fieldArray!=null){
            $fields = "(".implode(',',$fieldArray).")";
        }else{
            $fields = '';
        }
        $values = implode(',',$valuesArray);
        $insertCmd = "INSERT INTO $tbName $fields VALUES ($values)";
        echo $insertCmd;
        if($this->dbcon->query($insertCmd) === TRUE){
            return true;
        }
        return false;
    }
    function selectAll($tbName){
        $sqlCommand = "SELECT * FROM $tbName";
        $result = $this->dbcon->query($sqlCommand);
        return $result;
    }

}
?>