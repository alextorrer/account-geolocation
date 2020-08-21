({
    doInit : function(component, event, helper) {
        const searchTerm = component.get("v.searchTerm");
        helper.handleSearch(component, searchTerm);
    },

    onSearchTermChange: function(component, event, helper){
        const searchTerm = component.get("v.searchTerm");
        
        const delay = 500;
        let timeoutId = component.get("v.searchTimeoutId");
        clearTimeout(timeoutId);
        timeoutId = setTimeout($A.getCallback(function(){
            helper.handleSearch(component, searchTerm);
        }), delay);
        component.set("v.searchTimeoutId", timeoutId);
    }
})
