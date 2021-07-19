function getMostRecentWebSession(guest) {
    var sessions = guest.sessions;
    for (var i = 0; i < sessions.length; i++) {
        if (sessions[i].sessionType === 'WEB' && sessions[i].operatingSystem != null) {
            return sessions[i];
        }
    }
}


//todo:test logic sessions[i].status === 'OPEN'
function getCurrentWebSession(guest) {
    var sessions = guest.sessions;
    for (var i = 0; i < sessions.length; i++) {
        if (sessions[i].sessionType === 'WEB' && sessions[i].operatingSystem != null && sessions[i].status === 'OPEN') {
            return sessions[i];
        }
    }
}


function getDataExtensionWithName(guest, extensionName) {
    var toReturn = null;
    guest.dataExtensions.forEach(function (dataExtension) {
        if (dataExtension.name === extensionName) {
            toReturn = dataExtension;
        }
    });
    return toReturn;
}

//todo test
function getDataExtensionValue(dataExtension) {
    if (dataExtension != null) {
        return dataExtension.values['CLV'];
    }
    return null;
}


//todo test
function getDataExtensionValue(guest, dataExtensionName, dataExtensionKey) {
    var dataExtension = getDataExtensionWithName(guest, dataExtensionName,);
    if (dataExtension != null) {
        return dataExtension.values[dataExtensionKey];
    }
    return null;
}

function getMapFromDataExtension(dataExtension) {
    return dataExtension.values;
}


function getNumberOfEvents(session, eventType) {
    var numberOfEvents = 0;
    for (var i = 0; i < session.events.length; i++) {
        var event = session.events[i];
        if (event.type === eventType) {
            numberOfEvents++;
        }
    }
    return numberOfEvents;
}