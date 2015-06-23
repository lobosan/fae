Meteor.startup(function () {
    Security.defineMethod("ifIsOwner", {
        fetch: [],
        transform: null,
        deny: function (type, arg, userId, doc) {
            return userId !== doc._id;
        }
    });

    // Only if an admin user is logged in
    Security.permit(['insert', 'update', 'remove']).collections([
        OrganizacionIndicadores, AcompanamientoIndicadores, DPA
    ]).ifHasRole('admin').apply();

    // Only if a user is logged in
    Security.permit(['insert']).collections([
        Organizaciones, Acompanamientos, Consumidores
    ]).ifLoggedIn().apply();

    // Only if a user is logged in and is the owner of the document
    Security.permit(['update', 'remove']).collections([
        Organizaciones, Acompanamientos, Consumidores
    ]).ifLoggedIn().ifIsOwner().apply();

    // Only if a user doesn't try to change the roles property and is the owner of the document
    Meteor.users.permit('update').ifLoggedIn().ifIsOwner().exceptProps(['roles']).apply();

    TemporaryFiles.allow({
        insert: function (userId, file) {
            return true;
        },
        remove: function (userId, file) {
            return true;
        },
        read: function (userId, file) {
            return true;
        },
        write: function (userId, file, fields) {
            return true;
        }
    });
});