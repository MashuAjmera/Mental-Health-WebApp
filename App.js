personalityTest{    //group of classes that deals with the monthly/one time test containings questions that infer the personality of the user 
    describe();    //justforcontent
    questions{       
        add();
        review();
        remove();
        display();
        update();
    }
    personality{
        getanswers();
        calcpersonality();
        setpersonality();
        display();
        update();
    }
}

questionairre{    //group of classes that deals with the weekly questionnaire that assesses mood/stress levels
    questions{       
        add();
        review();
        remove();
        display();
        update();
    }
}


user{ //group of classes                                                          
    userDetails{
        getUserDetails(){
            name
        }
        SetUserDetails()
        getUserType(){
            type="free"
        }
    }
    userProgress{
        get();
        set();
    }
}

courses{  //this group of classes deals with the courses open to different users
    courseDetails{
        getCourseDetails(){
            name
        }
        SetCourseDetails()
        modifyCourseDetails()
        getCourseType(){
            type="free/premium"
        }
    }
    courseContent{

    }

}

tasks{  //this group of classes deals with the daily tasks that will be given to all customers 
    getTask();
    displayTask();
    getCompleteList();
    addTask();
    modifyTask();
    deleteTask();
    approveTask();
}

happinessList{
    post();
    like();
    display(;)
    del();
    modify();
}