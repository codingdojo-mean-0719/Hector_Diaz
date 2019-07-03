let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
function students(students){
    for(student of students)   {
        console.log("Name: "+student.name+", Cohort : "+student.cohort)
    }
}

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
function nameLength(users){
  for(var userType in users){
    console.log(userType);
     for(var i in users[userType]){
        console.log(i+" - "+users[userType][i].last_name+", "+users[userType][i].first_name+", - "+users[userType][i].first_name.length+users[userType][i].last_name.length);
          
    }
  }
  
}

nameLength(users)
    // 30 minutes max
