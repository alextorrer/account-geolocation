({
    handleSearch : function(cmp, searchTerm) {
        const action = cmp.get("c.searchAccounts");
        action.setParams({
            searchTerm: searchTerm
        });
        action.setCallback(this, function(response){
            const event = $A.get("e.c:AccountsLoaded");
            event.setParams({
                "accounts": response.getReturnValue()
            });
            event.fire();
        });
        $A.enqueueAction(action);
    }
})
