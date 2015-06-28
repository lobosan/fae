Template.insertVeeduria.helpers({
    dataCollection: function () {
        var dataCollection = [];
        _.each(_.keys(Veedurias.simpleSchema().label()), function (fieldName) {
            dataCollection.push({
                field: fieldName
            })
        });
        return dataCollection;
    }
});