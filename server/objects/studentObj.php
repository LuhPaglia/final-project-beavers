<?php
class studentObj{
    private $student_id;
    private $email;
    private $user_name;
    private $password;
    private $course_id;
    private $teacher_id;
    private $profile_url;
    private $address;
    private $birthday;
    function __construct($student_id,$user_name,$password,$email,$course_id,$teacher_id,$profile_url, $address,$birthday){
        $this->student_id = $student_id;
        $this->user_name = $user_name;
        $this->password = $password;
        $this->email = $email;
        $this->course_id = $course_id;
        $this->teacher_id = $teacher_id;
        $this->profile_url = $profile_url;
        $this->address = $address;
        $this->birthday = $birthday;
    }
    function toInsert(){
        return ["'$this->user_name'","'$this->password'","'$this->email'",$this->course_id,$this->teacher_id,"'$this->profile_url'","'$this->address'","'$this->birthday'"];
    }
}
?>