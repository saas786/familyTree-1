const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, {
    useNewUrlParser: true
}, function (err, db) {
    if (err) throw err;

    var dbo = db.db("famDB");
    var col = dbo.collection("persons");

    for (var i = 0; i < testFam.length; i++) {
        try {
            col.insertOne(testFam[i]);
        } catch (e) {
            console.log(e)
        }
    }
    db.close();
});

const testFam = [{
        _id: 123,
        firstName: "Andrew",
        middleName: "John",
        lastName: "Smith",
        title: "Sr.",
        age: 40,
        gender: "Male",
        parents: {
            parent1: 1231,
            parent2: 1232
        },
        children: {
            parent1: [2231, 2232, 2233]
        },
        spouse: {
            firstName: "Mary",
            middleName: "Jane",
            lastName: "Smith",
            _id: 1234
        }
    },
    {
        _id: 1234,
        firstName: "Mary",
        middleName: "Jane",
        lastName: "Smith",
        age: 39,
        gender: "Female",
        parents: {
            parent1: 12341,
            parent2: 12342
        },
        children: {
            parent2: [2231, 2232, 2233]
        },
        spouse: {
            firstName: "Andrew",
            middleName: "John",
            lastName: "Smith",
            _id: 123
        }
    },
    {
        _id: 1231,
        firstName: "Callaghan",
        middleName: "Vaughn",
        lastName: "Smith",
        age: 60,
        gender: "Male",
        children: {
            parent1: [123]
        },
        spouse: {
            firstName: "Stella",
            lastName: "Smith",
            _id: 1232
        }
    },
    {
        _id: 1232,
        firstName: "Stella",
        lastName: "Smith",
        age: 61,
        gender: "Female",
        children: {
            parent2: [123]
        },
        spouse: {
            firstName: "Callaghan",
            middleName: "Vaughn",
            lastName: "Smith",
            _id: 123
        }
    },
    {
        _id: 12341,
        firstName: "Lawrence",
        middleName: "Michael",
        lastName: "Creighton",
        age: 65,
        gender: "Male",
        children: {
            parent1: [1234]
        },
        spouse: {
            firstName: "Louise",
            middleName: "Marie",
            lastName: "Creighton",
            _id: 12342
        }
    },
    {
        _id: 12342,
        firstName: "Louise",
        middleName: "Marie",
        lastName: "Creighton",
        age: 63,
        gender: "Female",
        children: {
            parent2: [1234]
        },
        spouse: {
            firstName: "Lawrence",
            middleName: "Michael",
            lastName: "Creighton",
            _id: 12341
        }
    },
    {
        _id: 2231,
        firstName: "Andrew",
        middleName: "John",
        lastName: "Smith",
        title: "Jr.",
        age: 15,
        gender: "Male",
        parents: {
            parent1: 123,
            parent2: 1234
        }
    },
    {
        _id: 2232,
        firstName: "Sally",
        lastName: "Smith",
        age: 17,
        gender: "Female",
        parents: {
            parent1: 123,
            parent2: 1234
        }
    },
    {
        _id: 2233,
        firstName: "Randall",
        middleName: "Jay",
        lastName: "Smith",
        title: "Jr.",
        age: 12,
        gender: "Male",
        parents: {
            parent1: 123,
            parent2: 1234
        }
    },
]