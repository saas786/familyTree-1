const redisConnection = require("./redis-connection");
const uuidv4 = require("uuid/v4");

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

async function addPerson(personData) {
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function (err, db) {
        if (err) throw err;

        var dbo = db.db("famDB");
        var col = dbo.collection("persons");

        if (!personData._id) {
            var id = uuidv4();
            personData._id = id;
        }

        try {

            col.insertOne(personData);

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
                    col.updateOne(query, newval);
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
                col.updateOne(query, newval);
            }
        } catch (e) {
            console.log(e);
        }

    });
}

async function findUp(pArr, col) {
    var top = [];
    for (var i = 0; i < 2; i++) {
        var query = {
            _id: pArr[i]
        };
        try {
            col.findOne(query, async function (err, res) {
                if (err) throw err;

                if (res.parents) {
                    let parentArr = [res.parents.parent1, res.parents.parent2];
                    top.concat(await findUp(parentArr, col));
                } else {
                    top.push(res._id);
                }

            })
        } catch (e) {
            console.log(e)
        }
    }
    /*
    setTimeout(function () {
        return top
    }, 500);
    */
}

async function findDown(cArr, col) {
    var bottom = [];
    for (var i = 0; i < cArr.length; i++) {
        var query = {
            _id: cArr[i]
        };
        try {
            col.findOne(query, async function (err, res) {
                if (err) throw err;

                if (res.children) {
                    let childArr = Object.values(res.children)[0];
                    bottom.concat(await findDown(childArr, col));
                } else {
                    bottom.push(res._id);
                }
            });
        } catch (e) {
            console.log(e)
        }
    }
    setTimeout(function () {
        return bottom;
    }, 500);
}

async function getTree(personId) {

    MongoClient.connect(url, {
        useNewUrlParser: true
    }, async function (err, db) {
        var dbo = db.db("famDB");
        var col = dbo.collection("persons");

        var childTree = [];
        var parentTree = [];

        var query = {
            _id: personId
        };
        
        try {
            col.findOne(query, async function (err, res) {
                if (err) throw err;


                if (res.children) {
                    let childArr = Object.values(res.children)[0];
                    childTree.concat(await findDown(childArr, col));
                }
                if (res.parents) {
                    let parentArr = [res.parents.parent1, res.parents.parent2];
                    parentTree.concat(await findUp(parentArr, col));
                }
            });

        } catch (e) {
            console.log(e);
        }
        setTimeout(function () {
            console.log("top: " + childTree);
            console.log("bottom: " + parentTree);
        }, 1000)
    })
}

getTree(123);

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