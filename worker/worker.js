const redisConnection = require("./redis-connection");
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/famDB";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    console.log("Database Connection Established!");
    db.close();
});

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