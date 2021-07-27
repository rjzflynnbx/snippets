var identityEvent = {
    "browser_id": Boxever.getID(),
    "channel": "WEB",
    "type": "IDENTITY",
    "language": "EN",
    "currency": "EUR",
    "page": window.location.pathname,
    "pos": POS,
    "email": EMAIL,
    "firstname": FNAME,
    "lastname": LNAME
}
Boxever.eventCreate(identityEvent, function (data) { }, 'json');