const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, {
    useNewUrlParser: true
}, function (err, db) {
    if (err) throw err;

    var dbo = db.db("famdb");
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
        _id: 1231,
        firstName: "Callaghan",
        middleName: "Vaughn",
        lastName: "Smith",
        age: 60,
        gender: "Male",
        pline: [1231],
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
        mline: [1231],
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
        pline: [12341],
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
        mline: [12342],
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
        _id: 123,
        firstName: "Andrew",
        middleName: "John",
        lastName: "Smith",
        title: "Sr.",
        age: 40,
        gender: "Male",
        pline: [1231, 123],
        mline: [1232],
        parents: {
            p: 1231,
            m: 1232
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
            p: 12341,
            m: 12342
        },
        pline: [12341],
        mline: [12342, 1234],
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
        _id: 2231,
        firstName: "Andrew",
        middleName: "John",
        lastName: "Smith",
        title: "Jr.",
        age: 15,
        gender: "Male",
        parents: {
            p: 123,
            m: 1234
        },
        pline: [1231, 123, 2231],
        mline: [12342, 1234]
    },
    {
        _id: 2232,
        firstName: "Sally",
        lastName: "Smith",
        age: 17,
        gender: "Female",
        parents: {
            p: 123,
            m: 1234
        },
        pline: [1231, 123],
        mline: [12342, 1234, 2232]
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
            p: 123,
            m: 1234
        },
        pline: [1231, 123, 2233],
        mline: [12342, 1234]
    },
]