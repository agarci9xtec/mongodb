db.createCollection("students")
db.students.insertOne({name:"Jacky",major:"Biology",gpa:3.5})
db.students.insertOne({name:"Claire",major:"Marketing",gpa:3.7})
printjson(db.students.find())