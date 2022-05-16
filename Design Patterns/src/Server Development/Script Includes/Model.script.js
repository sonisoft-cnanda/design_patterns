var Model = Class.create();
Model.prototype = {
    
    initialize: function() {
    },

    setValue: function(name, value){
        this[name] = value;
    },

    toJson: function(){
        return JSON.stringify(this);
    },

    type: 'Model'
};