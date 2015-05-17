GruposController = RouteController.extend({
    waitOn: function () {
        return Meteor.subscribe('grupos', Meteor.userId());
    },
    data: function () {
        return Grupos.findOne({_id: this.params._id});
    },
    insert: function () {
        AutoForm.debug();
        this.render('InsertGrupo', {});
    },
    list: function() {
        this.render('GruposList', {});
    },
    edit: function() {
        this.render('EditGrupo', {});
    }
});