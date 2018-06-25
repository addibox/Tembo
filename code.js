var parents = {
    'Henry': {'childName': 'Calvin', 'age': 1},
    'Ada': {'childName': 'Lily', 'age': 4},
    'Emilia': {'childName': 'Petra', 'age': 2},
    'Biff': {'childName': 'Biff Jr', 'age': 3},
    'Milo': {}
};

var activities = [
    {
        'age': 1,
        'activity': [
            'Go outside and feel surfaces.',
            'Try singing a song together.',
            'Point and name objects.'
            ]
    },
    {
        'age': 2,
        'activity': [
            'Draw with crayons.',
            'Play with soundmaking toys or instruments.',
            'Look at family pictures together.'
            ]
    },
    {
        'age': 3,
        'activity': [
            'Build with blocks.',
            'Try a simple puzzle.',
            'Read a story together.'
            ]
    }
];

var parentName = Object.keys(parents);


function getParents(x){
    for(var i=0; i<x.length; i++){
        //console.log(parents[x[i]].age);
        ageActivity(x[i], parents[x[i]].childName, parents[x[i]].age);
    }
}

function ageActivity(parent,child,age){
    if(age == activities[0].age){
        console.log(parent +"'s child is "+ child +"\nActivities: ");
        oneactivity(age);
        console.log("Curriculum complete! \n");
    }
    else if(age == activities[1].age){
        console.log(parent +"'s child is "+ child +"\nActivities: ");
        oneactivity(age);
        console.log("Curriculum complete! \n");
    }
    else if(age == activities[2].age){
        console.log(parent +"'s child is "+ child +"\nActivities: ");
        oneactivity(age);
        console.log("Curriculum complete! \n");
    }
    else if(age>3 || age<1){
        console.log(parent +"'s child is "+ child +" who is older or younger than the age range.\n" );
    }
    else{
        console.log("Can not find"+ parent +"'s child information.\n");  
    }
}

function oneactivity(age){
    for(var i=0; i<activities[age-1].activity.length; i++){
        console.log(activities[age-1].activity[i])
    }
}


getParents(parentName);






