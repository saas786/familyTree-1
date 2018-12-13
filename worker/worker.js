const redisConnection = require("./redis-connection");
const uuidv4 = require("uuid/v4");

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/"

async function updatePerson(targetId, fields) {}

async function addPerson(personData) {
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function (err, db) {
        if (err) throw err;

        var db = db.db("famDB");
        var col = db.collection("persons");

        var id = uuidv4();
        personData._id = id;

        col.insertOne(personData, function (err, result) {
            if (err) throw err;
        })

        if (personData.parents) {
            for (var i = 0; i < personData.parents.length; i++) {
                var query = {
                    _id: personData.parents[i]
                };
                var newval = {
                    $addToSet: {
                        children: id
                    }
                };
                col.updateOne(query, newval, function (err, res) {
                    if (err) throw err;
                })
            }
        }

        if (personData.children) {
            for (var i = 0; i < personData.children.length; i++) {
                var query = {
                    _id: personData.children[i]
                };
                var pop = {
                    $pop: {
                        parents: -1
                    }
                }
                var newval = {
                    $addToSet: {
                        parents: id
                    }
                };
                col.updateOne(query, pop, function (err, res) {
                    if (err) throw err;
                })
                col.updateOne(query, newval, function (err, res) {
                    if (err) throw err;
                })
            }
        }

        if (personData.spouse) {
            var query = {
                _id: personData.spouse
            };
            var newval = {
                $set: {
                    spouse: id
                }
            };
            col.updateOne(query, newval, function (err, res) {
                if (err) throw err;
            })
        }
    });
}

/*
var testPerson = {
    firstName: "John",
    middleName: "Andrew",
    lastName: "Smith",
    age: 40,
    gender: "Male",
    parents: [12345, 123456],
    children: [1234567, 12345678, 123456789],
    spouse: 12345677
}

addPerson(testPerson);
*/
function submitEvent(event, reqId, data, name) {
    if (data == "loading") {
        data = {
            error: 'Still loading data. Please wait and try again'
        }
    }
    redisConnection.emit(event, {
        requestId: reqId,
        data: data,
        eventName: name
    });
}

redisConnection.on("GET:request:*", async (message, channel) => {
    let requestId = message.requestId;
    let eventName = message.eventName;
    var failedEvent = `${eventName}:failed:${requestId}`;
    let successEvent = `${eventName}:success:${requestId}`;

    try {
        if (1 == 1) {
            submitEvent(successEvent, requestId, "submit", eventName);
        }
        throw 'User not found'

    } catch (e) {
        data = {
            error: `Web worker encountered error: ${e}`
        }
        submitEvent(failedEvent, requestId, data, eventName);
    }

});