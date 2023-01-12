<?php
class adminObj{
    private $admin_id;
    private $user_name;
    private $password;
    private $email;
    private $profile_url;
    private $birthday;
    private $address;
    function __construct($admin_id, $user_name, $password, $email, $profile_url, $birthday, $address){
        $this->admin_id = $admin_id;
        $this->user_name = $user_name;
        $this->password = $password;
        $this->email = $email;
        $this->profile_url = $profile_url;
        $this->birthday = $birthday;
        $this->address = $address;
    }
    function toInsert(){
        return ["'$this->user_name'", "'$this->password'", "'$this->email'", "'$this->profile_url'", "'$this->birthday'", "'$this->address'"];
    }
}
?>