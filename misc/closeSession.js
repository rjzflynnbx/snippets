var closeSessionEvent = {
    browser_id: Boxever.getID(),
    channel: "WEB",
    language: "EN",
    currency: "EUR",
    pos: BOXEVER_POINT_OF_SALE,
    type: "FORCE_CLOSE",
    _bx_extended_message: "1"
};

Boxever.eventCreate(closeSessionEvent, function (data) { }, 'json');