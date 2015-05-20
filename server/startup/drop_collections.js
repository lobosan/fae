Meteor.startup(function () {
    /*Meteor.users.allow({
        update: function (userId, doc, fieldNames, modifier) {
            return true;
        }
    });*/

    /*/!*** DELETE REGISTERS ***!/
    var globalObject = Meteor.isClient ? window : global;
    for (var property in globalObject) {
        var object = globalObject[property];
        if (object instanceof Meteor.Collection) {
            object.remove({});
        }
    }*/
});