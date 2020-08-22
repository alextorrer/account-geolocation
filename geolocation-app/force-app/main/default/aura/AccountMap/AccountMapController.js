({
    onAccountsLoaded : function(component, event, helper) {
        let mapMarkers = [];
        const accounts = event.getParam('accounts');

        for(let i=0; i<accounts.length; i++){
            let account = accounts[i];
            let marker = {
                'location': {
                    'Street': account.BillingStreet,
                    'City': account.BillingCity,
                    'PostalCode': account.BillingPostalCode
                },
                'title': account.Name,
                'description':(
                    'Phone: ' + account.Phone +
                    '\n'+
                    'Website: ' + account.Website
                ),
                'icon': 'standard:location'
            };
            mapMarkers.push(marker);
        }
        component.set('v.mapMarkers', mapMarkers);
    }
})
