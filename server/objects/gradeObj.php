<?php
class gradeObj{
    private $grade_id;
    private $classwork;
    private $evaluation;
    private $student_id;
    private $teacher_id;
    private $course_id;
    private $mark;
    private $mark_max;
    private $mark_date;
    private $feedback;
    function __construct($grade_id,$classwork,$evaluation,$student_id,$teacher_id,$course_id,$mark,$mark_max,$mark_date,$feedback){
        $this->grade_id = $grade_id;
        $this->classwork = $classwork;
        $this->evaluation = $evaluation;
        $this->student_id = $student_id;
        $this->teacher_id = $teacher_id;
        $this->course_id = $course_id;
        $this->mark = $mark;
        $this->mark_max = $mark_max;
        $this->mark_date = $mark_date;
        $this->feedback = $feedback;
    }
    function toInsert(){
        return ["'$this->classwork'","'$this->evaluation'",$this->student_id,$this->teacher_id,$this->course_id,$this->mark,$this->mark_max,"'$this->mark_date'","'$this->feedback'"];
    }
}
?>