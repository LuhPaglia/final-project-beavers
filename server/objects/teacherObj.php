<?php
class teacherObj{
    private $teacher_id;
    private $user_name;
    private $password;
    private $email;
    private $course_id;
    private $salary;
    private $address;
    private $birthday;
    function __construct($teacher_id,$user_name,$password,$email,$course_id,$salary,$address,$birthday){
        $this->teacher_id = $teacher_id;
        $this->user_name = $user_name;
        $this->password = $password;
        $this->email = $email;
        $this->course_id = $course_id;
        $this->salary = $salary;
        $this->address = $address;
        $this->birthday = $birthday;
    }
    function toInsert(){
        return ["'$this->user_name'","'$this->password'","'$this->email'",$this->course_id,$this->salary,"'$this->address'","'$this->birthday'"];
    }
}
?>