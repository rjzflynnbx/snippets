// other Boxever JS lib methods: https://sitecore.cdpknowledgehub.com/docs/web-tagging-javascript-library-functions
Boxever.browserShow(Boxever.getID(), 0, function(response){
    var guestRef = response.customer.ref;
    // Do something with guestRef
}, 'json');
