<?php
class courseObj{
    private $course_id;
    private $course_name;
    private $description;
    function __construct($course_id,$course_name,$description){
        $this->course_id = $course_id;
        $this->course_name = $course_name;
        $this->description = $description;
    }
    function toInsert(){
        return ["'$this->course_name'", "'$this->description'"];
    }
}
?>