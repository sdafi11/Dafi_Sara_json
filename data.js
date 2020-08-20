//JSON Text
var text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

//JSON Object

var myJSON = {"people":[
        {"name":"John", "job":"Builder"},
        {"name":"Anna", "job":"Teacher"},
        {"name":"Peter", "job":"Astronaut"}
    ]}

var obj = JSON.parse(text);

console.log(obj.employees[0].firstName + " " + obj.employees[0].lastName + " works as a " + myJSON.people[0].job + ".");
console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName + " works as a " + myJSON.people[1].job + ".");
console.log(obj.employees[2].firstName + " " + obj.employees[2].lastName + " works as an " + myJSON.people[2].job + ".");



