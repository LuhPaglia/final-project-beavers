<?php
class gradeObj{
    private $grade_id;
    private $classwork;
    private $student_id;
    private $teacher_id;
    private $course_id;
    private $mark;
    private $mark_date;
    private $feedback;
    function __construct($grade_id,$classwork,$student_id,$teacher_id,$course_id,$mark,$mark_date,$feedback){
        $this->grade_id = $grade_id;
        $this->classwork = $classwork;
        $this->student_id = $student_id;
        $this->teacher_id = $teacher_id;
        $this->course_id = $course_id;
        $this->mark = $mark;
        $this->mark_date = $mark_date;
        $this->feedback = $feedback;
    }
    function toInsert(){
        return [$this->grade_id, $this->classwork,$this->student_id,$this->teacher_id,$this->course_id,$this->mark,$this->mark_date,$this->feedback];
    }
}
?>