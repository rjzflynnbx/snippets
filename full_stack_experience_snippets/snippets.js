
//call an interactive experience with the Boxever JS lib
var rq = {
    "channel": "WEB",
    "language": "en",
    "currencyCode": "EUR",
    "pointOfSale": boxever_settings.pointOfSale,
    "browserId": Boxever.getID(),
    "clientKey": _boxever_settings.client_key, 
    "friendlyId": "get_this_from_the_experience_details_tab"
};

Boxever.callFlows(rq, function (response) {
    console.log(response);
}, 'json');


//trigger an full stack triggered experience with the Boxever JS lib
var customEvent = {
    browser_id: Boxever.getID(),
    channel: "WEB",
    language: "EN",
    type: "get_this_from_the_experience_details_tab",
    pos: _boxever_settings.pointOfSale
};
Boxever.eventCreate(customEvent, function (data) { }, 'json');
