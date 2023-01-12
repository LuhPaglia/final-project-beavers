<?php
class adminObj{
    private $admin_id;
    private $user_name;
    private $password;
    private $email;
    private $birthday;
    private $address;
    function __construct($admin_id, $user_name, $password, $email, $birthday, $address){
        $this->admin_id = $admin_id;
        $this->user_name = $user_name;
        $this->password = $password;
        $this->email = $email;
        $this->birthday = $birthday;
        $this->address = $address;
    }
    function toInsert(){
        return ["'$this->user_name'", "'$this->password'", "'$this->email'", "'$this->birthday'", "'$this->address'"];
    }
}
?>