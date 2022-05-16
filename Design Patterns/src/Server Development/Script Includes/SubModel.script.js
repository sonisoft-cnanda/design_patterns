var SubModel = Class.create();
SubModel.prototype = {
   
  
    initialize: function() {
        this.system = "";
        this.system_id = "";
    },

    setValue: function(name, value){
        this[name] = value;
    },


    type: 'SubModel'
};