var CatalogHelper = Class.create();
CatalogHelper.prototype = {
    initialize: function() {
    },

    getModel: function(catalogItem){
        var m = new Model();
        m.setValue("var_name", catalogItem.variables.whatever);
        m.setValue("students", this._getStudentModels(catalogItem));
        return m;
    },

    _getStudentModels: function(catalogItem){
        //Loop through or create student model and return array
        var sModel = new SubModel();
        sModel.setValue("name", catalogItem.variables.student_name);
        return [sModel];
    },

    type: 'CatalogHelper'
};