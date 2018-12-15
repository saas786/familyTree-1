const redisConnection = require("./redis-connection");
const uuidv4 = require("uuid/v4");

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

async function addPerson(personData) {
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function (err, db) {
        if (err) throw err;

        var dbo = db.db("famdb");
        var col = dbo.collection("persons");

        if (!personData._id) {
            var id = uuidv4();
            personData._id = id;
        }

        try {
            var pquery = {
                _id: personData.parents.p
            };

            var mquery = {
                _id: personData.parents.m
            };

            col.findOne(pquery, function (err, res) {
                if (err) {
                    console.log(err);
                }

                personData.pline = res.pline;

                col.findOne(mquery, function (err, mres) {
                    if (err) {
                        console.log(err);
                    }

                    personData.mline = mres.mline;

                    if (personData.gender == "Male") {
                        personData.pline.push(personData._id);
                    } else {
                        personData.mline.push(personData._id);
                    }
                    col.insertOne(personData, function(err, res){
                        if (err) {
                            console.log(err);
                        }
                    })
                })
            })

        } catch (e) {
            console.log;
        }
    });
}

/*
var test = {
    _id: 4321,
    firstName: "Testley",
    middleName: "Snipes",
    lastName: "Smith",
    age: 20,
    gender: "Male",
    parents: {
        p: 123,
        m: 1234
    }
}

//addPerson(test);
*/

async function getTree(personId, line) {

    MongoClient.connect(url, {
        useNewUrlParser: true
    }, async function (err, db) {
        var dbo = db.db("famdb");
        var col = dbo.collection("persons");

        var query = {
            _id: personId
        };

        col.findOne(query, function(err, res){
            if (err) {
                console.log(err);
            }

            var lquery = {};

            if (line == "pline"){
                lquery.pline = res.pline[0];
            } else {
                lquery.mline = res.mline[0];
            }
            
            col.find(lquery).toArray(function(err, res){
                if (err) {
                    console.log(err);
                }
                for (var i = 0; i < res.length; i++){
                    console.log(res[i]);
                }
            })

        })
    })
}

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